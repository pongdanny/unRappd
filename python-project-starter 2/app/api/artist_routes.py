from flask import Blueprint, jsonify, session, request
from app.models import Artist, db
from sqlalchemy.orm import selectinload
from app.forms import artist_form

artist_routes = Blueprint('artists', __name__)


def validator_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@artist_routes.route('/', methods=["GET"])
def get_all_artist():
    artists = Artist.query.all()
    return {"artists": [artist.to_dict() for artist in artists]}


@artist_routes.route('/<int:id>', methods=["GET"])
def one_artist(id):
    artist = Artist.query.get(id)
    return artist.to_dict()


@artist_routes.route('/<int:id>', methods=["DELETE"])
def delete_artist(id):
    artist_to_delete = Artist.query.get(id)
    if artist_to_delete:
        artist_to_delete.delete()
        return {"response": [f"Artist has been deleted!"]}
    else:
        return {"errors": [f"Artist does not exist!"]}


@artist_routes.route("/", methods=["POST"])
def new_artist():
    form = NewArtist()
    form['csrf_token'].data = request.cookies['csrf_token']

    for key in dict.keys(form.data):
        print(key)
        print('\t', form.data[key])

    if form.validate_on_submit():
        artist = Artist(
            userId=form.data["userId"],
            songId=form.data["songId"],
            artistName=form.data["artistName"],
            description=form.data["description"],
        )
        db.session.add(artist)
        db.session.commit()

        print(artist.id)

        db.session.add(artist)
        db.session.commit()

        return artist.to_dict()

        return artist.to_dict()
    return {'errors': validator_errors_to_error_messages(form.errors)}
