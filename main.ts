import { program } from "npm:commander";

import { run } from "./mcp/server.ts";

program
  .name("deno-mcp-server")
  .description("template for MCP server creation by Deno")
  .version("0.1.0");
program.parse();

try {
  await run();
} catch (e) {
  console.error("Error running bot", e);
}
