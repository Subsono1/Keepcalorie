# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning



<br>

### Overview

**Keepalorie** is a project where people can track their daily calories. Users can enter their calories intake, update and  delete so they can keep records of it. Is a way to help people who want to lose weight or simply track their calories. Moreover, they can add additional comments as well to compare to others.  
The site will offer a calorie calculator as an external resource, where users can reference by putting their information and to find out how many calories they should be intaking daily, based on their personal body information.


<br>

### Wireframes



[ Desktop Landing](https://imgur.com/a/JwdgZKX)



[Second Page desktop](https://imgur.com/qy7yE8q)



[Third page desktop](https://imgur.com/iqYOADP)


[Tablet landing](https://imgur.com/OwxVJfq)



[ Mobile landing](https://imgur.com/wiic6Su)


<br>

### MVP



Keepcalorie will offer a way to keep track of your daily calories intake. leave messages and compare it to others

- Will design mobile first.
- Will have a new log entry window.
- Will have a logged entries. Page will render all the information from user's information
- will Have in total a create, delete.
- will have a calorie calculator section(need to get apporval, is an external widget calculator.)
<br>

#### Goals

- Create logs for calories intake and compare to others. 
- Put comments to track the calories intake.

<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Paths for components to rout them.         |
|   Axios          | get, post, update and delete from API.     |
|   LINK           | To link to different components.           |
|   @aterial-ui    | To create buttons and icons in components. |
|   react-animations | To create different animations with react|
|   react-iframe   | To set up iframe tag with rect|
|   styled-components | To style components with react |




<br>

#### Data



|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| AirtableAPI|      yes      | _Airtable.com_| _https://api.airtable.com/v0/appqG49RP2ePZYJQq/Table%201_ |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      
      |__ Fonts
      |__ Social Media Meta Tags
|__ components/
      |__ App.js
      |__ CreateEntry.js
      |__ Entries.js
      |__ List.js
      |__ Nav.js
      |__ Resources.js
      |__ Start.js
      |__ Footer.js
      
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  App.        | functional |   n   |   n   |  Main component, app brain.                                      |
|  Navigation  | functional |   n   |   n   |  The navigation will provide a link to each of the pages.        |
|  CreateEntry  | functional |  y  |   y   |  The create will have the form plus a nav.         |      
|  List  | functional |   y   |   n   |  The List will hold the logs, each entry.                   |
|  Entries    | functional |   y   |   y   |  This is where all the entry from airtable will render.          |
|  Resources      | functional |   y   |   y   |  This is where the nutrition search engine and the calorie calculator are set   |
|  Start | functional |   n   |   n   |  This is the intro to the site, with a button to enter the site.    |
|  Footer      | functional |   n   |   n   |  The footer will show info about me.  |

<br>

#### Component Estimates


> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Nav.            |    L     |     3 hrs      |     2.5 hrs       |     2.5 hrs    |
| Create Home/Form.   |    H     |     4 hrs      |     4 hrs       |     4 hrs     |
| Create List.   |    L     |     4 hrs      |     6 hrs       |     6 hrs     |
| Create Entries.     |    H     |     4 hrs      |     6 hrs      |     6 hrs     |
| Create CRUD Actions |    H     |     5 hrs      |     6 hrs       |     6 hrs    |
| Responsive Design   |    H     |     4 hrs      |     3.5 hrs      |    3.5 hrs     |
| Basic Css Design    |    H     |     3 hrs      |     4 hrs      |     4 hrs     |
| Advance Css Design  |    H     |     6 hrs      |     5 hrs       |      5 hrs     |
| Resources| L   |      3 hrs      |     3 hrs      |     5 hrs     |
| TOTAL               |          |     36 hrs     |     42 hrs      |     42 hrs    |

<br>

#### Helper Functions



|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| TBD        | TBD |

<br>

### Post-MVP



- Try to keep a local database for different users.
- Would like to find a way where users can have a food recomendation.
- a blog where people can discuss things related to food and calories.
- search for different nutritions  

<br>

***

## Project Delivery

### Code Showcase

> ```export default function CreateEntry(props) {
  const [Date, updateDate] = useState("");
  const [Breakfast, updateBreakfast] = useState("");
  const [Lunch, updateLunch] = useState("");
  const [Snack, updateSnack] = useState("");
  const [Dinner, updateDinner] = useState("");
  const [Comments, updateComments] = useState("");

//API call function to post
  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const response = await axios.post(
      BASE_URL,
      {
        fields: {
          Date: Date,
          Breakfast: parseInt(Breakfast),
          Lunch: parseInt(Lunch),
          Snack: parseInt(Snack),
          Dinner: parseInt(Dinner),
          Comments: Comments,
        },
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    ); //to make the call again.
    props.updateFetchEntries(!props.fetchEntries);
    updateDate("");
    updateBreakfast("");
    updateLunch("");
    updateSnack("");
    updateDinner("");
    updateComments("");
  };
 
  

  return (
  
    <>
      <FadeDiv className="new-entry-headline">
      ```

### Code Issues & Resolutions

> TBD
