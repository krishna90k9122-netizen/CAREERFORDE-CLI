#!/usr/bin/env node

import { Command } from "commander";

import banner from "./utils/banner.js";

import login from "./commands/login.js";
import dashboard from "./commands/dashboard.js";
import profile from "./commands/profile.js";
import updateProfile from "./commands/update.js";
import logout from "./commands/logout.js";

const program = new Command();

// Show Banner
banner();

// CLI Information

program
  .name("careerforge")
  .description("🚀 AI Career Assistant CLI")
  .version("1.0.0");

// Login
program
  .command("login")
  .description("Login to CareerForge")
  .action(async () => {
    await login();
  });

// Dashboard
program
  .command("dashboard")
  .description("Open CareerForge Dashboard")
  .action(async () => {
    await dashboard();
  });

// Profile
program
  .command("profile")
  .description("Show User Profile")
  .action(() => {
    profile();
  });

// Update Profile
program
  .command("update")
  .description("Update User Profile")
  .action(async () => {
    await updateProfile();
  });

// Logout
program
  .command("logout")
  .description("Logout from CareerForge")
  .action(async () => {
    await logout();
  });

// Parse Commands
program.parse();