// --- Mock Web3 Environment ---

// EVM (Ethereum) State
let evmState = {
    balance: 1000,
    stakedAmount: 0,
    nodes: {
        "0x1234567890123456789012345678901234567890": {
            type: "validator",
            active: true
        }
    }
};

// Solana State
let solanaState = {
    balance: 500,
    stakedAmount: 0,
    nodes: {
        "SoL4NaRULzE12345678901234567890123456789012": {
            type: "validator",
            active: true
        }
    }
};

const MOCK_CURRENT_USER_EVM = "0xCurrentUserAddress12345678901234567890";
const MOCK_CURRENT_USER_SOLANA = "SolCurrentUserAddressRULzE1234567890123";

// --- Helper Functions ---
function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInputValueAsNumber(id) {
    const value = document.getElementById(id).value;
    return value ? parseFloat(value) : 0;
}

function clearInput(id) {
    document.getElementById(id).value = '';
}

function showLoading(elementId, message) {
    document.getElementById(elementId).innerText = message || 'Processing...';
}

// --- EVM (Ethereum) Mock Functions ---

function stakeTokens() {
    const amount = getInputValueAsNumber('stakeAmount');
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (amount > evmState.balance) {
        alert("Insufficient balance.");
        return;
    }
    
    console.log(`(Mock EVM) Staking ${amount} tokens for ${MOCK_CURRENT_USER_EVM}`);
    setTimeout(() => { // Simulate network delay
        evmState.balance -= amount;
        evmState.stakedAmount += amount;
        alert("Stake successful!");
        clearInput('stakeAmount');
        checkBalance();
        checkStakedAmount();
    }, 500);
}

function unstakeTokens() {
    const amount = getInputValueAsNumber('unstakeAmount');
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (amount > evmState.stakedAmount) {
        alert("Insufficient staked amount.");
        return;
    }

    console.log(`(Mock EVM) Unstaking ${amount} tokens for ${MOCK_CURRENT_USER_EVM}`);
    setTimeout(() => {
        evmState.stakedAmount -= amount;
        evmState.balance += amount;
        alert("Unstake successful!");
        clearInput('unstakeAmount');
        checkBalance();
        checkStakedAmount();
    }, 500);
}

function earnReward() {
    const amount = getInputValueAsNumber('rewardAmount');
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    console.log(`(Mock EVM) Earning reward of ${amount} for ${MOCK_CURRENT_USER_EVM}`);
    setTimeout(() => {
        evmState.balance += amount;
        alert("Reward claimed!");
        clearInput('rewardAmount');
        checkBalance();
    }, 500);
}

function checkBalance() {
    document.getElementById("balanceResult").innerText = `Balance: ${evmState.balance.toFixed(2)} Tokens`;
}

function checkStakedAmount() {
    document.getElementById("stakedAmountResult").innerText = `Staked: ${evmState.stakedAmount.toFixed(2)} Tokens`;
}

function registerNode() {
    const nodeType = getInputValue('nodeType').trim();
    if (!nodeType) {
        alert("Please enter a node type.");
        return;
    }

    console.log(`(Mock EVM) Registering node for ${MOCK_CURRENT_USER_EVM} with type ${nodeType}`);
    setTimeout(() => {
        evmState.nodes[MOCK_CURRENT_USER_EVM] = {
            type: nodeType,
            active: false
        };
        alert(`Node registered for your address: ${MOCK_CURRENT_USER_EVM}. Please activate it.`);
        clearInput('nodeType');
    }, 500);
}

function activateNode() {
    if (!evmState.nodes[MOCK_CURRENT_USER_EVM]) {
        alert("You don't have a registered node to activate.");
        return;
    }
    console.log(`(Mock EVM) Activating node for ${MOCK_CURRENT_USER_EVM}`);
    setTimeout(() => {
        evmState.nodes[MOCK_CURRENT_USER_EVM].active = true;
        alert("Node activated!");
    }, 500);
}

function deactivateNode() {
    if (!evmState.nodes[MOCK_CURRENT_USER_EVM]) {
        alert("You don't have a registered node to deactivate.");
        return;
    }
    console.log(`(Mock EVM) Deactivating node for ${MOCK_CURRENT_USER_EVM}`);
    setTimeout(() => {
        evmState.nodes[MOCK_CURRENT_USER_EVM].active = false;
        alert("Node deactivated!");
    }, 500);
}

function getNodeInfo() {
    const resultSpan = document.getElementById("nodeInfoResult");
    const nodeOwner = getInputValue('nodeOwner').trim();
    if (!nodeOwner) {
        resultSpan.innerText = "Please enter a node owner address.";
        return;
    }
    
    showLoading("nodeInfoResult");
    setTimeout(() => {
        const info = evmState.nodes[nodeOwner];
        if (info) {
            resultSpan.innerText = `Node Type: ${info.type}, Active: ${info.active}`;
        } else {
            resultSpan.innerText = `No node info found for address.`;
        }
    }, 500);
}

