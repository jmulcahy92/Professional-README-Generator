// include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project's title?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide guidelines for how you would like other developers to contribute to your project.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide examples on how to run tests for this project.',
        name: 'tests',
    },
    { // list type with choices to restrict user input to 'none', 'MIT', or 'GNU'
        type: 'list',
        message: 'What type of license should your project have?',
        choices: ['none', 'MIT', 'GNU'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// writes user input 'data' to file 'fileName'
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generator.generateMarkdown(data), (err) => err ? console.error(err) : console.log('Commit logged!')); // calls generateMarkdown function from utils/generateMarkdown.js and writes output to a new file 'fileName'; includes console log of either error or success message
}

// prompts questions with inquirer THEN writes inputs to "sampleREADME.md" (asynchronous)
function init() {
    inquirer.prompt(questions).then((response) => writeToFile("sampleREADME.md", response));
}

// Function call to initialize app
init();
