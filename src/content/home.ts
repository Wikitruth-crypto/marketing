import { 
  // ChevronLeft, 
  // ChevronRight, 
  Shield, 
  Eye, 
  AlertTriangle, 
  DollarSign,
  CheckCircle,
  ShieldCheck,
  Globe,
  Heart,
  TrendingUp,
  Users,
  Lock,
  ArrowRight,
  Zap,
  CreditCard,
  Target,
  BarChart3,
  Clock,
  LucideIcon,
  EyeOff
} from "lucide-react";

import { links } from "./links";

export interface TruthBoxStep {
  label: string
  desc: string
}

export interface Partner {
  name: string
  logo: string
}



export const homeTitle = 'Wiki Truth: '

// ========================Hero Area=====================

export interface CTA {
  text: string
  link: string
}

export interface Hero {
  title: string
  subtitle: string
  subtitle2: string
  primaryCta: CTA
  secondaryCta: CTA
}

export const heroData: Hero = {
  title: 'Wiki Truth',
  subtitle: 'Building a trustless cornerstone of justice based on complete decentralization',
  subtitle2: 'Storing, trading, and publicly disclosing the truth of crimes on web3, Unlock the value of truth.',
  primaryCta: {
    text: 'Get Start',
    link: links.app,
  },
  secondaryCta: {
    text: 'Learn More',
    link: links.docs,
  },
}


// ===========Statistics=====================
export interface CrimeStatData {
  icon: any
  label: string
  value: string
  source: string
  description: string
  link: string
  color: string
  bgColor: string
}

export const crimeStatsTitle = 'Current Status of Crime Crisis'
export const crimeStatsDescription = '\nIncreasingly serious criminal incidents bring huge losses to our world. \nEvery crime directly or indirectly causes us to lose our legitimate interests. \nCrime will not stop; we need to fight against crime for the long term!'

export const crimeStats = [
    {
        icon: DollarSign,
        value: "$3.1T",
        label: "Global Financial Crime Scale",
        description: "Nasdaq Verafin 2024 Global Financial Crime Report",
        link: "https://www.nasdaq.com/global-financial-crime-report",
        color: "text-red-400",
        bgColor: "bg-red-500/10"
    },
    {
        icon: Heart,
        value: "$782.9B",
        label: "Drug Trafficking",
        description: "UNODC World Drug Report",
        link: "https://www.unodc.org/unodc/en/frontpage/2025/June/wdr25.html",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10"
    },
    {
        icon: Users,
        value: "$346.7B",
        label: "Human Trafficking",
        description: "UNODC Global Report on Trafficking in Persons",
        link: "https://www.unodc.org/unodc/en/data-and-analysis/glotip.html",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10"
    },
    {
        icon: CreditCard,
        value: "$485.6B",
        label: "Scams & Bank Fraud",
        description: "Verafin report on global fraudulent transactions and scam trends",
        link: "https://www.nasdaq.com/global-financial-crime-report",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10"
    }
]as CrimeStatData[]

export const moreData = {
  title: 'More Data',
  website: 'Our World in Data',
  link: 'https://ourworldindata.org/',
}


// ========================Introduction Area=====================
export const thinking = {
  question: 'How does a society go bad?',
  answer:'It starts with bad guys making money and good guys not making money.',
  thinking: 'Since people can lie and do evil for money',
  thinking2: 'why can\'t they tell the truth and fight crime for money?',

}

export const thinkingLink = {
  title: 'The SEC awarded whistleblowers $2.79 billion in 2023.',
  link: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
}

// ========================Carousel=====================
export interface CarouselItem {
  title: string
  // subtitle?: string
  description: string
  image: string
  icon: LucideIcon
}

export const carouselTitle = 'Why We Do This?'

export const carouselData: CarouselItem[] = [
  {
      title: "The Justice Crisis of Society",
      description: "Our society is facing a serious justice crisis. Bad actors collude to monopolize power and information. They manufacture lies, cover up the truth, and destroy justice and morality.",
      image: '/images/01.jpg',
      icon: Shield,
  },
  {
      title: "The Bad Guys Fear the Truth",
      description: "The power of bad guys stems from the truth being unknown. No matter how powerful they are, they become vulnerable in the face of truth. The best way to fight them is to expose their crimes.",
      image: '/images/02.jpg',
      icon: Eye,
  },
  {
      title: "You Know, So You Are in Danger",
      description: "In fact, those who hold evidence of crimes are in a very dangerous situation. There are conflicts even among bad guys. We suggest: upload the truth you know to Wiki Truth and don't bear all the risks alone.",
      image: '/images/04.jpg',
      icon: AlertTriangle,
  },
  {
      title: "No Money No Work",
      description: "People have no obligation to sacrifice for justice. Are police free? Are judges free? Why should you be free? Money is the basis of survival. If justice cannot generate value, people will avoid it.",
      image: '/images/05.jpg',
      icon: DollarSign,
  },
];


