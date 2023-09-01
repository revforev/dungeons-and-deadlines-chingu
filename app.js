// ===========================================================THEME========================================
function changeBackgroundColor() {
      document.body.style.backgroundColor = "white";
    }
    function scrollToElement(elementId) {
      var element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  }
// =======================================================TOGGLE DROPDOWN====================================
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// =======================================================TIME OF THE DAY START================================================

function toggleDisplayByTime(classNameMorning, classNameAfternoon, classNameEvening) {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var elementsMorning = document.getElementsByClassName(classNameMorning);
  var elementsAfternoon = document.getElementsByClassName(classNameAfternoon);
  var elementsEvening = document.getElementsByClassName(classNameEvening);

  if (currentHour >= 6 && currentHour < 12) {
    toggleClass(elementsMorning);
    toggleClass(elementsAfternoon, true);
    toggleClass(elementsEvening, true);
  } else if (currentHour >= 12 && currentHour < 18) {
    toggleClass(elementsAfternoon);
    toggleClass(elementsMorning, true);
    toggleClass(elementsEvening, true);
  } else {
    toggleClass(elementsEvening);
    toggleClass(elementsMorning, true);
    toggleClass(elementsAfternoon, true);
  }
}

function toggleClass(elements, hide) {
  for (var i = 0; i < elements.length; i++) {
    if (hide) {
      elements[i].classList.add('hidden');
    } else {
      elements[i].classList.remove('hidden');
    }
  }
}

toggleDisplayByTime('morning-start', 'afternoon-start', 'evening-start');
toggleDisplayByTime('morning-q-i', 'afternoon-q-i', 'evening-q-i');
toggleDisplayByTime('morning-stats-i', 'afternoon-stats-i', 'evening-stats-i');

// =======================================================STATS================================================

let energy = 0
let health = 0
let speed = 0
// add + "Mbps" to dom
let coins = 0

function energyIncrease() {
  energy += 3
  console.log(energy)
  return energy
}

function healthIncrease() {
  health += 3
  console.log(health)
  return health
}

function speedIncrease() {
  speed += 3
  console.log(speed)
  return speed
}


function coinsIncrease() {
  coins += 3
  console.log(coins)
  return coins
}


// ======================================================STATS UI================================================

// Get references to the HTML elements
const energyEl = document.getElementById("energy");
const healthEl = document.getElementById("health");
const speedEl = document.getElementById("speed");
const coinsEl = document.getElementById("coins");

// Update the HTML content with the live values
// energyEl.textContent += energy;
// healthEl.textContent += health;
// speedEl.textContent += speed;
// coinsEl.textContent += coins;


// ===================================================PHASES====================================================


let currentPhaseIndex = 0; // Initialize the current phase index to 0 (first phase)

  function navigateForward() {
	let phases = ["innit", "Logo", "Greeting", "Q-i", "Stats-i", "Briefing", "Instructions", "Map", "Stage-1", "Stats-1", "Map", "Stage-2", "Stats-2", "Map", "Stage-3", "Stats-3", "Map", "Stage-4", "Stats-4", "Map", "Stage-5", "Stats-5", "Call-for-food", "Shop-outside", "Shop-inside", "Shop-stats", "Map", "Stage-6", "Stats-6", "Map", "Stage-7", "Stats-7", "Times-Up", "Ending", "Postlude"];

    // Get the current phase element from the DOM based on its ID
    let currentPhaseId = phases[currentPhaseIndex];
    let currentPhaseElement = document.getElementById(currentPhaseId);

    // Hide the current phase (apply the display: none class)
    currentPhaseElement.classList.add("hidden");

    // Move to the next phase
    currentPhaseIndex++;

    // Check if the currentPhaseIndex is within the valid range of phases array
    if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.length) {
      // Get the next phase element from the DOM based on its ID
      let nextPhaseId = phases[currentPhaseIndex];
      let nextPhaseElement = document.getElementById(nextPhaseId);

      // Show the next phase (remove the display: none class)
      nextPhaseElement.classList.remove("hidden");
    } else {
      console.log("You have reached the end of the phases.");
      // Decrement the index to be at the last valid phase
      currentPhaseIndex--;
    }
  }

  function navigateBackward() {
    let phases = ["innit", "Logo", "Greeting", "Q-i", "Stats-i", "Briefing", "Instructions", "Map", "Stage-1", "Stats-1", "Map", "Stage-2", "Stats-2", "Map", "Stage-3", "Stats-3", "Map", "Stage-4", "Stats-4", "Map", "Stage-5", "Stats-5", "Call-for-food", "Shop-outside", "Shop-inside", "Shop-stats", "Map", "Stage-6", "Stats-6", "Map", "Stage-7", "Stats-7", "Times-Up", "Ending", "Postlude"];

    // Get the current phase element from the DOM based on its ID
    let currentPhaseId = phases[currentPhaseIndex];
    let currentPhaseElement = document.getElementById(currentPhaseId);

    // Hide the current phase (apply the display: none class)
    currentPhaseElement.classList.add("hidden");

    // Move to the previous phase
    currentPhaseIndex--;

    // Check if the currentPhaseIndex is within the valid range of phases array
    if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.length) {
      // Get the previous phase element from the DOM based on its ID
      let previousPhaseId = phases[currentPhaseIndex];
      let previousPhaseElement = document.getElementById(previousPhaseId);

      // Show the previous phase (remove the display: none class)
      previousPhaseElement.classList.remove("hidden");
    } else {
      console.log("You are already at the first phase.");
      // Increment the index to be at the first valid phase
      currentPhaseIndex++;
    }
  }

