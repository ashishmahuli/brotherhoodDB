import flask
from app import db
from flask import Blueprint

# adds a json of information of a brother 

brother_api = Blueprint('brother_api', url_prefix="/api/brother", import_name=__name__)

# TODO: (does the route need uniqname?)
@brother_api.route('/scores', methods= ['POST'])
def add_brother(n, u, g, ma, mi, p):
  print('add brother test')
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