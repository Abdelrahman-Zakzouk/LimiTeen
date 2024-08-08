from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "supersecretkey"

# In-memory storage for users and their screen time data
users = {}


@app.route("/")
def index():
    if "user_id" in session:
        return redirect(url_for("dashboard"))
    return render_template("index.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if username in users:
            return "User already exists!"
        hashed_password = generate_password_hash(password)
        users[username] = {
            "password": hashed_password,
            "screen_time_limit": 0,
            "start_time": None,
            "used_time": 0,
        }
        return redirect(url_for("login"))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        user = users.get(username)
        if user and check_password_hash(user["password"], password):
            session["user_id"] = username
            return redirect(
                url_for("dashboard"),
            )
    return render_template("login.html")


@app.route("/dashboard")
def dashboard():
    user = users.get(session["user_id"])
    if user is None:
        # Handle the case where the user is not found
        return redirect(url_for("login"))

    user = users[session["user_id"]]
    return render_template(
        "index.html",
        user=user,
        display="none",
        name=session["user_id"],
        display2="block",
    )


@app.route("/logout")
def logout():
    session.pop("user_id", None)
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)
