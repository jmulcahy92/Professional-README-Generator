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
        message: 'Please write a short description of your project.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
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
    const markdown = generator.generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile("README.md", response));
}

// Function call to initialize app
init();
