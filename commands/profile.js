import chalk from "chalk";
import { getUser } from "../services/userService.js";

export default function profile() {

    console.clear();

    const user = getUser();

    if (!user) {
        console.log(chalk.red("❌ No user found."));
        console.log(chalk.yellow("Please login first."));
        return;
    }

    console.log(chalk.cyan.bold("👤 CareerForge Profile\n"));

    console.log("====================================");
    console.log(`👤 Name            : ${user.name}`);
    console.log(`📧 Email           : ${user.email}`);
    console.log(`💻 Domain          : ${user.domain}`);
    console.log(`🐙 GitHub          : Not Connected`);
    console.log(`💼 LinkedIn        : Not Connected`);
    console.log(`📄 Resume          : Not Uploaded`);
    console.log(`🎯 Dream Company   : Not Selected`);
    console.log("====================================");
}