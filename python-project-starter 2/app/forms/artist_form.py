from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Artist


class ArtistForm(FlaskForm):
    userId = IntegerField("userId", validators=[DataRequired()])
    songId = IntegerField("songId", validators=[DataRequired()])
    artistName = TextAreaField("artistName", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])