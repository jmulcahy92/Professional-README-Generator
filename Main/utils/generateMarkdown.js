// returns string for rendering license badge on README, or empty string for no license
function renderLicenseBadge(license) {
  // switch statement for our three possible licenses
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

// returns url to license, or empty string for no license
function renderLicenseLink(license) {
  // switch statement for our three possible licenses
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

// returns string for license section, including rendered url
function renderLicenseSection(license) {
  // switch statement for our three possible licenses
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

// returns string for README file
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

// export generateMarkdown so we can use it in index.js
module.exports = {generateMarkdown};