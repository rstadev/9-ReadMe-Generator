

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
  return `
  # ${data.title}



  <!-- Titled description for grading clarity. Will remove after grading -->
  ## Description
  ${data.description}
  
  
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### License
  
  ### Contributing
  ${data.contributing}

  ### Tests
  
  ### Contact Me & Questions
  ${data.user}<br>
  ${data.email}

`;
}

module.exports = generateMarkdown;
