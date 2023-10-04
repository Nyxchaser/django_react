# django_react
This repository is for me to explore full-stack development using Django for backend and React as frontend.
# About Django
Django is a Web framework that has been in the market for ≥ 10 years. It is a full-stack framework capable of doing both frontend and backend, but this project will use Django for backend and React for frontend.
# Setting up
## Virtual Environment
A virtual environment is a tool that helps to keep dependencies required by different projects separate by creating isolated python virtual environments for them. Virtual environments are important is one project may need a different version of Django from another project.
To make a virtual environment, run
```
python -m venv venv
```
- `-m` indicates “make”
- the second `venv` is the name of the virtual environment
## Activate

To activate the virtual environment:

### Mac / Linux

```
source venv/bin/activate
```

### Windows

- navigate into the venv folder
- navigate into Scripts
- type this command:

```
venv\Scripts\activate
```

- you will have something like:

```
(venv) My-MacBook:Desktop My$ 

OR

(venv) C:\Users\Me Me\Desktop>
```

- install Django within the virtual environment to create a local version of Django

## Deactivate

- To deactivate a virtual environment, type:

```
deactivate
```

# Creating a Project

- Run this in the command prompt

```
django-admin startproject <name_of_project> .
```

- This will create a new folder with the name specified in the arguments above.
- The `.` specifies that you want to create the project in the current directory
- The file `manage.py` will automatically be created.

## Running the Server

```
python manage.py runserver
```

- You can also specify the port number you want the server to run on, e.g.

```
python manage.py runserver 8080
```

- You should see this screen.

## Creating an App

```
django-admin startapp <name_of_app>
```

or

```
python manage-py startapp <name_of_app>
```

- note that `db.sqlite3` will be created automatically
- However, you should not use this in professional environments as this is meant to be a local database. Choose mySQL or PostgreSQL instead.

## Overview of Files

Within the project folder:

- `urls.py`: does mapping for urls in the application
    - Note that typing `/admin` after the server url will open the Django administration page
- `settings.py`: changing databases, passwords, language, etc. (basically settings)

Within the application folder:

- `models.py`: objects in database
- `views.py`: “endpoints” of our applications
