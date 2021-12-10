## Roast

A full-stack home coffee roasting journal. Built with Ruby on Rails and React.

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
|__public
      |__ images
src
|__ Index.jsx
|__ assets/
      |__ fonts
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
      |__ HomeLogin.jsx
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
| Rails setup   |    H     |     1 hrs      |      hrs     |     hrs     |
| scaffolding   |    H     |     1 hrs      |      hrs     |     TBD     |
| associations  |    H     |     1 hrs      |      hrs     |     TBD     |
| controllers/routes |  H  |     5 hrs      |      hrs     |     TBD     |
| testing CRUD  |    H     |     3 hrs      |      hrs     |     TBD     |
| React setup   |    H     |     1 hrs      |      hrs     |     TBD     |
| file structuring |    H  |     1 hrs      |      hrs     |     TBD     |
| auth routes   |    L     |     3 hrs      |      hrs     |     TBD     |
| CRUD routes   |    H     |     3 hrs      |      hrs     |     TBD     |
| testing routes |    H    |     3 hrs      |      hrs     |     TBD     |
| basic layout  |    H     |     6 hrs      |      hrs     |     TBD     |  
| organizing logic | H     |     2 hrs      |      hrs     |     TBD     |  
| basic css     |    H     |     5 hrs      |      hrs     |     TBD     |
| refining css  |    H     |     4 hrs      |      hrs     |     TBD     |
| TOTAL         |    H     |     39 hrs     |      hrs     |     TBD     |


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

