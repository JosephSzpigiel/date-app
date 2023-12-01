# DateCrafters

## Introduction

Welcome to DateCrafters, a dating concierge app that helps couples plan dates through a variety of activities that appeal to every mood and budget. This is a Phase 4 project for [Flatiron School](https://flatironschool.com/). Its primary purpose is to help students gain experience building a full-stack project with a React frontend and a Flask backend.

This project was created by [Kassidy Matos](https://github.com/KassiNovaa), [Joseph Szpigiel](https://github.com/JosephSzpigiel), and [David Stinnette](https://github.com/dastinnette).

---

## Project Breakdown

#### Activities

This project contains a variety of Activities that couples can browse while planning a date. From the home page, these activities can be read, edited and deleted as if the user had admin access. To add an Activity, click `Add Activity` in the Navbar to access the form.

#### Dates

Once you've found Activities you'd like to try, click `Create a Date` in the Navbar and fill out the form on the left with names, a budget and date. Then add activities to your date from the options on the right. You can search for activities by name, budget or mood and your can also filter by various moods from the drop down menu. Once you have saved your date with all necessary info you can view it and other planned dates by clicking `All Dates` in the Navbar.

---

## Setup locally

To get this app running on your local machine, first **fork** a copy into your Github account then **clone** from that copy. Once you've opened the code files from your terminal, install any additional dependencies you know you'll need for your project by adding them to the `Pipfile`. To download the dependencies for the backend server, run:

```console
pipenv install
pipenv shell
```

You can run the Flask API on [`localhost:5555`](http://localhost:5555) by running:

```console
python server/app.py
```

To download the dependencies for the frontend client, run:

```console
npm install --prefix client
```

You can run your React app on [`localhost:3000`](http://localhost:3000) by running:

```sh
npm start --prefix client
```

## Generating Your Database

First change into the `server` directory:

```console
cd server
```

Then enter the commands to create the `instance` and `migrations` folders, the database `app.db` file, and seed your database:

```
flask db init
flask db revision -m 'Create DB'
flask db upgrade head
python seed.py
```
