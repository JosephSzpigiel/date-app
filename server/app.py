#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import DatePlan, Activity, DateActivity
import datetime

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
            setattr(activity, attr, params[attr])
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

class DatePlans(Resource):
    def post(self):
        params = request.json
        date = params['date'].split('-')
        dateObj = datetime.date(int(date[0]), int(date[1]), int(date[2]))
        new_date = DatePlan(name1 = params['name1'], 
                                name2 = params['name2'],
                                budget = params['budget'],
                                date = dateObj)
        db.session.add(new_date)
        db.session.commit()
        return make_response(new_date.to_dict(), 200)

api.add_resource(DatePlans, '/dateplans')

class DateActivities(Resource):
    def post(self):
        params = request.json
        start = params['start_time'].split(':')
        timeObj = datetime.time(hour=int(start[0]), minute=int(start[1]))
        new_date_activity = DateActivity(
            date_plan_id = params['date_plan_id'],
            activity_id = params['activity_id'],
            start_time = timeObj
        )
        db.session.add(new_date_activity)
        db.session.commit()
        return make_response(new_date_activity.to_dict(), 200)

api.add_resource(DateActivities, '/dateactivities')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

