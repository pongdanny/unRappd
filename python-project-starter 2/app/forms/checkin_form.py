from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Checkin


class ReviewForm(FlaskForm):
    userId = IntegerField("userId", validators=[DataRequired()])
    songId = IntegerField("songId", validators=[DataRequired()])
    artistId = IntegerField("artistId", validators=[DataRequired()])
    review = TextAreaField("review", validators=[DataRequired()])
    rating = IntegerField("rating", validators=[DataRequired()])