// Placeholder data so the sketchbook UI has something to show.
// No backend wired yet — these shapes mirror what the SpyGlass engine returns.

export type Platform = 'linkedin' | 'instagram' | 'x' | 'website';

export interface Competitor {
  id: string;
  name: string;
  handle: string;
  platforms: Platform[];
  posts: number;
  avgEngagement: number;
  postsPerWeek: number;
  topHook: string;
  lastSeen: string;
}

export const competitors: Competitor[] = [
  {
    id: 'c1', name: 'Allie K. Miller', handle: '@alliekmiller',
    platforms: ['linkedin', 'instagram', 'x'],
    posts: 214, avgEngagement: 1840, postsPerWeek: 6.2,
    topHook: 'Most people use AI wrong. Here is the fix.', lastSeen: '2h ago',
  },
  {
    id: 'c2', name: 'Zain Kahn', handle: '@zainkahn',
    platforms: ['linkedin', 'x'],
    posts: 502, avgEngagement: 2210, postsPerWeek: 9.1,
    topHook: '10 AI tools that feel illegal to know.', lastSeen: '5h ago',
  },
  {
    id: 'c3', name: 'Nick Saraev', handle: '@nicksaraev',
    platforms: ['linkedin', 'website'],
    posts: 96, avgEngagement: 640, postsPerWeek: 3.4,
    topHook: 'I automated my agency. Here is the exact build.', lastSeen: '1d ago',
  },
];

export interface Self {
  name: string;
  handle: string;
  posts: number;
  avgEngagement: number;
  postsPerWeek: number;
  commentToLike: number;
  totalShares: number;
}

export const self: Self = {
  name: 'You', handle: '@abhay',
  posts: 7, avgEngagement: 33, postsPerWeek: 0.2,
  commentToLike: 14.6, totalShares: 4,
};

export const audit = {
  profileRead:
    'A thin but sharp presence. Your build-in-public breakdowns land — the numbers are real, the voice is honest. But you post rarely, and almost nobody shares you.',
  whatsWorking: [
    'Structured n8n breakdowns out-perform everything else you post',
    'High comment-to-like ratio (14.6%) — people reply, they don’t just tap',
    'Healthcare + Telegram posts were your two best (35 & 36 likes)',
  ],
  painPoints: [
    { title: 'Cadence is nearly zero', body: '0.2 posts/week. The algorithm forgets you between posts.' },
    { title: 'Almost no shares', body: 'Only 4 shares across everything. Your posts inform, they don’t spread.' },
    { title: 'Inconsistent hooks', body: 'Your openers swing from strong to flat — no repeatable pattern.' },
  ],
  quickWins: [
    'Post 3×/week using your best format (structured breakdowns)',
    'End posts with one shareable one-liner, not a summary',
    'Re-use the hook shape from your Healthcare post — it worked',
  ],
};

export const compareResult = {
  competitor: 'Allie K. Miller',
  structural: [
    'She has ~2M followers — a decade of compounding you cannot copy this week',
    'A media team and brand deals fund daily output',
  ],
  algorithmic: [
    'Every post opens with a bold, contrarian one-line hook — copyable today',
    'She answers the promised payoff in the MIDDLE, not the end',
    'Consistent 6×/week cadence trains the algorithm — you can match the rhythm',
  ],
  strategy:
    'You can’t buy her audience, but you can steal her structure: contrarian hook, mid-post payoff, and a rhythm the algorithm can rely on.',
};
