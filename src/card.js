// Function to populate manager data onto HTML card.

function generateManagerCard(manager) {
    return `
    <div class="card">
        <div class="card_top">
            <h2>
                Manager
            </h2>
            <h3>
                ${manager.name}
            </h3>
        </div>
        <div class="card_bottom">
            <p>Id: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>`;
};


// Function to populate engineer data onto HTML cards depending on how many engineers are selected in inquirer loop.

function generateEngineerCards(engineers) {
    let finalCard = ``;
    for(let i=0; i<engineers.length; i++){
        let engineer = engineers[i];
        let engineerCard = `
    <div class="card">
        <div class="card_top">
            <h2>
                Engineer
            </h2>
            <h3>
                ${engineer.name}
            </h3>
        </div>
        <div class="card_bottom">
        <p>Id: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>GitHub Username: <a href="https://github.com/${engineer.gitHub}/">${engineer.gitHub}</a></p>
        </div>
    </div>`

    // The following conditional cleans up the HTML file for readability by adding space between multiple engineer cards instead of stacking the beginning divs back to back. 
    
        if (engineers.length>1) {
            engineerCard += `
            `
        };
        finalCard = finalCard + engineerCard;
    }
    return finalCard;
};


// Function to populate intern data onto HTML cards depending on how many engineers are selected in inquirer loop.

function generateInternCards(interns) {
    let finalCard = ``;
    for(let i=0; i<interns.length; i++){
        let intern = interns[i];
        let internCard =  `
    <div class="card">
        <div class="card_top">
            <h2>
                Intern
            </h2>
            <h3>
                ${intern.name}
            </h3>
        </div>
        <div class="card_bottom">
            <p>Id: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>`

    // The following conditional cleans up the HTML file for readability by adding space between multiple intern cards instead of stacking the beginning divs back to back.

    if (interns.length>1) {
        internCard += `
        `
    };
        finalCard = finalCard + internCard;
    }
    return finalCard;
};

module.exports = {generateManagerCard, generateEngineerCards, generateInternCards}