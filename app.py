from flask import (
    render_template,
)
from __init__ import app


@app.route("/login")
def home():
    return render_template("security/login_user.html")


if __name__ == "__main__":
    app.run()
