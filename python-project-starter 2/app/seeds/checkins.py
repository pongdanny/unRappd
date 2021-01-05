from app.models import db, checkin


def seed_checkins():

    checkin1 = Checkin(userId="1", songId="8", artistId="4", review="got this song on repeat!", rating="5")
    checkin2 = Checkin(userId="2", songId="2", artistId="1", review="Yo, this guy's flow is INSANE!", rating="5")
    checkin3 = Checkin(userId="3", songId="12", artistId="6", review="cant stop bumpin this track!", rating="5")
    checkin4 = Checkin(userId="4", songId="10", artistId="5", review="vibin out to this right now :)", rating="5")
    checkin5 = Checkin(userId="5", songId="6", artistId="3", review="BRO THIS GUY GOT BARS!!!", rating="5")
    checkin6 = Checkin(userId="6", songId="16", artistId="8", review="my new fav song right hurr!", rating="5")


db.session.add(checkin1)
db.session.add(checkin2)
db.session.add(checkin3)
db.session.add(checkin4)
db.session.add(checkin5)
db.session.add(checkin6)
db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE TABLE checkins RESTART IDENTITY CASCADE;')
    db.session.commit()