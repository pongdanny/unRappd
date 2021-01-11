from flask import Blueprint, jsonify, session, request
from app.models import Checkin, db
from sqlalchemy.orm import selectinload


checkin_routes = Blueprint('checkins', __name__)


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
