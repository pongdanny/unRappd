# from flask import Blueprint, jsonify, session, request
# from app.models import checkin, db
# from sqlalchemy.orm import selectinload


# checkin_routes = Blueprint('checkins', __name__)


# @checkin_routes.route("/", methods=["GET"])
# def checkin():
#     checkins = db.session.query(Checkin).options(selectinload(Checkin.artist)).all()

#     checkin_with_artist = [{**checkin.to_dict(), "checkin": artist.checkin.to_dict()}
#                         for checkin in checkins]

#     return jsonify(checkin_with_artist)


# @checkin_routes.route("/<id>")
# def checkin(id):
#     checkin = db.session.query(CHeckin).get(id)

#     return jsonify(checkin.to_dict())