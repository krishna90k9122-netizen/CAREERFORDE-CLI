#!/usr/bin/env node


import { Command } from "commander";
import banner from "./utils/banner.js";
import hello from "./commands/hello.js";

const program = new Command();

banner();

program
    .name("careerforge")
    .description("AI Career Assistant CLI")
    .version("1.0.0");

program
    .command("hello")
    .description("Test command")
    .action(() => {
        hello();
    });

program.parse();