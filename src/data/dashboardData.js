// Hardcoded sample data (fallback when live data is unavailable)

const sampleChannelBanner = [
  { channel: 'shopify', label: 'Shopify Revenue', value: '$1,247.30', change: '+18.7%', up: true, sparkline: [820, 910, 1050, 980, 1120, 1190, 1247] },
  { channel: 'klaviyo', label: 'Klaviyo Email Revenue', value: '$119.85', change: '+12.3%', up: true, sparkline: [65, 78, 82, 95, 102, 110, 119] },
  { channel: 'googleAds', label: 'Google Ads ROAS', value: '0.00x', change: 'Paused', up: false, sparkline: [2.1, 1.8, 2.3, 1.9, 0, 0, 0] },
  { channel: 'facebookAds', label: 'Facebook Ads ROAS', value: '1.42x', change: '-8.2%', up: false, sparkline: [1.6, 1.5, 1.7, 1.4, 1.3, 1.5, 1.42] },
  { channel: 'seo', label: 'SEO Organic Traffic', value: '482', change: '+6.1%', up: true, sparkline: [310, 340, 380, 405, 420, 455, 482] },
]

const samplePriorities = [
  {
    id: 1,
    title: 'Reactivate Google Ads — All 5 Campaigns Paused',
    description: 'All Google Ads campaigns are currently paused — zero paid traffic entering the funnel.',
    prompt: 'Review Google Ads — all 5 campaigns are paused. Re-enable the most relevant ones and check for billing or policy issues.',
    done: false,
    urgency: 'high',
  },
  {
    id: 2,
    title: 'Send Easter Promo Email Campaign',
    description: 'No campaigns sent in 30 days. Easter segment already built (366 eligible). Easter is April 5.',
    prompt: 'Write an Easter promotional email for Cuddle Sprouts targeting engaged subscribers.',
    done: false,
    urgency: 'high',
  },
  {
    id: 3,
    title: 'Fulfill Order #1455 ($42.54)',
    description: 'Order #1455 came in today and is still unfulfilled.',
    prompt: 'Go to Shopify admin, find order #1455 and fulfill it.',
    done: false,
    urgency: 'high',
  },
  {
    id: 4,
    title: 'Investigate $0-Revenue Flows',
    description: 'Browse Abandonment, Winback, and Abandoned Cart all have $0 revenue.',
    prompt: 'Audit three Klaviyo flows with zero revenue.',
    done: false,
    urgency: 'medium',
  },
  {
    id: 5,
    title: 'Publish Draft Flows (Back in Stock, Fulfilled Order)',
    description: 'Two Klaviyo flows are still in draft status.',
    prompt: 'Review the Back in Stock Alert and Fulfilled Order draft flows.',
    done: false,
    urgency: 'medium',
  },
]

const sampleShopify = {
  revenue: { today: 42.54, week: 289.70, month: 1247.30 },
  orders: { today: 1, week: 8, month: 34 },
  aov: 36.69,
  topProducts: [
    { name: 'Organic Cotton Swaddle Set', revenue: 328.50, unitsSold: 15, image: '' },
    { name: 'Bamboo Sleep Sack', revenue: 245.80, unitsSold: 11, image: '' },
    { name: 'Muslin Burp Cloths (3-pack)', revenue: 189.60, unitsSold: 24, image: '' },
    { name: 'Organic Onesie Bundle', revenue: 167.40, unitsSold: 9, image: '' },
    { name: 'Newborn Gift Box', revenue: 142.00, unitsSold: 4, image: '' },
  ],
}

