# My-journey-web-developer

### This repository documents my journey to becoming a web developer, from beginner to professional. 

### It contains the following main topics:
* HTML: The basics of web markup
* CSS: The basics of web styling
* JavaScript: The basics of web interactivity
<hr /> 

### Day 1: Basic HTML elements
#### I began my journey into web development by learning about the basic elements of HTML. These elements are used to structure and format the content of a web page.
#### I learned about the following elements:
* Heading elements (e.g., `<h1>`, `<h2>`, `<h3>`, etc.) are used to define the headings of a web page.
* Paragraph elements (e.g., `<p>`) are used to define blocks of text.
* Void elements (e.g., `<hr />`, `<br />`) do not have a closing tag. They are used to separate sections of a web page or to break lines of text.

**To reinforce my understanding of these elements, I completed a mini project in which I created a web page to recommend my favorite movies. I used the knowledge I had learned to create a heading for the page, a paragraph to introduce the topic, and a list of my favorite movies.**
<hr />

### Day 2: Intermediate HTML elements
#### On the second day of my web development journey, I learned about the intermediate elements of HTML. These elements are used to add more structure and functionality to web pages.
#### I learned about the following elements:
* Nesting and Indentation elements are used to create lists of information. Unordered lists (e.g., `<ul>` and `<li>`) are used to list items without order, while ordered lists (e.g., `<ol>` and `<li>`) are used to list items in order. Nesting lists within lists can be used to create hierarchical lists.
* Anchor elements (e.g., `<a>` and `<href>` attributes) are used to create hyperlinks. Hyperlinks allow users to click on a word or phrase to navigate to another web page.
* Image elements (e.g., `<img>` and `<src>` attribute) are used to add images to web pages. The src attribute specifies the location of the image file. The `<alt>` attribute provides a description of the image for users who cannot see it.

**To reinforce my understanding of these elements, I completed a mini project in which I created a birthday invitation card. I used the knowledge I had learned to create a heading for the card, a list of the guest's names, and an image of a birthday cake.**
<hr />

### Day 3: Creating Multi-Page Websites
#### On the third day of my web development journey, I learned how to create Multi-Page websites. This involved learning about the following elements:
* File paths are used to specify the location of files. For example, the path `../Folder` refers to a folder that is one level above the current folder. The path `./picture.img` refers to a file that is in the same folder as the current file.
* Webpages are the individual pages that make up a website. Each webpage has its own HTML file.

**To reinforce my understanding of these elements, I completed a mini project in which I created a portfolio. I used the knowledge I had learned to create a heading for the portfolio, a list of my skills, and a link to an about me page.**
<hr />

### Day 4: Basic CSS properties
#### On the fourth day of my web development journey, I learned about the basic properties of CSS. These properties are used to control the appearance of HTML elements.
#### I learned about the following properties:
* Adding properties : 
  * Inline properties are added directly to HTML elements, using the `style` attribute. For example, the following code will set the font size of all `h1` elements to 24 pixels: `<h1 style="font-size: 24px;">This is a heading</h1>`
  * Internal properties are added to the `<style>` tag in an HTML document. For example, the following code will set the font size of all `h1` elements to 24 pixels on the current page: `<style> h1{font-size: 24px;} </style>` 
  * External properties are added to an external stylesheet, which is linked to the HTML document using the `<link>` tag. For example, the following code will set the font size of all `h1` elements to 24 pixels on all pages of the website: `<link rel="stylesheet" href="style.css">`
* Selectors : Selectors are used to select HTML elements to which CSS properties will be applied. There are many different types of selectors, each of which selects a different set of elements.
  * For example, the following selector will select all `h1` elements: `h1{...}`
  * The following selector will select all elements with the class `red`: `.red {...}` 
     The following selector will select the element with the ID `my-id`: `#my-id {...}` 
     
**To reinforce my understanding of these properties, I completed a mini project in which I created a web page about storing Spanish color vocabulary. I used the knowledge I had learned to style the page using CSS properties and selectors.**
<hr />

### Day 5: Additional Basic CSS Properties
#### On the fifth day of my web development journey, I learned about additional basic properties in CSS. These properties are used to control the appearance of HTML elements.
#### I learned about the following properties:
* CSS Colors
  * Global colors can be set using the color property in the <style> tag. For example, the following code will set the default color of all text on the page to red: `<style> color: red; </style>` 
  * **Local colors** can be set using the `color` property on an individual element. For example, the following code will set the color of the `h1` element to blue:`<h1 style="color: blue;"> This is a heading</h1>`
