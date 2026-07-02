import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";

const FILE_PATH = "./storage/user.json";

export default async function logout() {

    console.clear();

    const { confirm } = await inquirer.prompt([
        {
            type: "confirm",
            name: "confirm",
            message: "Are you sure you want to logout?"
        }
    ]);

    if (!confirm) {
        console.log(chalk.yellow("\nLogout cancelled."));
        return;
    }

    fs.writeFileSync(FILE_PATH, "{}");

    console.log(chalk.green("\n✅ Logout Successful!"));
}