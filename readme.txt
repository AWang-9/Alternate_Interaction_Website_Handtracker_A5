--Readme document for Alexa Wang, alexaw9@uci.edu, 24705977--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?
20/20

7/7 A functional web app
5/5 The ability to control the web app with basic gestures (5 points, 1 per gesture)
2/2 The ability to control the web app with custom gestures (2 points)
2/2 Following good principles of UI design (2 points)
2/2 Creating a compelling app (2 points)
2/2 A readme and demo video which explains how these features were implemented and their design rationale (2 point)

2. How long, in hours, did it take you to complete this assignment?
Between 25 and 30 hours.


3. What online resources did you consult when completing this assignment? (list specific URLs)

Brownie recipe used: 
https://www.loveandlemons.com/brownies-recipe/

Layout Inspiration:
https://www.healthline.com/ 
https://chloeting.com/recipes/
https://www.loveandlemons.com/brownies-recipe/ 

Banners:
https://www.w3schools.com/howto/howto_css_hero_image.asp

Navbar: 
https://www.c-sharpcorner.com/article/lets-develop-an-angular-application-5-create-navigation-bar-component-for/ 
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
https://www.geeksforgeeks.org/how-to-place-content-under-fixed-flexbox-navigation-bar/
https://stackoverflow.com/questions/40346890/how-to-i-align-vertical-buttons-next-to-image


Ingredient card components:
https://material.angular.io/components/categories
https://getbootstrap.com/docs/5.0/components/card/

Modal Code: 
https://jasonwatmore.com/post/2020/09/24/angular-10-custom-modal-window-dialog-box (ALL CREDIT TO THIS SAINT SINCE I COULDN'T FIGURE IT OUT ON MY OWN)
https://stackoverflow.com/questions/39627549/how-to-center-modal-to-the-center-of-screen/39636961


Gestures:
https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal

Scrolling:
https://stackoverflow.com/questions/5007530/how-do-i-scroll-to-an-element-using-javascript

Focus input:
https://stackoverflow.com/questions/50006888/set-focus-on-input-element?answertab=active#tab-top

Cards:
https://getbootstrap.com/docs/4.0/components/card/
https://getbootstrap.com/docs/5.0/layout/gutters/
https://stackoverflow.com/questions/7245018/how-to-evenly-distribute-elements-in-a-div-next-to-each-other/7247189
https://getbootstrap.com/docs/5.0/helpers/stretched-link/


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
No one else.

5. Is there anything special we need to know in order to run your code?
Closed hand, Open Hand and Pointing take a bit of time before they do any action.
This is because it was too easy to accidentally make one of the three gestures when trying to do
"Two Closed Hands," "Two Open Hands," or "Two Hands Pointing." 
These three gestures need to be seen for around a second (or 3 cycles of 250 milliseconds) before the program will allow
the associated action.
Stay still and make sure Handtrack.js picks up on the appropriate gesture if the gesture doesn't seem to work.


6. Thoughts and Rationale for Gestures
I wanted to do a recipe website with gesture controls for the scenario when someone is cooking/baking with an online recipe,
has to scroll but their hands are covered in flour. 

I really wanted to go further and implement a left/right swipe mechanic which controlls the website similar to how screen readers control apps,
but I ran out of time. 

Common Gestures Implemented: 
* Two open hands = ingredient popup if applicable
* Two closed hands = forward
* open hand = search bar focus, if applicable
* one closed hand =  close modal, back
* 2 point = quick jump instructions if applicable
* 1 point =  quick jump top

Custom Gestures Implemented:  
* 1 point one open = scroll up
* 1 point one closed = scroll down


Anything that says "if applicable" won't do anything if not on the appropriate page.
I wanted a closed hand to indicate back/cancel, since that seemed natural. That lead to
two closed hands to be "forward" to associate page movement with a fist.

I wanted the "point" to indicate an upward direction (since that was how I pointed) 
which lead to the quick jump features and scroll up feature.

I used the open hand for the search bar focus + ingredient popup because pinch was to difficult to catch.