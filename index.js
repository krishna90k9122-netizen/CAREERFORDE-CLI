#!/usr/bin/env node

import { Command } from "commander";
import banner from "./utils/banner.js";
import hello from "./commands/hello.js";
import login from "./commands/login.js";
import dashboard from "./commands/dashboard.js";
import profile from "./commands/profile.js";

await login();

const program = new Command();

banner();

// program
//     .name("careerforge")
//     .description("AI Career Assistant CLI")
//     .version("1.0.0");

// program
//     .command("hello")
//     .description("Test command")
//     .action(() => {
//         hello();
//     });

program
    .command("login")
    .description("Login to CareerForge")
    .action(async () => {
        await login();
    });

program
  .command("dashboard")
  .description("Open CareerForge Dashboard")
  .action(async () => {
    await dashboard();
  });

  program
    .command("profile")
    .description("Show user profile")
    .action(() => {
        profile();
    });

program.parse();

