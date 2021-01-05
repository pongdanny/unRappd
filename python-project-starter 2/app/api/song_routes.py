# from flask import Blueprint, jsonify, session, request
# from app.models import song, db
# from sqlalchemy.orm import selectinload


# song_routes = Blueprint('songs', __name__)


# @song_routes.route("/", methods=["GET"])
# def song():
#     songs = db.session.query(Song).options(selectinload(Song.artist)).all()

#     songs_with_artist = [{**song.to_dict(), "artist": song.artist.to_dict()}
#                         for song in songs]

#     return jsonify(songs_with_artist)


# @song_routes.route("/<id>")
# def song(id):
#     song = db.session.query(Song).get(id)

#     return jsonify(song.to_dict())