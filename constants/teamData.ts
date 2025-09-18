import type { TeamMember } from '../types';

const GOOGLE_AVATAR_COLORS = ['4285F4', 'EA4335', 'FBBC05', '34A853', '9c27b0'];

const generateAvatarUrl = (name: string, id: number) => {
  const formattedName = name.replace(/\s/g, '+');
  const backgroundColor = GOOGLE_AVATAR_COLORS[(id - 1) % GOOGLE_AVATAR_COLORS.length];
  return `https://ui-avatars.com/api/?name=${formattedName}&background=${backgroundColor}&color=ffffff&size=128&font-size=0.33&bold=true&rounded=true`;
};

export const TEAM_DATA: TeamMember[] = [
  { id: 1, name: 'Alex Saade', expertise: 'Expert in YouTube strategy, storytelling, and sales.', tags: ['YouTube', 'Storytelling', 'Sales', 'Deals'], avatarUrl: generateAvatarUrl('Alex Saade', 1) },
  { id: 2, name: 'Allen Smith', expertise: 'Deep understanding of product features and capabilities.', tags: ['Product Knowledge'], avatarUrl: generateAvatarUrl('Allen Smith', 2) },
  { id: 3, name: 'Ashoka Robin', expertise: 'Skilled in re-engaging and unlocking unresponsive clients.', tags: ['Client Relations', 'Engagement'], avatarUrl: generateAvatarUrl('Ashoka Robin', 3) },
  { id: 4, name: 'Becca Pagani', expertise: 'Drives growth through Demand Gen and YouTube campaigns.', tags: ['Demand Gen', 'YouTube'], avatarUrl: generateAvatarUrl('Becca Pagani', 4) },
  { id: 5, name: 'Carly Segal', expertise: 'Focuses on meeting prep, discovery calls, and MET execution.', tags: ['Client Success', 'Discovery', 'METs'], avatarUrl: generateAvatarUrl('Carly Segal', 5) },
  { id: 6, name: 'Casey Jacobson', expertise: 'Builds strong client relationships through storytelling.', tags: ['Storytelling', 'Relationship Building', 'Empathy'], avatarUrl: generateAvatarUrl('Casey Jacobson', 6) },
  { id: 7, name: 'Charlie Tipp', expertise: 'Specializes in PDM and PMax segmentation for campaigns.', tags: ['PMax', 'PDM', 'Segmentation'], avatarUrl: generateAvatarUrl('Charlie Tipp', 7) },
  { id: 8, name: 'Chris Levy', expertise: 'Optimizes campaigns by segmenting high-value audiences.', tags: ['Targeting', 'Audience Growth', 'Optimization'], avatarUrl: generateAvatarUrl('Chris Levy', 8) },
  { id: 9, name: 'Christina Atherton', expertise: 'Leverages AI for advanced search strategies.', tags: ['AI', 'Search', 'AI Max'], avatarUrl: generateAvatarUrl('Christina Atherton', 9) },
  { id: 10, name: 'Courtney Hines', expertise: 'Focused on improving campaign efficiency and lowering tROAS.', tags: ['tROAS', 'Optimization'], avatarUrl: generateAvatarUrl('Courtney Hines', 10) },
  { id: 11, name: 'Elli Kim', expertise: 'Currently on Maternity Leave.', tags: ['Mat Leave'], avatarUrl: generateAvatarUrl('Elli Kim', 11) },
  { id: 12, name: 'Gary Andonian', expertise: 'Uses weekly intel to build compelling client pitches.', tags: ['Intel', 'Pitching', 'Rapport'], avatarUrl: generateAvatarUrl('Gary Andonian', 12) },
  { id: 13, name: 'Jack Geiran', expertise: 'Expert in leveraging Broad Match for campaign success.', tags: ['Broad Match', 'Google Ads'], avatarUrl: generateAvatarUrl('Jack Geiran', 13) },
  { id: 14, name: 'Jasmine Videna', expertise: 'Proficient in Google Ads, Merchant Center, and scripts.', tags: ['Google Ads', 'GMC', 'Scripts', 'Paid Search'], avatarUrl: generateAvatarUrl('Jasmine Videna', 14) },
  { id: 15, name: 'Jessica Ventura', expertise: 'Specializes in creating and managing YouTube campaigns.', tags: ['YouTube'], avatarUrl: generateAvatarUrl('Jessica Ventura', 15) },
  { id: 16, name: 'Karlie Borzansky', expertise: 'Builds C-suite relationships and manages org structures.', tags: ['C-Suite', 'Demand Gen', 'Relationships'], avatarUrl: generateAvatarUrl('Karlie Borzansky', 16) },
  { id: 17, name: 'Katherine Gwaltney', expertise: 'Leads and manages the Voyager program.', tags: ['Voyager'], avatarUrl: generateAvatarUrl('Katherine Gwaltney', 17) },
  { id: 18, name: 'Kayla Lawrence', expertise: 'Drives results with Performance Max and Value Based Selling.', tags: ['PMax', 'Sales', 'Value Selling'], avatarUrl: generateAvatarUrl('Kayla Lawrence', 18) },
  { id: 19, name: 'Kunal Khunger', expertise: 'Excels at customer communication and organization.', tags: ['Customer Relations', 'Organization'], avatarUrl: generateAvatarUrl('Kunal Khunger', 19) },
  { id: 20, name: 'Kyle Seyffert', expertise: 'Focuses on building relationships in the PMax space.', tags: ['PMax', 'Relationship Building'], avatarUrl: generateAvatarUrl('Kyle Seyffert', 20) },
  { id: 21, name: 'Lauren Brown', expertise: 'Analyzes PDM and weekly intel for client pitches.', tags: ['PDM', 'Intel', 'Pitching'], avatarUrl: generateAvatarUrl('Lauren Brown', 21) },
  { id: 22, name: 'Lauren Mondanaro', expertise: 'Leads discovery, organization, and METs.', tags: ['Rapport', 'Discovery', 'Organization', 'METs'], avatarUrl: generateAvatarUrl('Lauren Mondanaro', 22) },
  { id: 23, name: 'Leon Powell', expertise: 'Specializes in UE and campaign measurement.', tags: ['UE', 'Measurement'], avatarUrl: generateAvatarUrl('Leon Powell', 23) },
  { id: 24, name: 'Mason Ganz', expertise: 'Optimizes lower funnel performance and ROAS.', tags: ['PMax', 'Optimization', 'ROAS', 'Funnel'], avatarUrl: generateAvatarUrl('Mason Ganz', 24) },
  { id: 25, name: 'Niah Blackman', expertise: 'Specializes in team and project organization.', tags: ['Organization'], avatarUrl: generateAvatarUrl('Niah Blackman', 25) },
  { id: 26, name: 'Nikki Mack', expertise: 'Leads Demand Gen initiatives and Optiscore recommendations.', tags: ['Demand Gen', 'Optiscore'], avatarUrl: generateAvatarUrl('Nikki Mack', 26) },
  { id: 27, name: 'Pancham Shah', expertise: 'Builds rapport and maps stakeholder relationships.', tags: ['Rapport', 'Stakeholder Mapping'], avatarUrl: generateAvatarUrl('Pancham Shah', 27) },
  { id: 28, name: 'Rebecca Weitman', expertise: 'Currently on Maternity Leave.', tags: ['Mat Leave'], avatarUrl: generateAvatarUrl('Rebecca Weitman', 28) },
  { id: 29, name: 'Robbie Denuzzo', expertise: 'Manages international expansion and SOW pitches.', tags: ['Discovery', 'YouTube', 'SOW', 'International'], avatarUrl: generateAvatarUrl('Robbie Denuzzo', 29) },
  { id: 30, name: 'Rukshan Jayasinghe', expertise: 'Specializes in the Bungee program.', tags: ['Bungee'], avatarUrl: generateAvatarUrl('Rukshan Jayasinghe', 30) },
  { id: 31, name: 'Tayana Dix', expertise: 'Expert in executing YouTube and Demand Gen strategies.', tags: ['YouTube', 'Demand Gen'], avatarUrl: generateAvatarUrl('Tayana Dix', 31) },
  { id: 32, name: 'Yauss Agahi', expertise: 'Leads Broad Match and Demand Capture initiatives.', tags: ['Broad Match', 'Demand Capture', 'Google Ads'], avatarUrl: generateAvatarUrl('Yauss Agahi', 32) }
];