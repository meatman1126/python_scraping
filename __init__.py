from flask import Flask, session, Blueprint
from flask_security import Security, SQLAlchemyUserDatastore
from config.database import db, init_db
from config.config import Config

from models.user import User, Role, setup_user_role
from controllers import user_controller, index_controller, scraping_controller


def create_app():

    app = Flask(__name__)

    # DB設定を読み込む
    app.config.from_object(Config)
    db.init_app(app)
    user_datastore = SQLAlchemyUserDatastore(db, User, Role)
    app.security = Security(app, user_datastore)
    with app.app_context():
        init_db(app)
        setup_user_role()

    app.register_blueprint(index_controller.index_page)
    app.register_blueprint(user_controller.user_page)
    app.register_blueprint(scraping_controller.scraping_page)
    return app


app = create_app()
