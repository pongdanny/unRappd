# from flask import Blueprint, jsonify, session, request
# from app.models import artist, db
# from sqlalchemy.orm import selectinload


# artist_routes = Blueprint('artists', __name__)


# @artist_routes.route("/", methods=["GET"])
# def artists():
#     artists = db.session.query(Artist).options(selectinload(Artist.user)).all()

#     artists_with_seller = [{**artist.to_dict(), "user": artist.user.to_dict()}
#                         for artist in artists]

#     return jsonify(artists_with_user)


# @artist_routes.route("/<id>")
# def artist(id):
#     artist = db.session.query(Artist).get(id)

#     return jsonify(artist.to_dict())


