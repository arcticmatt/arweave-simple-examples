import arweave from "../src/arweave.js";
import dotenv from "dotenv";
dotenv.config();

/**
 * Reads the data of a transaction
 *
 * An alternative implementation would call axios.get(`https://arweave.net${txId}`)
 */
async function readTx(txId) {
  const transactionData = await arweave.transactions.getData(txId);
  console.log(
    `transaction data for ${txId}`,
    Buffer.from(transactionData, "base64").toString()
  );
}

readTx(process.argv[2] ?? "Ox6IZga4IgkX5ewd6hqKyHHC5mBzjexssX59vTCykRs");
