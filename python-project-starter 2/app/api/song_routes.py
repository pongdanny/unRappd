from flask import Blueprint, jsonify, session, request
from app.models import Song, db
from sqlalchemy.orm import selectinload


song_routes = Blueprint('songs', __name__)

@song_routes.route('/', methods=["GET"])
def get_all_song():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}


@song_routes.route('/<int:id>', methods=["GET"])
def one_song(id):
    song = Song.query.get(id)
    return song.to_dict()


@song_routes.route('/<int:id>', methods=["DELETE"])
def delete_song(id):
    song_to_delete = Song.query.get(id)
    if song_to_delete:
        song_to_delete.delete()
        return {"response": [f"Song has been deleted!"]}
    else:
        return {"errors": [f"Song does not exist!"]}

# @song_routes.route("/", methods=["GET"])
# def songs():
#     songs = db.session.query(Song).options(selectinload(Song.user)).all()

#     songs_with_artist = [{**song.to_dict(), "song": artist.song.to_dict()}
#                         for song in songs]

#     return jsonify(songs_with_artist)


# @song_routes.route("/<id>")
# def song(id):
#     song = db.session.query(Song).get(id)

#     return jsonify(song.to_dict())

