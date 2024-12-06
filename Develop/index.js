// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
};

const licenseLinks = {
  MIT: 'https://opensource.org/licenses/MIT',
  Apache: 'https://opensource.org/licenses/Apache-2.0',
  GPL: 'https://www.gnu.org/licenses/gpl-3.0',
  ISC: 'https://opensource.org/licenses/ISC',
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: colors.green('What is the Title of your project?'),
    },
    {
      type: 'input',
      name: 'description',
      message: colors.green('Please provide a brief description of your project.'),
    },
    {
      type: 'input',
      name: 'installation',
      message: colors.green('Please describe the installation process of your project.'),
    },
    {
      type: 'input',
      name: 'usage',
      message: colors.green('Please provide a brief description on how to use your ReadMe generator.'),
    },
    {
      type: 'input',
      name: 'contribute',
      message: colors.green('Please provide a brief guide on how to contribute to your project.'),
    },
    {
      type: 'input',
      name: 'tests',
      message: colors.green('Please provide a brief description on how to test your project.'),
    },
    {
      type: 'list',
      name: 'license',
      message: colors.green('Choose a license for your project:'),
      choices: Object.keys(licenseBadges),
    },
    {
        type: 'input',
        name: 'github',
        message: colors.green('What is your GitHub username?'),
    },
    {
        type: 'input',
        name: 'email',
        message: colors.green('What is your email address?'),
    }
])
.then((answers) => {


// TODO: Create a function to write README file
fs.writeFile('README.md', generateMarkdown(answers), (err) => {
    if (err) {
      console.error('Error writing README.md'.red, err);
    } else {
      console.log('README.md has been generated successfully!'.green);
    }
  });
})
.catch((err) => {
  console.error('Error:'.red, err);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();