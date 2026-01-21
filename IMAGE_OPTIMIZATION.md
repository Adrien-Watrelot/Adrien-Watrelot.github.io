# Image Optimization Guide

This project uses Astro's built-in image optimization with Sharp for automatic image processing, conversion to modern formats (WebP), and responsive sizing.

## Setup

### Dependencies

- **Sharp**: Image processing library (already installed)
- **Astro Image**: Built-in Astro feature (no additional package needed)

```bash
npm install --save-dev sharp
```

## Image Storage Options

### Option 1: Optimized Images (Recommended)

Store images in `src/assets/images/` for automatic optimization:

```
src/assets/images/
├── projects/
│   ├── project-name/
│   │   ├── hero.png
│   │   └── screenshot.png
└── profile/
    └── avatar.jpg
```

**Benefits:**
- Automatic WebP conversion
- Responsive image generation
- Lazy loading support
- Build-time optimization (no runtime cost)

**Usage in frontmatter:**

```yaml
---
title: "My Project"
image: "../../assets/images/projects/my-project/hero.png"
---
```

### Option 2: Static Images

Store images in `public/` for direct serving without optimization:

```
public/
└── assets/
    └── images/
        └── projects/
            └── project-name/
                └── image.png
```

**Benefits:**
- Simpler paths
- No build processing
- Good for already-optimized images

**Usage in frontmatter:**

```yaml
---
title: "My Project"
image: "/assets/images/projects/my-project/image.png"
---
```

## Using the OptimizedImage Component

The `OptimizedImage` component automatically handles both imported and public images:

```astro
---
import OptimizedImage from '@/components/OptimizedImage.astro';
import heroImage from '@/assets/images/projects/my-project/hero.png';
---

<!-- Imported image (automatically optimized) -->
<OptimizedImage
  src={heroImage}
  alt="Project hero image"
  width={800}
  height={450}
  loading="eager"
  quality={85}
/>

<!-- Public path (no optimization) -->
<OptimizedImage
  src="/assets/images/logo.png"
  alt="Logo"
  width={200}
  height={100}
/>
```

## Project Schema

The content collection schema supports both image types:

```typescript
{
  image: z.union([z.string(), image()]).optional(),
  images: z.array(z.union([z.string(), image()])).optional(),
}
```

**Using images in projects:**

```yaml
---
title: "My Project"
# Single hero image
image: "../../assets/images/projects/my-project/hero.png"
# Or public path
# image: "/assets/images/projects/my-project/hero.png"

# Multiple images for gallery
images:
  - "../../assets/images/projects/my-project/screenshot1.png"
  - "../../assets/images/projects/my-project/screenshot2.png"
---
```

## Astro Image Component

For more control, use Astro's native `Image` component directly:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '@/assets/images/hero.png';
---

<Image
  src={heroImage}
  alt="Description"
  width={800}
  height={600}
  format="webp"
  quality={85}
  loading="lazy"
  decoding="async"
/>
```

## Configuration Options

### Format

- `webp`: Modern format (recommended)
- `avif`: Better compression but slower
- `jpg`/`png`: Original formats

### Quality

- `85`: Recommended balance (default)
- `90-100`: High quality, larger files
- `60-80`: Lower quality, smaller files

### Loading

- `lazy`: Load when in viewport (default for below fold)
- `eager`: Load immediately (for above-the-fold images)

## Best Practices

1. **Use WebP format** for best compression/quality ratio
2. **Set explicit dimensions** to prevent layout shift
3. **Use lazy loading** for images below the fold
4. **Optimize source images** before adding to project:
   - Max width: 1920px for hero images
   - Max width: 800px for thumbnails
   - Use PNG for graphics with transparency
   - Use JPG for photographs

5. **Alt text**: Always provide descriptive alt text for accessibility

## Image Sizes Reference

```typescript
// Hero images
width={1200} height={675}  // 16:9 ratio

// Project thumbnails
width={800} height={450}   // 16:9 ratio

// Profile photos
width={400} height={400}   // 1:1 ratio

// OG images
width={1200} height={630}  // OG standard
```

## Migration from Public to Assets

To migrate existing images:

1. Copy images from `public/assets/images/` to `src/assets/images/`
2. Update frontmatter to use relative imports:
   ```yaml
   # Before
   image: "/assets/images/project/hero.png"

   # After
   image: "../../assets/images/project/hero.png"
   ```
3. Build and verify images are optimized
4. Remove old images from `public/` (optional)

## Troubleshooting

### Build errors with imported images

Ensure images are in `src/assets/` and paths are relative:
```yaml
image: "../../assets/images/project/image.png"
```

### Images not optimizing

Check that:
1. Sharp is installed: `npm list sharp`
2. Images are in `src/assets/` directory
3. Using `Image` component or `image()` in schema

### Large bundle size

- Reduce image quality (70-85 range)
- Resize source images before adding
- Use appropriate format (WebP for most cases)

## Resources

- [Astro Image Docs](https://docs.astro.build/en/guides/images/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP vs AVIF vs JPEG](https://jakearchibald.com/2020/avif-has-landed/)
