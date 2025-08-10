# Web3 dApp Interface

This project is a front-end interface for a decentralized application (dApp) that interacts with both EVM-compatible (like Ethereum) and Solana blockchains.

## Overview

The interface provides a user-friendly way to perform common Web3 actions, such as:

- Staking and unstaking tokens.
- Claiming rewards.
- Registering and managing nodes.

Currently, this application runs in a **mock mode**. All blockchain interactions are simulated locally in your browser, so no real wallet, funds, or network connection are required. This allows for safe testing and demonstration of the dApp's functionality.

## Features

The dApp is split into two main sections, one for EVM chains and one for Solana.

### EVM (Ethereum) Features

- **Reward System**:
- Stake and unstake mock tokens.
- Earn mock rewards.
- Check your mock token balance and staked amount.
- **Node Management**:
- Register a new node for your address.
- Activate or deactivate your node.
- Look up information about any registered node by its owner's address.

### Solana Features

- **Reward System**:
- Stake and unstake mock tokens.
- Earn mock rewards.
- Check your mock token balance and staked amount.
- **Node Management**:
- Register a new node for your public key.
- Activate or deactivate your node.
- Look up information about any registered node by its owner's public key.

## How to Use

1. Open `index.html` in a web browser.
2. The interface will load with pre-configured mock accounts and data.
3. Interact with the different sections by entering values into the input fields and clicking the corresponding buttons.
4. Transaction results and state changes will be reflected in the UI and logged to the browser's developer console.

## Mock Environment Details

- **Your Mock EVM Address:** `0xCurrentUserAddress12345678901234567890`
- **Your Mock Solana Public Key:** `SolCurrentUserAddressRULzE1234567890123`

The application state (balances, staked amounts, nodes) is stored in-memory and will reset on page reload.
