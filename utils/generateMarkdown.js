// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
}

console.log(renderLicenseBadge("Apache"));


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    return "";
  }
}

console.log(renderLicenseLink("Apache"));

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return "## License\nThis project is licensed under the Apache License 2.0 - see the [LICENSE.txt](LICENSE.txt) file for details\n";
  }
}

console.log(renderLicenseSection("Apache"));


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
  
## Table of Contents
* [Features](#Features)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [built](#built)
* [License](#license)
* [Tests](#tests)
  
## Installation
\`\`\`
${data.installation}
\`\`\`
  
## Usage
${data.usage}
  
## Contribution
${data.contribution}
  
## Tests
\`\`\`
${data.tests}
\`\`\`
`;
}

module.exports = generateMarkdown;