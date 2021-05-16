const { fstat } = require("fs");

// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What\'s the title of your application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a brief description of your application?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What dependencies are associated with this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will this application be used?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who contribbuted to this application?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command will be used for testing?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What licenses are used in this application?',
      choices: ['amazon', 'google', 'terminal']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github URL.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
  const responses = await inquirer.prompt(questions)
  console.log(responses);
  writeToFile('readme.md', generateMarkdown(responses));



}

// Function call to initialize app
init();
