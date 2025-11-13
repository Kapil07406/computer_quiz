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
    }
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


