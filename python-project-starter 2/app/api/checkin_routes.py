from flask import Blueprint, jsonify, session, request
from app.models import Checkin, db
from sqlalchemy.orm import selectinload
from app.forms import CheckinForm


checkin_routes = Blueprint('checkins', __name__)


def validator_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@checkin_routes.route('/', methods=["GET"])
def get_all_checkin():
    checkins = Checkin.query.all()
    return {"checkins": [checkin.to_dict() for checkin in checkins]}
    # test = {"checkins": [checkin.to_dict() for checkin in checkins]}
    # print(f"CHECKIN!!! {test}")
    # print(f"checkins!!!!!!!!!!! {checkins}")


@checkin_routes.route('/<int:id>', methods=["GET"])
def checkin_checkin(id):
    checkin = Checkin.query.get(id)
    return checkin.to_dict()


@checkin_routes.route('/<int:id>', methods=["DELETE"])
def delete_checkin(id):
    checkin_to_delete = Checkin.query.get(id)
    if checkin_to_delete:
        checkin_to_delete.delete()
        return {"response": [f"Checkin has been deleted!"]}
    else:
        return {"errors": [f"Checkin does not exist"]}


@checkin_routes.route("/create", methods=["POST"])
def new_checkin():
    form = CheckinForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    for key in dict.keys(form.data):
        print(key)
        print('\t', form.data[key])

    if form.validate_on_submit():
        checkin = Checkin(
            username=form.data["username"],
            songName=form.data["songName"],
            artistName=form.data["artistName"],
            review=form.data["review"],
            rating=form.data["rating"]
        )
        db.session.add(checkin)
        db.session.commit()

        print(checkin.id)

        return checkin.to_dict()
    return {'errors': validator_errors_to_error_messages(form.errors)}
