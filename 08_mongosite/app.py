#Britni Canale
#SoftDev1 pd 6
#K26 -- Getting More REST
#2018-11-15


from flask import Flask, render_template, session, request, url_for, redirect, flash
from util import nobelprize

app = Flask(__name__)

@app.route("/")
def hello():
    if "IP" in request.args:
        nobelprize.changeIP(request.args("IP"))
    return render_template("index.html")



if __name__ == "__main__":
    app.debug = True
    app.run()