// =======================Technology Architecture=================
export interface TechnologyTab {
  id: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  image?: string
}

export const technologyTitle = 'Security & Privacy Architecture'
export const technologyDescription = 'Based on Oasis Sapphire privacy blockchain, enabling on-chain encrypted storage and private transactions.'

export const technologyData = [
    {
      id: 'local-encryption',
      label: 'Local Encryption & Storage',
      icon: Lock,
      title: 'End-to-End Encryption & Shredded Storage',
      description:
      'The evidence file is first shredded and then distributed through IPFS/Arweave to ensure that even IPFS nodes cannot窥探内容。',
      features: [
        'Shredded Encryption',
        'CID Unique Identifier',
        'IPFS/Arweave Decentralized Storage',
      ],  
    },
    {
      id: 'sapphire-tee',
      label: 'On-chain Privacy Computing',
      icon: ShieldCheck,
      title: 'Oasis Sapphire TEE Protection',
      description:
        'Using Trusted Execution Environment (TEE), decryption keys are stored on-chain in an encrypted state. Even miners cannot access the key content.',
      features: [
        'TEE Hardware Level Isolation',
        'On-chain Key Encapsulation',
        'Encrypted State Data Processing',
        'Trustless Privacy',
      ],
    },
    {
      id: 'anonymous-access',
      label: 'Anonymous Access Control',
      icon: EyeOff,
      title: 'SIWE & Proxy Interaction',
      description:
      'By SIWE token and EIP-712 proxy signature authorization, no address interaction record is left, achieving full lifecycle privacy protection.',
      features: [
        'SIWE Authentication',
        'EIP-712 Proxy Signature',
        'No Privacy Leak Query',
        'Completely Anonymous Interaction',
      ],
    },
  ] as TechnologyTab[]



// ========================Truth Box Mechanism=====================
export const truthDescription='Upload crime evidence, create a secure Truth Box, all information stored on the blockchain.'

export const truthboxData = {
  title: 'Lifecycle Process',
  subtitle: 'A time bomb for criminals, an asset for whistleblowers.',

  steps: [
    {
      label: 'Storing',
      desc: 'Encrypted & Secure',
    },
    {
      label: 'Selling',
      desc: 'Trade Evidence',
    },
    {
      label: 'Auction',
      desc: 'Market Pricing',
    },
    {
      label: 'Public',
      desc: 'Truth Revealed',
    },
  ] as TruthBoxStep[],
  h5Title: 'Time Limit Mechanism',
  h5Description: 'Each state has a corresponding time limit mechanism. For example, in the selling state, the Truth Box has a 365-day limit, and in the auction state, it has a 30-day limit. The limit can be extended by 30 days with each auction.',
  cta: 'View Mechanism Details',
  ctaLink: links.docsStatus,
}
// ========================Feature List=====================
export interface Feature {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

// Feature List
export const features: Feature[] = [
  {
    title: 'Decentralization',
    description: 'Immutable, undeletable, censorship-resistant storage (IPFS & Oasis).',
    icon: Globe,
    color: 'green',
  },
  {
    title: 'Anonymous Privacy',
    description: 'EIP712 proxy interaction cuts off the direct physical link between wallet address and on-chain behavior, achieving privacy protection throughout the lifecycle.',
    icon: EyeOff,
    color: 'blue',
  },
  {
    title: 'Economic Incentives',
    description: 'Turn evidence into assets. Sell the truth, get rewarded, and let the market price justice.',
    icon: DollarSign,
    color: 'cyan',
  },
  {
    title: 'Increasing Secrecy Fee',
    description: 'By increasing the secrecy fee period by period, the cost of covering up evidence for a long time is raised, forcing criminals to show up or give up covering up the truth.',
    icon: TrendingUp,
    color: 'cyan',
  },
  {
    title: 'Community Driven',
    description: 'DAO governance ensures the project runs long-term and decentrally.',
    icon: Users,
    color: 'purple',
  },
]


// ========================Partners=====================
export const partners: Partner[] = [
  {
    name: '4EverLand',
    logo: '/assets/icon/4EverLand2.svg',
  },
  {
    name: 'Arweave',
    logo: '/assets/icon/Arweave.svg',
  },
  {
    name: 'Dfinity',
    logo: '/assets/icon/ICP-Dfinity.svg',
  },
  {
    name: 'Pinata',
    logo: '/assets/icon/Pinata.svg',
  },
  {
    name: 'Oasis Sapphire',
    logo: '/assets/icon/oasis-1.svg',
  },
]

export const visionTitle = 'Our Vision'
export const visionContent = [
  '**WikiTruth** is not just a platform, it is a movement. We are building a **"Crime Evidence Economy"**, where truth is the most valuable asset.',
  'We believe that by **"Pricing the Truth"**, we can break the spiral of silence. We provide a decentralized, anonymous, and economically incentivized market where whistleblowers can safely disclose criminal acts.',
]