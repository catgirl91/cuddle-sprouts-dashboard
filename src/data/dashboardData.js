// Hardcoded sample data (fallback when live data is unavailable)
const sampleStats = [
  { label: 'Active Subscribers', value: '2,847', change: '+12.3%', up: true },
  { label: 'Open Rate (30d)', value: '42.6%', change: '+3.1%', up: true },
  { label: 'Click Rate (30d)', value: '8.9%', change: '-0.4%', up: false },
  { label: 'Revenue (30d)', value: '$119.85', change: '+18.7%', up: true },
  { label: 'List Growth Rate', value: '5.2%', change: '+1.1%', up: true },
]

const samplePriorities = [
  {
    id: 1,
    title: 'Fix Welcome Series Drop-off',
    description: 'Email 3 in the welcome series has a 68% drop-off rate. Subject line needs A/B testing.',
    prompt: 'Draft 3 A/B test subject lines for a baby product welcome series email #3, focused on organic cotton benefits. Current subject: "Your Baby Deserves the Best"',
    done: false,
    urgency: 'high',
  },
  {
    id: 2,
    title: 'Launch Spring Collection Campaign',
    description: 'New muslin swaddle collection ready. Segment: engaged buyers in last 90 days.',
    prompt: 'Write a warm, nurturing email announcing a new spring muslin swaddle collection for a baby brand called Cuddle Sprouts. Include 3 product highlights and a 15% early-access discount code SPRING15.',
    done: true,
    urgency: 'medium',
  },
  {
    id: 3,
    title: 'Win-Back Flow Optimization',
    description: 'Current win-back flow has 2.1% conversion. Industry avg is 5.4%. Needs new incentive structure.',
    prompt: 'Design a 4-email win-back flow for lapsed baby product customers (90+ days inactive). Include progressive discount strategy starting at free shipping, ending at 20% off.',
    done: false,
    urgency: 'high',
  },
  {
    id: 4,
    title: 'Segment VIP Customers',
    description: 'Create a VIP segment for customers with 3+ orders and AOV > $45.',
    prompt: 'Create a Klaviyo segment definition for VIP baby product customers: 3+ orders, AOV over $45, at least one order in last 60 days. Include recommended properties to track.',
    done: false,
    urgency: 'medium',
  },
  {
    id: 5,
    title: 'Update Sunset Policy',
    description: 'Remove unengaged subscribers (no opens in 180 days) to improve deliverability.',
    prompt: 'Write a 2-email sunset series for a baby brand. Email 1: "We miss you" with emotional appeal. Email 2: "Last chance" with clear unsubscribe CTA. Keep brand voice warm and gentle.',
    done: true,
    urgency: 'low',
  },
]

const sampleEmailFlows = [
  {
    id: 'welcome',
    name: 'Welcome Series',
    status: 'live',
    emails: 5,
    openRate: 58.2,
    clickRate: 12.4,
    revenue: 42.30,
    lastUpdated: '2026-03-15',
    diagnosis: 'Strong opener (72% open) but Email 3 drops to 31%. Subject line fatigue detected. Recommend: split test personalized vs. benefit-led subjects. Email 5 CTA button color may blend with template—test contrasting color.',
  },
  {
    id: 'abandoned-cart',
    name: 'Abandoned Cart',
    status: 'live',
    emails: 3,
    openRate: 45.8,
    clickRate: 9.7,
    revenue: 38.90,
    lastUpdated: '2026-03-12',
    diagnosis: 'Performing above benchmark. Email 1 timing (1hr) is optimal. Email 2 could include social proof—add review snippet. Email 3 discount (10%) converts at 4.2%, test bumping to 15% for high-AOV carts only.',
  },
  {
    id: 'post-purchase',
    name: 'Post-Purchase',
    status: 'live',
    emails: 4,
    openRate: 52.1,
    clickRate: 7.3,
    revenue: 18.65,
    lastUpdated: '2026-03-10',
    diagnosis: 'Good engagement but cross-sell email (Email 3) underperforms. Product recommendations not personalized—switch from static to dynamic product feed. Add age-appropriate filtering based on baby registry data.',
  },
  {
    id: 'win-back',
    name: 'Win-Back',
    status: 'draft',
    emails: 3,
    openRate: 22.4,
    clickRate: 3.1,
    revenue: 8.40,
    lastUpdated: '2026-03-08',
    diagnosis: 'Below industry average (5.4% click). Trigger timing (90 days) may be too late—test 60-day trigger. Current incentive (free shipping) not compelling enough. Recommend progressive: free shipping → 10% off → 20% off with urgency.',
  },
  {
    id: 'birthday',
    name: 'Baby Birthday',
    status: 'live',
    emails: 2,
    openRate: 61.5,
    clickRate: 14.2,
    revenue: 11.60,
    lastUpdated: '2026-03-05',
    diagnosis: 'Highest click rate across all flows. Strong emotional connection. Consider adding a 3rd email (milestone gift guide) 1 week after birthday. Current 20% discount converts well—maintain. Add SMS companion for higher reach.',
  },
  {
    id: 'browse-abandon',
    name: 'Browse Abandonment',
    status: 'paused',
    emails: 2,
    openRate: 33.7,
    clickRate: 5.8,
    revenue: 0,
    lastUpdated: '2026-02-28',
    diagnosis: 'Paused due to low engagement. Content too generic—needs dynamic product insertion. Trigger fires too broadly (any page view). Narrow to: viewed product page 2+ times OR spent 30+ seconds. Re-test after fixes.',
  },
]