* Font Properties
  * Font size can be set using the font-size property. For example, the following code will set the font size of all text on the page to 24 pixels: `<style> font-size: 24px; </style>` </li>
  * **Font family** can be set using the `font-family` property. For example, the following code will set the font family of all text on the page to Times New Roman: <style> `font-family: Times New Roman </style>`
* CSS Box Model 
  * The box model is a way of describing the layout of an HTML element. The box model consists of four parts: the width, height, border, and padding.
  * The `width` and `height` properties set the size of the element's content area. 
  * The `border` property sets the width and style of the element's border.
  * The `padding` property sets the amount of space between the element's content area and its border. 
  * The `margin` property sets the amount of space between the element and its surrounding elements. 
  * The `<div>` element is a generic container element that can be used to group other elements together.
* Mini project on Beginner additional CSS
  * I used the knowledge I had learned to create a web page to display memes. I used the `<div>` element to group the meme images together, and I used the border property to add a `border` around the images. I also used the `font-size` and `font-family` properties to change the appearance of the text on the page.
<hr />

### Day 6: Intermediate CSS Properties
#### On the sixth day of my web development journey, I learned about intermediate properties in CSS. These properties are used to control the layout of HTML elements.
#### I learned about the following properties:
* Cascade
  * `Padding` can be used to add space inside a text box to prevent the text from being too close to the box. The amount of space added is specified in pixels, ems, or other units. 
  * `Margin` can be used to create a space around the outside of a box. The amount of space added is specified in pixels, ems, or other units. 
* Combining Selectors
  * Combining selectors allows you to select multiple elements or groups of elements with a single selector. For example, the selector `h1, h2` will select all `h1` and `h2` elements.
  * Adjacent selectors are used to select elements that are adjacent to each other. For example, the selector `.box > p` will select all `p` elements that are immediately inside a `.box` element.
  * Child selectors are used to select elements that are children of a particular element. For example, the selector `.box li` will select all `li` elements that are children of a `.box` element.
  * Descendant selectors are used to select elements that are descendants of a particular element. For example, the selector `li.done` will select all `li` elements that have the class `"done"`. 
  * Combining selectors can be used to create complex selectors that select specific groups of elements. 
* Positioning
  * Positioning allows you to control the position of an element on the page. There are four types of positioning:
  * `Static` is the default positioning type. Elements with static positioning are positioned according to the normal flow of the page. 
  * `Relative` positioning allows you to move an element relative to its original position.
  * `Absolute` positioning allows you to move an element to any position on the page. 
  * `Fixed` positioning allows you to move an element to a fixed position on the page, regardless of the scroll position of the page. 
* Mini project on Intermediate CSS
  * I used the knowledge I had learned to create a web page to store national flags. I used the `<div>` element to group the flag images together, and I used the `position` property to position the images. I also used the `padding` and `margin` properties to control the spacing around the images. 
<hr />

### Day 7: Advanced CSS Properties
#### On the seventh day of my web development journey, I learned about advanced properties in CSS. These properties are used to create more complex and sophisticated layouts.
#### I learned about the following properties:
* Display
  * `Inline` and `inline-block` have similar behavior in that they will cause two elements to appear on the same line. `Inline` will display as a single line of text, while `inline-block` will display as a box with its own width and height. 
  * `Block` will display as a box, one per line, in row order. 
  * `None` will disable the display of an element.
* Float
  * `Float-right` will float an element to the right of its containing element. 
  * `Float-left` will float an element to the left of its containing element.. 
  * `'clear: both'` will clear all floats in the containing element. 
* Responsiveness
  * `Responsiveness` is a technique that allows a web page to adapt to different screen sizes and resolutions. 
  * `Media` queries are used to specify how a web page should be displayed at different screen sizes. 
  * `Flexbox` is a layout system that allows elements to be flexibly arranged in a single dimension. 
  * `Grid` is a layout system that allows elements to be flexibly arranged in two dimensions. 
  * `Bootstrap` is a CSS framework that provides a set of pre-defined styles and components that can be used to create responsive web pages. 
