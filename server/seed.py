#!/usr/bin/env python3

# Local imports
from app import app
from models import db, DatePlan, Activity, DateActivity
from datetime import date, time  

with app.app_context():

    print("Deleting data...")
    DatePlan.query.delete()
    Activity.query.delete()
    DateActivity.query.delete()

    print("Creating Date Plans...")
    dp1 = DatePlan(name1="Taylor", name2="Travis", budget="$", date=date(2023, 12, 2))
    dp2 = DatePlan(name1="Penelope", name2="Javier", budget="$$", date=date(2023, 12, 3))
    dp3 = DatePlan(name1="LeBron", name2="Savannah", budget="$$$", date=date(2023, 12, 17))
    dp4 = DatePlan(name1="Barack", name2="Michelle", budget="$$$$", date=date(2024, 1, 22))
    dp5 = DatePlan(name1="Maxine", name2="Bartholomew", budget="$$$$$", date=date(2024, 2, 14))
    dp6 = DatePlan(name1="Leslie", name2="Ben", budget="$", date=date(2023, 12, 5))
    dp7 = DatePlan(name1="Jim", name2="Pam", budget="$$", date=date(2023, 12, 11))
    dp8 = DatePlan(name1="Bert", name2="Ernie", budget="$$$", date=date(2023, 12, 22))
    dp9 = DatePlan(name1="Cory", name2="Topanga", budget="$$$$", date=date(2024, 1, 11))
    dp10 = DatePlan(name1="Kim", name2="Kanye", budget="$$$$$", date=date(2024, 2, 14))
    dp11 = DatePlan(name1="Edward", name2="Bella", budget="$$$$", date=date(2024, 10, 31))
    dp12 = DatePlan(name1="Timon", name2="Pumbaa", budget="$$$", date=date(2024, 2, 14))
    
    date_plans = [dp1, dp2, dp3, dp4, dp5, dp6, dp7, dp8, dp9, dp10, dp11, dp12]

    print("Creating Activities...")
    a1 = Activity(name="Picnic", mood="Creative", price="$$", 
                  img="https://consettmagazine.com/wp-content/uploads/2014/04/picnic1.jpg", 
                  description="Have a picnic in the park. Go for a walk. Watch the sunset.")
    a2 = Activity(name="Hiking", mood="Adventure", price="$", 
                  img="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528", 
                  description="Once you feel comfortable with the person you're dating, a nature walk or hike is a fun idea.")
    a3 = Activity(name="Netflix and chill", mood="Comfy", price="$", 
                  img="https://luna-askmen-images.askmen.com/1080x540/2015/10/16-052003-why_netflix_and_chill_is_terrible.jpg", 
                  description="For when you want to watch a movie. Yep, definitely watch a movie. For real.")
    a4 = Activity(name="Fine Dining", mood="Romantic", price="$$$$$", 
                  img="https://res.cloudinary.com/simpleview/image/upload/v1638431261/clients/charlotteharbor-redesign/Fine_Dining_At_The_Perfect_Caper_23c8ab17-b39f-4909-8a1d-ee91a9a42dfe.jpg", 
                  description="For those special occasions when you want to celebrate with the person you love.")
    a5 = Activity(name="Take a dance class", mood="Unique", price="$$$$", 
                  img="https://dancewithbrandee.com/wp-content/uploads/2017/07/Private-Lesson-Salsa-Couple.jpg", 
                  description="For when you and your partner want to put on a show during the wedding reception next month.")
    a6 = Activity(name="Mini Golf", mood="Fun", price="$$$", 
                  img="https://nypost.com/wp-content/uploads/sites/2/2019/06/mini-golf-pier-25-2a.jpg?quality=75&strip=all&w=1200", 
                  description="Impress your partner by dominating the competition. Nevermind the competition is still in elementary school.")
    a7 = Activity(name="Grab some coffee", mood="Comfy", price="$$", 
                  img="https://addisonmagazine.com/wp-content/uploads/2018/08/iStock-504536540.jpg", 
                  description="A great first date option where you can bail if you are getting catfished.")
    a8 = Activity(name="Go to the movies", mood="Fun", price="$$$", 
                  img="https://screams.org/wp-content/uploads/2022/02/image2-2-1024x683.jpg", 
                  description="Mix the M&Ms in with the popcorn. You can thank me later.")
    a9 = Activity(name="Weekend Getaway", mood="Romantic", price="$$$$$", 
                  img="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_480,q_75,w_720/v1/clients/milledgeville/MV09152020_323_1__872b0012-0662-4a49-9206-502afb629a6f.jpg", 
                  description="Drop the kids off with your in-laws and reconnect with your partner.")
    a10 = Activity(name="Skydiving", mood="Adventure", price="$$$$", 
                  img="https://i.imgur.com/TCXpO.jpg", 
                  description="What better way to celebrate your love than jump out of a perfectly good airplane together?")
    a11 = Activity(name="Take a cooking class", mood="Creative", price="$$$", 
                  img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/41/5a/0c/classpop.jpg?w=500&h=400&s=1", 
                  description="You have already used the microwave every day this week. Step your game up pal.")
    a12 = Activity(name="Go to a concert", mood="Unique", price="$$$$", 
                  img="https://miro.medium.com/v2/resize:fit:5576/1*bbrdaWB-Yz8MVm6T-QZuug.jpeg", 
                  description="Because you need to see Blink-182 before their next reunion tour is at an old folks home.")
    
    activities = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]

    print("Creating Date Activities...")
    da1 = DateActivity(date_plan=dp1, activity=a2, start_time=time(17, 0, 0))
    da2 = DateActivity(date_plan=dp2, activity=a1, start_time=time(12, 0, 0))
    da3 = DateActivity(date_plan=dp3, activity=a6, start_time=time(15, 30, 0))
    da4 = DateActivity(date_plan=dp4, activity=a10, start_time=time(18, 0, 0))
    da5 = DateActivity(date_plan=dp5, activity=a4, start_time=time(20, 0, 0))
    da6 = DateActivity(date_plan=dp6, activity=a3, start_time=time(19, 30, 0))
    da7 = DateActivity(date_plan=dp7, activity=a7, start_time=time(16, 0, 0))
    da8 = DateActivity(date_plan=dp8, activity=a11, start_time=time(17, 30, 0))
    da9 = DateActivity(date_plan=dp9, activity=a12, start_time=time(18, 30, 0))
    da10 = DateActivity(date_plan=dp10, activity=a9, start_time=time(11, 0, 0))
    da11 = DateActivity(date_plan=dp11, activity=a5, start_time=time(14, 0, 0))
    da12 = DateActivity(date_plan=dp12, activity=a8, start_time=time(19, 0, 0))

    date_activities = [da1, da2, da3, da4, da5, da6, da7, da8, da9, da10, da11, da12]

    db.session.add_all(date_plans)
    db.session.add_all(activities)
    db.session.add_all(date_activities)
    db.session.commit()

    print("Seeding done!")