const sampleInsightsData = {
  revenueByFlow: [
    { name: 'Welcome', value: 42.30 },
    { name: 'Cart', value: 38.90 },
    { name: 'Post-Purch', value: 18.65 },
    { name: 'Birthday', value: 11.60 },
    { name: 'Win-Back', value: 8.40 },
    { name: 'Browse', value: 0 },
  ],
  engagementTrend: [
    { week: 'W1', openRate: 39.2, clickRate: 7.1 },
    { week: 'W2', openRate: 41.5, clickRate: 8.3 },
    { week: 'W3', openRate: 40.8, clickRate: 7.9 },
    { week: 'W4', openRate: 42.6, clickRate: 8.9 },
    { week: 'W5', openRate: 43.1, clickRate: 9.2 },
    { week: 'W6', openRate: 44.0, clickRate: 9.5 },
  ],
  subscriberSegments: [
    { name: 'Active Buyers', value: 892 },
    { name: 'Engaged Non-Buyers', value: 634 },
    { name: 'New Subscribers', value: 458 },
    { name: 'At Risk', value: 312 },
    { name: 'Lapsed', value: 551 },
  ],
}

const samplePipeline = [
  { id: 1, task: 'A/B Test: Welcome Email 3 Subject', status: 'in-progress', assignee: 'You', dueDate: 'Mar 20' },
  { id: 2, task: 'Spring Swaddle Campaign Design', status: 'review', assignee: 'Designer', dueDate: 'Mar 19' },
  { id: 3, task: 'Win-Back Flow Restructure', status: 'todo', assignee: 'You', dueDate: 'Mar 22' },
  { id: 4, task: 'VIP Segment Setup in Klaviyo', status: 'todo', assignee: 'You', dueDate: 'Mar 21' },
  { id: 5, task: 'Post-Purchase Dynamic Feed', status: 'in-progress', assignee: 'Dev', dueDate: 'Mar 23' },
  { id: 6, task: 'SMS Birthday Flow Companion', status: 'backlog', assignee: 'You', dueDate: 'Mar 28' },
  { id: 7, task: 'Browse Abandon Trigger Fix', status: 'blocked', assignee: 'Dev', dueDate: 'Mar 25' },
]

const sampleSkipToday = [
  { id: 1, task: 'Redesign footer template', reason: 'Waiting on brand guidelines v2' },
  { id: 2, task: 'Migrate to new ESP', reason: 'Q2 initiative, not urgent' },
  { id: 3, task: 'Annual subscriber survey', reason: 'Survey tool renewal pending' },
  { id: 4, task: 'Holiday campaign planning', reason: 'Too early — revisit in September' },
]

const sampleComingUp = [
  { id: 1, task: 'Mother\'s Day Campaign Kickoff', date: 'Mar 25', urgency: 'high' },
  { id: 2, task: 'Quarterly Deliverability Audit', date: 'Mar 28', urgency: 'medium' },
  { id: 3, task: 'New Product Launch: Bamboo Onesies', date: 'Apr 1', urgency: 'high' },
  { id: 4, task: 'Subscriber Milestone Celebration (3K)', date: 'Apr 5', urgency: 'low' },
  { id: 5, task: 'Summer Collection Teaser Planning', date: 'Apr 10', urgency: 'medium' },
  { id: 6, task: 'Annual Retention Report', date: 'Apr 15', urgency: 'low' },
]

const sampleData = {
  stats: sampleStats,
  priorities: samplePriorities,
  emailFlows: sampleEmailFlows,
  insightsData: sampleInsightsData,
  pipeline: samplePipeline,
  skipToday: sampleSkipToday,
  comingUp: sampleComingUp,
}

// Data is considered stale if older than 48 hours
const STALE_THRESHOLD_MS = 48 * 60 * 60 * 1000

function isDataFresh(lastUpdated) {
  try {
    const updatedAt = new Date(lastUpdated).getTime()
    return Date.now() - updatedAt < STALE_THRESHOLD_MS
  } catch {
    return false
  }
}

/**
 * Fetches live dashboard data from /data/dashboard-data.json.
 * Falls back to hardcoded sample data if fetch fails or data is stale.
 *
 * Returns: { data, isLive, lastUpdated }
 */
export async function fetchDashboardData() {
  try {
    const response = await fetch('/data/dashboard-data.json')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const liveData = await response.json()

    if (!liveData.lastUpdated || !isDataFresh(liveData.lastUpdated)) {
      return {
        data: sampleData,
        isLive: false,
        lastUpdated: null,
      }
    }

    return {
      data: {
        stats: liveData.stats,
        priorities: liveData.priorities,
        emailFlows: liveData.emailFlows,
        insightsData: liveData.insightsData,
        pipeline: liveData.pipeline,
        skipToday: liveData.skipToday,
        comingUp: liveData.comingUp,
      },
      isLive: true,
      lastUpdated: liveData.lastUpdated,
    }
  } catch {
    return {
      data: sampleData,
      isLive: false,
      lastUpdated: null,
    }
  }
}

// Re-export sample data for backward compatibility
export const stats = sampleStats
export const priorities = samplePriorities
export const emailFlows = sampleEmailFlows
export const insightsData = sampleInsightsData
export const pipeline = samplePipeline
export const skipToday = sampleSkipToday
export const comingUp = sampleComingUp