const sampleKlaviyo = {
  subscribers: 366,
  listGrowthRate: 9.8,
  flows: [
    { id: 'welcome-flow', name: 'Welcome Flow', status: 'live', emails: 5, openRate: 58.2, clickRate: 12.4, revenue: 61.20, lastUpdated: '2026-03-19', diagnosis: 'Healthy flow generating $61.20 revenue.' },
    { id: 'post-purchase', name: 'Post-Purchase Bounce Back', status: 'live', emails: 4, openRate: 52.1, clickRate: 7.3, revenue: 58.65, lastUpdated: '2026-03-19', diagnosis: 'Top revenue-per-recipient flow at $1.78.' },
    { id: 'browse-abandonment', name: 'Browse Abandonment', status: 'live', emails: 2, openRate: 33.7, clickRate: 5.8, revenue: 0, lastUpdated: '2026-03-19', diagnosis: '30 deliveries but $0 revenue — needs attention.' },
    { id: 'winback', name: 'Winback — High-Value 180 Days', status: 'live', emails: 3, openRate: 22.4, clickRate: 3.1, revenue: 0, lastUpdated: '2026-03-19', diagnosis: '22 deliveries but $0 revenue.' },
    { id: 'abandoned-cart', name: 'Abandoned Cart Reminder', status: 'live', emails: 3, openRate: 45.8, clickRate: 9.7, revenue: 0, lastUpdated: '2026-03-19', diagnosis: '14 deliveries but $0 revenue.' },
    { id: 'sunset', name: 'Sunset Unengaged Subscribers', status: 'live', emails: 2, openRate: 30.0, clickRate: 4.0, revenue: 0, lastUpdated: '2026-03-19', diagnosis: 'List hygiene flow working as expected.' },
  ],
  campaigns: [
    { id: 'camp-1', name: "Valentine's Day Collection", sentDate: '2026-02-12', recipients: 310, openRate: 41.2, clickRate: 6.8, revenue: 89.40 },
    { id: 'camp-2', name: 'New Arrivals — Spring', sentDate: '2026-02-20', recipients: 340, openRate: 38.5, clickRate: 5.2, revenue: 42.10 },
  ],
  emailRevenue: 119.85,
}

const sampleGoogleAds = {
  spend: 0,
  roas: 0,
  conversions: 0,
  costPerConversion: 0,
  campaigns: [
    { id: 'gad-1', name: 'Best Sellers — Shopping', status: 'paused', spend: 0, conversions: 0, roas: 0 },
    { id: 'gad-2', name: 'Brand Search — Cuddle Sprouts', status: 'paused', spend: 0, conversions: 0, roas: 0 },
    { id: 'gad-3', name: 'Baby Gifts — Search', status: 'paused', spend: 0, conversions: 0, roas: 0 },
    { id: 'gad-4', name: 'Organic Baby — Display', status: 'paused', spend: 0, conversions: 0, roas: 0 },
    { id: 'gad-5', name: 'Retargeting — Cart Abandoners', status: 'paused', spend: 0, conversions: 0, roas: 0 },
  ],
}

const sampleFacebookAds = {
  spend: 85.20,
  roas: 1.42,
  conversions: 3,
  topAdSets: [
    { id: 'fb-1', name: 'Lookalike — Past Purchasers', status: 'active', spend: 52.30, conversions: 2, roas: 1.65 },
    { id: 'fb-2', name: 'Interest — New Parents', status: 'active', spend: 32.90, conversions: 1, roas: 1.08 },
  ],
}

const sampleSeo = {
  organicTraffic: 482,
  keywordRankings: [
    { keyword: 'organic baby swaddle', position: 12, change: 3, volume: 1200 },
    { keyword: 'bamboo sleep sack baby', position: 18, change: -2, volume: 880 },
    { keyword: 'cuddle sprouts', position: 1, change: 0, volume: 90 },
    { keyword: 'organic cotton baby clothes', position: 34, change: 5, volume: 3400 },
    { keyword: 'eco friendly baby gifts', position: 22, change: 1, volume: 1600 },
  ],
  contentPipeline: [
    { id: 'seo-1', title: 'Best Organic Swaddles for Newborns (2026)', status: 'published', targetKeyword: 'organic baby swaddle', traffic: 124 },
    { id: 'seo-2', title: 'Bamboo vs Cotton: Which is Best for Baby?', status: 'draft', targetKeyword: 'bamboo sleep sack baby', traffic: 0 },
    { id: 'seo-3', title: 'Ultimate Guide to Eco-Friendly Baby Gifts', status: 'idea', targetKeyword: 'eco friendly baby gifts', traffic: 0 },
  ],
}

const sampleInsightsData = {
  revenueByChannel: [
    { name: 'Shopify', value: 1247.30 },
    { name: 'Klaviyo Email', value: 119.85 },
    { name: 'Facebook Ads', value: 121.00 },
    { name: 'Google Ads', value: 0 },
  ],
  revenueByFlow: [
    { name: 'Welcome', value: 61.20 },
    { name: 'Post-Purch', value: 58.65 },
    { name: 'Browse', value: 0 },
    { name: 'Winback', value: 0 },
    { name: 'Cart', value: 0 },
    { name: 'Sunset', value: 0 },
  ],
  trafficBySource: [
    { name: 'Organic', value: 482 },
    { name: 'Direct', value: 310 },
    { name: 'Social', value: 185 },
    { name: 'Email', value: 142 },
    { name: 'Paid', value: 38 },
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
    { name: 'PROMO Eligible', value: 366 },
    { name: 'New Subscribers', value: 120 },
    { name: 'Engaged Buyers', value: 98 },
    { name: 'At Risk', value: 85 },
    { name: 'Lapsed', value: 63 },
  ],
  weeklyRevenue: [
    { week: 'Feb 17', shopify: 280, email: 22, ads: 35 },
    { week: 'Feb 24', shopify: 310, email: 28, ads: 42 },
    { week: 'Mar 3', shopify: 295, email: 25, ads: 30 },
    { week: 'Mar 10', shopify: 340, email: 32, ads: 14 },
    { week: 'Mar 17', shopify: 322, email: 38, ads: 0 },
  ],
}

