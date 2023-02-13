// Imports necessary npm packages. 

const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


// Imports information for generating HTML and card data.

const generateHTML = require('./src/html');
const {generateManagerCard, generateEngineerCards, generateInternCards} = require('./src/card');
    

// Imports classes that will be used by passing user responses through them. 

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Array of questions that will be passed through the Inquirer. 

const questions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "manager_name"
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "manager_id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "manager_email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "manager_number"
    },
    {
        type: 'loop',
        message: "Would you like to add a member to your team?",
        name: "add_member",
        questions: [
        {
            type: "list",
            message: "Which role will this employee have?",
            name: "employee_selection",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            message: "What is your team member's name?",
            name: "member_name",
        },
        {
            type: "input",
            message: "What is your team member's id number?",
            name: "member_id",
        },
        {
            type: "input",
            message: "What is your team member's email?",
            name: "member_email",
        },
        {
            type: "input",
            message: "What is your team member's GitHub username?",
            name: "member_github",
            when: (answer) => answer.employee_selection === "Engineer",
        },
        {
            type: "input",
            message: "What is your team member's school affiliation?",
            name: "member_school",
            when: (answer) => answer.employee_selection === "Intern",
        }]
    },
];


// Function to start the application. 

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);


        // Sets up loop with variable based on the number of employees the user added in the Inquirer loop. Creates new instance of the Manager class based on user response, and creates empty array of engineers and interns.

        const employeeNumber = response.add_member;
        const manager = new Manager(response.manager_name, response.manager_id, response.manager_email, response.manager_number);
        const engineerArray = [];
        const internArray = [];


        // Creates new instances of Engineer and Intern classes based on user response. Pushes new instances to empty arrays.

        for(let i = 0; i < employeeNumber.length; i++) {
            const employees = employeeNumber[i]
            if (employees.employee_selection === "Engineer") {
                const engineer = new Engineer(employees.member_name, employees.member_id, employees.member_email, employees.member_github);
                engineerArray.push(engineer);
            } else if (employees.employee_selection === "Intern") {
                const intern = new Intern(employees.member_name, employees.member_id, employees.member_email, employees.member_school);
                internArray.push(intern);
            }
        };
        

        // Data passed through manager, engineer, and intern card functions gets stored in a variable, and these variables are passed through a function that generates the HTML. 

        const managerCard = generateManagerCard(manager);
        const engineerCard = generateEngineerCards(engineerArray);
        const internCard = generateInternCards(internArray);
        const html = generateHTML(managerCard, engineerCard, internCard);


        // Uses the fs module to write the new html file to the ./dist folder. 

        fs.writeFile('./dist/index.html', html, (error) =>
        error ? console.error(error) : console.log("HTML page successfully generated.")
    );
    }
)};


// Calls function to initialize application. 

init();

