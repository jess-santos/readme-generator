const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
            type: 'input',
            name: 'description',
            message: 'Enter the description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution instructions:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions:',
        },
        {
            type: 'list',
            name: 'license',
            choices: [
                'MIT license',
                'GNU General Public License',
                'Creative Commons Licenses',
                'Apache License',
                'BSD License']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'repository',
            message: 'Enter the name of your GitHub repository:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },
    ];

// inquirer.prompt(questions)

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Genarating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });

}


// function call to initialize program
init();