// --- Solana (SOL) Mock Functions ---

function solanaStakeTokens() {
    const amount = getInputValueAsNumber('solanaStakeAmount');
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (amount > solanaState.balance) {
        alert("Insufficient balance.");
        return;
    }
    
    console.log(`(Mock Solana) Staking ${amount} tokens for ${MOCK_CURRENT_USER_SOLANA}`);
    setTimeout(() => {
        solanaState.balance -= amount;
        solanaState.stakedAmount += amount;
        alert("Stake successful!");
        clearInput('solanaStakeAmount');
        solanaCheckBalance();
        solanaCheckStakedAmount();
    }, 500);
}

function solanaUnstakeTokens() {
    const amount = getInputValueAsNumber('solanaUnstakeAmount');
     if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (amount > solanaState.stakedAmount) {
        alert("Insufficient staked amount.");
        return;
    }

    console.log(`(Mock Solana) Unstaking ${amount} tokens for ${MOCK_CURRENT_USER_SOLANA}`);
    setTimeout(() => {
        solanaState.stakedAmount -= amount;
        solanaState.balance += amount;
        alert("Unstake successful!");
        clearInput('solanaUnstakeAmount');
        solanaCheckBalance();
        solanaCheckStakedAmount();
    }, 500);
}

function solanaEarnReward() {
    const amount = getInputValueAsNumber('solanaRewardAmount');
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    console.log(`(Mock Solana) Earning reward of ${amount} for ${MOCK_CURRENT_USER_SOLANA}`);
    setTimeout(() => {
        solanaState.balance += amount;
        alert("Reward claimed!");
        clearInput('solanaRewardAmount');
        solanaCheckBalance();
    }, 500);
}

function solanaCheckBalance() {
    document.getElementById('solanaBalanceResult').innerText = `Balance: ${solanaState.balance.toFixed(2)} Tokens`;
}

function solanaCheckStakedAmount() {
    document.getElementById('solanaStakedAmountResult').innerText = `Staked: ${solanaState.stakedAmount.toFixed(2)} Tokens`;
}

function solanaRegisterNode() {
    const nodeType = getInputValue('solanaNodeType').trim();
     if (!nodeType) {
        alert("Please enter a node type.");
        return;
    }

    console.log(`(Mock Solana) Registering node for ${MOCK_CURRENT_USER_SOLANA} with type ${nodeType}`);
    setTimeout(() => {
        solanaState.nodes[MOCK_CURRENT_USER_SOLANA] = {
            type: nodeType,
            active: false
        };
        alert(`Node registered for your public key: ${MOCK_CURRENT_USER_SOLANA}. Please activate it.`);
        clearInput('solanaNodeType');
    }, 500);
}

function solanaActivateNode() {
    if (!solanaState.nodes[MOCK_CURRENT_USER_SOLANA]) {
        alert("You don't have a registered node to activate.");
        return;
    }
    console.log(`(Mock Solana) Activating node for ${MOCK_CURRENT_USER_SOLANA}`);
    setTimeout(() => {
        solanaState.nodes[MOCK_CURRENT_USER_SOLANA].active = true;
        alert("Node activated!");
    }, 500);
}

function solanaDeactivateNode() {
     if (!solanaState.nodes[MOCK_CURRENT_USER_SOLANA]) {
        alert("You don't have a registered node to deactivate.");
        return;
    }
    console.log(`(Mock Solana) Deactivating node for ${MOCK_CURRENT_USER_SOLANA}`);
    setTimeout(() => {
        solanaState.nodes[MOCK_CURRENT_USER_SOLANA].active = false;
        alert("Node deactivated!");
    }, 500);
}

function solanaGetNodeInfo() {
    const resultSpan = document.getElementById('solanaNodeInfoResult');
    const nodeOwner = getInputValue('solanaNodeOwner').trim();
    if (!nodeOwner) {
        resultSpan.innerText = "Please enter a node owner public key.";
        return;
    }
    showLoading("solanaNodeInfoResult");
    setTimeout(() => {
        const info = solanaState.nodes[nodeOwner];
        if (info) {
            resultSpan.innerText = `Node Type: ${info.type}, Active: ${info.active}`;
        } else {
            resultSpan.innerText = `No node info found for public key.`;
        }
    }, 500);
}

// --- Initial UI State ---
function init() {
    // Populate initial data from the mock state
    checkBalance();
    checkStakedAmount();
    solanaCheckBalance();
    solanaCheckStakedAmount();
    
    // Set placeholder text for node lookups
    document.getElementById('nodeOwner').placeholder = 'e.g., ' + Object.keys(evmState.nodes)[0];
    document.getElementById('solanaNodeOwner').placeholder = 'e.g., ' + Object.keys(solanaState.nodes)[0];

    console.log("dApp interface initialized in mock mode.");
    console.log("Your mock EVM address:", MOCK_CURRENT_USER_EVM);
    console.log("Your mock Solana address:", MOCK_CURRENT_USER_SOLANA);

}

window.onload = init;