from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Song, Artist, Checkin, db
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


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@user_routes.route('/<int:id>/checkins', methods=["POST"])
@login_required
def create_checkin(id):
    form = CheckinForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if request.is_json:
            data = request.get_json()

            new_checkin = Checkin(
                songName=data['songName'],
                review=data['review'],
                rating=data['rating'],
            )

            db.session.add(new_checkin)
            db.session.commit()

            return new_checkin.to_dict()
        else:
            return {"error": "The request payload is not in JSON format"}
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@user_routes.route('/<int:id>/checkins/<int:checkin_id>', methods=["PATCH"])
@login_required
def edit_checkin(id, checkin_id):
    form = CheckinForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if request.is_json():
            checkin_to_edit = Checkin.query.get(checkin_id)

            if not checkin_to_edit:
                return {"errors": [f"Review with ID {checkin_id} does not exist"]}

            data = request.get_json()

            checkin_to_edit.songName = form.data['songName']
            checkin_to_edit.review = form.data['review']
            checkin_to_edit.rating = data['rating']

            db.session.add(checkin_to_edit)
            db.session.commit()

            return checkin_to_edit.to_dict()
        else:
            return {"error": "The request payload is not in JSON format"}
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@user_routes.route('/<int:id>/checkins/<int:checkin_id>', methods=["DELETE"])
@login_required
def delete_checkin(checkin_id):
    checkin_to_delete = Checkin.query.get(checkin_id)

    if checkin_to_delete:
        checkin_to_delete.delete()
        return {"response": f"Successfully Deleted!"}
    else:
        return {"errors": [f"Bump with ID {checkin_id} does not exist"]}
