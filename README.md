# Quiz Time
Quiz Time is an online multiple choice quiz. the main function of the website is to give the user an easy to use multiple choice quiz that allows users to tailor the quiz to their specifications, whether it's selecting how many questions
there is or selecting from a variety of about 20 different categories or even selecting the difficultys. Quiz time also encourages a bit of friendly competition with the quiz time leaderboard, that keeps track of the top 5 scores and 
usernames and displays them on a leaderboard so the users can show their scores to other players.

## UX
The majority of users on this website will be people who are looking to kill some time, whether it's sitting in a waiting room or on public transport, that's why Quiz Time is quick to set up and easy to use. Quiz Time can help users 
achieve this due to the large variety of categories and vast amount of questions available in the Open Trivia data base api.

* As a general user, I want a general knowledge quiz that will help improve my general knowledge.
* As a general user, I want a quiz that will allow me to choose from various categories and select different difficulties to tailor the quiz to my needs.
* As a general user, I want a quiz game that will keep record of my score so I can compare it with my friends.
* As a general user, I want a quiz game that is easy to use so young and old can play along.
* As a general user, I want a quiz game that is quick and easy to set up so i can pass time while travelling.

[link to whimsical wireframe](https://whimsical.com/Tw4xpwhN6GWxym6zAAX4Ts)

## Features
### Exsiting Features
* Home button - Allows user to navigate to home page.
* Instructions button - When clicked, modal pops up with instructions on how to play.
* Username input - Allows user to store their desired username to use on the leaderboard.
* Dropdown lists - Allows user to tailor the quiz to their specifactions.
* Restart button - Allows user to restart the quiz with different questions but the same api parameters.
* Mute button - Allows user to mute button the quiz music.
* Timer - Gives the user a slight challenge.
* Scoreboard - Encourages the user to keep playing to try and beat their score.
* Question carousel - Makes the questions easy to read and user friendly. 
* Sounds for leaderboard - Gives user a sence of accomplishment for getting on the leaderboard.

### Features left to implement
* An online quiz leaderboard that would allow user to compare scores with people on different devices.
* A more extensive scoring system that rewards players for finishing the quiz quicker by adding the time remaining to their score.
* A feature that would let players know the correct answer if they selected the incorrect answer.

## Technologies used
- [HTML5](https://www.html5tutorial.info/)
    - Used to write the code of the website.
- [CSS3](http://www.css3.info/)
    - Used to style the website.
- [Bootstrap](https://getbootstrap.com/)
    - Used the grid system for the layout of the website.
- [Jquery](https://jquery.com/)
    - Used for DOM traversing.
- [Googlefonts](https://fonts.google.com/)
    - Used for additional fonts.
- [Fontawesome](https://fontawesome.com/)
    - Used to add icons to the website.
- [Javascript](https://www.javascript.com/)
    - Used for the functionality of the website.
- [whimsical](https://whimsical.com/)
    - Used for wireframe.
- [jshint.com](https://jshint.com/)
    - Used to validate javascript.
- [validator.w3.org](https://validator.w3.org/)
    - Used to validate html and css3
- [AWS cloud9](https://aws.amazon.com/cloud9/)
    - Used to Write all code.

## Testing
1. Loading form:
    * Form allows users to select different options and pulls the options into the api url.
    * Start button remains disabled until all options are selected.

2. Leaderboard:
    * Stores top 5 scores and usernames.
    * Arranges score in order from highest to lowest.
    * Displays scores in a table in correct order.

3. Instructions modal:
    * Modal pops up when button is clicked.
    * Displays instructions to user so they know how to play.

4. Msg Modal:
    * If user tries to go to next question without answering current question modal pops instructing user to select an answer.

5. End modal:
    * If quiz ends before user is finished a modal pops up telling the user they have ran out of time.

6. Quiz timer:
    * Timer shows correct time depending on the amount of questions choosen.
    * Counts down in one second intervals.
    * When timer ends takes user to home page.

7. Restart button:
    * Resets timer when clicked.
    * Displays new questions with the same api parameters.

8. Home button:
    * Takes user to home page.

9. Question carousel:
    * Displays answers to corresponding question.
    * Recognizes correct and incorrect answers.
    * Increments score if correct answer is choosing.

### Bugs
After performing the above tests I found a number of bugs, that have since been resolved. They include:

#### Loading form:
* If an option in the drop down lists were not selected it caused the XMLhttpRequest to return the response code 2, which means the api parameters were invalid. To solve this I disabled the start button until all options were selected.
    
#### Leaderboard:
* If the quiz timer ran out the leaderboard would add the previous score to the most recent score so sometimes the user would score over a 100%. To fix this I simpley cleared session storage after the saveScore function was complete.
* If the user did not complete quiz before time ran out the users score was incorrect, the score was taken from previous time played. To fix this I simply saved the score to session storage after answering each question.

#### Modal Timer:
* Sometimes the modal timer would not countdown in one second intervals. This was due to the fact that I used an event listener for the load.html page. To fix this I removed the event listener and added an onclick event to the start button
set to the Timer() function.
      
#### Question carousel:
* In order for the quiz to work correctly the questions had to be answered in order. To solve this problem I disabled the carousel controls and if clicked on a modal pops up instucting the user to select an answer.
* After the user answered the question the user was free to change their answer until they got the correct one. To fix this I disabled the unchecked radio buttons.

### Browser tests
I tested the website on three different browsers:
    
|Browser test  |Load.html|index.html|quiz.html|leaderboard.html|
|--------------|---------|----------|---------|----------------|
|Microsoft Edge|pass     |pass      |pass     |pass            |
|Google Chrome |pass     |pass      |pass     |pass            |          
|Firefox       |pass     |pass      |fail     |fail            |
    
* The sound on Firefox did not work. This is due to the default browser setting. This can be fixed by going to your browser settings, privacy and secruity, permissions, autoplay setting and selecting "allow audio and video" option.

### Device sizes
To test the site on different devices I used all the sizes on google developer tools.
    
|Device size      |Load.html|index.html|quiz.html|leaderboard.html|
|-----------------|---------|----------|---------|----------------|
|Moto G4          |pass     |pass      |pass     |pass            |
|Galaxy S5        |pass     |pass      |pass     |pass            |          
|Pixel 2          |pass     |pass      |pass     |pass            |
|Pixel 2 XL       |pass     |pass      |pass     |pass            |
|Iphone 5/SE      |pass     |pass      |pass     |pass            |
|Iphone 6/7/8     |pass     |pass      |pass     |pass            |
|Iphone 6/7/8 Plus|pass     |pass      |pass     |pass            |
|Iphone X         |pass     |pass      |pass     |pass            |
|Ipad             |pass     |pass      |pass     |pass            |
|Ipad pro         |pass     |pass      |pass     |pass            |
    
### Online Validation
#### CSS3
    
|File     |Valid     |
|---------|----------|
|Style.css|pass      |

#### HTML5

|File            |Valid|
|----------------|-----|
|index.html      |pass |
|load.html       |pass |
|quiz.html       |pass |
|leaderboard.html|pass |
    
#### javascript

|File                   |Valid|
|-----------------------|-----|
|api-value.js           |pass |
|buttons.js             |pass |
|carousel-control.js    |pass |
|correct-or-incorrect.js|pass |
|hide-slides.js         |pass |
|leaderboard.js         |pass |
|load.js                |pass |
|modal-timer.js         |pass |
|quiz-timer.js          |pass |
|quiz.js                |pass |
|scoreCalculator.js     |pass |

### Refactoring 
After completing the code for my project I realized that I have a lot of repeatition in my project code. I realize now that this is not good practise as a lot of it could have been refactored, but unfortunately due to time constraints I was unable to this, for my next project I will keep refactoring in mind. 

## Deployment
### Deploying to github pages
I deployed the website on github pages. to do this:
* Sign in to github
* Go to your repository.
* Go to settings for that repository.
* While in settings go to github pages section.
* Set sources to master branch.

### Deploying locally
* Sign in to github.
* Go to [quiz](https://github.com/joe6894/quiz) repository 
* Clone the repository
* And add prject folder to any IDE. 


## Credits
### Contents
* The carousel was taken from [bootstrap](https://getbootstrap.com/docs/4.4/examples/carousel/)
* The modals were taken from [bootstrap](https://getbootstrap.com/docs/4.0/components/modal/)
* The questions were taken from [Open Trivia Data Base](https://opentdb.com/api_config.php)
* The timer was taken from [code-boxx.com](https://code-boxx.com/simple-javascript-countdown-timer/)

### Media
* The correct and incorrect images were taken from [pixabay](https://pixabay.com/)
* The quiz music was taken [bensound.com](bensound.com)
* The tada and sadtrombone sound was taken from [freesound.org](https://freesound.org/)
* The home page animation was taken from []()

### Achknowledgements
* The footer for this project was inspired by the ucd resume mini project I completed with the [code institute](https://codeinstitute.net/5-day-coding-challenge/?utm_term=code%20institute&utm_campaign=a%26c_BR_IRL_Code_Institute&utm_source=adwords&utm_medium=ppc&hsa_net=adwords&hsa_tgt=kwd-319867646331&hsa_ad=417883007025&hsa_acc=8983321581&hsa_grp=56427889338&hsa_mt=e&hsa_cam=1378516521&hsa_kw=code%20institute&hsa_ver=3&hsa_src=g&gclid=CjwKCAjwt-L2BRA_EiwAacX32TsgmyfPeERo7nG068BhEWbJ9pP5w_H-wVtl5yWFdPSL6C5XUF1tyxoCyMQQAvD_BwE&gclsrc=aw.ds).
* I Aslo got help from [w3schools.com](https://www.w3schools.com/) and [developer.mozilla.org](https://developer.mozilla.org/en-US/)
