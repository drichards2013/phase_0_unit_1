#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    :The elements tab allows us to do this. On the left is HTML; on the right is CSS.
  * Javascript Debugging
    :This can be done in the console. Since I'm coming from a Ruby background, it seems most like IRB.
  * Performance Optimization 
    :The PageSpeed tab (the one we downloaded from the Google Extension Store) can do this.
    *The network also allows us to do this. It shows us the different things being loaded on the page, when they are loaded, and how long they took.
    *Our timeline tab enables us to see how many frames per second we're achieving.
    *The CPU profiler allows us to see which JavaScripts are slowing down our page.
    *The Timeline tab allows us to see how much memory our website is taking up at any given time. Using this, we can identify memory leaks.


* What's the quick key for your OS to spawn the Dev Tools inspector? Command + option + i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) - #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain. - We can't tweak it because it's a background image.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? - The largest image is "lg-share-en.gif"
  * Explain how you would find out this information, and list the URL of offending image here and how big it is. - I found this by opening up the Developer Tools and going to the network tab. I hit record, refreshed the page, and sorted by size. Found the largest image. It's 1.6 KB. Here's the link : http://s7.addthis.com/static/btn/v2/lg-share-en.gif

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated? - The lowest hanging fruit to optimize the website is the CSS. 