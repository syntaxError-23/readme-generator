const fs = require('fs');
const inquirer = require('inquirer');

const writeReadme = content => {
    fs.writeFile('README.md', content, err => {
        err ? console.error(err) : console.log('Your readme is ready!');
    })
}

inquirer
.prompt([
    {
    type: 'input',
    message: 'Enter the title of your project:',
    name: 'title',

    },
    {
    type: 'input',
    message: 'Enter a description of your project:',
    name: 'description',

    },
    {
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'installation',

    },
    {
    type: 'input',
    message: 'Enter usage information:',
    name: 'usage',

    },
    {
    type: 'list',
    message: 'Choose a license for your application:',
    name: 'license',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    },
    {
    type: 'input',
    message: 'Enter contribution guidelines:',
    name: 'contributing',

    },
    {
    type: 'input',
    message: 'Enter test instructions:',
    name: 'tests',

    },
    {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'username',

    },
    {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
    },
])
.then((response) => {
    const readmeContent = 
`

# ${response.title}

## Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
[![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-orange)](https://opensource.org/licenses/${response.license})

This application uses the ${response.license} license.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
If you have any questions, you can send me an email at [${response.email}] or head over to my GitHub profile at [https://github.com/${response.username}](https://github.com/${response.username}).
`;
    writeReadme(readmeContent);
});
 