function soloNavigator(elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error("Element with ID " + elementId + " not found.");
    return;
  }

  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

// Make a function to restart the game

function reloadPage() {
  location.reload();
}


//STATS========================================================================================================================================================================
 let stats = {
    coins: 0,
    fitness: 0,
    energy: 0,
    speed: 0,
  };

  function updateStat(statType) {
    const statButton = document.querySelector(`[data-stat-type="${statType}"]`);
    statButton.textContent = stats[statType].toString();
  }

  // Call the function initially for each stat type to set the button content to the initial value
  for (let statType in stats) {
    updateStat(statType);
  }

  // Function to add stats of a specific type
  function addStats(statType, amount) {
    stats[statType] += amount;
    updateStat(statType);
  }

  // Function to spend stats of a specific type
  function spendStats(statType, amount) {
    if (stats[statType] >= amount) {
      stats[statType] -= amount;
      updateStat(statType);
    } else {
      console.log("Not enough `${statType}`!");
    }
  }

  function timesUp(stats) {
    const endingElement = document.getElementById("ending-p");
    const { coins, energy, speed, fitness } = stats;
    

    

   

    
    
    if (coins >= 15 ) {
      let roomEnding = document.getElementById('room-beam');


    roomEnding.classList.remove("hidden");
      endingElement.textContent = "A beam of sun hits your windows. You wake up to a beautiful sunny day. You make tea and go pay your rent.\n\nIt’s been a wild week, but now you have the rest of the day to relax. You go for a walk in the park.";
    } else if (coins < 15 && energy > speed && energy > fitness) {
      let friendEnding = document.getElementById('call-friend');


    friendEnding.classList.remove("hidden");
      endingElement.textContent = "You wake up in a flash. Rent is due today. You almost have enough money for the rent, but still need a few coins.\n\nYou feel strangely motivated and energized. You start calling your friends.\nOne of your friends is looking for someone to work on an event for a few hours in the afternoon. They’re willing to pay cash in hand. This is a godsend.\nThe shift goes well, and you manage to pay your rent just in time. What a ride it’s been!";
    } else if (coins < 15 && speed > energy && speed > fitness) {
      let doorEnding = document.getElementById('knock-door');


      doorEnding.classList.remove("hidden");
      endingElement.textContent = "You wake up at the sound of a notification. Not a second passes and you hear a shy knock on the door. The kind of quiet knock you wouldn't have heard in your sleep for sure. You dress up and go look through the door lens. The neighbor from next door.\n\n“Hi, I got a huge favor to ask for! I need to start working in 10 minutes, and I can’t get the internet to work. Is there a chance I could use your WIFI just for five minutes?”\nYour speed clocks at " + speed + ". Whoa! You assure them it’s perfectly fine, they’re welcome to use it for the whole day. You hand them your Wi-Fi password. They answer: “Phew! This is a godsend”\nIn the lunch break, the neighbor comes back to thank us. They look so relieved. They want to know if there’s anything they can do for you. You ask if you can borrow " + coins + " coins. You see their face turn into a big smile. “That’s nothing! Please allow me to help with you this. You don’t need to worry about giving them back!” You can see genuine joy on their face.\nThey hand you the remaining coins. Oh, how things pan out sometimes!";
    } else if (coins < 15 && fitness > speed && fitness > energy) {
      let runEnding = document.getElementById('go-run');
    runEnding.classList.remove("hidden");
      endingElement.textContent = "You wake up feeling like you’re in a strangely good shape. You jump in your sneakers and go for a run. While running in a park, you notice something shining on the floor. Might it be coins? Exactly how much you needed. You look around, but the first person you can see is half a mile away. You take the coins and head back home. You manage to pay your rent in time, and also had a nice workout today. Good job!";
    } else {
      endingElement.textContent = "You didn't win this time, but don't worry, there's always another chance!";
    }
  }
