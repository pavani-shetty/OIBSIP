# Deploy Portfolio to Netlify

**Live URL:** https://pavani-shetty.netlify.app  
**Netlify Dashboard:** https://app.netlify.com/projects/pavani-shetty/deploys

## Option 1 — Drag & Drop (Easiest)

1. Open File Explorer and go to:
   ```
   C:\Users\PavithraNagavaraSrin\OIBSIP\WebDev-L1-PersonalPortfolio
   ```
2. Select **all files and folders** inside (index.html, style.css, images/, netlify.toml)
3. **Do not** zip the parent folder — drag the contents directly
4. Open [Netlify Deploys](https://app.netlify.com/projects/pavani-shetty/deploys)
5. Drag your files into the **"Drag and drop your site output folder here"** area
6. Wait for deploy to finish — visit https://pavani-shetty.netlify.app

## Option 2 — Connect GitHub (Auto-deploy on push)

1. Go to [Netlify Site Settings](https://app.netlify.com/projects/pavani-shetty/configuration/deploys)
2. Click **Link repository** (or Import from Git)
3. Choose **GitHub** → select `pavani-shetty/OIBSIP`
4. Set **Publish directory** to:
   ```
   WebDev-L1-PersonalPortfolio
   ```
5. Click **Deploy**
6. Every `git push` will auto-update your live site

## Option 3 — Netlify CLI

```powershell
cd C:\Users\PavithraNagavaraSrin\OIBSIP\WebDev-L1-PersonalPortfolio
npx netlify-cli login
npx netlify-cli link --name pavani-shetty
npx netlify-cli deploy --prod --dir .
```

## Files included in deploy

- index.html
- style.css
- images/profile.png
- images/temperature-converter.jpg
- netlify.toml
