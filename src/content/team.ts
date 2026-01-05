import { links } from "./links";

export interface TeamMember {
  name: string
  role: string
  avatar: string
}

export const teamTitle = 'WikiTruth Team'
export const teamSubtitle = 'We are a group of people who do not want to make peace with the darkness.'

export const teamStory = {
  title: 'Why we are anonymous',
  content:
    'We are a group of developers, researchers and activists who have witnessed \
    the "justice crisis" in the traditional world. From the collapse of FTX to \
    the silence of whistleblowers, we realized that human morality alone is not \
    enough. We need code. To protect ourselves and the neutrality of the project, \
    we remain anonymous. We trust mathematics, not identity.',
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Liu',
    role: 'Developer',
    avatar: '/images/avatar/1.jpg',
  },
  {
    name: 'Wen',
    role: 'Social Media Manager',
    avatar: '/images/avatar/2.png',
  },
]



// ========================Join Us=====================
export const teamRecruitmentTitle = 'Ready to Join Us?'
export const teamRecruitmentContent =
  'We are looking for like-minded partners to drive the development of Web3 justice. \
  If you are interested in our mission, please contact us.'
export const teamRecruitmentNeeds = [
  'Developers',
  'Lawyers',
  'Community Manager',
  'Media Operator',
]
export const teamContactEmail = links.emailText
