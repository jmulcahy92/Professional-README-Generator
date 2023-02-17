// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <${data.title}>
![License](https://img.shields.io/badge/)
## Description
${data.desc}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## License

## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have additional questions, my GitHub profile is at ${data.github}. My email address is ${data.email}
`;
}

module.exports = {generateMarkdown};
