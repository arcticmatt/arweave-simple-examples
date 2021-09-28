import arweave from "../src/arweave.js";
import dotenv from "dotenv";
dotenv.config();

// Reads the data of a transaction
async function readTx(txId) {
  const transactionData = await arweave.transactions.getData(txId);
  console.log(
    "transaction data",
    Buffer.from(transactionData, "base64").toString()
  );
}

readTx("uu3IIkexD49QCtfWaapGTO3UsTFmQOpIgiSTE9-tNE4");