* Media Query
  * `@media` is used to call media queries. </li>
  * `min-width` specifies the minimum width of the screen at which the media query should be applied.ill work. 
  * `max-width` specifies the maximum width of the screen at which the media query should be applied. 
  * `Both min-width and max-width` can be used together to specify a range of screen sizes at which the media query should be applied.
* Mini project on Advanced CSS
  * I used the knowledge I had learned to create a blog page with articles that display on both computer and phone screens. 
<hr />

### Day 8: Flexbox in CSS
#### On the eighth day of my web development journey, I learned about flexbox in CSS. Flexbox is a layout system that allows elements to be flexibly arranged in a single dimension. This makes it a powerful tool for creating responsive web pages.
* Displays Flexbox
  * Flexbox is a display mode that can be used to make elements behave like a single, flexible container.
  * To use flexbox, you need to set the `display` property of the container element to `flex` or `inline-flex.`
* Flex Direction
  * The flex direction property specifies the direction in which flex items are laid out. 
  * The default flex direction is `row`, which means that flex items are laid out from left to right. 
  * To lay out flex items vertically, you can set the flex direction to `column`. 
* Mini project on Flexbox
  * I used the knowledge I had learned to create a web page about pricing. 
  *The page uses flexbox to arrange the pricing information in a responsive way. 
<hr />

### Day 9: Grid in CSS
#### On the ninth day of my web development journey, I learned about grid in CSS. Grid is a layout system that allows elements to be flexibly arranged in two dimensions. This makes it a powerful tool for creating complex and sophisticated layouts.
* Display Grid
  * Grid is a display mode that can be used to make elements behave like a single, flexible container.
  * To use grid, you need to set the `display` property of the container element to `grid`.
* Grid Sizing
  * The grid sizing properties specify the size of the grid columns and rows. 
  * The `grid-template-columns` property specifies the width of the grid columns. 
  * The `grid-template-rows` property specifies the height of the grid rows. 
  * You can also use the `grid-column-gap` and `grid-row-gap` properties to specify the gap between columns and rows.
* Grid Placement
  * The grid placement properties specify the position of elements within the grid.
  * The `grid-column` property specifies the column in which an element is placed.
  * The `grid-row` property specifies the row in which an element is placed.
  * You can also use the `grid-area` property to specify the area in which an element is placed.
* Mini project on Grid
  * I used the knowledge I had learned to create a web page about the work of Piet Mondrian.
  * The page uses grid to arrange the paintings in a visually appealing way.
<hr />

### Day 10: Bootstrap in CSS
#### On the tenth day of my web development journey, I learned about Bootstrap in CSS. Bootstrap is a CSS framework that provides a set of pre-defined styles and components that can be used to create responsive web pages.
* Bootstrap Intro
  * Bootstrap is a powerful tool that can help you to create beautiful and responsive web pages quickly and easily.
  * Bootstrap containers are a great way to create a responsive layout. You can use the `container-sm` class to create a container that will display correctly on small screens.
  * Bootstrap can be used with grid and flexbox to create even more complex layouts.
* Bootstrap Components
  * Bootstrap components are a great way to add functionality and style to your web pages.
  * Some of the most common Bootstrap components include nav bars, features, and buttons.
  * Bootstrap provides a variety of templates that you can use to get started with creating a Bootstrap web page.
* Mini project on Bootstrap
  * I used the knowledge I had learned to create a web page to promote the Tin Dog app.
  * The page uses Bootstrap components to create a visually appealing and responsive layout.
<hr />

### Day 11: Basic JavaScript Concepts
#### On the eleventh day of my web development journey, I learned about the basic concepts of JavaScript. JavaScript is a programming language that is used to add interactivity to web pages.
* Variables 
  * Variables are used to store data in JavaScript. 
  * To declare a variable in JavaScript, you use the `var` keyword. 
  * For example, the following code declares two variables, `a` and `b`: `var a = "3";` `var b = "8";`
  * You can assign the value of one variable to another variable using the `=` operator. 
  * For example, the following code assigns the value of `a` to `b`: `var a = "3";` `var b = a;` 
