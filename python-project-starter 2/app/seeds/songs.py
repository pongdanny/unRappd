from app.models import song, db


def seed_songs():

    song1 = Song(artistId=1, songName="44 Bulldog", albumName="Shoot for the Stars, Aim for the Moon")
    song2 = Song(artistId=1, songName="Welcome to the Party", albumName="Meet the Woo")
    song3 = Song(artistId=2, songName="Handsome", albumName="Karma 3 (Deluxe)")
    song4 = Song(artistId=2, songName="I Got 5 On It", albumName="EASTMIX")
    song5 = Song(artistId=3, songName="Mando", albumName="One of One")
    song6 = Song(artistId=3, songName="Lights Out", albumName="True Story 2")
    song7 = Song(artistId=4, songName="Boomer", albumName="Single")
    song8 = Song(artistId=4, songName="Pain", albumName="Single")
    song9 = Song(artistId=5, songName="Big Drip", albumName="800 BC")
    song10 = Song(artistId=5, songName="Trust", albumName="B.I.B.L.E.")
    song11= Song(artistId=6, songName="In My City", albumName="Forever (Deluxe)")
    song12 = Song(artistId=6, songName="Humble", albumName="Child of the Trenches")
    song13 = Song(artistId=7, songName="Hitlist", albumName="SHYNE")
    song14 = Song(artistId=7, songName="Gooey Sauce", albumName="SHYNE")
    song15 = Song(artistId=8, songName="Keep It On Me", albumName="Single")
    song16 = Song(artistId=8, songName="Twin Glocks", albumName="Single")
    song17 = Song(artistId=9, songName="Anyone", albumName="Proud Of Me Now")
    song18 = Song(artistId=9, songName="Flows 2", albumName="The Unluccy Luccy Kid")
    song19 = Song(artistId=10, songName="Water", albumName="Sleepy For President")
    song20 = Song(artistId=10, songName="Somebody", albumName="THe Black House")

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo19)
    db.session.add(demo20)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE TABLE songs RESTART IDENTITY CASCADE;')
    db.session.commit()