const samplePipeline = [
  { id: 1, task: 'Easter Promo Email Campaign', status: 'todo', assignee: 'Together', dueDate: 'This week' },
  { id: 2, task: 'Best Sellers Google Ads (Re-enable)', status: 'blocked', assignee: 'Yenny', dueDate: 'Apr 15' },
  { id: 3, task: 'Back in Stock Alert Flow', status: 'review', assignee: 'You', dueDate: 'Mar 22' },
  { id: 4, task: 'Fulfilled Order Flow', status: 'review', assignee: 'You', dueDate: 'Mar 22' },
  { id: 5, task: 'Browse Abandonment Audit', status: 'todo', assignee: 'You', dueDate: 'This week' },
  { id: 6, task: 'Abandoned Cart Revenue Fix', status: 'todo', assignee: 'You', dueDate: 'This week' },
  { id: 7, task: 'Winback Trigger Optimization', status: 'backlog', assignee: 'You', dueDate: 'Mar 28' },
]

const sampleSkipToday = [
  { id: 1, task: 'Welcome Flow optimization', reason: 'Healthy — $61.20 revenue' },
  { id: 2, task: 'Post-Purchase Flow optimization', reason: 'Healthy — $58.65 revenue' },
  { id: 3, task: 'Facebook Ads review', reason: '1 campaign, low priority' },
  { id: 4, task: 'Blog/SEO updates', reason: 'No urgent updates needed' },
  { id: 5, task: 'Social Media content', reason: 'Not active yet' },
]

const sampleComingUp = [
  { id: 1, task: 'Easter — Send promo campaign', date: 'Apr 5', urgency: 'high' },
  { id: 2, task: 'Best Sellers Google Ads relaunch', date: 'Apr 15', urgency: 'medium' },
  { id: 3, task: 'Abandoned Cart & Browse Abandon audit', date: 'This week', urgency: 'high' },
  { id: 4, task: 'Publish draft Klaviyo flows', date: 'Mar 22', urgency: 'medium' },
  { id: 5, task: 'Winback trigger timing test', date: 'Mar 28', urgency: 'low' },
]

