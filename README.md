## Roast

A full-stack home coffee roasting log app. Built with Ruby on Rails and React.

Roast aims to provide a dynamic, precise, and robust log for home coffee roasting. Perfecting roasts on your favorite beans is a laborious process. I've created Roast to give home-roasters the tools they need to achieve the ideal bean.


## MVP

Roast will provide the user base with a full CRUD browser application. The app will allow users to create an account, add new roasts, view their roasting journal, as well as update and delete logs from the journal.


### Goals

- Functioning RESTful API with CRUD built with Ruby on Rails
  - PostgreSQL database
    - user table
    - roast table
- Full CRUD client built with React
- Users can create an account
- Users can interact with their roast journal
  - create new roasts
  - view all roasts
  - update roasts
  - delete roasts
- Client CSS styled to match wireframes

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | jsx based client framework|
| React-Router-Dom | handles dom rendering and manipulation in React |
|      Axios       | provides client CRUD capabilites with back-end|
|    PostgreSQL    | object-relatioinal database system |
|  Ruby on Rails   | Ruby based back-end framework |
|   Rack-CORS      | Ruby on Rails Cross-Origin Resource Sharing |
|     Bcrypt       | Ruby on Rails encryption gem library |
|      jwt         | Ruby on Rails json web token gem library |
|  awesome print   | ruby console return-text management |
|     faker        | ruby random data gem library |

<br>

### Client (Front End)

#### Wireframes

[Wireframe built on Figma](https://www.figma.com/file/omQOSDP7DrWljFGpiiJdsN/Roast?node-id=0%3A1)

![Roast_home_wireframe](https://user-images.githubusercontent.com/90333715/145507264-c4e6087f-eedf-4780-8462-e99d8861ba25.png)


#### Component Tree

![Roast Component Tree](https://user-images.githubusercontent.com/90333715/145506711-106a1b82-9bec-47f7-9cad-64fbf01f7875.png)

#### Component Architecture

``` structure

src
|__ Index.jsx
|__ assets/
      |__ fonts
      |__ images
      |__ css
          |__ layout.css
          |__ indexLogin.css
          |__ signup.css
          |__ list.css
          |__ detail.css
          |__ create.css
          |__ edit.css
          |__ detail_card.css
          |__ edit_card.css
|__ components/
      |__ App.jsx
      |__ Layout.jsx
      |__ MainContainer.jsx
      |__ CoffeCard.jsx
      |__ DeleteButton.jsx
      |__ DetailCard.jsx
      |__ Timer.jsx
      |__ EditCar.jsx
|__ screens/
      |__ IndexLogin.jsx
      |__ SignUp.jsx
      |__ List.jsx
      |__ Detail.jsx
      |__ Create.jsx
      |__ Edit.jsx
|__ services/
      |__ ApiConfig.js
      |__ auth.js
|__ Containers/
      |__MainContainer.jsx
|__ utils/
      |__ sort.js/
      
```

      
      
#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![ERD](https://user-images.githubusercontent.com/90333715/145507583-40425bec-52fe-437a-8d7b-9f6d1cdec035.png)
<br>

***

## Post-MVP

- User Authentication
- Timer for Create/Add Roast screen

***

## Code Showcase


## Code Issues & Resolutions

