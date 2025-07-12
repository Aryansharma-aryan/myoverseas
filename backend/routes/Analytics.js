const express = require('express');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
require('dotenv').config();

const router = express.Router();

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const key = JSON.parse(process.env.GA_CREDENTIALS_JSON || '{}');

if (!PROPERTY_ID || !key) {
  throw new Error("GA4 credentials or property ID are missing.");
}

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: key.client_email,
    private_key: key.private_key,
  },
});

router.get('/analytics', async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today',
        },
      ],
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }],
    });

    res.json(response);
  } catch (err) {
    console.error('Analytics error:', err.message);
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
});

module.exports = router;
