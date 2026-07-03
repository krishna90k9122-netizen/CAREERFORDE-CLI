console.log(chalk.cyan.bold("📊 AI GitHub Analysis"));

const {path} = await inquirer.prompt([
    {
        type: "input",
        name: "path",
        message: "Enter the path to your local GitHub repository:"
    }
]);
    const spinner =ora("Reading Resume....").start();

    try{
        const resumeText = await parseResume(path);
         spinner.succeed("Resume parsed successfully!");
        console.log("\n======================================");
        console.log(chalk.cyan.bold("📄 Resume Content"));
        console.log(resumeText.substring(0, 800));
        console.log("======================================\n");
       
        console.log(resumeText);
    } catch (error) {
        spinner.fail("Failed to parse resume.");
        console.error("Error:", error);
    }