// =====================================MAP==================================================================
let quiz1 = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Makeup Language",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Which element is used to create a hyperlink in HTML?",
    options: [
      "<link>",
      "<a>",
      "<p>",
      "<div>",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      "<br>",
      "<hr>",
      "<break>",
      "<line>",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which attribute is used to define inline styles in HTML?",
    options: [
      "class",
      "style",
      "id",
      "src",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which attribute is used to specify an external CSS file in HTML?",
    options: [
      "style",
      "href",
      "src",
      "class",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: [
      "<heading>",
      "<h1>",
      "<h6>",
      "<h2>",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which attribute is used to specify a unique identifier for an element in HTML?",
    options: [
      "class",
      "id",
      "important",
      "spec",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "How do you create a comment in HTML?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "** This is a comment **",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which element is used to define a table row in HTML?",
    options: [
      "<table>",
      "<th>",
      "<tr>",
      "<td>",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which CSS property is used to specify the background color of an element?",
    options: [
      "background-color",
      "background",
      "color",
      "bg-color",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which CSS property is used to control the size of an element's font?",
    options: [
      "text-size",
      "font-size",
      "size",
      "font-style",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the correct CSS syntax to select an element with the class 'example'?",
    options: [
      "#example",
      ".example",
      "[example]",
      "@example",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the correct CSS syntax to select all <p> elements inside a <div> element?",
    options: [
      "div > p",
      "p div",
      "div p",
      "p + div",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Which CSS property is used to specify the spacing between lines of text?",
    options: [
      "line-height",
      "text-spacing",
      "letter-spacing",
      "word-spacing",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the correct CSS syntax to set the text color of an element to red?",
    options: [
      "background-color: red;",
      "color: red;",
      "font-color: red;",
      "colour: red;",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which CSS property is used to make an element bold?",
    options: [
      "bold",
      "text-decoration",
      "font-style",
      "font-weight",
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "What is the correct CSS syntax to set the width and height of an element?",
    options: [
      "size: width height;",
      "width: value; height: value;",
      "dimension: value;",
      "scale: value;",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which CSS property is used to add a shadow effect to an element?",
    options: [
      "box-shadow",
      "shadow",
      "text-shadow",
      "effect-shadow",
    ],
    correctAnswerIndex: 0,
  }
];



let quiz2 = [
    {
      question: "What is the purpose of the HTML <meta> tag?",
      options: [
        "To define a hyperlink within the document",
        "To specify the character encoding of the HTML document",
        "To create a table within the document",
        "To define a section of content that is independent of the document flow"
      ],
      correctAnswerIndex: 1
    },
    {
      question: "What is the purpose of the HTML <canvas> element?",
      options: [
        "To display scalable vector graphics",
        "To create interactive web applications",
        "To embed multimedia content",
        "To draw graphics and animations programmatically"
      ],
      correctAnswerIndex: 3
    },
    {
      question: "Which attribute is used to provide alternative text for images in HTML?",
      options: [
        "title",
        "src",
        "alt",
        "description"
      ],
      correctAnswerIndex: 2
    },
    {
      question: "Which HTML element is used to group related form elements together?",
      options: [
        "<fieldset>",
        "<group>",
        "<formset>",
        "<formgroup>"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "What does the HTML5 <article> element represent?",
      options: [
        "A section of selected news articles",
        "A self-contained composition in a document, such as a blog post or news story",
        "A semantic element used for emphasis",
        "A block of code or programming instructions"
      ],
      correctAnswerIndex: 1
    },
    {
      question: "How do you create a numbered list with custom styles in HTML?",
      options: [
        "Use the <ol> element and add custom attributes for styling",
        "Use the <ul> element and manually add numbers with CSS pseudo-elements",
        "Use the <ul> element and apply CSS classes to each list item for custom styling",
        "Use the <ol> element with CSS to style/customize the numbering"
      ],
      correctAnswerIndex: 3
    },
    {
      question: "What is the purpose of the HTML <aside> element?",
      options: [
        "To define a section of content that is tangentially related to the main content",
        "To create a container for a footer or bottom section of a web page",
        "To specify a list of options for the user to choose from",
        "To mark up a citation or reference within the content"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "What is the purpose of the HTML <nav> element?",
      options: [
        "To define a section of content that contains metadata for the web page",
        "To display a header at the top of the web page",
        "To define a section of navigation links",
        "To create a block of quoted text"
      ],
      correctAnswerIndex: 2
    },
    {
      question: "Which attribute is used to specify the relationship between the current document and the linked document in HTML?",
      options: [
        "rel",
        "href",
        "target",
        "type"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "What does the HTML <datalist> element represent?",
      options: [
        "A list of predefined options for an input element",
        "A table of data in an unordered list",
        "A list of related articles or blog posts",
        "A block of code or programming instructions"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      options: [
        "bgcolor",
        "background",
        "color",
        "background-color"
      ],
      correctAnswerIndex: 3
    },
    {
      question: "How do you select all elements with the class \"example\" in CSS?",
      options: [
        ".example",
        "#example",
        "@example",
        "*example"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "Which CSS property is used to control the spacing between lines of text?",
      options: [
        "text-indent",
        "line-height",
        "letter-spacing",
        "word-spacing"
      ],
      correctAnswerIndex: 1
    },
    {
      question: "What does the CSS property \"float: left;\" do?",
      options: [
        "Moves the element to the left side of the page",
        "Aligns the element to the left within its parent container",
        "Makes the element float above other elements",
        "Removes the element from the normal document flow"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "How do you add a drop shadow effect to an element in CSS?",
      options: [
        "text-shadow: 2px 2px 2px #000;",
        "shadow: drop 2px 2px 2px #000;",
        "effect: drop-shadow(2px 2px 2px #000);",
        "box-shadow: 2px 2px 2px #000;"
      ],
      correctAnswerIndex: 3
    },
    {
      question: "Which CSS selector will select only the first child element of its parent?",
      options: [
        ":first-of-type",
        ":nth-child(1)",
        ":first-child",
        ":nth-of-type(1)"
      ],
      correctAnswerIndex: 2
    },
    {
      question: "What does the CSS property \"box-sizing: border-box;\" do?",
      options: [
        "Includes padding and border in the element's total width and height",
        "Sets the box model to use the content-box sizing",
        "Adjusts the element's dimensions based on its content",
        "Removes the box model from the element"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "How can you add a transition effect to an element in CSS?",
      options: [
        "animation: name duration timing-function;",
        "transition: property duration timing-function;",
        "effect: transition property duration timing-function;",
        "animate: property duration timing-function;"
      ],
      correctAnswerIndex: 1
    },
    {
      question: "Which CSS property is used to change the font weight of an element?",
      options: [
        "font-bold",
        "text-weight",
        "font-style",
        "font-weight"
      ],
      correctAnswerIndex: 3
    },
    {
      question: "What does the CSS property \"pointer-events: none;\" do?",
      options: [
        "Changes the cursor style to \"none\"",
        "Disables mouse events on the element",
        "Makes the element not visible on the web page",
        "Makes the element non-clickable"
      ],
      correctAnswerIndex: 1
    }
  ];


    
let quiz3 = [
{
    question: "What is JavaScript primarily used for?",
    options: [
      "Storing data in databases",
      "Adding interactivity to web pages",
      "Creating CSS styles",
      "Defining the structure of web pages"
    ],
    correctAnswerIndex: 0
  },
 {
    question: "How did you use to declare a variable in JavaScript before ES6 (2016)?",
    options: [
      "const myVariable;",
      "variable myVariable;",
      "let myVariable;",
      "var myVariable;"
    ],
    correctAnswerIndex: 3
  },
 {
    question: "Which keyword is used to define a function in JavaScript?",
    options: [
      "f",
      "def",
      "function",
      "func"
    ],
    correctAnswerIndex: 2
  },
{
    question: "What is the correct syntax for a single-line comment in JavaScript?",
    options: [
      "a) /* This is a comment */",
      "b) <!-- This is a comment -->",
      "c) // This is a comment",
      "d) -- This is a comment --"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    options: [
      ":",
      "==",
      "===",
      "="
    ],
    correctAnswerIndex: 3
  },
 {
    question: "What is the correct way to write an if statement in JavaScript?",
    options: [
      "{ // code } if (condition)",
      "if { // code } (condition)",
      "if (condition) { // code }",
      "(condition) { // code } if"
    ],
    correctAnswerIndex: 2
  },
 {
    question: "How do you write \"Hello, World!\" to the console in JavaScript?",
    options: [
      "print(\"Hello, World!\");",
      "console.print(\"Hello, World!\");",
      "console.write(\"Hello, World!\");",
      "console.log(\"Hello, World!\");"
    ],
    correctAnswerIndex: 3
  },
 {
    question: "Which method is used to convert a string to an integer in JavaScript?",
    options: [
      "parseInt()",
      "toString()",
      "parseFloat()",
      "toInteger()"
    ],
    correctAnswerIndex: 0
  },
 {
    question: "What is the result of the expression: 5 + \"2\" in JavaScript?",
    options: [
      "NaN",
      "7",
      "52",
      "\"52\""
    ],
    correctAnswerIndex: 3
  },
 {
    question: "How do you find the length of an array in JavaScript?",
    options: [
      "myArray.length()",
      "myArray.length",
      "myArray.size()",
      "myArray.size"
    ],
    correctAnswerIndex: 1
  }
];


    
let quiz4 =[
  {
    question: "Which method is used to add elements to the end of an array in JavaScript?",
    options: [
      "shift()",
      "pop()",
      "push()",
      "unshift()"
    ],
    correctAnswerIndex: 2
  },
{
    question: "How do you concatenate two strings in JavaScript?",
    options: [
      "string1 + string2",
      "string1.concat(string2)",
      "concat(string1, string2)",
      "join(string1, string2)"
    ],
    correctAnswerIndex: 3
  },
{
    question: "What is the result of the expression: 10 % 3 in JavaScript?",
    options: [
      "1",
      "0",
      "3",
      "10"
    ],
    correctAnswerIndex: 2
  },
{
    question: "Which method is used to remove the last element from an array in JavaScript?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "unshift()"
    ],
    correctAnswerIndex: 0
  },
{
    question: "What does the typeof operator return for an array?",
    options: [
      "\"object\"",
      "\"array\"",
      "\"undefined\"",
      "\"function\""
    ],
    correctAnswerIndex: 0
  },
{
    question: "How do you access the value of a property in an object in JavaScript?",
    options: [
      "object.property",
      "object[\"property\"]",
      "object.getProperty()",
      "getProperty(object)"
    ],
    correctAnswerIndex: 1
  },
{
    question: "Which method is used to convert a string to lowercase in JavaScript?",
    options: [
      "toLowerCase()",
      "toUpperCase()",
      "caseLower()",
      "caseUpper()"
    ],
    correctAnswerIndex: 0
  },
{
    question: "What does the Math.random() function in JavaScript return?",
    options: [
      "A random number between 0 and 1",
      "A random integer",
      "The value of π (pi)",
      "The square root of a number"
    ],
    correctAnswerIndex: 0
  },
{
    question: "Which method is used to convert a number to a string in JavaScript?",
    options: [
      "convertString()",
      "toNumber()",
      "parseString()",
      "toString()"
    ],
    correctAnswerIndex: 3
  },
{
    question: "What is the result of the expression: true && false in JavaScript?",
    options: [
      "false",
      "true",
      "undefined",
      "null"
    ],
    correctAnswerIndex: 0
  }
];

    
    
// let mysteryQuiz = [
//       {			 //css inject background/sau si mai simplu toggle class of phone
//         id: "mystery-1",
//         question: "Ring ring! You feel your phone vibrating in the pocket. It's someone who you met during a night out last weekend. Pick up the call?",
//         options: [
//           "a) Option A",
//           "b) Option B",
//           "c) Option C",
//           "d) Option D"
//         ],
//         correctAnswerIndex: 0
//       },
//       {
//         id: "mystery-2",
//         question: "Which element has an unknown chemical symbol?",
//         options: [
//           "a) Option A",
//           "b) Option B",
//           "c) Option C",
//           "d) Option D"
//         ],
//         correctAnswerIndex: 1
//       },
//       {
//         id: "mystery-3",
//         question: "What is the answer to the unknown question?",
//         options: [
//           "a) Option A",
//           "b) Option B",
//           "c) Option C",
//           "d) Option D"
//         ],
//         correctAnswerIndex: 2
//       }
//     ];

// let mysteryQuizOptions = [
//       {
//         id: "mystery-1",
//         question: "You pick up the call and hear a slender voice at the other end of the line : 'heeeeeeeeeeey! hows it going? it's been aaaaaages. We need to catch up tonight most defo! There's a sick party going on in Shoreditch. Feel free to join me, come at mine 6 ish",
//         options: [
//           "I will be there most defo. See you soon!",
//           "Can't make it, sorry - got some work to do. We can meet next week?",
//           "How about we meet in a pub instead? I can't be out for too long tonight",
//           "*Hang up*"
//         ],
//         correctAnswerIndex: 0
//         // Call A:0
//         // Call A:1
//         // Call A:2
//         // Call A:3
//       },
//       {
//         id: "mystery-2",
//         question: "Which element has an unknown chemical symbol?",
//         options: [
//           "a) Option A",
//           "b) Option B",
//           "c) Option C",
//           "d) Option D"
//         ],
//         correctAnswerIndex: 1
//       },
//       {
//         id: "mystery-3",
//         question: "What is the answer to the unknown question?",
//         options: [
//           "a) Option A",
//           "b) Option B",
//           "c) Option C",
//           "d) Option D"
//         ],
//         correctAnswerIndex: 2
//       }
//     ];
  let currentStageIndex = 0;
function lockedNavigator() {
  const stages = ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5', 'stage-6', 'stage-7'];
  
  let stageId = stages[currentStageIndex];
  
    const stageElements = document.querySelectorAll("." + stageId);
    stageElements.forEach((element) => {
      element.classList.toggle('locked');
    });

    currentStageIndex++;

    if (currentStageIndex >= 0 && currentStageIndex < stages.length) {
      let nextStageId = stages[currentStageIndex];
      const nextStageElements = document.querySelectorAll("." + nextStageId);
    nextStageElements.forEach((element) => {
      element.classList.toggle('locked');
    });
    }
    else {
      console.log("You have reached the end of the stages");
      currentStageIndex--;
    }
  }



function initializeQuizForStages() {
  const stages = ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5', 'stage-6', 'stage-7'];
  const statsText = "This is correct. It fills you with determination!";
  const incorrectAnswerText = "This is not the correct answer. You were close!";

  

  
  stages.forEach((stageId, index) => {
    const quiz = selectQuizForStage(index + 1); // index starts from 0, stages are 1-7
    const randomSet = selectRandomSet(quiz);
    const questionElement = document.getElementById(`${stageId}-q`);
    questionElement.textContent = randomSet.question;

    

    for (let i = 1; i <= 4; i++) {
      const answerButton = document.getElementById(`${stageId}-a${i}`);
      answerButton.textContent = randomSet.options[i - 1];
      if (randomSet.correctAnswerIndex === i - 1) {
        answerButton.setAttribute('onclick', `addStats("coins", 3); updateStatsText("${statsText}", ${index + 1}); navigateForward()`);
      } else {
        answerButton.setAttribute('onclick', `updateStatsText("${incorrectAnswerText}", ${index + 1}); navigateForward()`);
      }
    }
  });
}

// Function to select the quiz based on the stage number
function selectQuizForStage(stageNumber) {
  if (stageNumber === 1) return quiz1;
  else if (stageNumber >= 2 && stageNumber <= 3) return quiz2;
  else if (stageNumber >= 4 && stageNumber <= 5) return quiz3;
  else return quiz4;
}


function selectRandomSet(quiz) {
  if (quiz.length === 0) {
    return null; // or any appropriate value to indicate an empty array
  }

  const randomIndex = Math.floor(Math.random() * quiz.length);
  const selectedElement = quiz[randomIndex];

  // Remove the selected element from the array
  quiz.splice(randomIndex, 1);

  return selectedElement;
}

// Function to update the stats section text
function updateStatsText(text, statsIndex) {
  const statsElement = document.getElementById(`stats-${statsIndex}-p`);
  statsElement.textContent = text;
}

// Initialize the quiz for all stages on page load
initializeQuizForStages();


function scratchcard() {
  const probability = Math.random(); // Generates a random value between 0 and 1

  // 10% chance to run addStats('coins', 6)
  if (probability <= 0.1) {
    addStats('coins', 5);
    document.getElementById('stats-scratch-card').innerText = 'As you scratch away, you notice a symbol of a yacht repeats itself three times. Next to it, a tag that says "5 coins". The day has come. This is amazing!';
  } else {
    document.getElementById('stats-scratch-card').innerText =
      'Scratching away, there are two of each symbols. It looks like you nearly won the jackpot. Better luck next time!';
  }
}