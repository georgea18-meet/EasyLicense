from flask import Flask, render_template, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import time
import math


app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://khwgribrjrkrfc:5742a9e8e262b6c2e740c7e83a685242f4fa3b665a02f22c82664d691dce14b1@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9fodf06bjket4'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://'
#app.config['SECRET_KEY'] = 'thisissecret'
#db = SQLAlchemy(app)
#login_manager = LoginManager()
#login_manager.init_app(app)

@app.route('/')
def index():
	return render_template('index.html')

if __name__ == "__main__":
	app.run(debug=True)