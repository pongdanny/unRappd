from app.models import db, Artist


def seed_artists():

    demo1 = Artist(id=1, userId=1, artistName="Dave East", description="David Lawrence Brewster Jr. (born June 3, 1988), better known by his stage name Dave East, is an American rapper, songwriter and actor from Harlem, New York.", imgUrl="https://i.imgur.com/tgSOlSq.jpg")
    demo2 = Artist(id=2, userId=1, artistName="Pop Smoke", description="Bashar Barakah Jackson, known professionally as Pop Smoke, was an American rapper, singer, and songwriter. He was considered by many to be the face of Brooklyn drill. Born and raised in Canarsie, Brooklyn.", imgUrl="https://fstvls.s3.amazonaws.com/66/66332.jpg")
    demo3 = Artist(id=3, userId=2, artistName="Stupid Young", description="Stupid Young is a Cambodian-American rapper out of Long Beach, California. Young often talks about his daily life and struggles as an asian crip.", imgUrl="https://numberily.com/wp-content/uploads/2019/06/Stupid-Young.jpg")
    demo4 = Artist(id=4, userId=2, artistName="OMB Jay Dee", description="Coming out of Brownsville Brooklyn, OMB Jay Dee is one of the next upcoming young rappers putting on for the Brooklyn Drill scene.", imgUrl="https://pbs.twimg.com/profile_images/1180999716672299009/mtayxAb0.jpg")
    demo5 = Artist(id=5, userId=3, artistName="Fivio Foreign", description="Maxie Lee Ryles III (born March 29, 1990), known by his stage name Fivio Foreign, is an American rapper and songwriter from East Flatbush, Brooklyn", imgUrl="https://media.pitchfork.com/photos/5f848dfd424da72548193e18/1:1/w_2400,h_2400,c_limit/Fivio-Foreign.jpg")
    demo6 = Artist(id=6, userId=3, artistName="MBNel", description="Born and raised in Stockton, CA, “one of the most dangerous cities in America,” MBNel survived the street wars and emerges to tell us the brutal honest truth. As a first-generation Filipino-American rapper, he aims to change stereotypes and put a spotlight on his hometown.", imgUrl="https://images.sxsw.com/TBnAPmCZMEvTm8_6gXoDgmGAorg=/301x672:4135x3410/950x0/images.sxsw.com/80/0ee8f195-ded1-455b-83a3-20fce6f3c1b3/artist-41347")
    demo7 = Artist(id=7, userId=4, artistName="Coach Da Ghost", description="Coach Da Ghost who goes by the real name Culture Bermudez is a 24 year old rapper from New York. Brooklyn drill talent, CoachDaGhost is currently signed to Gucci Mane’s 1017 records.", imgUrl="https://pbs.twimg.com/media/Ec57r6jXsAIqoCN.jpg")
    demo8 = Artist(id=8, userId=4, artistName="Kiing Shooter", description="William Antonio Daniels, better known by his stage name Kiing Shooter, was a rapper from Queensbridge, New York.", imgUrl="https://static.hiphopdx.com/2019/05/kiing-shooter-hiphopdx-e1557417385963-826x620.jpg")
    demo9 = Artist(id=9, userId=5, artistName="Sheff G", description="Michael Williams, known professionally as Sheff G (born September 23, 1998) is an American rapper, singer and songwriter from the Flatbush section of Brooklyn, New York.", imgUrl="https://i1.wp.com/www.passionweiss.com/wp-content/uploads/2019/12/sheff.jpg?resize=1000%2C1000&ssl=1")
    demo10 = Artist(id=10, userId=5, artistName="Sleepy Hallow", description="Tegan Joshua Anthony Chambers (born December 20, 1999), known professionally as Sleepy Hallow, is a Jamaican-American rapper, singer and songwriter. Originally from Jamaica, Chambers grew up in the Flatbush section of Brooklyn alongside Sheff G.", imgUrl="https://www.hiphop-spirit.com/images/artists/sleepy-hallow-62772.png")

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

    db.session.commit()


def undo_artists():
    db.session.execute('TRUNCATE TABLE artists RESTART IDENTITY CASCADE;')
    db.session.commit()