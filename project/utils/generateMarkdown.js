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

  # Table of Contents
  * [Description](#description)
  * [installation](#installation)
  * [Description](#description)
  * [Description](#description)
  * [Description](#description)
  * [Description](#description)
  * [Description](#description)
  * [About Me](#About)
  
  
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}
  
  ## Contribution:
  ${data.contribution}
  
  ## Test:
  ${data.test}
  
  ## License:
  ${data.license}
  
  ## About:
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
