#!/usr/bin/env node
import fs from "fs";
import { Command } from "commander";

// Declare the program
const program = new Command();

// Add action to the program
program
  .argument("<string>", "String to log")
  .option("-u, --upper", "Convert to uppercase")
  .action((message: string, options: { upper: boolean }) => {
    if (options.upper) {
      console.log(message.toUpperCase());
    } else {
      console.log(message);
    }
  })
  .description("Say Hello");

program
  .command("add <numbers...>")
  .action((numbers: number[]) => {
    const total = numbers.reduce((a, b) => a + b, 0);
    console.log(`Total: ${total}`);
  })
  .description("Add numbers");

// Execute the CLI with the arguments
program.parse(process.argv);
