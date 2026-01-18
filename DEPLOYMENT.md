# 🚀 Deployment Guide - Myrtle Beach BJJ & Judo Website

## Prerequisites

Before deploying to Netlify, ensure you have:
- [ ] A GitHub, GitLab, or Bitbucket account
- [ ] A Netlify account (free tier is sufficient)
- [ ] The domain `myrtlebeachbjj.com` (if using custom domain)

## Method 1: Deploy via Git (Recommended)

### Step 1: Push to Git Repository

If you haven't already pushed to a Git repository:

```bash
# If starting fresh, create a new repo on GitHub first, then:
git remote add origin https://github.com/your-username/myrtle-beach-bjj.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select the `myrtle-beach-bjj` repository

### Step 3: Configure Build Settings

Netlify will automatically detect the settings from `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

Click "Deploy site"

### Step 4: Wait for Deployment

- First deployment takes 2-5 minutes
- You'll get a temporary URL like: `https://random-name-123.netlify.app`
- Site will auto-deploy on every git push to main branch

## Method 2: Manual Deploy via CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser window for authentication.

### Step 3: Build the Site

```bash
npm run build
```

### Step 4: Deploy

For a draft preview:
```bash
netlify deploy --dir=dist
```

For production:
```bash
netlify deploy --prod --dir=dist
```

## Custom Domain Setup

### Step 1: Add Domain in Netlify

1. In your site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter `myrtlebeachbjj.com`
4. Click "Verify"

### Step 2: Configure DNS

You have two options:

#### Option A: Use Netlify DNS (Recommended)

1. Netlify will provide nameservers (e.g., `dns1.p08.nsone.net`)
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Update nameservers to Netlify's nameservers
4. Wait 24-48 hours for DNS propagation

#### Option B: Use External DNS

Add these records at your DNS provider:

**For apex domain (myrtlebeachbjj.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Step 3: Enable HTTPS

1. Netlify automatically provisions SSL certificate
2. Usually ready within 24 hours of DNS setup
3. Force HTTPS redirect in Netlify settings

## Environment Variables

If you need to add environment variables:

1. Go to Site settings → Environment variables
2. Add any required variables:
   - `GOOGLE_MAPS_API_KEY` (if using Google Maps API)
   - `INSTAGRAM_TOKEN` (if adding Instagram feed)

## Post-Deployment Checklist

### Immediate Testing

- [ ] Visit your live site URL
- [ ] Test all navigation links
- [ ] Submit a test form (Contact page)
- [ ] Check form submissions in Netlify dashboard → Forms
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop

### SEO & Performance

- [ ] Run Google PageSpeed Insights test
- [ ] Verify meta tags with social media sharing debuggers:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

### Content Updates

- [ ] Replace placeholder images with actual photos
- [ ] Update instructor information with real names/bios
- [ ] Add actual phone number
- [ ] Verify all contact information
- [ ] Update social media links
- [ ] Add real testimonials/reviews

## Form Notifications

To receive email notifications for form submissions:

1. Go to Site settings → Forms → Form notifications
2. Click "Add notification"
3. Choose "Email notification"
4. Enter your email: `myrtlebeachbjj@gmail.com`
5. Select the `contact` form
6. Save settings

## Continuous Deployment

Once connected to Git, your site will automatically:

1. Rebuild when you push to main branch
2. Generate deploy previews for pull requests
3. Provide deploy logs for debugging

## Monitoring & Analytics

### Netlify Analytics (Paid)

- Server-side analytics (no cookies needed)
- $9/month per site
- More accurate than client-side tracking

### Google Analytics (Free)

Add to `src/layouts/MainLayout.astro` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Rollback Instructions

If something goes wrong:

1. Go to Deploys tab in Netlify dashboard
2. Find a previous successful deploy
3. Click "..." menu → "Publish deploy"
4. Site instantly reverts to that version

## Troubleshooting

### Build Fails

Check the build log in Netlify dashboard:
- Common issues: Missing dependencies, environment variables
- Solution: Ensure all packages in `package.json` are installed

### Forms Not Working

- Ensure `data-netlify="true"` attribute is present
- Form must be in HTML (not hidden behind JavaScript)
- Verify form name matches in Netlify dashboard

### Custom Domain Not Working

- Check DNS propagation: https://dnschecker.org
- Verify nameservers are correct
- Wait up to 48 hours for full propagation

### HTTPS Not Working

- Wait 24 hours after DNS setup
- Verify domain is properly connected
- Try "Renew certificate" in Netlify dashboard

## Support Resources

- **Netlify Documentation**: https://docs.netlify.com
- **Netlify Support Forum**: https://answers.netlify.com
- **Astro Documentation**: https://docs.astro.build

## Costs

### Netlify Pricing

**Free Tier (Recommended for start):**
- 100 GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Form submissions: 100/month
- Functions: 125k requests/month

**Pro Tier ($19/month if needed):**
- 400 GB bandwidth/month
- Unlimited build minutes
- Form submissions: 1000/month
- Priority support

### Domain Costs

- Domain registration: ~$12/year
- Renewal: ~$12/year

### Optional Services

- Google Maps API: Free (up to reasonable usage)
- Premium fonts: $0 (using Google Fonts)
- Image optimization: Included with Netlify

## Maintenance

### Regular Updates

Monthly:
- [ ] Update testimonials/reviews
- [ ] Check form submissions
- [ ] Update schedule if changed
- [ ] Add news/announcements (if blog added)

Quarterly:
- [ ] Update npm packages: `npm update`
- [ ] Audit dependencies: `npm audit`
- [ ] Review analytics data
- [ ] Optimize images

## Next Steps After Deployment

1. **Set up Google Business Profile**
   - Claim your business listing
   - Add photos
   - Respond to reviews
   - Post updates regularly

2. **Social Media Integration**
   - Share website on Facebook
   - Share on Instagram
   - Add website link to all profiles

3. **Local SEO**
   - Submit to local directories
   - Get listed on Yelp, Yellow Pages
   - Engage with local community online

4. **Marketing**
   - Create QR code for flyers
   - Add URL to email signatures
   - Print business cards with website
   - Share on community forums

## Success Metrics

Track these metrics to measure success:

- **Traffic**: Unique visitors per month
- **Engagement**: Average time on site
- **Conversions**: Form submissions (trial signups)
- **SEO**: Search ranking for "myrtle beach bjj"
- **Speed**: PageSpeed score >90

---

**Need Help?**

Contact: myrtlebeachbjj@gmail.com

Website successfully deployed! 🎉
