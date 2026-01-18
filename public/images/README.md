# Image Assets Guide

## Required Images

Place your images in the appropriate directories:

### Hero Section (`/public/images/hero/`)
- `hero-bg.jpg` - Main hero background (1920x1080px recommended)
- High-quality action shot of training

### Programs (`/public/images/programs/`)
- `judo.jpg` - Judo training photo (800x600px)
- `bjj.jpg` - BJJ training photo (800x600px)
- `private.jpg` - Private training photo (800x600px)

### Instructors (`/public/images/instructors/`)
- `instructor1.jpg` - Head instructor photo (600x600px)
- `instructor2.jpg` - Assistant instructor photo (600x600px)
- Professional headshots with neutral background

### Gallery (`/public/images/gallery/`)
- Various training photos
- Community events
- Competition photos
- Facility photos

## Image Specifications

### Formats
- Use JPG for photographs
- Use PNG for graphics with transparency
- Use WebP for best performance (with JPG fallback)

### Sizes
- Hero images: 1920x1080px (16:9)
- Program cards: 800x600px (4:3)
- Instructor photos: 600x600px (1:1)
- Gallery: 1200x800px (3:2)

### Optimization
- Compress images before uploading
- Use tools like TinyPNG or ImageOptim
- Target file size: <200KB per image
- Use descriptive filenames

## Placeholder Images

Currently, the site uses:
- Unsplash URLs for hero section
- Gradient placeholders with emojis for programs/instructors

Replace these with actual photos for production use.

## Adding New Images

1. Place images in appropriate directory
2. Update references in components or constants.ts
3. Ensure images are optimized
4. Test on mobile and desktop

## Stock Photo Resources (Free)

- Unsplash.com
- Pexels.com
- Pixabay.com

Search terms: "judo", "jiu jitsu", "martial arts", "bjj training"
