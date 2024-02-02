# ABOUT BACKEND SKILL TEST PROJECT:-

# PLACEMENT CELL

An interface for the employees of a company to fill in the data into the database and then download it in CSV format.

Visit Live site on -> https://placement-cell-mjs9.onrender.com


# FEATURES

- Team Career Camp wants to maintain a database of all the student interviews [only for their own
use], for this they store the following details:
- Batch
- Student Details (including college, status: [placed, not_placed])
- Course Scores (including DSA Final Score, WebD Final Score, React Final Score)
- Interviews (including company name and Date)
- Results (this is a mapping between company, and student, contains result: [PASS, FAIL, On
Hold, Didn’t Attempt])

- Pages
- Sign Up and Sign In only for employees
- List of students + add new student (this is similar to adding and viewing posts in codeial)
- List of Interviews + form to create an interview (with date)
- Allocate a student to an interview
- Select an interview to view the list of all students and mark a result status from the list
page itself

# TECH STACK

Node.Js, MongoDB, Express, Passport, Fast-csv, ejs,Mongo ATLAS

# SETUP

1) Run `npm install` command in the terminal to install required dependencies
2) Create a .env file in config directory of this project
3) Write environment variables in .env file:

- SECRET=`Anything`
- MONGO_URL=mongodb://localhost:27017/`DB Name`(for local hosting)
