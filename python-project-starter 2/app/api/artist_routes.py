from flask import Blueprint, jsonify, session, request
from app.models import Artist, db
from sqlalchemy.orm import selectinload


artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/', methods=["GET"])
def get_all_artist():
    artists = Artist.query.all()
    return {"artists": [artis.to_dict() for artist in artists]}

# @artist_routes.route("/", methods=["GET"])
# def artists():
#     artists = db.session.query(Artist).options(selectinload(Artist.user)).all()

#     artists_with_user = [{**artists.to_dict(), "user": artists.user.to_dict()}
#                         for artist in artists]

#     return jsonify(artists_with_user)


# @artist_routes.route("/<id>")
# def artist(id):
#     artist = db.session.query(Artist).get(id)

# @artist_routes.route('/<int:id>', methods=["GET"])
# def one_artist(id):
#     artist = Artist.query.get(id)
#     return artist.to_dict()


# @artist_routes.route('/<int:id>', methods=["DELETE"])
# def delete_artist(id):
#     artist_to_delete = Artist.query.get(id)
#     if artist_to_delete:
#         artist_to_delete.delete()
#         return {"response": [f"Artist has been deleted!"]}
#     else:
#         return {"errors": [f"Artist does not exist!"]}

