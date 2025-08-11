#!/usr/bin/env node
import { ChessServer } from "./index.js";

const server = new ChessServer();
server.run().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