* Strings
  * Strings are used to represent text in JavaScript. 
  * You can create a string by enclosing text in double quotes (`"`). 
  * For example, the following code creates a string called `name`: `var name = "John Doe";` 
  * You can use the .slice() method to extract a substring from a string. 
  * For example, the following code extracts the first three characters from the string name: `var name = "John Doe";` `var firstThreeCharacters = name.slice(0, 3);` 
  * You can use the .length property to get the length of a string. 
  * For example, the following code gets the length of the string name: `var name = "John Doe";` `var lengthOfName = name.length;`
* Basic Arithmetic
  * You can use mathematical operators to perform arithmetic operations in JavaScript. 
  * For example, the following code adds two numbers together: `var a = 1;` `var b = 2;` `var sum = a + b;` 
  * You can also use mathematical operators to perform subtraction, multiplication, and division. 
* Functions
  * Functions are a way to group code together so that it can be reused. 
  * To create a function in JavaScript, you use the `function` keyword.
  * For example, the following code creates a function called `myFunction()`: `function myFunction() { // Code goes here }` 
  * You can call a function by using its name. 
  * For example, the following code calls the function `myFunction()`: `myFunction();` 
* Challenges: The following challenges were completed to practice the concepts learned:
  * Challenge 1: Write a function that calculates the number of days a person will live based on the average human lifespan of 90 years.
  * Challenge 2: Write a function that calculates the body mass index (BMI) of a person. 
<hr />

### Day 12: Intermediate JavaScript Concepts
#### On the twelfth day of my web development journey, I learned about the intermediate concepts of JavaScript. JavaScript is a programming language that is used to add interactivity to web pages.
* Random
  * Random is a function that can be used to generate a random number. 
  * The `Math.random()` function returns a number between 0 and 1. [Image of The `Math.random()` function] 
  * You can use the `Math.random()` function to generate random numbers for a variety of purposes, such as generating a random number for a game or creating a random password.
* If-Else
  * If-else statements are used to execute code based on a condition. 
  * The syntax for an if-else statement is as follows: `if (condition) { // Code to be executed if the condition is true}  else { // Code to be executed if the condition is false}` 
* Arrays
  * Arrays are used to store a collection of data. 
  * The syntax for creating an array is as follows: `var array = [1, 2, 3, 4, 5];` 
  * You can access the elements of an array by using their index. The index starts at 0. 
* While Loop
  * While loops are used to execute code repeatedly until a condition is met. 
  * The syntax for a while loop is as follows: `while (condition) { // Code to be executed repeatedly}` 
* For Loop
  * For loops are used to execute code repeatedly for a specific number of times. 
  * The syntax for a for loop is as follows: `for (var i = 0; i < 10; i++) {// Code to be executed repeatedly}` 
* Challenges : The following challenges were completed to practice the concepts learned:
  * Challenge 1: Write a program that uses the `Math.random()` function to generate a random number between 1 and 100.
  * Challenge 2: Write a program that uses an if-else statement to determine if a number is even or odd.
  * Challenge 3: Write a program that uses an array to store the names of your friends. Then, use a while loop to print the names of your friends one at a time. 
  * Challenge 4: Write a program that uses a while loop to print the numbers from 1 to 100. 
  * Challenge 5: Write a program that uses a for loop to calculate the Fibonacci sequence. 
<hr />

### Day 13: Document Object Model (DOM) in JavaScript
#### On the thirteenth day of my web development journey, I learned about the Document Object Model (DOM) in JavaScript. The DOM is a programming interface that allows JavaScript to interact with HTML and CSS elements.
* Adding JavaScript
  * JavaScript can be added to HTML using the `<script>` tag. The `<script>` tag should be placed at the bottom of the `<body>` tag.
  * JavaScript code is executed in a hierarchical order. If the order of execution is incorrect, errors may occur. 
* Document Object Model (DOM)
  * The DOM can be used to access and manipulate HTML and CSS elements. 
  * To access an HTML element, you can use the `document.querySelector()` method.
  * To change the content of an HTML element, you can use the `.innerHTML` property.
* Selecting HTML elements
  * To select all HTML elements with a particular class or ID, you can use the `document.querySelectorAll()` method.
  * To select a single HTML element, you can use the `document.querySelector()` method. 
* Manipulating and changing styles
  * change the style of an HTML element without changing the CSS, you can use the `.style` property. 
  * For example, to change the font size of an element, you would use the following code: `document.querySelector("element").style.fontSize = "16px";` 