const sampleData = {
  channelBanner: sampleChannelBanner,
  priorities: samplePriorities,
  shopify: sampleShopify,
  klaviyo: sampleKlaviyo,
  googleAds: sampleGoogleAds,
  facebookAds: sampleFacebookAds,
  seo: sampleSeo,
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

// --- Defensive sanitizers ---

function safeBannerItem(item, fallback) {
  return {
    channel: item?.channel ?? fallback?.channel ?? 'unknown',
    label: item?.label ?? fallback?.label ?? 'N/A',
    value: item?.value ?? fallback?.value ?? '—',
    change: item?.change ?? fallback?.change ?? '—',
    up: item?.up ?? fallback?.up ?? true,
    sparkline: Array.isArray(item?.sparkline) ? item.sparkline : (fallback?.sparkline ?? []),
  }
}

function safePriority(p, fallback) {
  return {
    id: p?.id ?? fallback?.id ?? 0,
    title: p?.title ?? fallback?.title ?? 'Untitled',
    description: p?.description ?? fallback?.description ?? '',
    prompt: p?.prompt ?? fallback?.prompt ?? '',
    done: p?.done ?? fallback?.done ?? false,
    urgency: p?.urgency ?? fallback?.urgency ?? 'medium',
  }
}

function safeEmailFlow(f, fallback) {
  return {
    id: f?.id ?? fallback?.id ?? 'unknown',
    name: f?.name ?? fallback?.name ?? 'Unknown Flow',
    status: f?.status ?? fallback?.status ?? 'draft',
    emails: f?.emails ?? fallback?.emails ?? 0,
    openRate: f?.openRate ?? fallback?.openRate ?? 0,
    clickRate: f?.clickRate ?? fallback?.clickRate ?? 0,
    revenue: f?.revenue ?? fallback?.revenue ?? 0,
    lastUpdated: f?.lastUpdated ?? fallback?.lastUpdated ?? '',
    diagnosis: f?.diagnosis ?? fallback?.diagnosis ?? 'No diagnosis available.',
  }
}

function safeCampaign(c, fallback) {
  return {
    id: c?.id ?? fallback?.id ?? 'unknown',
    name: c?.name ?? fallback?.name ?? 'Unknown Campaign',
    sentDate: c?.sentDate ?? fallback?.sentDate ?? '',
    recipients: c?.recipients ?? fallback?.recipients ?? 0,
    openRate: c?.openRate ?? fallback?.openRate ?? 0,
    clickRate: c?.clickRate ?? fallback?.clickRate ?? 0,
    revenue: c?.revenue ?? fallback?.revenue ?? 0,
  }
}

function safeShopify(data) {
  const fb = sampleShopify
  if (!data || typeof data !== 'object') return fb
  return {
    revenue: {
      today: data.revenue?.today ?? fb.revenue.today,
      week: data.revenue?.week ?? fb.revenue.week,
      month: data.revenue?.month ?? fb.revenue.month,
    },
    orders: {
      today: data.orders?.today ?? fb.orders.today,
      week: data.orders?.week ?? fb.orders.week,
      month: data.orders?.month ?? fb.orders.month,
    },
    aov: data.aov ?? fb.aov,
    topProducts: Array.isArray(data.topProducts) ? data.topProducts.map(p => ({
      name: p?.name ?? 'Unknown Product',
      revenue: p?.revenue ?? 0,
      unitsSold: p?.unitsSold ?? 0,
      image: p?.image ?? '',
    })) : fb.topProducts,
  }
}

function safeKlaviyo(data) {
  const fb = sampleKlaviyo
  if (!data || typeof data !== 'object') return fb
  return {
    subscribers: data.subscribers ?? fb.subscribers,
    listGrowthRate: data.listGrowthRate ?? fb.listGrowthRate,
    flows: Array.isArray(data.flows)
      ? data.flows.map((f, i) => safeEmailFlow(f, fb.flows[i]))
      : fb.flows,
    campaigns: Array.isArray(data.campaigns)
      ? data.campaigns.map((c, i) => safeCampaign(c, fb.campaigns[i]))
      : fb.campaigns,
    emailRevenue: data.emailRevenue ?? fb.emailRevenue,
  }
}

function safeGoogleAds(data) {
  const fb = sampleGoogleAds
  if (!data || typeof data !== 'object') return fb
  return {
    spend: data.spend ?? fb.spend,
    roas: data.roas ?? fb.roas,
    conversions: data.conversions ?? fb.conversions,
    costPerConversion: data.costPerConversion ?? fb.costPerConversion,
    campaigns: Array.isArray(data.campaigns) ? data.campaigns.map(c => ({
      id: c?.id ?? 'unknown',
      name: c?.name ?? 'Unknown Campaign',
      status: c?.status ?? 'paused',
      spend: c?.spend ?? 0,
      conversions: c?.conversions ?? 0,
      roas: c?.roas ?? 0,
    })) : fb.campaigns,
  }
}

function safeFacebookAds(data) {
  const fb = sampleFacebookAds
  if (!data || typeof data !== 'object') return fb
  return {
    spend: data.spend ?? fb.spend,
    roas: data.roas ?? fb.roas,
    conversions: data.conversions ?? fb.conversions,
    topAdSets: Array.isArray(data.topAdSets) ? data.topAdSets.map(a => ({
      id: a?.id ?? 'unknown',
      name: a?.name ?? 'Unknown Ad Set',
      status: a?.status ?? 'paused',
      spend: a?.spend ?? 0,
      conversions: a?.conversions ?? 0,
      roas: a?.roas ?? 0,
    })) : fb.topAdSets,
  }
}

function safeSeo(data) {
  const fb = sampleSeo
  if (!data || typeof data !== 'object') return fb
  return {
    organicTraffic: data.organicTraffic ?? fb.organicTraffic,
    keywordRankings: Array.isArray(data.keywordRankings) ? data.keywordRankings.map(k => ({
      keyword: k?.keyword ?? 'unknown',
      position: k?.position ?? 0,
      change: k?.change ?? 0,
      volume: k?.volume ?? 0,
    })) : fb.keywordRankings,
    contentPipeline: Array.isArray(data.contentPipeline) ? data.contentPipeline.map(c => ({
      id: c?.id ?? 'unknown',
      title: c?.title ?? 'Untitled',
      status: c?.status ?? 'idea',
      targetKeyword: c?.targetKeyword ?? '',
      traffic: c?.traffic ?? 0,
    })) : fb.contentPipeline,
  }
}

function safeInsightsData(data, fallback) {
  const safeArray = (arr, fb) => (Array.isArray(arr) && arr.length > 0 ? arr : fb)
  return {
    revenueByChannel: safeArray(data?.revenueByChannel, fallback.revenueByChannel).map(d => ({
      name: d?.name ?? 'Unknown',
      value: d?.value ?? 0,
    })),
    revenueByFlow: safeArray(data?.revenueByFlow, fallback.revenueByFlow).map(d => ({
      name: d?.name ?? 'Unknown',
      value: d?.value ?? 0,
    })),
    trafficBySource: safeArray(data?.trafficBySource, fallback.trafficBySource).map(d => ({
      name: d?.name ?? 'Unknown',
      value: d?.value ?? 0,
    })),
    engagementTrend: safeArray(data?.engagementTrend, fallback.engagementTrend).map(d => ({
      week: d?.week ?? '',
      openRate: d?.openRate ?? 0,
      clickRate: d?.clickRate ?? 0,
    })),
    subscriberSegments: safeArray(data?.subscriberSegments, fallback.subscriberSegments).map(d => ({
      name: d?.name ?? 'Unknown',
      value: d?.value ?? 0,
    })),
    weeklyRevenue: safeArray(data?.weeklyRevenue, fallback.weeklyRevenue).map(d => ({
      week: d?.week ?? '',
      shopify: d?.shopify ?? 0,
      email: d?.email ?? 0,
      ads: d?.ads ?? 0,
    })),
  }
}

function safePipelineItem(p, fallback) {
  return {
    id: p?.id ?? fallback?.id ?? 0,
    task: p?.task ?? fallback?.task ?? 'Untitled',
    status: p?.status ?? fallback?.status ?? 'todo',
    assignee: p?.assignee ?? fallback?.assignee ?? 'Unassigned',
    dueDate: p?.dueDate ?? fallback?.dueDate ?? '',
  }
}

function safeSkipItem(s, fallback) {
  return {
    id: s?.id ?? fallback?.id ?? 0,
    task: s?.task ?? fallback?.task ?? 'Untitled',
    reason: s?.reason ?? fallback?.reason ?? '',
  }
}

function safeComingUpItem(c, fallback) {
  return {
    id: c?.id ?? fallback?.id ?? 0,
    task: c?.task ?? fallback?.task ?? 'Untitled',
    date: c?.date ?? fallback?.date ?? '',
    urgency: c?.urgency ?? fallback?.urgency ?? 'medium',
  }
}

function sanitizeLiveData(liveData) {
  const channelBanner = Array.isArray(liveData.channelBanner)
    ? liveData.channelBanner.map((b, i) => safeBannerItem(b, sampleChannelBanner[i]))
    : sampleChannelBanner
  const priorities = Array.isArray(liveData.priorities)
    ? liveData.priorities.map((p, i) => safePriority(p, samplePriorities[i]))
    : samplePriorities
  const shopify = safeShopify(liveData.shopify)
  const klaviyo = safeKlaviyo(liveData.klaviyo)
  const googleAds = safeGoogleAds(liveData.googleAds)
  const facebookAds = safeFacebookAds(liveData.facebookAds)
  const seo = safeSeo(liveData.seo)
  const insData = liveData.insightsData && typeof liveData.insightsData === 'object'
    ? safeInsightsData(liveData.insightsData, sampleInsightsData)
    : sampleInsightsData
  const pipelineData = Array.isArray(liveData.pipeline)
    ? liveData.pipeline.map((p, i) => safePipelineItem(p, samplePipeline[i]))
    : samplePipeline
  const skipData = Array.isArray(liveData.skipToday)
    ? liveData.skipToday.map((s, i) => safeSkipItem(s, sampleSkipToday[i]))
    : sampleSkipToday
  const comingUpData = Array.isArray(liveData.comingUp)
    ? liveData.comingUp.map((c, i) => safeComingUpItem(c, sampleComingUp[i]))
    : sampleComingUp

  return {
    channelBanner,
    priorities,
    shopify,
    klaviyo,
    googleAds,
    facebookAds,
    seo,
    insightsData: insData,
    pipeline: pipelineData,
    skipToday: skipData,
    comingUp: comingUpData,
  }
}

/**
 * Fetches live dashboard data from /data/dashboard-data.json.
 * Falls back to hardcoded sample data if fetch fails or data is stale.
 * Applies defensive defaults to all fields to prevent crashes on malformed data.
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
      data: sanitizeLiveData(liveData),
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
