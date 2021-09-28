import arweave from "../src/arweave.js";

// Logs the status of the passed-in transaction
async function getTransactionStatus(txId) {
  const status = await arweave.transactions.getStatus(txId);
  console.log("transaction status", status);
}

getTransactionStatus("iEMZ73ibIGsc3fKTtTaX379iu_txPjX1spje_icV1Gc");
