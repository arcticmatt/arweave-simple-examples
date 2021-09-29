import arweave from "../src/arweave.js";

/**
 * Logs the status of the passed-in transaction
 */
async function getTransactionStatus(txId) {
  const status = await arweave.transactions.getStatus(txId);
  console.log("transaction status", status);
}

getTransactionStatus(
  process.argv[2] ?? "KSgaCIK_5UMlMz_k7wjOZqNckGl-sqDjfxqc2iu5BvY"
);
