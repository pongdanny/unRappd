from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Song


class ArtistForm(FlaskForm):
    artistId = IntegerField("artistId", validators=[DataRequired()])
    songName = TextAreaField("songName", validators=[DataRequired()])
    albumName = TextAreaField("albumName", validators=[DataRequired()])