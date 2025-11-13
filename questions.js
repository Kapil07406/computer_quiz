// 🔥 Section-wise questions (You can add more manually)

const quizData = {
  // 🖥️ BASIC COMPUTER SECTION
  basic: [
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which one is an input device?",
      options: ["Monitor", "Printer", "Keyboard", "Speaker"],
      answer: "Keyboard"
    }
  ],

  // 🌐 HTML SECTION
  html: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "High Transfer Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to insert an image in HTML?",
      options: ["<image>", "<img>", "<pic>", "<src>"],
      answer: "<img>"
    }
  ],

  // 🎨 CSS SECTION
  css: [
    {
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "background-image"],
      answer: "background-color"
    },
    {
      question: "Which symbol is used to select a class in CSS?",
      options: ["#", ".", "*", "$"],
      answer: "."
    }
  ],

  // ⚙️ JAVASCRIPT SECTION
  javascript: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "let", "Both var and let"],
      answer: "Both var and let"
    },
    {
      question: "What will `console.log(2 + '2')` print?",
      options: ["4", "22", "Error", "Undefined"],
      answer: "22"
    },
    {
  question: "Which keyword is used to declare a variable in JavaScript?",
  options: ["var", "int", "let", "Both var and let"],
  answer: "Both var and let"
},
{
  question: "What will `console.log(2 + '2')` print?",
  options: ["4", "22", "Error", "Undefined"],
  answer: "22"
},
{
  question: "Which of the following is NOT a JavaScript data type?",
  options: ["String", "Boolean", "Float", "Undefined"],
  answer: "Float"
},
{
  question: "What does the `typeof` operator do?",
  options: ["Checks variable type", "Converts type", "Declares variable", "Creates function"],
  answer: "Checks variable type"
},
{
  question: "Which symbol is used for comments in JavaScript?",
  options: ["//", "#", "<!--", "**"],
  answer: "//"
},
{
  question: "Which company developed JavaScript?",
  options: ["Microsoft", "Netscape", "Google", "Apple"],
  answer: "Netscape"
},
{
  question: "Inside which HTML element do we put JavaScript code?",
  options: ["<js>", "<scripting>", "<javascript>", "<script>"],
  answer: "<script>"
},
{
  question: "Which method is used to print something in the console?",
  options: ["print()", "log()", "console.log()", "document.write()"],
  answer: "console.log()"
},
{
  question: "Which keyword is used to define a constant variable?",
  options: ["let", "const", "var", "constant"],
  answer: "const"
},
{
  question: "How do you create a function in JavaScript?",
  options: ["function = myFunction()", "function myFunction()", "create function myFunction()", "def myFunction()"],
  answer: "function myFunction()"
},
{
  question: "Which operator is used to assign a value to a variable?",
  options: ["=", "==", "===", "=>"],
  answer: "="
},
{
  question: "How do you call a function named `myFunction`?",
  options: ["call myFunction", "myFunction()", "run myFunction()", "execute myFunction"],
  answer: "myFunction()"
},
{
  question: "How can you add a single-line comment in JavaScript?",
  options: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
  answer: "// comment"
},
{
  question: "Which operator is used for strict equality?",
  options: ["==", "===", "!=", "="],
  answer: "==="
},
{
  question: "What will `console.log(typeof null)` output?",
  options: ["null", "object", "undefined", "string"],
  answer: "object"
},
{
  question: "What is the correct way to write an array in JavaScript?",
  options: ["var colors = (1:'red', 2:'green')", "var colors = ['red', 'green']", "var colors = 'red', 'green'", "var colors = {'red','green'}"],
  answer: "var colors = ['red', 'green']"
},
{
  question: "Which loop executes at least once even if the condition is false?",
  options: ["for", "while", "do...while", "foreach"],
  answer: "do...while"
},
{
  question: "What is the output of `Boolean(0)`?",
  options: ["true", "false", "undefined", "0"],
  answer: "false"
},
{
  question: "How do you round a number to the nearest integer?",
  options: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.random()"],
  answer: "Math.round()"
},
{
  question: "Which of the following is a JavaScript framework?",
  options: ["Django", "Flask", "React", "Laravel"],
  answer: "React"
},
{
  question: "Which statement is used to stop a loop?",
  options: ["stop", "exit", "break", "return"],
  answer: "break"
},
{
  question: "Which operator is used to concatenate strings?",
  options: ["+", "&", ".", ","],
  answer: "+"
},
{
  question: "How can you detect the client’s browser name?",
  options: ["navigator.appName", "client.browser", "browser.name", "window.browser"],
  answer: "navigator.appName"
},
{
  question: "What will `console.log(5 == '5')` output?",
  options: ["true", "false", "undefined", "error"],
  answer: "true"
},
{
  question: "What will `console.log(5 === '5')` output?",
  options: ["true", "false", "undefined", "error"],
  answer: "false"
},
{
  question: "Which method adds a new element to the end of an array?",
  options: ["push()", "pop()", "shift()", "concat()"],
  answer: "push()"
},
{
  question: "Which method removes the last element from an array?",
  options: ["pop()", "push()", "slice()", "shift()"],
  answer: "pop()"
},
{
  question: "Which symbol is used for template literals in JavaScript?",
  options: ["'", "\"", "`", "~"],
  answer: "`"
},
{
  question: "Which built-in method returns the length of a string?",
  options: ["size()", "length()", "index()", "count()"],
  answer: "length()"
},
{
  question: "What is the default value of an uninitialized variable?",
  options: ["0", "null", "undefined", "empty string"],
  answer: "undefined"
},
{
  question: "Which function converts a string to an integer?",
  options: ["parseInt()", "toInteger()", "parseFloat()", "Number()"],
  answer: "parseInt()"
},
{
  question: "Which method combines two or more arrays?",
  options: ["merge()", "concat()", "join()", "append()"],
  answer: "concat()"
},
{
  question: "How do you write an arrow function in JavaScript?",
  options: ["function => {}", "() => {}", "=> function()", "(=>) => {}"],
  answer: "() => {}"
},
{
  question: "What does DOM stand for?",
  options: ["Document Object Model", "Data Object Management", "Document Order Model", "Digital Object Management"],
  answer: "Document Object Model"
},
{
  question: "Which function displays an alert box with a message?",
  options: ["msg()", "alert()", "prompt()", "display()"],
  answer: "alert()"
},
{
  question: "Which function is used to get input from the user?",
  options: ["alert()", "prompt()", "confirm()", "input()"],
  answer: "prompt()"
},
{
  question: "Which statement is used to check multiple conditions?",
  options: ["for", "if", "switch", "else"],
  answer: "switch"
},
{
  question: "What does `NaN` represent in JavaScript?",
  options: ["Null and None", "Not a Number", "Negative Number", "Next Available Number"],
  answer: "Not a Number"
},
{
  question: "How can you convert a number to a string?",
  options: ["toString()", "stringify()", "convert()", "Stringify()"],
  answer: "toString()"
},
{
  question: "Which method removes the first element from an array?",
  options: ["pop()", "shift()", "unshift()", "slice()"],
  answer: "shift()"
},
{
  question: "Which event occurs when a user clicks an HTML element?",
  options: ["onhover", "onmouseover", "onclick", "onchange"],
  answer: "onclick"
},
{
  question: "Which keyword is used to define a class in JavaScript?",
  options: ["object", "define", "class", "constructor"],
  answer: "class"
},
{
  question: "What is the output of `typeof []`?",
  options: ["array", "object", "list", "undefined"],
  answer: "object"
},
{
  question: "Which method returns part of a string?",
  options: ["split()", "slice()", "splice()", "trim()"],
  answer: "slice()"
},
{
  question: "What is the output of `Math.floor(4.9)`?",
  options: ["5", "4", "4.9", "Error"],
  answer: "4"
},
{
  question: "Which statement creates a new object?",
  options: ["var obj = {}", "var obj = []", "var obj = ()", "var obj = <>"],
  answer: "var obj = {}"
},
{
  question: "What is the output of `'5' + 5`?",
  options: ["10", "55", "Error", "NaN"],
  answer: "55"
},
{
  question: "Which keyword is used to handle errors?",
  options: ["catch", "throw", "try", "All of the above"],
  answer: "All of the above"
},
{
  question: "Which loop is used to iterate over object properties?",
  options: ["for", "forEach", "for...in", "while"],
  answer: "for...in"
},
{
  question: "Which function converts JSON text into a JavaScript object?",
  options: ["JSON.convert()", "JSON.parse()", "JSON.stringify()", "JSON.read()"],
  answer: "JSON.parse()"
},
// 💻 JAVASCRIPT SECTION
javascript: [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "let", "Both var and let"],
    answer: "Both var and let"
  },
  {
    question: "What will `console.log(2 + '2')` print?",
    options: ["4", "22", "Error", "Undefined"],
    answer: "22"
  },
  {
    question: "Which method is used to write HTML content via JavaScript?",
    options: ["document.write()", "console.log()", "window.alert()", "innerHTML"],
    answer: "document.write()"
  },
  {
    question: "What is the correct syntax to print something in console?",
    options: ["print()", "console.print()", "log.console()", "console.log()"],
    answer: "console.log()"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Mozilla"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//"
  },
  {
    question: "What is the output of `typeof null`?",
    options: ["null", "object", "undefined", "number"],
    answer: "object"
  },
  {
    question: "Which method converts a string to an integer?",
    options: ["parseInt()", "parseFloat()", "toString()", "Number()"],
    answer: "parseInt()"
  },
  {
    question: "Which operator is used to compare both value and type?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    question: "How do you define an array in JavaScript?",
    options: ["var arr = []", "var arr = {}", "var arr = ()", "var arr = <>"],
    answer: "var arr = []"
  },
  {
    question: "What will `Boolean(0)` return?",
    options: ["true", "false", "0", "undefined"],
    answer: "false"
  },
  {
    question: "Which function is used to display an alert box?",
    options: ["prompt()", "confirm()", "alert()", "message()"],
    answer: "alert()"
  },
  {
    question: "Which method adds a new element to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()"
  },
  {
    question: "Which method removes the last element of an array?",
    options: ["pop()", "push()", "splice()", "slice()"],
    answer: "pop()"
  },
  {
    question: "Which method joins array elements into a string?",
    options: ["concat()", "join()", "toString()", "split()"],
    answer: "join()"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunc()", "create myFunc()", "func myFunc()", "def myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "Which keyword is used to exit from a loop?",
    options: ["break", "stop", "exit", "return"],
    answer: "break"
  },
  {
    question: "Which keyword is used to skip an iteration in a loop?",
    options: ["skip", "continue", "next", "break"],
    answer: "continue"
  },
  {
    question: "What will `console.log(3 == '3')` return?",
    options: ["true", "false", "undefined", "error"],
    answer: "true"
  },
  {
    question: "What will `console.log(3 === '3')` return?",
    options: ["true", "false", "undefined", "error"],
    answer: "false"
  },
  {
    question: "Which method returns the number of elements in an array?",
    options: ["count()", "length", "size()", "total()"],
    answer: "length"
  },
  {
    question: "Which statement is used to test a condition?",
    options: ["if", "switch", "for", "case"],
    answer: "if"
  },
  {
    question: "How can you convert a string to lowercase?",
    options: ["toLowerCase()", "lowercase()", "makeLower()", "changeLower()"],
    answer: "toLowerCase()"
  },
  {
    question: "How can you convert a string to uppercase?",
    options: ["toUpperCase()", "upperCase()", "changeUpper()", "makeUpper()"],
    answer: "toUpperCase()"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["-", "=", "==", "==="],
    answer: "="
  },
  {
    question: "What is the correct way to declare a constant in JavaScript?",
    options: ["var PI = 3.14;", "let PI = 3.14;", "const PI = 3.14;", "PI = 3.14;"],
    answer: "const PI = 3.14;"
  },
  {
    question: "Which built-in method returns the length of a string?",
    options: ["size()", "length()", "index()", "getSize()"],
    answer: "length()"
  },
  {
    question: "What is the result of `typeof NaN`?",
    options: ["NaN", "undefined", "number", "object"],
    answer: "number"
  },
  {
    question: "Which loop executes at least once even if the condition is false?",
    options: ["for", "while", "do...while", "none"],
    answer: "do...while"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Document Oriented Module", "Digital Object Model"],
    answer: "Document Object Model"
  },
  {
    question: "How can you access an HTML element by ID in JavaScript?",
    options: ["getElementById()", "getById()", "getID()", "querySelectorAll()"],
    answer: "getElementById()"
  },
  {
    question: "How can you access elements by class name?",
    options: ["getElementsByClassName()", "getClass()", "findClass()", "queryClass()"],
    answer: "getElementsByClassName()"
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["0", "null", "undefined", "NaN"],
    answer: "undefined"
  },
  {
    question: "Which method can be used to delay execution of a function?",
    options: ["setTimeout()", "setInterval()", "wait()", "sleep()"],
    answer: "setTimeout()"
  },
  {
    question: "Which method repeatedly calls a function at a given interval?",
    options: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    answer: "setInterval()"
  },
  {
    question: "Which statement is used to handle errors?",
    options: ["try...catch", "if...else", "throw", "error()"],
    answer: "try...catch"
  },
  {
    question: "Which operator is used to concatenate strings?",
    options: ["+", "&", "*", "."],
    answer: "+"
  },
  {
    question: "Which function can be used to parse JSON?",
    options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "readJSON()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which function converts an object to a JSON string?",
    options: ["JSON.stringify()", "JSON.parse()", "toJSON()", "convertJSON()"],
    answer: "JSON.stringify()"
  },
  {
    question: "What will `typeof []` return?",
    options: ["object", "array", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which keyword is used inside a function to refer to itself?",
    options: ["this", "self", "me", "object"],
    answer: "this"
  },
  {
    question: "What is closure in JavaScript?",
    options: [
      "A function inside another function that remembers the outer function's variables",
      "A block of HTML code",
      "An event listener",
      "None of these"
    ],
    answer: "A function inside another function that remembers the outer function's variables"
  },
  {
    question: "Which event occurs when a user clicks an HTML element?",
    options: ["onclick", "onmouseover", "onchange", "onpress"],
    answer: "onclick"
  },
  {
    question: "What will `console.log([] == [])` print?",
    options: ["true", "false", "undefined", "error"],
    answer: "false"
  },
  {
    question: "What is NaN in JavaScript?",
    options: ["Not a Number", "No assigned Name", "Negative Null", "Number and Null"],
    answer: "Not a Number"
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"],
    answer: "// comment"
  },
  {
    question: "Which function is used to take user input?",
    options: ["alert()", "prompt()", "confirm()", "input()"],
    answer: "prompt()"
  },
  {
    question: "What will `typeof undefined` return?",
    options: ["null", "undefined", "object", "string"],
    answer: "undefined"
  },
  {
    question: "What is the output of `console.log(0.1 + 0.2 == 0.3)`?",
    options: ["true", "false", "undefined", "error"],
    answer: "false"
  },
  {
    question: "Which keyword is used to define a class in JavaScript?",
    options: ["function", "class", "object", "constructor"],
    answer: "class"
  },
  {
    question: "Which keyword is used to create an object from a class?",
    options: ["create", "make", "new", "this"],
    answer: "new"
  },
    {
    question: "Which built-in method sorts the elements of an array?",
    options: ["sort()", "order()", "arrange()", "setOrder()"],
    answer: "sort()"
  },
  {
    question: "Which built-in method reverses the order of elements in an array?",
    options: ["reverse()", "invert()", "flip()", "reorder()"],
    answer: "reverse()"
  },
  {
    question: "What is the correct syntax for a for loop in JavaScript?",
    options: ["for(i=0;i<5;i++)", "for i in range(5)", "loop i=0 to 5", "repeat(5)"],
    answer: "for(i=0;i<5;i++)"
  },
  {
    question: "Which method removes the first element of an array?",
    options: ["shift()", "pop()", "unshift()", "splice()"],
    answer: "shift()"
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "and", "||"],
    answer: "&&"
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["||", "|", "or", "&"],
    answer: "||"
  },
  {
    question: "Which operator is used for logical NOT?",
    options: ["!", "not", "~", "¬"],
    answer: "!"
  },
  {
    question: "How do you round a number to the nearest integer?",
    options: ["Math.round()", "Math.floor()", "Math.ceil()", "round()"],
    answer: "Math.round()"
  },
  {
    question: "How do you find the largest number in an array?",
    options: ["Math.max(...arr)", "arr.max()", "max(arr)", "arr.largest()"],
    answer: "Math.max(...arr)"
  },
  {
    question: "What does `Math.floor(4.9)` return?",
    options: ["4", "5", "4.9", "Error"],
    answer: "4"
  },
  {
    question: "What does `Math.ceil(4.1)` return?",
    options: ["4", "5", "4.1", "Error"],
    answer: "5"
  },
  {
    question: "Which method can be used to find a substring in a string?",
    options: ["indexOf()", "find()", "includes()", "search()"],
    answer: "indexOf()"
  },
  {
    question: "What is the result of `'5' - 2`?",
    options: ["3", "52", "Error", "undefined"],
    answer: "3"
  },
  {
    question: "What is the result of `'5' + 2`?",
    options: ["7", "52", "Error", "undefined"],
    answer: "52"
  },
  {
    question: "Which function is used to convert a number to a string?",
    options: ["toString()", "String()", "Both A and B", "numString()"],
    answer: "Both A and B"
  },
  {
    question: "Which keyword is used to define an asynchronous function?",
    options: ["await", "async", "promise", "then"],
    answer: "async"
  },
  {
    question: "What is the purpose of the `await` keyword?",
    options: [
      "Waits for a Promise to resolve",
      "Stops code execution permanently",
      "Declares an async function",
      "Runs code faster"
    ],
    answer: "Waits for a Promise to resolve"
  },
  {
    question: "Which object represents the browser window in JavaScript?",
    options: ["window", "document", "browser", "screen"],
    answer: "window"
  },
  {
    question: "Which object represents the HTML document?",
    options: ["window", "document", "html", "page"],
    answer: "document"
  },
  {
    question: "What does `isNaN('hello')` return?",
    options: ["true", "false", "undefined", "error"],
    answer: "true"
  },
  {
    question: "Which symbol is used for template literals?",
    options: ["'", '"', "`", "~"],
    answer: "`"
  },
  {
    question: "What does `Array.isArray([])` return?",
    options: ["true", "false", "undefined", "error"],
    answer: "true"
  },
  {
    question: "Which array method creates a new array by applying a function to each element?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    answer: "map()"
  },
  {
    question: "Which array method filters elements based on a condition?",
    options: ["filter()", "map()", "reduce()", "find()"],
    answer: "filter()"
  },
  {
    question: "Which array method returns the first element matching a condition?",
    options: ["find()", "filter()", "map()", "reduce()"],
    answer: "find()"
  },
  {
    question: "Which array method reduces all elements to a single value?",
    options: ["reduce()", "map()", "filter()", "concat()"],
    answer: "reduce()"
  },
  {
    question: "What does the `addEventListener()` method do?",
    options: [
      "Attaches an event handler to an element",
      "Removes an element",
      "Creates an alert box",
      "Refreshes the page"
    ],
    answer: "Attaches an event handler to an element"
  },
  {
    question: "Which event is triggered when a form is submitted?",
    options: ["onsubmit", "onclick", "onchange", "oninput"],
    answer: "onsubmit"
  },
  {
    question: "What does `innerHTML` represent?",
    options: ["The HTML content of an element", "The text only", "The CSS style", "The tag name"],
    answer: "The HTML content of an element"
  },
  {
    question: "What does `textContent` return?",
    options: ["Only text", "HTML + text", "Tag name", "CSS properties"],
    answer: "Only text"
  },
  {
    question: "Which function displays a confirmation dialog box?",
    options: ["confirm()", "alert()", "prompt()", "dialog()"],
    answer: "confirm()"
  },
  {
    question: "Which function merges two or more arrays?",
    options: ["concat()", "merge()", "combine()", "append()"],
    answer: "concat()"
  },
  {
    question: "Which array method checks if at least one element meets a condition?",
    options: ["some()", "every()", "includes()", "find()"],
    answer: "some()"
  },
  {
    question: "Which array method checks if all elements meet a condition?",
    options: ["every()", "some()", "all()", "includes()"],
    answer: "every()"
  },
  {
    question: "What does `new Date()` return?",
    options: ["Current date and time", "Only date", "Only time", "Undefined"],
    answer: "Current date and time"
  },
  {
    question: "What does `Math.random()` return?",
    options: ["A random number between 0 and 1", "An integer", "A negative number", "Error"],
    answer: "A random number between 0 and 1"
  },
  {
    question: "Which keyword is used to export functions in JavaScript modules?",
    options: ["export", "share", "module", "return"],
    answer: "export"
  },
  {
    question: "Which keyword is used to import modules in JavaScript?",
    options: ["require", "import", "include", "use"],
    answer: "import"
  },
  {
    question: "Which function executes code after all promises are settled?",
    options: ["Promise.allSettled()", "Promise.all()", "Promise.any()", "Promise.final()"],
    answer: "Promise.allSettled()"
  },
  {
    question: "What will `2 + true` return?",
    options: ["3", "2true", "NaN", "undefined"],
    answer: "3"
  },
  {
    question: "What is the value of `typeof function() {}`?",
    options: ["object", "function", "method", "undefined"],
    answer: "function"
  },
  {
    question: "Which JavaScript method is used to find the minimum of numbers?",
    options: ["Math.min()", "min()", "lowest()", "Math.low()"],
    answer: "Math.min()"
  },
  {
    question: "Which function removes whitespace from both ends of a string?",
    options: ["trim()", "strip()", "clean()", "cut()"],
    answer: "trim()"
  },
  {
    question: "Which operator is used to spread elements?",
    options: ["...", "..", "**", "##"],
    answer: "..."
  },
  {
    question: "Which statement is used to create a new object with a prototype?",
    options: ["Object.create()", "new Object()", "create.object()", "Object.new()"],
    answer: "Object.create()"
  },
  {
    question: "What does the `delete` operator do?",
    options: [
      "Removes a property from an object",
      "Deletes a variable",
      "Removes an array element permanently",
      "Clears the console"
    ],
    answer: "Removes a property from an object"
  },
  {
    question: "Which built-in object handles asynchronous operations?",
    options: ["Promise", "Event", "Callback", "Thread"],
    answer: "Promise"
  },
  {
    question: "What is the purpose of `return` statement in a function?",
    options: [
      "To stop function execution and return a value",
      "To continue execution",
      "To pause execution",
      "To exit loop only"
    ],
    answer: "To stop function execution and return a value"
  },
  {
    question: "Which keyword stops execution of a function immediately?",
    options: ["return", "break", "stop", "exit"],
    answer: "return"
  },
  {
    question: "What is the output of `console.log(typeof [])`?",
    options: ["object", "array", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which function is used to merge properties of objects?",
    options: ["Object.assign()", "Object.merge()", "Object.concat()", "assignObject()"],
    answer: "Object.assign()"
  },
  {
    question: "What does the `in` operator check?",
    options: ["If a property exists in an object", "If a number is in an array", "Both A and B", "None"],
    answer: "If a property exists in an object"
  },
  {
    question: "What does the `instanceof` operator check?",
    options: ["If an object is an instance of a class", "If a variable exists", "If a loop ended", "If string has value"],
    answer: "If an object is an instance of a class"
  }
]
  
]


  ],

  // 🧩 SCRATCH SECTION
  scratch: [
    {
      question: "In Scratch, which category contains the 'move 10 steps' block?",
      options: ["Motion", "Looks", "Control", "Events"],
      answer: "Motion"
    },
    {
      question: "What is a sprite in Scratch?",
      options: ["A sound", "An animation block", "A character or object", "A project name"],
      answer: "A character or object"
    },
    {
      question: "In Scratch, which category contains the 'move 10 steps' block?",
      options: ["Motion", "Looks", "Control", "Events"],
      answer: "Motion"
    },
    {
      question: "What is a sprite in Scratch?",
      options: ["A sound", "An animation block", "A character or object", "A project name"],
      answer: "A character or object"
    },
    {
      question: "Which block is used to start a script in Scratch?",
      options: ["When green flag clicked", "Forever", "If then", "Go to x y"],
      answer: "When green flag clicked"
    },
    {
      question: "What color is the 'Looks' category in Scratch?",
      options: ["Blue", "Purple", "Orange", "Yellow"],
      answer: "Purple"
    },
    {
      question: "Which block makes a sprite repeat an action?",
      options: ["Forever", "Repeat", "Wait", "If then"],
      answer: "Repeat"
    },
    {
      question: "What does the 'say' block do in Scratch?",
      options: ["Makes sprite speak a message", "Moves sprite", "Plays a sound", "Deletes sprite"],
      answer: "Makes sprite speak a message"
    },
    {
      question: "In Scratch, what is the default stage color?",
      options: ["Blue", "White", "Black", "Gray"],
      answer: "White"
    },
    {
      question: "Which block controls sprite movement?",
      options: ["Motion", "Looks", "Sound", "Control"],
      answer: "Motion"
    },
    {
      question: "Which block is used to make a sprite wait?",
      options: ["Wait 1 seconds", "Pause", "Stop", "Sleep"],
      answer: "Wait 1 seconds"
    },
    {
      question: "In Scratch, which key is used to run the program?",
      options: ["Green Flag", "Spacebar", "Shift", "Enter"],
      answer: "Green Flag"
    },
    {
      question: "Which category contains sound-related blocks?",
      options: ["Motion", "Sound", "Looks", "Sensing"],
      answer: "Sound"
    },
    {
      question: "What shape are motion blocks in Scratch?",
      options: ["Rectangular", "Rounded", "Hexagonal", "Hat-shaped"],
      answer: "Rounded"
    },
    {
      question: "Which block checks if a condition is true?",
      options: ["If then", "Repeat", "Forever", "Say"],
      answer: "If then"
    },
    {
      question: "What is the purpose of the 'forever' block?",
      options: ["Repeat code infinitely", "Stop the script", "Move sprite once", "Play sound once"],
      answer: "Repeat code infinitely"
    },
    {
      question: "In Scratch, which block can detect if two sprites touch?",
      options: ["Touching", "If then", "Wait", "Join"],
      answer: "Touching"
    },
    {
      question: "Which block stops all running scripts?",
      options: ["Stop all", "Exit", "Pause", "End"],
      answer: "Stop all"
    },
    {
      question: "Which category has blocks to control timing?",
      options: ["Control", "Motion", "Looks", "Events"],
      answer: "Control"
    },
    {
      question: "In Scratch, which coordinate moves sprite to center?",
      options: ["x:0 y:0", "x:10 y:10", "x:100 y:100", "x:-10 y:-10"],
      answer: "x:0 y:0"
    },
    {
      question: "Which block plays a sound file?",
      options: ["Play sound", "Speak", "Say", "Move"],
      answer: "Play sound"
    },
    {
      question: "What happens when you press the red stop sign in Scratch?",
      options: ["All scripts stop", "Sprite hides", "Project saves", "Green flag restarts"],
      answer: "All scripts stop"
    },
    {
      question: "Which block makes sprite turn?",
      options: ["Turn 15 degrees", "Move 10 steps", "Go to x y", "Change color"],
      answer: "Turn 15 degrees"
    },
    {
      question: "Which shape are 'reporter' blocks in Scratch?",
      options: ["Oval", "Hexagonal", "Hat", "Stack"],
      answer: "Oval"
    },
    {
      question: "What does the 'broadcast' block do?",
      options: ["Send a message to other scripts", "Play music", "Repeat message", "Change backdrop"],
      answer: "Send a message to other scripts"
    },
    {
      question: "Which category contains the 'if then else' block?",
      options: ["Control", "Operators", "Events", "Looks"],
      answer: "Control"
    },
    {
      question: "What does 'glide 1 sec to x: y:' do?",
      options: ["Moves sprite smoothly", "Moves sprite instantly", "Stops sprite", "Rotates sprite"],
      answer: "Moves sprite smoothly"
    },
    {
      question: "Which Scratch feature stores data temporarily?",
      options: ["Variables", "Sounds", "Costumes", "Events"],
      answer: "Variables"
    },
    {
      question: "Which category is used for sensing mouse pointer position?",
      options: ["Sensing", "Operators", "Events", "Control"],
      answer: "Sensing"
    },
    {
      question: "Which block detects key press?",
      options: ["Key pressed?", "Wait until key", "On key press", "If then"],
      answer: "Key pressed?"
    },
    {
      question: "Which block joins two words together?",
      options: ["Join", "Add", "Combine", "Say"],
      answer: "Join"
    },
    {
      question: "In Scratch, what are 'costumes'?",
      options: ["Sprite appearances", "Sound files", "Scripts", "Backdrops"],
      answer: "Sprite appearances"
    },
    {
      question: "Which block changes sprite’s costume?",
      options: ["Next costume", "Say costume", "Change look", "Switch look"],
      answer: "Next costume"
    },
    {
      question: "What is the top-left corner coordinate on stage?",
      options: ["x:-240 y:180", "x:0 y:0", "x:240 y:-180", "x:-180 y:240"],
      answer: "x:-240 y:180"
    },
    {
      question: "Which block is used to repeat code forever?",
      options: ["Forever", "Repeat", "Loop", "If then"],
      answer: "Forever"
    },
    {
      question: "Which category helps compare numbers or strings?",
      options: ["Operators", "Variables", "Sensing", "Control"],
      answer: "Operators"
    },
    {
      question: "What is a backdrop in Scratch?",
      options: ["Background image", "Sound effect", "Sprite costume", "Variable name"],
      answer: "Background image"
    },
    {
      question: "Which operator block checks equality?",
      options: ["=", ">", "<", "and"],
      answer: "="
    },
    {
      question: "Which block changes sprite’s color effect?",
      options: ["Change color effect by", "Set color", "Switch costume", "Say color"],
      answer: "Change color effect by"
    },
    {
      question: "Which block runs when space key pressed?",
      options: ["When space key pressed", "If key pressed", "Press space", "Broadcast space"],
      answer: "When space key pressed"
    },
    {
      question: "Which block is used to create clones of a sprite?",
      options: ["Create clone of", "Duplicate", "Repeat clone", "Copy sprite"],
      answer: "Create clone of"
    },
    {
      question: "Which block deletes a clone?",
      options: ["Delete this clone", "Remove clone", "Destroy sprite", "Hide clone"],
      answer: "Delete this clone"
    },
    {
      question: "Which category provides mathematical functions?",
      options: ["Operators", "Sensing", "Events", "Control"],
      answer: "Operators"
    },
    {
      question: "Which block hides the sprite?",
      options: ["Hide", "Disappear", "Delete", "None"],
      answer: "Hide"
    },
    {
      question: "Which block shows the sprite again?",
      options: ["Show", "Appear", "Unhide", "Look"],
      answer: "Show"
    },
    {
      question: "Which block checks if mouse is touching sprite?",
      options: ["Touching mouse-pointer?", "Mouse on sprite?", "If mouse click", "Mouse detect"],
      answer: "Touching mouse-pointer?"
    },
    {
      question: "Which block makes sprite bounce back?",
      options: ["If on edge, bounce", "Repeat bounce", "Turn back", "Go reverse"],
      answer: "If on edge, bounce"
    },
    {
      question: "Which block stops a specific script?",
      options: ["Stop this script", "End", "Pause script", "Stop all"],
      answer: "Stop this script"
    },
    {
      question: "Which block can measure time in Scratch?",
      options: ["Timer", "Wait", "Clock", "Stopwatch"],
      answer: "Timer"
    },
    {
      question: "Which category lets you ask and answer questions?",
      options: ["Sensing", "Operators", "Control", "Events"],
      answer: "Sensing"
    },
    {
      question: "Which block resets the timer?",
      options: ["Reset timer", "Clear timer", "Stop timer", "Start timer"],
      answer: "Reset timer"
    },
    {
      question: "Which block can change the background?",
      options: ["Switch backdrop to", "Next backdrop", "Change background", "All of these"],
      answer: "Switch backdrop to"
    },
    {
      question: "Which block is used to wait until a condition is true?",
      options: ["Wait until", "Forever", "Repeat until", "If then"],
      answer: "Wait until"
    },
    {
      question: "Which version of Scratch is web-based?",
      options: ["Scratch 3.0", "Scratch 1.4", "Scratch 2.0 Offline", "None"],
      answer: "Scratch 3.0"
    }
  ]
};



