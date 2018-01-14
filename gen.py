
def sanitize(text):
	return text.replace(" ", "_")

def sreplace(string, name, prefix=""):
	if prefix=="": prefix = sanitize(name)+"-"
	string = string.replace("{id-prefix}", prefix)
	string = string.replace("{name}", name)
	return string

def T(name):
	string = """<div class="group">
		<input class="textl" type="text" id="{id-prefix}" required="required"/>
		<label class="textl" for="{id-prefix}">{name}</label>
		<div class="bar"></div>
	</div>"""

	print sreplace(string, name)

def M(Name, Options):
	string = """		<input type="radio" name="{id-prefix}" id="{id-prefix}{name}" value="{id-prefix}{name}"><label class="{num} col" for="{id-prefix}{name}">{name}</label>"""
	headerstring = """<form class="radio-form cf">
<section id = "section-{id-prefix}" class="plan cf">
	<h2>{id-prefix}:</h2>"""
	enderstring ="""
</section></form>"""

	numdict= {2:"two", 3:"three", 4:"four", 5:"five"}
	num = len(Options)
	prefix = sanitize(Name)
	print headerstring.replace("{id-prefix}", prefix)
	numberedString = string.replace("{num}", numdict[num])

	for item in Options:
		print sreplace(numberedString, item, prefix)
	print enderstring

def C(name):
	string = """<label class="label checkmark_label"> {name}
		<input  id={id-prefix} class="label__checkbox" type="checkbox" />
		<span class="label__text">
	  <span class="label__check">
		<i class="fa fa-check icon"></i>
	  </span>
	</span>
	</label>"""
	print sreplace(string, name)

def A(name, options=""):
	if len(options) > 0: name = name + options[0]
	string = """    <div class="group">
		<input class="textl" type="text" id="{id-prefix}" value="Autocalc" disabled>
		<label class="textl" for="{id-prefix}">{name}</label>
		<div class="bar"></div>
	</div>"""
	print sreplace(string, name)

def H(name):
	print """<h1>{name}</h1>
	""".replace("{name}", name)


with open("spec.txt") as fin:
	while True:
		line = fin.readline()[:-1]
		if line=="": break
		#if len(line) < 2: continue
		#preprocessing
		code = line[:1]
		stuff = line[2:].split(", ", 1)
		text = stuff[0]

		options=[]
		if (len(stuff) > 1): options = stuff[1].split(", ")

		if (code=="T"):
			T(text)
		if (code=="C"):
			C(text)
		if (code=="A"):
			A(text, options)
		if (code=="M"):
			M(text, options)
		if (code=="H"):
			H(text)

		

