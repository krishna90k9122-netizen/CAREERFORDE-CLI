import figlet from "figlet";
import chalk from "chalk";

export default function banner() {
  console.clear();

  console.log(
    chalk.blueBright.bold(
      figlet.textSync("CareerForge", {
     font: "ANSI Shadow",
        horizontalLayout: "default",
      })
    )
  );

  console.log(chalk.yellow.bold("🚀 AI Career Assistant CLI"));
  console.log(chalk.gray("--------------------------------------------"));
  console.log(chalk.green("Version   : 1.0.0"));
  console.log(chalk.green("Developer : Krishna Gupta"));
  console.log(chalk.gray("--------------------------------------------\n"));
}