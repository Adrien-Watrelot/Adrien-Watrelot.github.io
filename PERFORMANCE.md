# Performance Monitoring Guide

This document explains how to enable and use the Web Vitals performance monitoring system in this portfolio.

## What are Web Vitals?

Web Vitals are a set of metrics that measure real-world user experience on your website. Google uses these metrics as ranking signals in search results.

### Core Web Vitals

1. **LCP (Largest Contentful Paint)**: Loading performance
   - Measures when the largest content element becomes visible
   - **Good**: < 2.5s | **Needs Improvement**: 2.5-4s | **Poor**: > 4s

2. **FID (First Input Delay)**: Interactivity
   - Measures time from first user interaction to browser response
   - **Good**: < 100ms | **Needs Improvement**: 100-300ms | **Poor**: > 300ms

3. **CLS (Cumulative Layout Shift)**: Visual stability
   - Measures unexpected layout shifts during page load
   - **Good**: < 0.1 | **Needs Improvement**: 0.1-0.25 | **Poor**: > 0.25

### Additional Metrics

4. **FCP (First Contentful Paint)**: Initial render
   - Measures when first content appears
   - **Good**: < 1.8s | **Needs Improvement**: 1.8-3s | **Poor**: > 3s

5. **TTFB (Time to First Byte)**: Server response time
   - Measures time to receive first byte from server
   - **Good**: < 800ms | **Needs Improvement**: 800-1800ms | **Poor**: > 1800ms

6. **INP (Interaction to Next Paint)**: Responsiveness
   - Measures responsiveness to user interactions
   - **Good**: < 200ms | **Needs Improvement**: 200-500ms | **Poor**: > 500ms

## Web Vitals Component

The `WebVitals.astro` component is already included in the project but **commented out by default**. This component uses the `web-vitals` library to track all Core Web Vitals.

### Features

- ✅ Tracks all 6 metrics (CLS, FID, LCP, FCP, TTFB, INP)
- ✅ Provides metric ratings (good/needs-improvement/poor)
- ✅ Includes navigation type and user context
- ✅ Debug mode for development
- ✅ Ready to integrate with analytics services

## How to Enable Web Vitals Monitoring

### Step 1: Import the Component

In `src/layouts/BaseLayout.astro`, add the import at the top:

```astro
---
import WebVitals from '@/components/WebVitals.astro';
// ... other imports
---
```

### Step 2: Add the Component

Add `<WebVitals />` before the closing `</body>` tag:

```astro
<body>
  <div class="flex min-h-screen flex-col">
    <Header locale={locale} currentPath={currentPath} />
    <main class="flex-1">
      <slot />
    </main>
    <Footer locale={locale} />
  </div>

  <!-- Add Web Vitals monitoring -->
  <WebVitals />
</body>
```

### Step 3: Configure Analytics Endpoint (Optional)

Open `src/components/WebVitals.astro` and configure your analytics endpoint:

```typescript
// Configuration
const ANALYTICS_ENDPOINT = '/api/vitals'; // Replace with your endpoint
const DEBUG = false; // Set to true during testing
```

### Step 4: Enable Data Sending

Uncomment the fetch/sendBeacon code in the `sendToAnalytics` function:

```typescript
// Uncomment to send data
if (navigator.sendBeacon) {
  navigator.sendBeacon(ANALYTICS_ENDPOINT, body);
} else {
  fetch(ANALYTICS_ENDPOINT, {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
  });
}
```

## Integration with Analytics Services

### Option 1: Google Analytics

```javascript
import { onCLS, onFID, onLCP } from 'web-vitals';

function sendToGoogleAnalytics({ name, delta, value, id }) {
  gtag('event', name, {
    event_category: 'Web Vitals',
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    event_label: id,
    non_interaction: true,
  });
}

onCLS(sendToGoogleAnalytics);
onFID(sendToGoogleAnalytics);
onLCP(sendToGoogleAnalytics);
```

### Option 2: Plausible (Custom Events)

If you're using Plausible Analytics, you can send Web Vitals as custom events:

```javascript
function sendToPlausible(metric) {
  if (window.plausible) {
    window.plausible('Web Vitals', {
      props: {
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
      }
    });
  }
}
```

### Option 3: Custom Backend

Create an API endpoint to receive and store metrics:

```typescript
// Example: src/pages/api/vitals.ts
export async function POST({ request }) {
  const data = await request.json();

  // Store in database or send to monitoring service
  await storeMetric(data);

  return new Response(null, { status: 200 });
}
```

## Debug Mode

Enable debug mode to see metrics in the browser console:

```typescript
const DEBUG = true; // In WebVitals.astro
```

This will log each metric as it's captured:

```
[Web Vitals] Monitoring initialized
[Web Vitals] LCP 1250 good
[Web Vitals] FID 45 good
[Web Vitals] CLS 0.05 good
```

## Performance Best Practices

### Already Implemented ✅

- **Static Site Generation**: All pages pre-rendered at build time
- **Lazy Loading**: Images load as they enter viewport
- **Code Splitting**: Astro automatically splits JS per page
- **Font Optimization**: Google Fonts with `display=swap`
- **Image Optimization**: Sharp + WebP conversion (see IMAGE_OPTIMIZATION.md)

### Recommended Actions

1. **Monitor Regularly**: Check Web Vitals weekly for regressions
2. **Set Performance Budgets**: Define acceptable thresholds
3. **Test on Real Devices**: Use mobile devices and slow connections
4. **Use Lighthouse**: Run Lighthouse audits regularly

## Testing Performance

### Local Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Open Lighthouse in Chrome DevTools
# Performance tab > Lighthouse > Analyze page load
```

### Chrome User Experience Report (CrUX)

Once deployed, check real-user metrics:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Enter your URL to see field data from real users

## Performance Monitoring Services

### Free Options

1. **Google Lighthouse CI**: Automated Lighthouse reports in CI/CD
2. **Vercel Analytics**: If migrating to Vercel
3. **Cloudflare Web Analytics**: Privacy-friendly, free tier

### Paid Options

1. **SpeedCurve**: Comprehensive performance monitoring
2. **Calibre**: Beautiful dashboards and alerting
3. **DebugBear**: Core Web Vitals monitoring

## Troubleshooting

### Metrics Not Appearing

1. Check browser console for errors
2. Verify `DEBUG` mode is enabled
3. Ensure `web-vitals` package is installed
4. Check that component is properly imported

### High CLS (Layout Shift)

- Add explicit width/height to images
- Reserve space for dynamic content
- Avoid inserting content above existing content

### High LCP (Slow Loading)

- Optimize images (use WebP, proper sizing)
- Reduce server response time
- Use CDN for static assets
- Preload critical resources

### High FID (Slow Interactivity)

- Reduce JavaScript execution time
- Code split large bundles
- Defer non-critical JavaScript
- Use web workers for heavy computation

## Resources

- [Web Vitals Official Site](https://web.dev/vitals/)
- [web-vitals Library](https://github.com/GoogleChrome/web-vitals)
- [Core Web Vitals Guide](https://web.dev/articles/vitals)
- [Measuring Performance](https://web.dev/articles/user-centric-performance-metrics)

## Support

For questions about Web Vitals integration, refer to:
- `src/components/WebVitals.astro` (inline documentation)
- [web-vitals GitHub Issues](https://github.com/GoogleChrome/web-vitals/issues)
