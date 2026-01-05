export interface Tragedy {
  title: string
  source: string
  date: string
  image?: string
  link?: string
  summary: string
}

export interface Movie {
  title: string
  image?: string
  director: string
  desc: string
}


export interface AIResearch {
  title: string
  author: string
  date: string
  video: string
  image: string
  summary: string
  conclusions: string[]
}

export interface BlogContent {
  title: string
  subtitle: string
}

export const blogData: BlogContent = {
  title: 'Cases & Insights',
  subtitle: 'Real stories of whistleblowers, corruption, and the fight for truth.',
}

export const successStoriesTitle = 'Justice Pays: Whistleblower Rewards'

// ========================Success Stories=====================
export interface PostsData {
  id: number
  title: string
  href: string
  description: string
  imageUrl: string
  date: string
  datetime: string
  category: { title: string, href: string }
}

export const postsData: PostsData[] = [
  {
      id: 1,
      title: 'The FBI and other agencies paid informants',
      href: 'https://www.forbes.com/sites/adamandrzejewski/2021/11/18/fbi-and-other-agencies-paid-informants-548-million-in-recent-years-with-many-committing-authorized-crimes/',
      description:
          'The FBI and other agencies paid informants $548 million in recent years, with many committing authorized crimes.',
      imageUrl:
          './images/blog/fbi548m.png',
      date: 'Nov 18, 2021',
      datetime: '2021-11-18',
      category: { title: 'Forbes', href: 'https://www.forbes.com/sites/adamandrzejewski/2021/11/18/fbi-and-other-agencies-paid-informants-548-million-in-recent-years-with-many-committing-authorized-crimes/' },
  },
  {
      id: 2,
      title: 'Serial Killer Connections Through Cold Cases',
      href: 'https://nij.ojp.gov/topics/articles/serial-killer-connections-through-cold-cases',
      description:'According to a new report from the Federal Bureau of Investigation (FBI), about 40% of homicides in the U.S. went unsolved in 2017.',
      imageUrl:'./images/blog/fbi2017.jpg',
      date: 'June 15, 2020',
      datetime: '2020-06-15',
      category: { title: 'npj', href: 'https://nij.ojp.gov/topics/articles/serial-killer-connections-through-cold-cases' },
  },
  {
      id: 3,
      title: '33 Journalists Killed in 2025',
      href: 'https://cpj.org/data/killed/2025/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=2025&end_year=2025&group_by=location',
      description:'As of July 1, 2025, 33 journalists have been killed in 2025, with 26 of them killed while exposing the truth.',
      imageUrl: './images/blog/33killed.jpeg',
      date: 'in 2025 / Motive Confirmed',
      datetime: '2025-07-01',
      category: { title: 'cpj', href: 'https://cpj.org/data/killed/2025/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=2025&end_year=2025&group_by=location' },
  },
  {
      id: 4,
      title: 'Muddy Waters Uncovers the Truth Behind the Fraudulent Accounting Practices of Listed Companies',
      href: 'https://money.cnn.com/2012/11/27/investing/muddy-waters-olam-enron/index.html',
      description:'Blocks firm, Muddy Waters, is known for spotting fraudulent accounting practices, primarily at Chinese companies. Late Monday, Muddy Waters',
      imageUrl: './images/blog/muddyWaters.png',
      date: 'Nov 27, 2012',
      datetime: '2012-11-27',
      category: { title: 'cnn', href: 'https://muddywatersresearch.com/' },
  },
  {
      id: 5,
      title: 'The SEC awarded whistleblowers $2.79 billion in 2023.',
      href: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
      description:'The SEC awarded whistleblowers $2.79 billion in 2023. Although the SEC has done a good job protecting whistleblowers\' privacy, these are not absolute, and the identity information of whistleblowers is still at risk of being leaked.',
      imageUrl: './images/blog/sec279m.png',
      date: 'May 15, 2023',
      datetime: '2023-05-15',
      category: { title: 'sec', href: 'https://www.sec.gov/enforcement-litigation/whistleblower-program' },
  },
  {
      id: 6,
      title: 'A former Deutsche Bank executive received nearly $200 million in rewards.',
      href: 'https://www.reuters.com/business/us-regulator-awards-whistleblower-200m-record-payout-over-benchmark-rigging-case-2021-10-21/',
      description:'A former Deutsche Bank executive helped US and UK regulators investigate Deutsche Bank, receiving nearly $200 million in rewards. The reward was given to the "whistleblower" for reporting the details of the manipulation of London interbank offered rate (LIBOR) by banks.',
      imageUrl: './images/blog/bank.jpg',
      date: 'Oct 22, 2021',
      datetime: '2021-10-22',
      category: { title: 'reuters', href: 'https://www.reuters.com/business/us-regulator-awards-whistleblower-200m-record-payout-over-benchmark-rigging-case-2021-10-21/' },
  },
  // More posts...
]

    // ========================AI Research=====================