* The Separation of Concerns
  * To avoid having to modify HTML code to add or remove CSS classes, you can use the `.classList` property.
  * For example, to add a CSS class to an element, you would use the following code: `document.querySelector("element").classList.add("my-class");`
* Text manipulating and text content property
  * To make text in HTML italic, you can use the `<em>` tag.
  * For example, to make the text "This is italic" italic, you would use the following code: `<p>This is italic <em>This is italic</em></p>`
* Manipulating HTML element attributes
  * To change the href attribute of an HTML anchor element, you can use the `.setAttribute()` method.
  * For example, to change the href attribute of an element with the ID "my-link" to "https://www.example.com", you would use the following code: `document.querySelector("#my-link").setAttribute("href", "https://www.example.com");` 
<hr />

### Day 14: Dice Game Project
#### On the fourteenth day of my web development journey, I used the knowledge I had learned from the basic, intermediate, and DOM JavaScript topics to create a dice game project.
* The game is a simple dice game that uses the `Math.random()` function to generate random numbers for the dice rolls. The player rolls the dice by refreshing the HTML file. The player with the higher number wins the round. If the dice rolls are tied, the game is a draw.
* The project uses the following JavaScript concepts: 
  * Basic JavaScript concepts: variables, strings, arithmetic operators, functions, and if-else statements. 
  * Intermediate JavaScript concepts: arrays and loops. 
  * DOM concepts: accessing HTML elements, manipulating HTML elements, and changing HTML element styles. 
<hr />

### Day 15: Advanced Document Object Model (DOM) in JavaScript
#### On the fifteenth day of my web development journey, I learned about the advanced Document Object Model (DOM) in JavaScript.
* Passing Functions
  * Functions can be passed as arguments to other functions.
  * For example, the following code defines two functions, `add()` and `subtract()`, and a third function, `calculator()`, that uses `add()` and `subtract()`. 
* Objects in JavaScript
  * Objects can be used to store data in a single variable.
  * For example, the following code defines an object called `houseKeeper1` that stores three properties: `yearsOfExperience`, `name`, and `cleaningRepertoire`. 
  * Objects can also be created using functions. 
  * Objects can be cleared using the .clear() method. 
* Mini Project on Advanced DOM
  * I used the knowledge I had learned about advanced DOM to create a web page that plays drum sounds when a key is pressed on the keyboard. 
<hr />

### Day 16: Capstone Portfolio Project
#### On the sixteenth day of my web development journey, I completed the Capstone Portfolio Project.
* The project required me to use all of the knowledge I had learned about HTML and CSS to create a portfolio website for myself.
<hr />

### Day 17: Introduction to jQuery
#### On the seventeenth day of my web development journey, I learned about jQuery, a JavaScript library that makes it easier to interact with HTML elements.
* Introduction to jQuery
  * jQuery uses the `<span class="math-inline">\` symbol to select HTML elements. (This is a more concise and efficient way to select elements than using the `document` object. **Selecting Elements** ) The `()` function is used to select elements by their selector.* 
  * Once an element has been selected, it can be manipulated using jQuery methods.
* Manipulating Styles
  * jQuery provides a number of methods for manipulating the styles of HTML elements.
  * For example, the following code adds the `red` class to the element with the id of my-element: `$("my-element").addClass("red");`
* Manipulating Text
  * jQuery provides a number of methods for manipulating the text of HTML elements.
  * For example, the following code changes the font size of the element with the `id` of `my-element` to 16px: `$("my-element").css("font-size", "16px");`
<hr />

### Day 18: Additional jQuery Concepts
#### On the eighteenth day of my web development journey, I learned about additional jQuery concepts.
* Manipulating Attributes
  * jQuery provides methods for manipulating the attributes of HTML elements.
  * For example, the following code changes the href attribute of the element with the id of `my-element` to `https://www.example.com`: `$("my-element").attr("href", "https://www.example.com");`
* Adding Event Listeners
  * jQuery provides methods for adding event listeners to HTML elements.
  * An event listener is a function that is called when a particular event occurs.
  * For example, the following code adds a click event listener to the element with the id of `my-element`: `$("my-element").on("click", function() { // Do something when the element is clicked. });`
* Adding and Removing Elements
  * jQuery provides methods for adding and removing HTML elements.
  * For example, the following code adds an element with the text "New element" before the element with the id of `my-element`: `$("my-element").before("<p>New element</p>");`
  * The following code removes the element with the id of `my-element`: `$("my-element").remove();`
