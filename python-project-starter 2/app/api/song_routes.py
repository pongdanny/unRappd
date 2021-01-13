from flask import Blueprint, jsonify, session, request
from app.models import Song, db
from sqlalchemy.orm import selectinload
from app.forms import song_form

song_routes = Blueprint('songs', __name__)


def validator_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


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


@song_routes.route("/", methods=["POST"])
def new_song():
    form = NewSong()
    form['csrf_token'].data = request.cookies['csrf_token']

    for key in dict.keys(form.data):
        print(key)
        print('\t', form.data[key])

    if form.validate_on_submit():
        song = Song(
            artistId=form.data["artistId"],
            songName=form.data["songName"],
            albumName=form.data["albumName"],
        )
        db.session.add(song)
        db.session.commit()

        print(song.id)

        db.session.add(song)
        db.session.commit()

        return song.to_dict()

        return song.to_dict()
    return {'errors': validator_errors_to_error_messages(form.errors)}
