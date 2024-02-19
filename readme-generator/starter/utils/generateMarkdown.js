// function to generate markdown for README
function generateMarkdown(data) {

    // function to generate license badge
    function generateLicenseBadge(license) {
        let badge;
        switch (license) {
            case 'MIT license':
                badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                break;
            case 'GNU General Public License':
                badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                break;
            case 'Creative Commons Licenses':
                badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)';
                break;
            case 'Apache License':
                badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                break;
            case 'BSD License':
                badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
                break;
            default:
                badge = '';
                break;
        }
        return badge;
    }

    // Generate the license badge
    const licenseBadge = generateLicenseBadge(data.license);

    return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
This application is covered under the ${data.license}.

## Questions
For any questions about the project, feel free to reach out via the [GitHub repository](https://github.com/${data.username}/${data.repository}) or email at ${data.email}.

`;
}

module.exports = generateMarkdown;