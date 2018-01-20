
def sanitize(text):
	return text.replace(" ", "_").lower()
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
	string = string.replace("{id-prefix}", prefix)
	string = string.replace("{sanName}", sanitize(name))
	string = string.replace("{name}", name)
	string = autocalcReplace(string, autocalcData)
	return string

def T(name, autocalc, etype="text"):
	string = """<div class="group">
		<input class="textl" type="{type}" id="{id-prefix}" required="required"/>
		<label class="textl" for="{id-prefix}">{name}</label>
		<div class="bar"></div>
	</div>"""
	string = string.replace("{type}", etype)
	print sreplace(string, name, autocalcData=autocalc)

def M(Name, Options, autocalc):
	string = """		<input class="MyRadioInput {autocalcClass}" type="radio" name="{id-prefix}" id="{id-prefix}{sanName}" value="{id-prefix}{sanName}"><label class="{num} col" for="{id-prefix}{sanName}">{name}</label>"""
	headerstring = """<form class="radio-form cf">
<section id = "section-{id-prefix}" class="plan cf">
	<h2>{id-prefix}</h2>"""
	enderstring ="""
</section></form>"""

	numdict= {2:"two", 3:"three", 4:"four", 5:"five"}
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
	T(name, autocalc, "date")

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

		

