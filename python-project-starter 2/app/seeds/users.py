from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password'),
    demo1 = User(username='BobBenz', email='bob@bob.com',
                password='password')
    demo2 = User(username='JoeCream', email='joe@joe.com',
                password='password')
    demo3 = User(username='DollaBillz', email='bill@bill.com',
                password='password')
    demo4 = User(username='JimJones', email='jim@jim.com',
                password='password')
    demo5 = User(username='CarlCash', email='carl@carl.com',
                password='password')

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
