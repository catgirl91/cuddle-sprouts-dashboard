# Dashboard Data JSON Schema

The dashboard loads live data from `public/data/dashboard-data.json`. An external automation tool can regenerate this file (e.g., daily via cron) to keep the dashboard current.

## File Location

```
public/data/dashboard-data.json
```

Served at runtime as `/data/dashboard-data.json`.

## Freshness

The dashboard checks the `lastUpdated` timestamp. If the data is older than **48 hours**, it falls back to built-in sample data. Update `lastUpdated` to the current ISO 8601 timestamp each time you regenerate the file.

## Schema

```jsonc
{
  // Required. ISO 8601 timestamp of when data was generated.
  "lastUpdated": "2026-03-18T08:00:00Z",

  // Required. Array of exactly 5 stat card objects.
  "stats": [
    {
      "label": "string",   // Display label (e.g., "Active Subscribers")
      "value": "string",   // Formatted value (e.g., "2,847", "$119.85", "42.6%")
      "change": "string",  // Change indicator (e.g., "+12.3%", "-0.4%")
      "up": true           // true = positive trend (green), false = negative (red)
    }
  ],

  // Required. Array of priority task objects.
  "priorities": [
    {
      "id": 1,                    // Unique integer ID
      "title": "string",          // Short task title
      "description": "string",    // Detailed description
      "prompt": "string",         // AI prompt for the task
      "done": false,              // Completion status
      "urgency": "high"           // "high" | "medium" | "low"
    }
  ],

  // Required. Array of email flow objects.
  "emailFlows": [
    {
      "id": "string",             // Unique string ID (e.g., "welcome")
      "name": "string",           // Display name
      "status": "live",           // "live" | "draft" | "paused"
      "emails": 5,                // Number of emails in flow
      "openRate": 58.2,           // Open rate percentage
      "clickRate": 12.4,          // Click rate percentage
      "revenue": 42.30,           // Revenue in dollars
      "lastUpdated": "2026-03-15",// Date string (YYYY-MM-DD)
      "diagnosis": "string"       // AI diagnosis/recommendation text
    }
  ],

  // Required. Chart data object with 3 sub-arrays.
  "insightsData": {
    // Revenue breakdown by flow (bar chart)
    "revenueByFlow": [
      { "name": "string", "value": 42.30 }
    ],
    // Weekly engagement trend (line chart)
    "engagementTrend": [
      { "week": "W1", "openRate": 39.2, "clickRate": 7.1 }
    ],
    // Subscriber segment breakdown (pie chart)
    "subscriberSegments": [
      { "name": "string", "value": 892 }
    ]
  },

  // Required. Array of pipeline task objects.
  "pipeline": [
    {
      "id": 1,                    // Unique integer ID
      "task": "string",           // Task name
      "status": "todo",           // "todo" | "in-progress" | "review" | "blocked" | "backlog"
      "assignee": "string",       // Assignee name
      "dueDate": "Mar 20"         // Formatted date string
    }
  ],

  // Required. Array of skip-today items.
  "skipToday": [
    {
      "id": 1,                    // Unique integer ID
      "task": "string",           // Task name
      "reason": "string"          // Reason for skipping
    }
  ],

  // Required. Array of upcoming items.
  "comingUp": [
    {
      "id": 1,                    // Unique integer ID
      "task": "string",           // Task name
      "date": "Mar 25",           // Formatted date string
      "urgency": "high"           // "high" | "medium" | "low"
    }
  ]
}
```

## Automation Example

```bash
#!/bin/bash
# Example: regenerate dashboard data daily via cron
# 0 8 * * * /path/to/update-dashboard.sh

node generate-dashboard-data.js > public/data/dashboard-data.json
```

Your generation script should:
1. Pull metrics from Klaviyo (or your data source)
2. Format them according to the schema above
3. Set `lastUpdated` to the current ISO 8601 timestamp
4. Write the JSON to `public/data/dashboard-data.json`
