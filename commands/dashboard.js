import inquirer from "inquirer";

export default async function dashboard() {
  while (true) {
    console.clear();

    console.log("========================================");
    console.log("🚀 CareerForge CLI");
    console.log("========================================\n");

    const { option } = await inquirer.prompt([
      {
        type: "select",
        name: "option",
        message: "Choose an option",
        choices: [
          "🔐 Login",
          "📊 Analyze",
          "📄 Resume",
          "🐙 GitHub",
          "🛣️ Roadmap",
          "🎤 Interview",
          "📅 Daily Challenge",
          "🤖 Coach",
          "📈 Report",
          "❌ Exit"
        ]
      }
    ]);

    switch (option) {
      case "🔐 Login":
        console.log("Login Coming Soon...");
        break;

      case "📊 Analyze":
        console.log("Analyze Coming Soon...");
        break;

      case "📄 Resume":
        console.log("Resume Coming Soon...");
        break;

      case "🐙 GitHub":
        console.log("GitHub Coming Soon...");
        break;

      case "🛣️ Roadmap":
        console.log("Roadmap Coming Soon...");
        break;

      case "🎤 Interview":
        console.log("Interview Coming Soon...");
        break;

      case "📅 Daily Challenge":
        console.log("Daily Challenge Coming Soon...");
        break;

      case "🤖 Coach":
        console.log("Coach Coming Soon...");
        break;

      case "📈 Report":
        console.log("Report Coming Soon...");
        break;

      case "❌ Exit":
        console.log("👋 Thanks for using CareerForge!");
        process.exit();
    }

    await inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: "Press Enter to continue..."
      }
    ]);
  }
}