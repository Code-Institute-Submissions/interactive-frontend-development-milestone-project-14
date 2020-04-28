# CDT

This project is the implementation of the Clock Drawing Test.
Clock Drawing Test is a fast and easy way to screen for dementia.
With this project, user can perform a demetia screen for their elder, and get auto generated advise after screening

## UX

This project consist 2 user: The screener and the screenee

1. Screener key in the basic of the screenee
2. Screener pass the device to the screenee
3. Screenee draw on the device to complete the test
4. Screener perform assessment on the test result
5. Application will display desire result

## Features

The basic info and the test result will generate an email to our care center and the user using emailjs

### Existing Features

- Feature 1 - User able to fill in the basic info through a form with validation
- Feature 2 - User able to navigate the test through button
- Feature 3 - User able to perform the drawing on the test page, by providing an artboart
- Feature 4 - User able to perform assessment, by completing a checklist
- Feature 5 - User able to see the test result and receive an email of copy

### Features Left to Implement

- On result page, user able to view a list of care center query from API

## Technologies Used

This project applied the below as the languages and tools in the web development.

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
  is HyperText Markup Language.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  is Cascading Style Sheets.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  is a high-level, interpreted programming language.
- [GitHub](https://github.com/)
  1. as a remote backup of code used in the project.
  2. as a remote server for another user to see the code used in the project.
  3. for users to view the deployed version of the website.
- [Bootstrap](https://www.bootstrapcdn.com/)
  is used to create easier & cleaner responsiveness in addition with helping maintain padding and margins.
  It's also used to include modal features to the website to give it a professional look.
- [JQuery](https://jquery.com)
  is used to simplify DOM manipulation.
- [canvas-free-draw](https://github.com/federico-moretti/canvas-free-drawing)
  is used to create the artboard

## Testing

The test is perform manually from a group of people from my friend and family.
They are requested to perform the follow action to validate:

1. info page
   - fill in age = -1, should display error
   - fill in age < 55, should display error
   - try to leave the name/email field empty, should display error
2. art board
   - use mouse/touch(on touch device) click on artboard, should able to draw something
   - use touch on touch device, should able to draw something
   - draw something and click the undo button, should able to undo last action
   - keep clicking the undo button, should turn into white space
   - draw something and click the reset button, should turn into white space
3. assessment
   - clicking the yes/no button should lead to next question
   - on last question, should display the result

## Deployment

The deployment is on master branch
Other development is perform on dev branch

## Credits

- The text on front page is taken from [WHO](https://www.who.int/features/factfiles/dementia/en/) and [wellhealth](https://www.verywellhealth.com/the-clock-drawing-test-98619)
- The checklist is take from [Yi-Luen](https://newatlas.com/clock-drawing-test-alzheimers/24442/) with some modification

### Content

### Media

### Acknowledgements
