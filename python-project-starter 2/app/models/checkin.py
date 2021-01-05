from .db import db


class Checkin(db.Model):
    __tablename__ = 'checkins'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    songId = db.Column(db.Integer, db.ForeignKey("songs.id"), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    review = db.Column(db.String)
    rating = db.Column(db.Integer)

    user = db.relationship("User", back_populates="checkins")
    artist = db.relationship("Artist", back_populates="checkins")
    song = db.relationship("Song", back_populates="checkins")


def to_dict(self):
    return {"id": self.id, "songId": self.songId, "artistId": self.artistId, "review": self.review, "rating": self.rating}
