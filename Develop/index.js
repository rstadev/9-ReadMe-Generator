// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "user",
    message: "What is your github username?"
  },
  {
    type:"input",
    name:"title",
    message:"What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe this project?",
  },
  {
    type:"input",
    name:"usage",
    message:"Enter in usage informaton.",
  },
//   {
//     type:"",
//     name:"",
//     message:"",
//   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,  data, (err) => 
  err ? console.error(err) : console.log("Success!")
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)

    let userAnswers = answers
    writeToFile("readmetest.json", JSON.stringify(userAnswers));
  });

}

// Function call to initialize app
init();
