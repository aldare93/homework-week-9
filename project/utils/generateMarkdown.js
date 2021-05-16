function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  * [Description](#description)
  * [installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  * [About Me](#about)
  
  
  ## **Description**:
  ${data.description}
  
  ## **Installation**:
  ${data.installation}
  
  ## **Usage**:
  ${data.usage}
  
  ## **Contribution**:
  ${data.contribution}
  
  ## **Test**:
  ${data.test}
  
  ## **License**:
  ${data.license}
  
  ## **About**:
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
