from app.models import db, artist


def seed_artists():

    demo1 = Artist(userId=1, artistName="Dave East", description="David Lawrence Brewster Jr. (born June 3, 1988), better known by his stage name Dave East, is an American rapper, songwriter and actor from Harlem, New York.")
    demo2 = Artist(userId=1, artistName="Pop Smoke", description="Bashar Barakah Jackson, known professionally as Pop Smoke, was an American rapper, singer, and songwriter. He was considered by many to be the face of Brooklyn drill. Born and raised in Canarsie, Brooklyn.")
    demo3 = Artist(userId=2, artistName="Stupid Young", description="Stupid Young is a Cambodian-American rapper out of Long Beach, California. Young often talks about his daily life and struggles as an asian crip.")
    demo4 = Artist(userId=2, artistName="OMB Jay Dee", description="Coming out of Brownsville Brooklyn, OMB Jay Dee is one of the next upcoming young rappers putting on for the Brooklyn Drill scene.")
    demo5 = Artist(userId=3, artistName="Fivio Foreign", description="Maxie Lee Ryles III (born March 29, 1990), known by his stage name Fivio Foreign, is an American rapper and songwriter from East Flatbush, Brooklyn")
    demo6 = Artist(userId=3, artistName="MBNel", description="Born and raised in Stockton, CA, “one of the most dangerous cities in America,” MBNel survived the street wars and emerges to tell us the brutal honest truth. As a first-generation Filipino-American rapper, he aims to change stereotypes and put a spotlight on his hometown.")
    demo7 = Artist(userId=4, artistName="Coach Da Ghost", description="Coach Da Ghost who goes by the real name Culture Bermudez is a 24 year old rapper from New York. Brooklyn drill talent, CoachDaGhost is currently signed to Gucci Mane’s 1017 records.")
    demo8 = Artist(userId=4, artistName="Kiing Shooter", description="William Antonio Daniels, better known by his stage name Kiing Shooter, was a rapper from Queensbridge, New York.")
    demo9 = Artist(userId=5, artistName="Sheff G", description="Michael Williams, known professionally as Sheff G (born September 23, 1998) is an American rapper, singer and songwriter from the Flatbush section of Brooklyn, New York.")
    demo10 = Artist(userId=5, artistName="Sleepy Hallow", description="Tegan Joshua Anthony Chambers (born December 20, 1999), known professionally as Sleepy Hallow, is a Jamaican-American rapper, singer and songwriter. Originally from Jamaica, Chambers grew up in the Flatbush section of Brooklyn alongside Sheff G.")

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


def undo_users():
    db.session.execute('TRUNCATE TABLE artists RESTART IDENTITY CASCADE;')
    db.session.commit()