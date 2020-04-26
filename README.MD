# CDT

This project is the implementation of the Clock Drawing Test.
Clock Drawing Test is a fast and easy way to screen for dementia. 
With this project, user can perform a demetia screen for their elder, and get auto generated advise after screening 
 
## UX

This project consist 2 user: The screener and the screenee

1. Screener key in the basic of the screenee
2. Screener will draw on the device, act as control of the test
3. Screener pass the device to the screenee
4. Screenee draw on the device to complete the test
5. Screener perform assessment on the test result
6. Application will display desire result

## Features

The basic info and the test result will generate an email to our care center using emailjs

The drawing panel is created using html5-canvas
 
### Existing Features

- Feature 1 - User able to fill in the basic info through a form
- Feature 2 - User able to enter the test page, by clicking a button
- Feature 3 - User able to perform the drawing on the test page, by providing an artboart
- Feature 4 - User able to perform assessment, by answer list of true false
- Feature 5 - User able to see the test result

### Features Left to Implement
- User able to view a list of care center query from API

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

## Testing

The test is perform manually from a group of people from my friend and family.
They are requested to perform the follow action to validate:

1. info page
    - fill in age = -1, should display error
    - fill in age < 55, should display error
    - try to leave the name empty, should display error 
2. art board
    - use mouse/touch(on touch device) click on artboard, should able to draw something
    - use touch on touch device, should able to draw something
    - draw something and click the undo button, should able to undo last action
    - keep clicking the undo button, should turn into white space
    - draw something and click the reset button, should turn into white space
3. assessment
    - click back button, should able get back to previous question
    - click back button at first question, should perform nothing
    - click next button before answer, should display error
    - on last question, should display finish instead of bac

## Deployment

The deployment is on master branch
Other development is perform on dev branch

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements
- I received inspiration for this project from X