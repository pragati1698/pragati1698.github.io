# Pragati Kumar — Personal Engineering Portfolio

A responsive, accessible, dependency-free portfolio designed for AI Forward Deployed Engineer (FDE), Applied AI Engineer, and AI/Agent Infrastructure opportunities.

## What's inside

- `index.html` — homepage with selected work, impact metrics, experience, and contact links.
- `case-studies/agent-hands.html` — source-backed case study for the Agent Hands project.
- `case-studies/enterprise-ai.html` — **public-safe** summary of enterprise Copilot Studio work (no employer source code, internal links, screenshots, secrets, or dataset exports).
- `assets/styles.css` — responsive styling; no external packages or font dependencies.
- `assets/site.js` — mobile menu, scroll progress, and small reveal animations; no tracking scripts.
- `assets/Pragati_Kumar_Resume.pdf` — portfolio resume; phone number intentionally omitted.
- `assets/favicon.svg` — SVG favicon.

## Preview the website

Double-click `index.html`, or start a local preview server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

No build command, paid hosting, API key, package installation, or `.env` file is required.

## Publish to GitHub Pages — recommended

1. Sign into your GitHub account (`pragati1698`). Create a **public** repository named `pragati1698.github.io` for a site at `https://pragati1698.github.io/` (or use an ordinary repo if you prefer a project site).
2. Put the **contents** of this folder (not the enclosing folder) into the new repository's root and push to `main`.
3. In GitHub, open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. Wait for GitHub Pages to deploy. Check all navigation, the case studies, and the resume download.
5. Add the deployed URL to LinkedIn's Featured section and to your GitHub profile README.

You can also publish through **Vercel**: push to a GitHub repo, then import it in Vercel using `Other` or `No Framework` preset, and deploy as a static site. No build command is necessary.

## Edit content before publishing

Please **review** all public-facing facts, project descriptions, credential claims, case-study wording, and contact details.

| Desired change | Edit |
| --- | --- |
| Headline, project cards, metrics, email/contact | `index.html` |
| Technical case study | `case-studies/agent-hands.html` |
| Enterprise case study / project status | `case-studies/enterprise-ai.html` and `index.html` |
| Colors, type, spacing | `assets/styles.css` under `:root` |
| Resume | Replace `assets/Pragati_Kumar_Resume.pdf` (same filename) |
| Social accounts | Replace `pragati1698`, `pragatikr` in HTML files |

### Privacy and employer review

- The current HTML publishes the contact email from your existing resume: `pragati.kumar2019@gmail.com`. Replace it if you want a dedicated portfolio email.
- The public resume deliberately omits your personal phone number.
- The enterprise case study uses generalized public-safe descriptions and **does not claim a completed production rollout**. Do not add internal documents, private URLs, unapproved screenshots, credentials, sensitive organizational architecture, or exact employee/operational records.
- Confirm any employer communication/branding policies before publishing an employment-related case study. You can omit the employer name entirely if needed.
- The 200 parallel session, 6-hour-to-3-minute, and 1,000+ response figures come from your existing resume; confirm you are comfortable publishing them.

## Next upgrades (optional)

- Add your actual Agent Hands demo recording after it is recorded; keep the video on YouTube/Loom or GitHub release assets, then link it from `index.html`.
- Add a real avatar only if you want one, and use your own authorized photo.
- Add a new customer-facing deployment project when it is complete and tested.
- Update the enterprise project status after approval and real end-user validation.
- Add a custom domain and SEO canonical URL only after publishing. No fabricated site address was hard-coded in metadata.

## Hosting/security notes

The site is entirely static and contains no server-side code, forms, cookies, tracking scripts, or third-party SDKs. The only outbound links are explicit GitHub, LinkedIn, and the user's email `mailto:`. Review the public PDF and the email address before making the repository public.
