// import inquirer from "inquirer";
// import chalk from "chalk";
// import { saveUser } from "../services/userService.js";

// export default async function login() {

//     console.clear();

//     console.log(chalk.cyan.bold("🔐 CareerForge Login\n"));


//     const user = await inquirer.prompt([

//         {
//             type: "input",
//             name: "name",
//             message: "Enter Name"
//         },

//         {
//             type: "input",
//             name: "email",
//             message: "Enter Email"
//         },

//         {
//             type: "select",
//             name: "domain",
//             message: "Choose Domain",

//             choices: [

//                 "Full Stack",

//                 "Frontend",

//                 "Backend",

//                 "Python",

//                 "Java",

//                 "AI/ML"

//             ]

//         }

//     ]);

//     saveUser(user);

//     console.log("\n====================================");
//     console.log(chalk.green("✅ Login Successful!\n"));
//     console.log(`👤 Name : ${user.name}`);
//     console.log(`📧 Email : ${user.email}`);
//     console.log(`💻 Domain : ${user.domain}`);
//     console.log("====================================");
// }

import inquirer from "inquirer";
import chalk from "chalk";
import { saveUser } from "../services/userService.js";

export default async function login() {

    console.clear();

    console.log(chalk.cyan.bold("🔐 CareerForge Login\n"));

    const user = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Your Name:",
            validate: (input) =>
                input.trim() !== "" || "Name cannot be empty!"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Your Email:",
            validate: (input) =>
                input.includes("@") || "Enter a valid email!"
        },
        {
            type: "select",
            name: "domain",
            message: "Choose Your Domain:",
            choices: [
                "Full Stack",
                "Frontend",
                "Backend",
                "Python",
                "Java",
                "AI/ML"
            ]
        }
    ]);

    saveUser(user);

    console.clear();

    console.log(chalk.green.bold("✅ Login Successful!\n"));

    console.log(chalk.yellow("===================================="));
    console.log(`👤 Name   : ${user.name}`);
    console.log(`📧 Email  : ${user.email}`);
    console.log(`💻 Domain : ${user.domain}`);
    console.log(chalk.yellow("===================================="));
    
}