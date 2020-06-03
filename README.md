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

[link to wireframe](https://whimsical.com/Tw4xpwhN6GWxym6zAAX4Ts)

## Features
### Exsiting Features
* Home button - Allows user to navigate to home page.
* Instructions button - When clicked, modal pops up with instructions on how to play.
* Username input - Allows user to store their desired username to use on the leaderboard.
* Dropdown lists - Allows user to tailor the quiz to their specifactions.
* Restart button - Allows user to restart the quiz.
* Mute button - Allows user to mute button the quiz music.
* Timer - Gives the user a slight challenge.
* Scoreboard - Encourages the user to keep playing to try and beat their score.
* Question carousel - Makes the questions easy to read and user friendly. 
* Sounds for leaderboard - Gives user a sence of accomplishment for getting on the leaderboard.

### Features left to implement
* An online quiz leaderboard that would allow user to compare scores with people on different devices.
* A more extensive scoring system that rewards players for finishing the quiz quicker by adding the time remaining to their score.
* A feature that would let players know the correct answer if they got the answer incorrect.

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

## Testing
1. Loading form:
    (i) Form allows users to select different options and pulls the options into the api url.
    (ii) Start button remains disabled until all options are selected.

2. Leaderboard:
    (i) Stores top 5 scores and usernames.
    (ii) Arranges score in order from highest to lowest.
    (iii) Displays scores in a table in correct order.

3. Instructions modal:
    (i) Modal pops up when button is clicked.
    (ii) Displays instructions to user so they know how to play.

4. Msg Modal:
    (i) If user tries to go to next question without answering current question modal pops instructing user to select an answer.

5. End modal:
    (i) If quiz ends before user is finished a modal pops up telling the user they have ran out of time.

6. Quiz timer:
    (i) Timer shows correct time depending on the amount of questions choosen.
    (ii) Counts down in one second intervals.
    (iii) When timer ends takes user to home page.

7. Restart button:
    (i) Resets timer when clicked.
    (ii) Displays new questions with the same api parameters.

8. Home button:
    (i) Takes user to home page.

9. Question carousel:
    (i) Displays answers to corresponding question.
    (ii) Recognizes correct and incorrect answers.
    (iii) Increments score if correct answer is choosing.
    
In addition to the tests mentioned above I have tested it on google chrome, Microsoft edge and firefox. All works and looks as expected apart from the quiz sounds on firefox. This is due to the default browser setting. 
This can be fixed by going to your browser settings, privacy and secruity, permissions, autoplay setting and selecting "allow audio and video" option. I also tested on the all the different device sizes in google developer 
tools and all elements adjust nicely to the different sizes. After conducting the tests mentioned I came accross a few bugs which have since been fixed. They include:
* If an option in the drop down lists were not selected it caused the XMLhttpRequest to return the response code 2, which means the api parameters were invalid. To solve this I disabled the start button until all options were selected.
* If the user did not complete quiz before time ran out the users score was incorrect, the score was taken from previous time played. To fix this I simply saved the score to session storage after answering each question.
* In order for the quiz to work correctly the questions had to be answered in order. To solve this problem I disabled the carousel controls and if clicked on a modal pops up instucting the user to select an answer.

## Deployment
I deployed the website on github pages. I did this by going to setting in the github repository, went to the github pages section and set sources to master branch. To run this code locally, simply clone the repository and open in any IDE.

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
* The footer for this project was inspired by the ucd resume mini project I completed with the code institute.
* I Aslo got help from [w3schools.com](https://www.w3schools.com/) and [developer.mozilla.org](https://developer.mozilla.org/en-US/)
