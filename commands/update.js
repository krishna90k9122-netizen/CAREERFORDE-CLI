import inquirer from "inquirer";
import chalk from "chalk";
import { getUser, saveUser } from "../services/userService.js";

export default async function updateProfile() {

    console.clear();

    const user = getUser();

    if (!user) {
        console.log(chalk.red("❌ No user found."));
        console.log(chalk.yellow("Please login first."));
        return;
    }

    console.log(chalk.cyan.bold("✏️ Update Profile\n"));

    const updatedUser = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Your Name:",
            default: user.name
        },
        {
            type: "input",
            name: "email",
            message: "Enter Your Email:",
            default: user.email
        },
        {
            type: "select",
            name: "domain",
            message: "Choose Your Domain:",
            default: user.domain,
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

    saveUser(updatedUser);

    console.log(chalk.green("\n✅ Profile Updated Successfully!"));
}