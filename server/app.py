#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import DatePlan, Activity, DateActivity

# Views go here!

class Activities(Resource):
    def get(self):
        return [[activity.to_dict() for activity in Activity.query.all()], 200]
    def post(self):
        params = request.json
        new_activity = Activity(name = params['name'], 
                                mood = params['mood'],
                                price = params['price'],
                                img = params['img'],
                                description = params['description'])
        db.session.add(new_activity)
        db.session.commit()
        return make_response(new_activity.to_dict(), 200)

api.add_resource(Activities, '/activities')

class ActivityById(Resource):
    def get(self,id):
        activity = Activity.query.get(id)
        if not activity:
            return make_response({'erorr': 'activity not found'}, 404)
        return make_response(activity.to_dict(), 200)
    def patch(self,id):
        activity = Activity.query.get(id)
        if not activity:
            return make_response({'erorr': 'activity not found'}, 404)
        params = request.json
        for attr in params:
            setattr(activity, attr, params['attr'])
        db.session.commit()
        return make_response(activity.to_dict(), 200)
    def delete(self,id):
        activity = Activity.query.get(id)
        if not activity:
            return make_response({'erorr': 'activity not found'}, 404)
        db.session.delete(activity)
        db.session.commit()
        return make_response('',204)

api.add_resource(ActivityById, '/activities/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)

