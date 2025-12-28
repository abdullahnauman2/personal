# Project Notes

## Fonts

To change the font in this Next.js + Tailwind project:

1. Edit `app/globals.css` - change the `--font-sans` variable in the `@theme inline` block:
   ```css
   @theme inline {
     --font-sans: "Your Font", fallback, sans-serif;
   }
   ```

2. Also update the `body` font-family in `globals.css`:
   ```css
   body {
     font-family: "Your Font", fallback, sans-serif;
   }
   ```

3. If using a Google Font, import it in `app/layout.tsx`:
   ```tsx
   import { YourFont } from "next/font/google";

   const yourFont = YourFont({
     weight: ["400", "700"],
     subsets: ["latin"],
     variable: "--font-yourfont",
   });
   ```
   And apply it to the body: `<body className={`${yourFont.variable} antialiased`}>`

4. **Important**: Restart the dev server after changing font variables in `@theme inline` - hot reload doesn't always pick up theme changes.
