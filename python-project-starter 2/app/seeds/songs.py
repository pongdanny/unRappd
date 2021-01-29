from app.models import Song, db


def seed_songs():

    song1 = Song(artistId=1, songName="44 Bulldog", albumName="Shoot for the Stars, Aim for the Moon", coverArt="https://i.imgur.com/yysUS0E.jpg")
    song2 = Song(artistId=1, songName="Welcome to the Party", albumName="Meet the Woo", coverArt="https://i.imgur.com/0M9qiCQ.png")
    song3 = Song(artistId=2, songName="Handsome", albumName="Karma 3 (Deluxe)", coverArt="https://i.imgur.com/wpHdCtX.png")
    song4 = Song(artistId=2, songName="I Got 5 On It", albumName="EASTMIX", coverArt="https://i.imgur.com/dUgQCf9.jpg")
    song5 = Song(artistId=3, songName="Mando", albumName="One of One", coverArt="https://i.imgur.com/kDgTw9M.jpg")
    song6 = Song(artistId=3, songName="Lights Out", albumName="True Story 2", coverArt="https://i.imgur.com/5FZJReI.jpg")
    song7 = Song(artistId=4, songName="Boomer", albumName="Single", coverArt="https://i.imgur.com/G4ktHhE.jpg")
    song8 = Song(artistId=4, songName="Pain", albumName="Single", coverArt="https://i.imgur.com/R6Or4QU.jpg")
    song9 = Song(artistId=5, songName="Big Drip", albumName="800 BC", coverArt="https://i.imgur.com/Ju7nWtW.jpg")
    song10 = Song(artistId=5, songName="Trust", albumName="B.I.B.L.E.", coverArt="https://i.imgur.com/LveZSQj.png")
    song11= Song(artistId=6, songName="In My City", albumName="Forever (Deluxe)", coverArt="https://i.imgur.com/TCF1riW.jpg")
    song12 = Song(artistId=6, songName="Humble", albumName="Child of the Trenches", coverArt="https://i.imgur.com/O1Fe9sg.jpg")
    song13 = Song(artistId=7, songName="Hitlist", albumName="SHYNE", coverArt="https://i.imgur.com/dpysfC2.jpg")
    song14 = Song(artistId=7, songName="Gooey Sauce", albumName="SHYNE", coverArt="https://i.imgur.com/vy69uoG.jpg")
    song15 = Song(artistId=8, songName="Keep It On Me", albumName="Single", coverArt="https://i.imgur.com/D7O1kAs.jpg")
    song16 = Song(artistId=8, songName="Twin Glocks", albumName="Single", coverArt="https://i.imgur.com/oxHcOWx.jpg")
    song17 = Song(artistId=9, songName="Anyone", albumName="Proud Of Me Now", coverArt="https://i.imgur.com/3T3DUqx.jpg")
    song18 = Song(artistId=9, songName="Flows 2", albumName="The Unluccy Luccy Kid", coverArt="https://i.imgur.com/WRFhiK3.jpg")
    song19 = Song(artistId=10, songName="Water", albumName="Sleepy For President", coverArt="https://i.imgur.com/Hb3Eejb.jpg")
    song20 = Song(artistId=10, songName="Somebody", albumName="THe Black House", coverArt="https://i.imgur.com/wPbrYAi.jpg")

    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    db.session.add(song4)
    db.session.add(song5)
    db.session.add(song6)
    db.session.add(song7)
    db.session.add(song8)
    db.session.add(song9)
    db.session.add(song10)
    db.session.add(song11)
    db.session.add(song12)
    db.session.add(song13)
    db.session.add(song14)
    db.session.add(song15)
    db.session.add(song16)
    db.session.add(song17)
    db.session.add(song18)
    db.session.add(song19)
    db.session.add(song20)

    db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE TABLE songs RESTART IDENTITY CASCADE;')
    db.session.commit()