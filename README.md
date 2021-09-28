# A simple read/write Arweave example

## Setup

In order to run this code, you need to generate a new Arweave wallet. Follow https://docs.arweave.org/info/wallets/arweave-web-extension-wallet#new-users-generating-your-wallet in order to do this. Once you do it, create a `.env` file and set `KEY=YOUR_KEY`.

## Running the code

There are three scripts.

1. `yarn read`—this is a simple example of how to read basic data about your Arweave wallet.
2. `yarn txStatus`—this gets the status of a single transaction. It can take a while for a transaction to be mined and confirmed. However, even while a transaction is still processing, you can read the data with `getData` or by going to `https://arweave.net/TX_ID`.
3. `yarn submitTx`—the most involved example, shows how to submit a transaction and read the data back.

## Misc

Useful sites:

1. https://viewblock.io/arweave/address/YOUR_ADDRESS. You can go here to view all your confirmed and mined transactions.
