# Deploy and Verify Tellor Zodiac Module

This is an updated repo for deploying and verifying the [Tellor Zodiac Module](https://github.com/tellor-io/snapshot-zodiac-module/tree/tellor), based on the [hardhat setup here](https://hardhat.org/hardhat-runner/docs/guides/verifying).

## Setup Config Variables
Setup config variables for `INFURA_API_KEY`, `PK`, and `ETHERSCAN_API_KEY`:

`npx hardhat vars set INFURA_API_KEY`

## Deploy
Deploy the contract:

`npx hardhat ignition deploy ignition/modules/TellorZodiacModule.js --network sepolia --deployment-id sepolia-deployment`

## Verify
Verify the contract:

`npx hardhat ignition verify sepolia-deployment`