from .db import db


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    artistId = db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    songName = db.Column(db.String, nullable=False)
    albumName = db.Column(db.String)

    artist = db.relationship("Artist", back_populates="songs")
    # user = db.relationship("User", back_populates="songs")
    checkins = db.relationship("Checkin", back_populates="song")

    def to_dict(self):
        return {"id": self.id, "artistId": self.artistId, "songName": self.songName, "artist": self.artist.to_dict(), "albumName": self.albumName}
