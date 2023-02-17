// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'none':
      return '';
      break;
    case 'MIT':
      return '![License](https://img.shields.io/badge/license-MIT-brightgreen)';;
      break;
    case 'GNU':
      return '![License](https://img.shields.io/badge/license-GNU-brightgreen)';;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'none':
      return '';
      break;
    case 'MIT':
      return 'https://opensource.org/license/mit/';
      break;
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'none':
      return '';
      break;
    case 'MIT':
      return `This project uses the MIT License, which can be found [here](${renderLicenseLink(license)}).`;
      break;
    case 'GNU':
      return `This project uses the GNU General Public License v3.0, which can be found [here](${renderLicenseLink(license)})`;
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
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
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have additional questions, my GitHub profile is [here](https://www.github.com/${data.github}). My email address is ${data.email}
`;
}

module.exports = {generateMarkdown};
