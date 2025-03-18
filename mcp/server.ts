import { McpServer } from "npm:@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "npm:@modelcontextprotocol/sdk/server/stdio.js";

import { setup as setupString } from "./handlers/string.ts";

const server = new McpServer({
  name: "traQ",
  version: "0.1.0",
});

export const run = async () => {
  try {
    setupString(server);

    await server.connect(new StdioServerTransport());
  } catch (e) {
    console.error("Error running server", e);
  }
};
