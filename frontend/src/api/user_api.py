"""REST API for likes."""
import flask
from app import db
from flask import Blueprint

user_api = Blueprint('user_api', url_prefix="/api/user", import_name=__name__)
@user_api.route('/scores', methods=['POST'])
def add_brother(n, u, g, ma, mi, p):
    #return 'testing'
    database = db.getCollection('brothers')
    database.insertOne(
        {
            name : n
            uniqname : u
            grad_year : g
            majors : ma
            minors : mi
            pledge_class: p
        }
)
