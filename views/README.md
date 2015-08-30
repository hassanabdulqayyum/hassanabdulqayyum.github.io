##Who doesn't like delicious pizza?

Some performance indicators might not work properly if ran locally on your computer thus it is recommended to host it publicly.

To run this website publicly on github, changed to views directory in terminal. Then enter these commands:
  git add *
  git commit -m "initial commit"
  git push -u origin master
when done go to, http://[your username].github.io

Optimizations made to get under 60 FPS:

-Resized Pizzeria image to load quickly.

-Reduced number of pizzas generated at page load from 200 to 25.

-Changed changePizzaSizes() function so that dx and newwidth are calculated before the for loop runs.

-Changed updatePositions() function by calculating '(document.body.scrollTop / 1250)' before the for loop.
