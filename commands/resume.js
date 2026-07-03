
// import chalk from "chalk";
// import inquirer from "inquirer";
// import ora from "ora";
// import { parseResume } from "../services/resumeService.js";

// async function resume() {
   
//     console.log(chalk.cyan.bold("📄 AI Resume Analysis\n"));

//     const { path } = await inquirer.prompt([
//         {
//             type: "input",
//             name: "path",
//             message: "Enter the path to your local resume file:"
//         }
//     ]);

//     const spinner = ora("Reading Resume...").start();

//     try {
//         const resumeText = await parseResume(path);

//         spinner.succeed("Resume parsed successfully!");

//         console.log("\n======================================");
//         console.log(chalk.cyan.bold("📄 Resume Content"));
//         console.log(resumeText.substring(0, 800));
//         console.log("======================================\n");
//     } catch (error) {
//         spinner.fail("Failed to parse resume.");
//         console.error(error);
//     }
// }

// export default resume;


import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import { parseResume } from "../services/resumeService.js";

export default async function resume() {

    console.clear();

    console.log(chalk.cyan.bold("📄 AI Resume Analysis\n"));

    const { path } = await inquirer.prompt([
        {
            type: "input",
            name: "path",
            message: "Enter the full path to your Resume (.pdf):"
        }
    ]);

    // Remove quotes if user pasted "C:\...\resume.pdf"
    const cleanPath = path.replace(/^"(.*)"$/, "$1").trim();

    const spinner = ora("Reading Resume...").start();

    try {

        const resumeText = await parseResume(cleanPath);

        spinner.succeed("Resume Parsed Successfully!\n");

        console.log(chalk.green.bold("========== Resume Preview ==========\n"));

        console.log(
            resumeText.length > 1000
                ? resumeText.substring(0, 1000) + "..."
                : resumeText
        );

        console.log(chalk.green("\n===================================="));

    } catch (error) {

        spinner.fail("Failed to parse resume.");

        console.log(chalk.red(error.message));
    }
}