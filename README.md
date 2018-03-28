# Project02-Instanews
![](https://i.imgur.com/GLyP9mB.png)
<h3>The function of the Instanews webpage:</h3>
<p>Based on user selection, quickly fetch and filter recent news stories from the "New York Times" Top Stories API, populating them as ages with short abstracts in the webpage.</p>
<p>Link each news image to the news URL on the New York Times website.</p>
<p>Resize Instanews header and footer so that it transitions from occupying the entire screen on page load to a better view with news populated.</p>

<h3>Sample screenshots:</h3> 
Initial screen:

Mobile, max 599px
![](https://i.imgur.com/GLyP9mB.png)

Tablet, 600 to 999px

![](https://i.imgur.com/5rbAONd.png)

Desktop, min 1000px
![](https://i.imgur.com/LTQ7saE.png)

<p>News populated:</p>
<p>Mobile, max 599px</p> ![](https://i.imgur.com/1zTbuyc.png)
<p>Tablet, 600 to 999px</p> ![](https://i.imgur.com/28O1Gfr.jpg)
<p>Desktop, min 1000px</p> ![](https://i.imgur.com/jUPdjBe.jpg)

<h3>Technologies used and personal learnings:</h3>
<p>HTML: For this project, HTML was rather minimal as most of what's eventually populating the page was written in Javascript</p>
<p>SCSS: I found that SASS is much quicker and simpler, both writing and reviewing, than plain CSS. The biggest advantage I found and used is SASS nesting and media queries.</p>
<p>Javascript: document ready function, declaring variables, concatenating, adding and styling divs, if function, appending, console logging</p>
<p>JQuery: transversing DOM, toggle visibility hide and show, form select, form event, val method, each function</p>
<p>AJAX: .ajax, .done, .fail, accessing the New York Times API</p>
<p>The most difficult part of this project was the Javascript. First deciphering the API arrays and objects, and figuring out how to target/return the values. Then muh needed help was required incorporating a filter and loop function to display the right amount of news. Keeping track of nesting, brackets, and apostrophes to not break the code is more difficult than in HTML and CSS due to the sheer amount of brackets necessary.</p>
<p>Font Faces: The webpage uses Open Sans Light font, with its different font file formats downloaded from transfonter.org. I got more practice in organizing my project folder for linking local files in stylesheets.</p>
<p>Node.js and GULP (uglify, rename, auto-prefixer, sass, eslint, watchdog, browser-sync, css-nano, pretty-error):</p>
<p>Even though written step-by-step with an instructor, gulpfile.js file was difficult to understand, write, and debug. But of course it's uses became well worth the trouble. A class exercise discussing with peers about the flow of the gulpfile clarified its steps and functions.</p>


