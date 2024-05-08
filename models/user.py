from config.database import db
import uuid
from flask_security import hash_password, UserMixin, RoleMixin


class Role(db.Model, RoleMixin):
    __tablename__ = "role"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30), unique=True, nullable=False)
    discription = db.Column(db.String(100), nullable=False)
    created_at = db.Column(
        db.DateTime, nullable=False, server_default=db.sql.functions.current_timestamp()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, server_default=db.sql.functions.current_timestamp()
    )
    created_by = db.Column(db.String(30), nullable=False, server_default="System")
    updated_by = db.Column(db.String(30), nullable=False, server_default="System")
    COMMON_ROLE_ID = 2


class User(db.Model, UserMixin):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(1024), nullable=False)
    username = db.Column(db.String(30), nullable=False)
    roles = db.relationship(
        "Role", secondary="roles_users", backref=db.backref("user", lazy="dynamic")
    )
    active = db.Column(db.Boolean, nullable=False, server_default="1")
    note = db.Column(db.String(1024))
    fs_uniquifier = db.Column(
        db.String(36), unique=True, server_default=str(uuid.uuid4())
    )
    created_at = db.Column(
        db.DateTime, nullable=False, server_default=db.sql.functions.current_timestamp()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, server_default=db.sql.functions.current_timestamp()
    )
    created_by = db.Column(db.String(30), nullable=False, server_default="System")
    updated_by = db.Column(db.String(30), nullable=False, server_default="System")

    def register(user):
        try:
            user_record = User(
                email=user["email"],
                password=hash_password(user["password"]),
                username=user["username"],
                note=user["note"],
                fs_uniquifier=str(uuid.uuid4()),
            )
            db.session.add(user_record)
            db.session.flush()

            roles_users_record = RolesUsers(
                user_id=user_record.id,
                role_id=Role.COMMON_ROLE_ID,
            )
            db.session.add(roles_users_record)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            return str(e), 500


class RolesUsers(db.Model):
    __tablename__ = "roles_users"
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer(), db.ForeignKey("user.id"))
    role_id = db.Column(db.Integer(), db.ForeignKey("role.id"))


def setup_user_role():
    registered = False
    if not db.session.query(Role).filter(Role.name == "Admin").all():
        db.session.add(Role(name="Admin", discription="System admin role"))
        registered = True

    if not db.session.query(Role).filter(Role.name == "Common").all():
        db.session.add(Role(name="Common", discription="Common role"))
        registered = True

    if not db.session.query(User).filter(User.email == "test@exemple.com").all():
        db.session.add(
            User(
                email="test@exemple.com",
                password=hash_password("password"),
                username="testadmin",
                note="Test admin user. Automaticaly registered",
            )
        )
        db.session.commit()
        db.session.add(
            RolesUsers(
                user_id="1",
                role_id="1",
            )
        )
        registered = True
    if registered:
        db.session.commit()
