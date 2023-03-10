// import the generateMarkdown function from the utils/generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');

// Include packages needed for this application
const inquirer = require('inquirer');

// import the fs module for working with the file system
const fs = require('fs');

// import the path module for working with file paths
const path = require('path')

// Create an array of questions for user input
/* questions */
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "position",
        message: "What is your role on the team?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "skills",
        message: "What skills do you bring to the team?"
      },
      {
        type: "input",
        name: "goals",
        message: "What are your goals for this project?"
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None']
      },
      {
        type: 'input',
        name: 'profilePicture',
        message: 'Enter the URL of your profile picture:',
      },
];

// Create a function to write README file
/* created a README.md in the current directory and write the content from the generateMarkdown(data)*/
function writeToFile(fileName, data) {
  FileSystem.writeFile(README.Md, function(err) {
    if (err){
        return console.log(err);
    }
  });  
}


// Create a function to initialize app
/* function uses the inquirer library to prompt the user with the questions defined in the questions array and collects the answers. */
function init() {
    inquirer.prompt(questions).then(answers => {
      const readme = generateMarkdown(answers);
   });