export const aiResearch = [
    {
        id: 'ai-altruism-research',
        title: 'Altruism and Selfishness AI Experiment',
        subtitle: 'Exploring the Moral Decision Mechanism of Artificial Intelligence',
        author: 'Pemex',
        date: 'January 2021',
        videoUrl: 'https://www.youtube.com/watch?v=goePYJ74Ydg&t=190s',
        images: [
          '/images/aiReserch/01.jpg', 
          '/images/aiReserch/02.jpg'
        ],
        content: {
            introduction: `This is a very hot AI experiment, and we think it is perfect to demonstrate the core philosophy of our project. Although it is not directly related to crime, it is very close. Many thanks to the Pemex team for allowing us to share this experiment.`,
            
            videoGuide: `The core point of the video is that simple, undifferentiated altruistic behavior is fragile in evolution and easily exploited by selfish individuals to extinction. For altruism to survive, more complex conditions need to be met.
                The video demonstrates several key findings by gradually increasing simulation complexity:`,
            
            keyFindings: [
                `Targetless altruism will fail: When altruists help any member of the group indiscriminately (including selfish ones),
                selfish ones can enjoy the benefits of help without paying any price. This eventually leads to the extinction of altruism.`,
                `The success of the "Green Beard" effect: If altruistic behavior has a recognizable marker (green beard),
                and altruists only help individuals who also have this marker, then altruism can succeed.`,
                `The threat of "Cheaters": However, the "Green Beard" effect collapses in a more realistic setting. "Cheaters" - they have the green beard marker,
                can accept help from others, but do not help others themselves. These cheaters eventually lead to the collapse of the entire altruistic system.`,
            ],
        },
    }
]

// ========================Article=====================

export const articleTitle = 'Why Do We Need a Truth Market?'
export const article = [
      'In Pemex\'s AI experiment, we learned a valuable lesson: **If justice has no self-defense mechanism, it will be swallowed by evil**.',
      'WikiTruth is designed to be that "self-defense mechanism". We lock in altruists through economic interests and give them "Green Beards" (verifiable anonymous markers) through encryption technology, so that justice ultimately wins in the game.',
    ]



// ========================News=====================

export interface News {
  id: number
  title: string
  href: string
  description: string
  imageUrl: string
  date: string
  datetime: string
  category: { title: string, href: string }
}

export const news: News[] = [
  {
    id: 1,
    title: 'The Bitcoin with financial freedom and human rights.',
    href: 'https://www.bedfordindependent.co.uk/opinion-how-a-bitcoin-conference-in-bedford-changed-the-way-i-see-financial-freedom-and-human-rights/',
    description:'Opinion: How a Bitcoin conference in Bedford changed the way I see financial freedom and human rights',
    imageUrl:'./images/blog/bitcoinConference.jpg',
    date: 'April 13 2025',
    datetime: '2025-04-13',
    category: { title: 'By Editorial Column', href: 'https://www.bedfordindependent.co.uk/opinion-how-a-bitcoin-conference-in-bedford-changed-the-way-i-see-financial-freedom-and-human-rights/' },
},
{
    id: 2,
    title: 'Vitalik talks about Decentralization',
    href: 'https://www.youtube.com/watch?v=jznCAlGknIo',
    description:'Why power-down is not enough. Vitalik uses Web2 lessons, governance failures, and flawed crypto design to challenge builders to focus on freedom, resilience, and true user empowerment.',
    imageUrl:'./images/blog/vitalik.jpg',
    date: 'July 3 2025',
    datetime: '2025-07-03',
    category: { title: 'Cointelegraph', href: 'https://www.youtube.com/watch?v=jznCAlGknIo' },
},
  ]