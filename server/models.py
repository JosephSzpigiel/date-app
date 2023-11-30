from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class DatePlan(db.Model, SerializerMixin):
    __tablename__ = 'date_plans'

    id = db.Column(db.Integer, primary_key = True)
    name1 = db.Column(db.String)
    name2 = db.Column(db.String)
    budget = db.Column(db.String)
    date = db.Column(db.Date)
    date_activities = db.relationship('DateActivity', back_populates = 'date_plan', cascade = 'all, delete-orphan')
    activities = association_proxy('date_activities', 'activity')
    serialize_rules = ('-date_activities.date_plan', '-activities.date_plans')

    def __repr__(self):
        return f'<DatePlan {self.id}: {self.date}>'
    
class Activity(db.Model, SerializerMixin):
    __tablename__ = 'activities'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    mood = db.Column(db.String)
    price = db.Column(db.String)
    img = db.Column(db.String)
    description = db.Column(db.String)
    date_activities = db.relationship('DateActivity', back_populates = 'activity', cascade = 'all, delete-orphan')
    date_plans = association_proxy('date_activities', 'date_plan')
    serialize_rules = ('-date_activities.activity', '-date_plans.activity')

    def __repr__(self):
        return f'<Activity {self.id}: {self.name}>'
    
class DateActivity(db.Model, SerializerMixin):
    __tablename__ = 'date_activities'

    id = db.Column(db.Integer, primary_key = True)
    date_plan_id = db.Column(db.Integer, db.ForeignKey('date_plans.id'))
    activity_id = db.Column(db.Integer, db.ForeignKey('activities.id'))
    start_time = db.Column(db.Time)
    date_plan = db.relationship('DatePlan', back_populates = 'date_activities')
    activity = db.relationship('Activity', back_populates = 'date_activities')
    serialize_rules = ('-activity.date_activities', '-date_plans.date_activity')

    def __repr__(self):
        return f'<DateACtivity {self.id}: DatePlan {self.date_plan_id}, Activity {self.activity_id}>'