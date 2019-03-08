#Britni Canale
#SoftDev1 pd 6
#K26 -- Getting More REST
#2018-11-15


from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify
from util import nobelprize

app = Flask(__name__)

@app.route("/")
def hello():
<<<<<<< HEAD
    prizes = []
    nobelprize.insertData()
    print(request.args)
    if "IP" in request.args:
        nobelprize.changeIP(request.args["IP"])
    if "year" in request.args:
        prizes = nobelprize.findyear(request.args["year"])
    return render_template("index.html", IP = nobelprize.getIP(), results = prizes)
=======
    nobelprize.insertData()
    return render_template("index.html")
>>>>>>> 2caea9ab6b51a91f5812ec2086b4d33b6b814320

@app.route("/results")
def search():
    thing = ""
    if "IP" in request.args:
        print(f"this is ip : {request.args.get('IP')}")
        nobelprize.insertData()
        nobelprize.changeIP(request.args.get("IP"))
    if "topic" in request.args:
        print(f"topic chosen: {request.args.get('topic')}")
        thing = nobelprize.find_year(request.args.get("topic"))
    print(thing)
    return render_template("results.html", res=thing)

if __name__ == "__main__":
    app.debug = True
    app.run()
