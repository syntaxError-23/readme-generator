const fs = require('fs');
const inquirer = require('inquirer');

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