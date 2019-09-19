This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assignment: Double Dropdowns
For this assignment you'll build a FAQ section that relies on two dropdowns to determine what information should be shown.

Step 1) When a user opens the page, both dropdowns should be in a default state and no FAQ questions should be seen.     

Step 2) Selecting the State from Dropdown #1 will populate Dropdown #2 with a list of potential cities to select

Step 3) Selecting a city from Dropdown #2 will populate the FAQ questions related only to that city.  
-- If the user selects a different city (with the same state), the questions should update accordingly.

Step 4) After the city is selected, the city-specific FAQs will show on screen.   

Step 5) If a new state is selected, Dropdown #2 (Cities Dropdown) should reset to a default 'Select an Option...', and the FAQ questions should be hidden.

Step 6) Only after selecting the city are the new, city-specific FAQs shown  


##Features to implement in the following order of priority:
Note for dropdowns: Please build the dropdown yourself (no packages, plugins, etc)
1) State Dropdown
2) Cities Dropdown that updates accordingly when State dropdown is changed
3) FAQ Sections that only show when a State and City are both selected
4) Testing
5) CSS - add styling at your leisure

#####Items to be sure to include:
- An `onChange` callback in the dropdowns

#####Items to include if you have time:
- Have a default text & value to start
- Try to be DRY when displaying information
- Ability to use ref to fetch values
- Close dropdown when a user clicks outside of dropdown area
- Checkmark icon only next to active selection
- Multiselect
- Themes
- Animation

If you already know how, or feel like challenging yourself further, please use CSS in JS with[styled-components](https://www.styled-components.com/docs/basics).
