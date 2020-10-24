"""REST API for likes."""
import flask
from app import db
from flask import Blueprint

# returns a json of information of the brother associated with the uniqname
# Help: you will make/fill "context", which gets returned
#        to access the database, use: db.brothers.xxxx TODO
# Example of what would be returned if "rband" is passed to the api
#            {
#                "name": "Rebecca Andrews",
#                "graduation": "2020",
#                "majors": "International Studies, Computer Science",
#                "minors": "Spanish",
#                "PC": "Omicron",
#                "experience": "iXperience, JP Morgan"
#                "clubs": "CS KickStart"
#                "uniqname": "rband"
#            }

brother_api = Blueprint('brother_api', url_prefix="/api/brother", import_name=__name__)
# TODO: add the route (needs uniqname) & the methods to parameters of next line
@brother_api.route('/scores', methods=['GET'])
def get_brother():
    print('hello')
    context = {}
    context['brother'] = db.getCollection('brothers').find({'_id' : '5c3174e4803a700009b14ea8'})

    return flask.jsonify(**context)