* Animation
  * jQuery provides methods for animating HTML elements.
  * For example, the following code animates the element with the id of my-element to slide down: `$("my-element").slideDown();`
<hr />

### Day 19: Simon Games Project
#### On the nineteenth day of my web development journey, I completed the Simon Games project.
The project required me to use all of the knowledge I had learned about jQuery to create a Simon game.
The game works as follows:
1. The game starts by playing a sequence of colors.
2. The player must then repeat the sequence by clicking on the corresponding buttons.
3. If the player clicks on the correct buttons, the game continues to the next sequence.
4. If the player clicks on the wrong buttons, the game ends.
The game is played on a grid of four buttons, each with a different color. The colors are red, green, blue, and yellow.
The game code uses the following jQuery concepts:
 * Selecting elements: The `$(selector)` function is used to select elements by their selector.
 * Adding event listeners: The `on()` method is used to add event listeners to elements.
 * Manipulating styles: The `css()` method is used to manipulate the styles of elements.
I am pleased with the results of the project. I was able to create a functional and engaging game using the knowledge I had learned. I am looking forward to continuing to use my web development skills to create more projects in the future.
<hr />

### Day 20: Additional Node.js Concepts
#### On the twentieth day of my web development journey, I learned about additional Node.js concepts.
* Using Node
   * Node.js is a runtime environment that allows JavaScript to be executed outside of a web browser.
* Native Modules
   * Node.js provides native modules that allow JavaScript to interact with the operating system.
   * The `fs` module allows JavaScript to read and write files.
   * The `writeFile()` method is used to write a file.
   * The `readFile()` method is used to read a file.
* NPM
   * Node Package Manager (npm) is a package manager that allows JavaScript developers to install and manage third-party modules.
   * The npm i (package) command is used to install a module.
* QR Code Project
   * I used the knowledge I learned about Node.js to create a QR code generator program.
   * The program generates a QR code with the specified text.
   * The program uses the fs module to write the QR code to a file.
   * The program uses the qrcode module to generate the QR code.
I learned a lot about Node.js in this lesson. I learned how to use Node.js to read and write files, install modules, and generate QR codes. I am excited to use these new skills in my future web development projects.
<hr />

### Day 21: Additional Express.js Concepts
#### On the twenty-first day of my web development journey, I learned about additional Express.js concepts.
* Express Server
    * Express is a web application framework for Node.js.
    * It provides a number of features that make it easy to create web applications, including routing, middleware, and template engines.
    * To create an Express server, you must first require the Express module. `const express = require("express");`
    * Next, you must create a new Express application. `const app = express();`
    * Finally, you must listen for HTTP requests on a specified port. `app.listen(3000);`
* HTTP Requests
    * HTTP requests are the way that data is sent between web browsers and web servers.
    * There are five types of HTTP requests:
       * `GET`: Used to retrieve data from a server.
       * `POST`: Used to send data to a server.
       * `PUT`: Used to update data on a server.
       * `PATCH`: Used to update a specific part of data on a server.
       * `DELETE`: Used to delete data from a server.
* Postman
    * Postman is a popular API testing tool that allows you to send and receive HTTP requests.
    * To use Postman, you must first create a new request.
    * Next, you must specify the type of request you want to send.
    * Finally, you must specify the URL of the server you want to send the request to.
* Middleware
    * Middleware is a function that is executed before or after an HTTP request is processed.
    * Middleware can be used to perform a variety of tasks, such as authentication, logging, and error handling.
    * To use middleware in Express, you must first create a middleware function.
    * Next, you must add the middleware function to your Express application.
* Custom Middleware
    * Custom middleware can be used to perform tasks that are not supported by the built-in middleware that is provided by Express.
    * To create custom middleware, you must first create a middleware function.
    * Next, you must add the middleware function to your Express application.
* Secrets Project
    * In this project, I created a program that uses middleware to check for a secret code.
    * If the user enters the correct code, they are allowed to access the program.
    * If the user enters the incorrect code, they are not allowed to access the program.
I learned a lot about Express.js in this lesson. I learned how to create an Express server, send and receive HTTP requests, and use middleware. I am excited to use these new skills in my future web development projects.
<hr />


