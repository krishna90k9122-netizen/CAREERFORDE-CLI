import inquirer from "inquirer";
import chalk from "chalk";

import { fetchGitHubProfile } from "../services/githubService.js";
import { getUser, saveUser } from "../services/userService.js";
import { analyzeUser } from "../services/githubServices.js";
import { fetchRepositories } from "../services/githubService.js";
import { githubStats } from "../services/githubstats.js";

export default async function github() {

    console.clear();

    console.log(chalk.cyan.bold("🐙 GitHub Connect\n"));

    const { username } = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter GitHub Username:"
        }
    ]);

    console.log(chalk.yellow("\nFetching GitHub Profile...\n"));

    const profile = await fetchGitHubProfile(username);
    const analysis = analyzeUser(profile);
    const repos= await fetchRepositories(username);
    const stats= githubStats(repos);

    if (!profile) {
        console.log(chalk.red("❌ GitHub User Not Found."));
        return;
    }

    console.log(chalk.green("✅ GitHub Connected!\n"));

    console.log("======================================");
    console.log(`👤 Name          : ${profile.name}`);
    console.log(`🆔 Username      : ${profile.login}`);
    console.log(`👥 Followers     : ${profile.followers}`);
    console.log(`➡️ Following     : ${profile.following}`);
    console.log(`📦 Repositories  : ${profile.public_repos}`);
    console.log(`🌍 Profile URL   : ${profile.html_url}`);
    console.log("======================================");

    const user = getUser();

    user.github = {
        username: profile.login,
        name: profile.name,
        followers: profile.followers,
        following: profile.following,
        repositories: profile.public_repos,
        profileUrl: profile.html_url
    };

    saveUser(user);

    console.log(chalk.green("\n✔ GitHub Profile Saved Successfully."));


console.log("\n======================================");
console.log(chalk.cyan.bold("📊 AI GitHub Analysis"));
console.log("======================================");

console.log(`⭐ GitHub Score : ${analysis.score}/10`);

console.log(chalk.green("\n✅ Strengths"));

analysis.strengths.forEach((item) => {
    console.log(`• ${item}`);
});

console.log(chalk.yellow("\n⚠ Needs Improvement"));

analysis.improvements.forEach((item) => {
    console.log(`• ${item}`);
});

console.log("\n📊 Repository Statistics\n");

console.log(`📦 Total Repositories : ${stats.totalRepos}`);
console.log(`⭐ Total Stars        : ${stats.totalStats}`);
console.log(`🍴 Total Forks        : ${stats.totalForks}`);

console.log("\n💻 Languages");

Object.entries(stats.languages).forEach(([lang, count]) => {
    console.log(`• ${lang} : ${count}`);
});
}
