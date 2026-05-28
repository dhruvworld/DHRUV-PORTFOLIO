import { spawn } from "node:child_process";

const commands = [
  ["npm", ["run", "lint"]],
  ["npm", ["run", "build"]],
];

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", shell: true });
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(" ")} failed with code ${code}`));
      }
    });
  });
}

async function main() {
  for (const [command, args] of commands) {
    await run(command, args);
  }
  console.log("Verification complete: lint and build passed.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
