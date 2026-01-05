/**
 * Roadmap Data Configuration
 */

// Type Definitions
export interface RoadmapItem {
    title: string
    description: string
    completed: boolean
    details?: string[]
}

export interface RoadmapPhase {
    id: string
    name: string
    subtitle: string
    description: string
    items: RoadmapItem[]
}

// Data Constants
export const roadmapTitle = 'Roadmap'
export const roadmapDescription = 'From Proof of Concept to Global Truth Network: The Evolution of WikiTruth.'
export const roadmapSubtitle = 'Path to Truth'
export const roadmapIntroduction =
    'WikiTruth has a grand and long-term vision, which we have divided into four core phases. Each step aims to build a more solid infrastructure for the "Truth Economy".'

export const roadmapPhases: RoadmapPhase[] = [
    {
        id: 'genesis',
        name: 'Phase 1: Genesis',
        subtitle: 'Prototype & Verification',
        description: 'Current phase. The core goal is to complete the Minimum Viable Product (MVP) and verify the core game logic.',
        items: [
            {
                title: 'Proof of Concept (PoC)',
                description: 'Completed game theory deduction of the privacy trading market and determined the "increasing secrecy fee" mathematical model.',
                completed: true,
            },
            {
                title: 'Core Contract Iteration (v1.0 - v1.6)',
                description: 'Completed core function development and optimization',
                completed: true,
                details: [
                    'Completed `TruthBox` core state machine development.',
                    'Implemented TEE privacy encryption and decryption logic based on Oasis Sapphire.',
                    'Introduced SIWE (Sign-In with Ethereum) for seamless identity authentication.',
                    'Contract slimming and Gas optimization: significantly reduced interaction costs.',
                ],
            },
            {
                title: 'v1.7 Final Testnet (Current Focus)',
                description: 'Perfecting testnet functions',
                completed: false,
                details: [
                    '**Multi-currency Payment Integration**: Support mainstream stablecoins like USDT/USDC.',
                    '**Uniswap V3 Hook**: Implement automated liquidity bootstrapping on the testnet.',
                    '**EIP-712 Signature Integration**: Implement full off-chain signature and on-chain execution to enhance privacy protection.',
                ],
            },
        ],
    },
    {
        id: 'awakening',
        name: 'Phase 2: Awakening',
        subtitle: 'Security & Public Beta',
        description: 'The core goal is to ensure system robustness and security, and establish early community consensus.',
        items: [
            {
                title: 'Security Audit',
                description: 'Invite top security companies for code audit',
                completed: false,
                details: [
                    'Invite top security companies (such as CertiK, SlowMist) to audit privacy contracts.',
                    'Launch Bug Bounty program to invite white hat hackers to attack the testnet.',
                ],
            },
            {
                title: 'Incentivized Testnet',
                description: 'Launch test events',
                completed: false,
                details: [
                    'Launch "Truth Miner" campaign to reward early test users and feedback providers.',
                    'Simulate high concurrency transaction scenarios for stress testing.',
                ],
            },
            {
                title: 'Multisig Council',
                description: 'Deploy multisig wallet for emergency permissions',
                completed: false,
                details: [
                    'Deploy Gnosis Safe multisig wallet to manage emergency permissions of the protocol (such as pausing contracts) as a transitional governance solution before DAO establishment.',
                ],
            },
            {
                title: 'Mainnet Launch',
                description: 'Officially deploy mainnet',
                completed: false,
                details: [
                    'Officially deploy on Oasis Sapphire mainnet.',
                    'Genesis Airdrop: Distribute WTRC to early contributors, testnet users, and specific privacy track users.',
                    'Enable Liquidity Mining: Incentivize core trading pairs like WTRC/ROSE.',
                ],
            },
        ],
    },
    {
        id: 'order',
        name: 'Phase 3: Order',
        subtitle: 'DAO Governance & Compliance',
        description: 'The core goal is to hand over control to the community and solve real-world legal and funding compliance issues.',
        items: [
            {
                title: 'Fully Decentralized Governance (DAO v1.0)',
                description: 'Launch governance contract',
                completed: false,
                details: [
                    'Launch `Governor` governance contract to enable on-chain voting for parameter adjustments (such as secrecy rates, fees).',
                    'Introduce **veToken Model**: Users stake WTRC to obtain veWTRC, possessing voting rights and dividend rights, binding long-term interests.',
                ],
            },
            {
                title: 'Blacklist & Arbitration Court',
                description: 'Establish decentralized arbitration mechanism',
                completed: false,
                details: [
                    'Establish a decentralized arbitrator mechanism (Kleros mode) to handle false evidence complaints and fund disputes.',
                    'Implement community-driven blacklist governance to prevent the platform from being used for malicious purposes (such as child pornography, terrorism).',
                ],
            },
            {
                title: 'Bounty Market Launch',
                description: 'Allow publishing bounty tasks',
                completed: false,
                details: [
                    'Allow law enforcement agencies or individuals to pledge funds to release bounties, realizing "demand-side" driven evidence mining.',
                ],
            },
        ],
    },
    {
        id: 'expansion',
        name: 'Phase 4: Expansion',
        subtitle: 'Cross-chain & Ecosystem',
        description: 'The core goal is to break the isolation of public chains and build a global justice alliance.',
        items: [
            {
                title: 'Omnichain',
                description: 'Implement cross-chain functions',
                completed: false,
                details: [
                    'Integrate **LayerZero** or **Chainlink CCIP** protocol.',
                    'Allow users to directly purchase Truth Boxes on the Oasis chain from other public chains like Ethereum, Solana, BSC, achieving seamless cross-chain funding.',
                ],
            },
            {
                title: 'AI Verification',
                description: 'Introduce AI detection function',
                completed: false,
                details: [
                    'Introduce decentralized AI agents to perform preliminary Deepfake detection on uploaded image/video evidence.',
                ],
            },
            {
                title: 'Legal Defense Fund',
                description: 'Provide legal aid to whistleblowers',
                completed: false,
                details: [
                    'Use DAO treasury funds to provide offline legal aid and personal protection support for whistleblowers of high-value evidence.',
                ],
            },
            {
                title: 'WikiTruth API / SDK',
                description: 'Open data interface',
                completed: false,
                details: [
                    'Open data interfaces to allow third-party media and investigative agencies to access WikiTruth\'s data stream and build richer upper-layer applications (such as news aggregators, reputation query tools).',
                ],
            },
        ],
    },
]

export const roadmapNote =
    '**Note**: This roadmap will be dynamically adjusted based on community feedback, technological evolution, and changes in the regulatory environment. At WikiTruth, the only constant is the pursuit of truth.'