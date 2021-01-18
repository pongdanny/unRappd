from .db import db


class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    artistName = db.Column(db.String)
    description = db.Column(db.String)

    user = db.relationship("User", back_populates="artists")
    songs = db.relationship("Song", back_populates="artist")
    checkins = db.relationship("Checkin", back_populates="artist")

    def to_dict(self):
        return {
          "id": self.id,
          "userId": self.userId,
          "artistName": self.artistName,
          "description": self.description,
          "user": self.user.to_dict()
        }
