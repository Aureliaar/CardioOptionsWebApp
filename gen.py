
def sanitize(text):
	return text.replace(" ", "_")

def sreplace(string, name):
	prefix = sanitize(name)+"-"
	string = string.replace("{id-prefix}", prefix)
	string = string.replace("{name}", name)
	return string

def T(name):
	prefix = sanitize(name)
	Tstring = """<div class="group">
        <input class="textl" type="text" id="{id-prefix}" required="required"/>
        <label class="textl" for="{id-prefix}">{name}</label>
        <div class="bar"></div>"""
    #replacements

def M(Name, Options):
	string = """		<input type="radio" name="{id-prefix}" id="{id-prefix}{name}" value="{id-prefix}{name}"><label class="{num} col" for="{id-prefix}{name}">{name}</label>"""
	headerstring = """
<section id = "section-{id-prefix}" class="plan cf">
	<h2>{id-prefix}:</h2>"""
	enderstring ="""
</section>"""

	num = len(Options)
	prefix = sanitize(Name)
	print headerstring.replace("{id-prefix}", prefix)
	numString = string.replace("{num}", str(num))

	for item in Options:
		print sreplace(numString, item)
	print enderstring
def C(name):
	pass
def A(name, options=""):
	pass
def H(name):
	print """<h2>{name}</h2>
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

		

