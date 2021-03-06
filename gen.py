import re

def sanitize(text):
	text = text.partition("(")[0]
	text = text.rstrip()
	return text.replace(" ", "_").lower()
def sanitize_for_js(text):
	return re.sub(r'\W+', '', text)

def autocalcReplace(string, autocalcData):
	name = ""
	attribute=""
	if autocalcData!="":
		for data in autocalcData.split(", "):
			namestring, useless, weight = data.partition("=")
			namestring = sanitize(namestring)
			name+=(namestring+" ")
			attribute+= """ data-{name}Weight="{weight}" """.replace("{name}", namestring).replace("{weight}", weight)
	name = name.rstrip()
	return string.replace("{autocalcClass}", name).replace("{autocalcAttribute}", attribute)

def sreplace(string, name, prefix="", autocalcData=""):
	if prefix=="": prefix = sanitize(name)
	prefix = sanitize_for_js(prefix)
	san_name = sanitize_for_js(sanitize(name))
	string = string.replace("{id-prefix}", prefix)
	string = string.replace("{sanName}", san_name)
	string = string.replace("{name}", name)
	string = autocalcReplace(string, autocalcData)
	return string

def T(name, autocalc,):
	string = """<div class="group">
		<input class="textl" type="text" id="{id-prefix}" required="required"/>
		<label class="textl" for="{id-prefix}">{name}</label>
		<div class="bar"></div>
	</div>"""
	print sreplace(string, name, autocalcData=autocalc)

def M(Name, Options, autocalc):
	string = """		<input class="MyRadioInput {autocalcClass}" type="radio" name="{id-prefix}" id="{id-prefix}{sanName}" value="{sanName}"><label class="{num} col" for="{id-prefix}{sanName}">{name}</label>"""
	headerstring = """<form class="radio-form cf">
<section id = "section-{id-prefix}" class="plan cf">
	<h2>{id-prefix}</h2>"""
	enderstring ="""
</section></form>"""

	numdict= {2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven"}
	num = len(Options)
	prefix = sanitize(Name)
	print headerstring.replace("{id-prefix}", Name)
	numberedString = string.replace("{num}", numdict[num])

	for item in Options:
		print sreplace(numberedString, item, prefix=prefix, autocalcData=autocalc)
	print enderstring

def C(name, autocalc):
	string = """<label class="label checkmark_label"> {name}
		<input  id={id-prefix} class="label__checkbox {autocalcClass}" type="checkbox" {autocalcAttribute} />
		<span class="label__text">
	  <span class="label__check">
		<i class="fa fa-check icon"></i>
	  </span>
	</span>
	</label>"""
	print sreplace(string, name, autocalcData=autocalc)

def A(name, options="", autocalc=""):
	if len(options) > 0: name = name + options[0]
	string = """    <div class="group">
		<input class="textl {autocalcClass}" type="text" id="{id-prefix}" value="Autocalc" {autocalcAttribute} disabled>
		<label class="textl" for="{id-prefix}">{name}</label>
		<div class="bar"></div>
	</div>"""
	print sreplace(string, name, autocalcData=autocalc)

def H(name):
	print """<h1>{name}</h1>
	""".replace("{name}", name)
def D(name, autocalc=""):
	string = """<div class="group">
		<input class="textl" type="date" id="{id-prefix}" required="required"/>
		<label class="textl" for="{id-prefix}">{name}</label>
		<div class="bar"></div>
	</div>"""
	print sreplace(string, name, autocalcData=autocalc)

fjs = open('jsout.txt', "w+")
fhtml = open('htmlout.txt', "w+")
with open("spec.txt") as fin:
	while True:
		line = fin.readline()[:-1]
		if line=="": break
		#if len(line) < 2: continue
		#preprocessing
		line = line.rstrip()
		line, useless, autocalc = line.partition(" | ")
		code = line[:1]
		stuff = line[2:].split(", ", 1)
		text = stuff[0]

		san = sanitize(text).replace("-", "_")
		san = sanitize_for_js(san)
		if code in ['A', 'T', 'D']:
			fjs.write("{0}:String($('#{0}').val()),\n".format(san))
		if code in ['M',]:
			fjs.write("{0}:$('[name={0}]:checked').val(),\n".format(san))
		if code in ['C']:
			fjs.write("{0}:checkboxPrint('#{0}'),\n".format(san))


		options=[]
		if (len(stuff) > 1): options = stuff[1].split(", ")

		if (code=="T"):
			T(text, autocalc)
		if (code=="C"):
			C(text, autocalc)
		if (code=="A"):
			A(text, options, autocalc)
		if (code=="M"):
			M(text, options, autocalc)
		if (code=="H"):
			H(text)
		if (code=="D"):
			D(text)

		

fjs.close()