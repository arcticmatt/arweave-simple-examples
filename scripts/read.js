import arweave from "../src/arweave.js";
import dotenv from "dotenv";
dotenv.config();

// Reads and logs some basic data about the Arweave account
async function read() {
  const key = JSON.parse(process.env.KEY);

  const address = await arweave.wallets.jwkToAddress(key);
  console.log("address", address);

  const lastTransactionId = await arweave.wallets.getLastTransactionID(address);
  console.log("lastTransactionId", lastTransactionId);
}

read();
