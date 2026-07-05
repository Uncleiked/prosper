---
name: tailwind-responsive-layouts
description: Tailwind CSS responsive design utilities for typography and spacing. Use when building mobile-first layouts, scaling text across breakpoints, or creating adaptive spacing with core Tailwind, Tailwind Variants, Material Tailwind, or Symfony Tailwind Bundle.
---

# Tailwind Responsive Layouts

Mobile-first responsive design with typography and spacing utilities across Tailwind ecosystem.

## When to Apply

- Building responsive layouts with breakpoint-specific styling
- Scaling typography across mobile, tablet, and desktop views
- Creating adaptive spacing that adjusts to screen size
- Migrating from fixed layouts to responsive designs

## Critical Rules

**Mobile-First Strategy**: Always write unprefixed utilities for mobile, then override with breakpoint prefixes.

```html
<!-- WRONG - desktop-first approach -->
<div class="text-lg sm:text-base">Content</div>

<!-- RIGHT - mobile-first approach -->
<div class="text-base sm:text-lg">Content</div>
```

**Breakpoint Order**: Follow Tailwind's breakpoint hierarchy: sm (640px) → md (768px) → lg (1024px) → xl (1280px) → 2xl (1536px).

```html
<!-- WRONG - breakpoints out of order -->
<div class="text-sm lg:text-base md:text-lg">Text</div>

<!-- RIGHT - logical progression -->
<div class="text-sm md:text-base lg:text-lg">Text</div>
```

## Key Patterns

### Typography Scaling

```html
<!-- Responsive text sizing with line-height -->
<h1 class="text-2xl/8 md:text-4xl/10 lg:text-5xl/12">
  Responsive Heading
</h1>

<!-- Body text with proper scaling -->
<p class="text-sm/6 md:text-base/7 lg:text-lg/8">
  Content that scales smoothly across breakpoints.
</p>
```

### Container and Spacing

```html
<!-- Responsive container with adaptive padding -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="space-y-4 md:space-y-6 lg:space-y-8">
    <!-- Content with scaling spacing -->
  </div>
</div>

<!-- Grid with responsive columns -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
  <!-- Grid items -->
</div>
```

### Flexbox Layout Adaptation

```html
<!-- Card that transforms from stacked to horizontal -->
<div class="md:flex bg-white rounded-xl p-6 md:p-0">
  <img class="w-full md:w-48 h-48 md:h-auto rounded-full md:rounded-none mx-auto" />
  <div class="pt-6 md:p-8 text-center md:text-left">
    <!-- Content -->
  </div>
</div>
```

### Tailwind Variants Integration

```javascript
import { tv } from 'tailwind-variants';

const responsiveText = tv({
  base: 'font-medium',
  variants: {
    size: {
      sm: 'text-sm md:text-base',
      md: 'text-base md:text-lg lg:text-xl',
      lg: 'text-lg md:text-xl lg:text-2xl xl:text-3xl'
    }
  }
});

// Usage: responsiveText({ size: 'md' })
```

### Material Tailwind Typography

```jsx
import { Typography } from "@material-tailwind/react";

export function ResponsiveTypography() {
  return (
    <>
      <Typography variant="h1" className="text-3xl md:text-4xl lg:text-5xl">
        Responsive Material Heading
      </Typography>
      <Typography variant="paragraph" className="text-sm md:text-base lg:text-lg">
        Body text that adapts to screen size while maintaining Material Design proportions.
      </Typography>
    </>
  );
}
```

### Symfony Bundle Configuration

```yaml
# config/packages/symfonycasts_tailwind.yaml
symfonycasts_tailwind:
    input_css: 'assets/styles/app.css'
    binary_version: 'v3.4.17'
```

```bash
# Build responsive styles for development
php bin/console tailwind:build --watch

# Production build with minification
php bin/console tailwind:build --minify
```

## Common Mistakes

- **Missing mobile styles**: Always define base styles for mobile before adding breakpoint variants
- **Inconsistent spacing scales**: Use systematic progression like `gap-4 md:gap-6 lg:gap-8` instead of random values
- **Ignoring line-height**: Use the `/` syntax for responsive text sizing: `text-base/6 md:text-lg/7`
- **Wrong breakpoint targeting**: Remember `md:` means "768px and up", not "only medium screens"