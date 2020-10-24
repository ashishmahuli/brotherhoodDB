"""REST API for likes."""
import flask
from app import db

# Required: brother's uniqname
# Modifies: nothing
# Effects: returns a JSON containing a specific brother's name, email, and phone number
#          example:
#           {
#                "name": "Rebecca Andrews",
#                "email": "rband@umich.edu",
#                "number": "7026226684"
#           }
# Help: you will make/fill "context", which gets returned
#      to access the database, use: db.brothers.xxxx TODO      

# TODO: add the route & the methods to paramaters of next line
@brother.app.route()
def get_contact_info():
    return flask.jsonify(**context)