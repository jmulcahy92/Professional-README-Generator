// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    {
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generator.generateMarkdown(data), (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile("sampleREADME.md", response));
}

// Function call to initialize app
init();
