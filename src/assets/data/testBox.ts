
export const testBox= {
    name: 'Test Box',
    project: 'Test Project',
    website: ['https://test.com'],
    // 
    tokenId: '1',
    typeOfCrime: 'Modular',
    title: "This is a test! Here is the title about TruthBox, which directly conveys the key information, allowing others to quickly understand this TruthBox.",
    nftImage: "ipfs://bafkreianmtw7x22zb3iawia3rcmfm67iiupytrxj3ytljxojlichfaictm",
    boxImage: "bafkreiccjb4uhzhze2pyehnoo7qwkk73yhjl6k6scbzxss6idqkhghznom",
    country: 'United States',
    state: 'California',
    description: 'This is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box',
    createDate: '2021-01-01',
    eventDate: '2021-01-01',
    timestamp: 1714531200,
    label: ['Test'],
    mintMethod: 'create',
    encryptionSlicesMetadataCID: {
        slicesMetadataCID_encryption: "",
        slicesMetadataCID_iv: "",
    },
    encryptionFileCID: [],
    encryptionPasswords: {
        password_encryption: "",
        password_iv: "",
    },
    publicKey: '',
    fileList: [],
    // password: '',
    // -----
    price: 100,
    deadline: 1714531200,
    status: 'Storing',
    // -----
    minter: '1',
    owner: '0x1234567890123456789012345678901234567890',
    seller: '2',
    buyer: '3',
    bidders: [],
    completer: '4',
    hasBuyer: false,
    hasSeller: false,
    hasCompleter: false,
    hasBidders: false,

}

export const baseBox= {
    name: 'Test Box',
    project: 'Test Project',
    website: ['https://wikitruth.eth.limo'],
    tokenId: '1',
    //-----------
    typeOfCrime: 'Modular',
    title: "This is a test! Here is the title about TruthBox, which directly conveys the key information, allowing others to quickly understand this TruthBox.",
    nftImage: "/nft/nft-light-2.jpg",
    boxImage: "/nft/boxImage.png",
    country: 'United States',
    state: 'California',
    description: 'This is a test box',
    createDate: '2021-01-01',
    eventDate: '2021-01-01',
    timestamp: 1714531200,
    label: ['Test'],
    mintMethod: 'create',
    encryptionSlicesMetadataCID: {
        slicesMetadataCID_encryption: "",
        slicesMetadataCID_iv: "",
    },
    encryptionFileCID: [],
    encryptionPasswords: {
        password_encryption: "",
        password_iv: "",
    },
    publicKey: '',
    fileList: [],
    // password: '',
    // -----
    price: '185000000000000000000',
    deadline: 1714531200,
    status: 'Selling',
    // -----
    minter: '1',
    owner: '0x1234567890123456789012345678901234567890',
    seller: '2',
    buyer: '3',
    bidders: [],
    completer: '4',
    hasBuyer: false,
    hasSeller: false,
    hasCompleter: false,
    hasBidders: false,
}

export const testBox2= baseBox;

export const testBox2List: any[] = [
    ...Array.from({ length: 20 }, (_, i) => ({
        ...baseBox,
        tokenId: i.toString(),
    })),
]


export const testBoxProfile = baseBox;

export const testBoxProfileList: (any)[] = [
    ...Array.from({ length: 20 }, (_, i) => ({
        ...testBoxProfile,
        tokenId: i.toString(),
    })),
]
