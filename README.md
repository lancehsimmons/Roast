## Roast

https://roast-lancedev.surge.sh/

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
![Roast Component Tree](https://user-images.githubusercontent.com/90333715/146286298-cf7af3b0-db40-465a-a4cb-e8287f548bf2.png)


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
          |__ home_login.css
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
| Rails setup   |    H     |     1 hrs      |      30min   |     hrs     |
| scaffolding   |    H     |     1 hrs      |      1hrs    |     TBD     |
| associations  |    H     |     1 hrs      |      30min   |     TBD     |
| controllers/routes |  H  |     5 hrs      |      2hrs    |     TBD     |
| testing CRUD  |    H     |     3 hrs      |      3hrs    |     TBD     |
| React setup   |    H     |     1 hrs      |      1hrs    |     TBD     |
| file structuring |    H  |     1 hrs      |      1hrs    |     TBD     |
| auth          |    L     |     3 hrs      |      8hrs    |     TBD     |
| CRUD          |    H     |     3 hrs      |      8hrs    |     TBD     |
| testing routes |    H    |     3 hrs      |      3hrs    |     TBD     |
| basic layout  |    H     |     6 hrs      |      4hrs    |     TBD     |  
| basic css     |    H     |     5 hrs      |      12hrs   |     TBD     |
| refining css  |    H     |     4 hrs      |      5hrs    |     TBD     |
| TOTAL         |    H     |     39 hrs     |      49hrs   |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://user-images.githubusercontent.com/90333715/145507583-40425bec-52fe-437a-8d7b-9f6d1cdec035.png)
<br>

***

## Post-MVP

- User Authentication and Authorization
- Timer for Create/Add Roast screen

***

## Code Showcase

I love using the Faker gem. Setting my form to autofill with Faker was fun.
```
7.times do 
  Coffee.create!(
    name: Faker::Coffee.origin,
    roast_time: "#{rand(9..12)}:00",
    roast_level: 'city',
    roaster_settings: '9.9.20',
    preheat: '1 min 9 heat',
    yellowing: "#{rand(3..5)}:00",
    browning: "#{rand(5..7)}:00",
    first_crack: "#{rand(7..9)}:00",
    second_crack: "#{rand(9..11)}:00",
    first_crack_end: "#{rand(7..11)}:00",
    end_drop: "#{rand(9..12)}:00",
    notes: "fan #{rand(5..7)} at #{rand(3..5)}:00, heat to #{rand(7..9)} at #{rand(7..9)}:00",
    user: @admin)
end

puts "#{Coffee.count} coffees created"
```



## Code Issues & Resolutions

Getting Redirect to correctly render home or sign-in based on user login state was a challenge! 
Working with another student we figured out that we needed a ternary on both Redirects to cover all the bases.

```
    <div className="App">
      <Layout handleLogout={handleLogout} currentUser={currentUser}>
        <Switch>
          <Route path='/sign-up'>
            <SignUp handleSignup={handleSignup} />
          </Route>

          <Route path='/sign-in'>
          {currentUser ?
              <Redirect to='/' />
              : <SignIn handleSignIn={handleSignIn} />
            }
          </Route>
          <Route path='/'>
          {currentUser ?
              <MainContainer currentUser={currentUser} handleSignIn={handleSignIn} />
              : <Redirect to='/sign-in' />
            }
          </Route>
        </Switch>
      </Layout>
    </div>
  );
  ```


