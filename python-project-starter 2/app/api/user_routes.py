from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, song, artist, db
from sqlalchemy.orm import selectinload

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# @user_routes.route("/<userId>/artists/<artistId>")
# def user_artists(userId, artistId):
#     artists = db.session.query(Artist).filter_by(userId).filter(Item.id != itemId).all()

#     user_items = [item.to_dict() for item in items]

#     return jsonify(user_artists)
