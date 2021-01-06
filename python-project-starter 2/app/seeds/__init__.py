from flask.cli import AppGroup
from .users import seed_users, undo_users
from .songs import seed_songs, undo_songs
from .artists import seed_artists, undo_artists
from .checkins import seed_checkins, undo_checkins
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_artists()
    seed_songs()
    seed_checkins()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_artists()
    undo_songs()
    undo_checkins()
    # Add other undo functions here
