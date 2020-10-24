"""REST API for likes."""
import flask
from app import db


# Required: 
# Modifies: nothing
# Effects: returns a json of every brother and their name, graduation, majors, minors, PC, uniqname
#     Example of what would be returned, assuming Atharva and I are the only two people in AKPsi:
#       {
#           "brothers":
    #           {
    #                "name": "Atharva Talpade",
    #                "graduation": "2021",
    #                "majors": "Computer Science",
    #                "minors": "",
    #                "PC": "Pi",
    #                "uniqname": "atalpade"
    #            },
    #            {
    #                "name": "Rebecca Andrews",
    #                "graduation": "2020",
    #                "majors": "International Studies, Computer Science",
    #                "minors": "Spanish",
    #                "PC": "Omicron",
    #                "uniqname": "rband"
    #            }
#        }
# Help: to access the database, use: db.brothers.xxxx TODO
#       you will make/fill "context", which gets returned

# TODO: add the route & the methods to parameters of next line
@brother.app.route()
def get_all_brothers():
    return flask.jsonify(**context)