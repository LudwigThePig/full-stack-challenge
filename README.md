<details>
  <summary><h1>Click to see project specs!</h1></summary>

# Techstars Engineering: Fun Front to Back

Welcome to the Techstars Engineering Full Stack code Challenge. We work on diverse project and value team members who can do it all from CSS to DevOps and everything inbetween.  We love to code and are passionate about doing it well.

This is your chance to show the team how you approach problems and give us insight into your abilities. For the challenge, you are required to design, develop, and style a Full Stack application using Rails as the API and React as the front-end. Do not use Rails templates for your UI. Feel free to use any third party libraries you see fit. You will have **48 hours** to submit a solution for the given requirements. We strongly prefer that whatever you do, you do it well, as opposed to trying to razzle dazzle us.  Please read all the instructions carefully and email us if you have any questions. 

## Getting Started
First, fork this repository into your own GitHub account. Then complete each of the parts below, working as you would in a professional environment. Once you have completed all the sections, please update the README, to reflect how to build and run your application, as well as any architectural decisions you have made. Add your deployment url to your github repo so we can test the deployed application. When you believe you are ready to submit your challenge, submit a pull request into our master branch. We will see the notification and get back to you on next steps. 

## What we are looking for

* Ability to set up a REST API (Strongly Recommend Rails).
* Ability to set up a Relational Database
* Understanding of the HTTP protocol and how it works with REST API conventions
* Understanding the basics of CRUD
  * Create
  * Read
  * Update
  * Delete
* Ability to layout and design an HTML page with CSS
* Ability to create an intuitive UI using a front-end framework (React preferred)
* Ability to use javascript on the front-end to interact with a REST API
* Ability to develop automated tests for your application
* Ability to translate user stories as into a web application
* Ability to deploy a front-end and back-end stack.


## The Challenge

### Intro

Build an application that will be a directory of companies, and the people who have founded them. The main page should be a list of all the companies with some high-level information (Name, Short Description, City, State). When the user click on a company, show its details. Included in those details will be the founding members of company, a long description.

### Part 1 : Companies Index

1. Create the basic layout for the page
2. Create a list view of all companies
  * Company Name
  * Company Location
  * Short Description
3. Add ability to create a new company
<br />

![step 1](Step_1.png)

### Part 2 : Companies Create

1. Implement form to create a new company
2. Fields
    * Company Name __required__
    * Company Location (City, State) __required__
    * Company Description __required__
    * Founded Date
<br />

![step 2](Step_2.png)

### Part 3 : Company Details

1. Shows all of the company's information
2. Ability to update company
3. Ability to delete company
<br />

![step 3](Step_3.png)

### Part 4 : Founders

1. In the Company details add the ability to add a Founder to a Company.
2. Each Founder can only belong to a single company.
3. Founder  Fields
    * Founder Full Name
    * Founder Title
4. Founders added should display in the company detail page.
<br />

![step 4](Step_4.png)

### Part 5 : Tests
Create a test suite for your application, writing unit and or functional tests that adequately cover the code base. TDDers will have already completed this challenge.

### Part 6 : Deployment 
 Sign-up for a Heroku account (or other provider) and deploy your application to the web. Please provide us with tye deployed URL. Bonus points for using a provider other than Heroku like Digital Ocean.  Please seed your application with at least a dozen Companies and Founders.

### Next Steps
If you move onto the next stage of the interview process we will have you come in and pair program with our engineers and build on top of your code base.  Example features we might implement together would be to add category tags, add a search component or add images to Companies and Founders using a third party hosting service.


</details>



# Company Directory

## Demo
[Click here to see a demo!](https://morning-harbor-19006.herokuapp.com/)

## Getting Started
  Run the following commands in your terminal
    ```
    git clone https://github.com/LudwigThePig/full-stack-challenge.git # or clone your own fork
    cd full-stack-challenge/app
    bundle
    rake db:migrate
    rails s
    ```

## Testing
  This application comes with a suite of tests that cover the models, controllers, and views.
    - To test the models and controllers, run `rails test`.
    - To test the views, run `yarn test`.

## Design Choices

  Despite not having any Rails experience, I took the hint and built out the application with Rails! The data flow is very much in line with what Rails suggests. Although scaffolds look like powerful tools, I stayed away from them. I wanted to learn how to build out my own controllers, tests, and custom scopes from scratch. 
  
  I created two controllers and models. One for the companies and one for the Founders. At present, companies have a one to many relationship with founders. In the future, if our founders wanted to go off and start a new company, one would just have to create a join table and the requisite model to handle a many to many relationship

  The views were built out with React. There are three root components for the three erb templates, `home`, `new`, and `show`. Each root component shares a navbar component.

  The Home component/view renders a list of the companies. There is a 'add company' button at the bottom, as well as a link in the navbar to the new company page.

  The new view, or NewCompanyForm component, renders a form that posts to the Ruby controller, which updates the Model.

  The show view, or CompanyProfile, has a lot of dynamic features. First, a user can click on the 'edit' button to have a modal appear. This modal contains a form that allows the user to edit the company's details. There is a second modal that appears when the user clicks the 'Add Founder' button. This also displays a form. This component makes full use of React's SPA powers. Users never have to leave the page to make changes and see those changes.

  Testing, while always at the front of my mind, took a backseat in the development process. I did not know enough about Rails to write meaningful tests from the start. I spent a good deal of time learning about MiniTest and implemented my tests after development but it would have been nice to know enough to use TDD.

  All in all, this was a lot of fun! I understand the power of Rails and look forward to developing with it in the future

  - Morgan