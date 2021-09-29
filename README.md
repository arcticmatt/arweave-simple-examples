# Simple examples that show how to use Arweave

See https://pencilflip.medium.com/how-to-use-arweave-to-store-and-access-nft-metadata-823552293f62 for a more in-depth walkthrough.

## Setup

In order to run this code, you need to generate a new Arweave wallet. Follow https://docs.arweave.org/info/wallets/arweave-web-extension-wallet#new-users-generating-your-wallet in order to do this. Once you do it, create a `.env` file and set `KEY=YOUR_KEY`.

## Running the code

There are five scripts.

1. `yarn readAccount`—this is a simple example of how to read basic data about your Arweave wallet.
2. `yarn readTx TX_ID`—reads the data of a transaction.
3. `yarn txStatus TX_ID`—this gets the status of a single transaction.
4. `yarn submitTx`—shows how to submit a transaction using `arweave.transactions.post` and read the data back.
5. `yarn arbundles`—shows how to submit a transaction using `arbundles` (which is more robust than `arweave.transactions.post`) and read the data back.

## Misc

Useful sites:

1. https://viewblock.io/arweave/address/YOUR_ADDRESS. You can go here to view all your confirmed and mined transactions.
