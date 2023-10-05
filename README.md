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

# About React

## Introduction
React is a frontend development framework created by Facebook that lets you build user interfaces out of individual pieces called components.

## Setting up

- ensure `Node.js` is installed on your machine
- To check if Node is installed in your machine, run

```
node -v
npm -v
```

- To replace `npm` with `yarn`, go here:

[yarn's official installation website](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

# Creating Application

- in the CLI and the directory where you want to create your React application, type:

```
npx create-react-app <name_of_app>
cd <name_of_app>
npm start
```

- Alternatively, you can replace

```
npx create-react-app <name_of_app>
```

with:

```
npm init react-app <name_of_app>
```

or (if you have yarn installed):

```
yarn create react-app <name_of_app>
```

# Common Errors
- (Django) OperationalError
    - You probably created new database stuff and forgot to migrate it
    - Run 
        ```
        python manage.py makemigrations
        ``` 
        and then 
        ```
        python manage.py migrate
        ```
        again.
- (React) When Creating a new React app: Error - no such file or directory
    - Ensure you are in the correct directory
    - Run these commands
        
        ```
        npm uninstall -g create-react-app
        npm install -g create-react-app
        ```
        
    - update npm if necessary
 
  # Credits
  Most of the content I followed was from a React-Django Full Stack Udemy course I took [here](https://www.udemy.com/course/react-django-full-stack/) by Krystian Czekalski. He's a really good teacher so do check him and the course out if you're keen!
