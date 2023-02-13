// Function to generate HTML template.

function generateHTML(managerCard, engineerCard, internCard) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css"></link>
</head>

<body>
    <header class="header">
        <h1>MY TEAM</h1>
    </header>
    
    <div class="container">

    ${managerCard}

    ${engineerCard}

    ${internCard}

    </div>
    
</body>
</html>    
    `
};

module.exports = generateHTML;