import { ArweaveSigner, createData } from "arbundles";

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

/**
 * Uses arbundles to get guaranteed txid.
 *
 * If you just use arweave.transactions.post(transaction), the tx may fail to get confirmed and mined.
 * That means https://arweave.net/TX_ID may work initially, but will eventually stop working.
 */
const sendToBundler = async () => {
  const jwk = JSON.parse(process.env.KEY);
  const signer = new ArweaveSigner(jwk);
  const item = createData("hello", signer);
  await item.sign(signer);
  // This transaction ID is guaranteed to be usable
  console.log("item id", item.id);

  const response = await item.sendToBundler("http://bundler.arweave.net:10000");
  console.log("bundler response status", response.status);

  // Read back data
  // Don't use arweave.transactions.getData, data is not available instantly via
  // that API (it results in a TX_PENDING error). Here's the explanation from Discord:
  //
  // but essentially if /{txid} returns 202
  // it's "pending"
  // which with regular txs is true
  // but it also returns 202 for unseeded Bundlr txs
  // so the data exists in Bundlr - but not on L1 (Arweave)
  const data = await axios.get(`https://arweave.net/${item.id}`);
  console.log("data", data.data);
};

sendToBundler();
