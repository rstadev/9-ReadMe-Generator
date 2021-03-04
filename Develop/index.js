// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type:"input",
    name:"title",
    message:"What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project.",
  },
  {
  type:"list",
  name:"license",
  message:"Choose a license.",
  choices: [
    "MIT",
    "Mozilla Public License 2.0",
    "Creative Commons",
    "None"
  ]
  },
  {
    type:"input",
    name:"usage",
    message:"Enter in usage informaton.",
  },
  {
    type:"input",
    name:"installation",
    message:"Enter installation instructions.",
  },
  {
    type: "input",
    name: "user",
    message: "What is your github username?"
  },
  {
    type:"input",
    name:"email",
    message:"Enter in your email address for a Contact Me section.",
  },
  {
    type:"input",
    name:"contributing",
    message:"Include information for anyone looking to contribute.",
  },
  {
    type:"input",
    name:"tests",
    message:"Include information for any testing you have included with your project.",
  }
  //   {
//     type:"",
//     name:"",
//     message:"",
//   },
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
  fs.writeFile(fileName,  data, (err) => 
  err ? console.error(err) : console.log("Success!")
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers)

    // let userAnswers = answers
    writeToFile("readmetest.md", generateMarkdown(answers));
  });

}

// Function call to initialize app
init();


// JSON.stringify(userAnswers))