# Daily editorial monitor

The `Monitor DesignRush updates` GitHub Actions workflow runs every day at 12:00 Asia/Shanghai.

## What it does

1. Uses web search to discover newly published `news.designrush.com` article URLs from the previous 48 hours.
2. Compares those URLs with `data/designrush-monitor-state.json`.
3. Writes a dated report to `reports/designrush-updates/`.
4. When publishing is enabled, researches each new source, writes an independent editorial analysis, assigns a topic-matched image from the existing Pixabay image pool, builds the site, and commits the result.

The workflow does not copy source images, direct quotations, article bodies, or headlines. Every generated article includes attribution and a source link. Thin or contradictory source material is skipped.

## Required GitHub settings

Open the repository on GitHub, then go to **Settings → Secrets and variables → Actions**.

1. Add a repository secret named `OPENAI_API_KEY`.
2. Run **Actions → Monitor DesignRush updates → Run workflow** once. This initializes the baseline without publishing historical results.
3. Review the first report under `reports/designrush-updates/`.
4. Add a repository variable named `AUTO_PUBLISH` with the value `true` when you are ready to publish new original briefs automatically.

Optional variables:

- `AUTO_PUBLISH=false` keeps the workflow in report-only mode.
- `MAX_AUTO_ARTICLES` defaults to two articles per run and is fixed in the workflow file.
- `OPENAI_MODEL` defaults to `gpt-5-mini` and is fixed in the workflow file.

Use **Actions → Monitor DesignRush updates → Run workflow** for a manual check at any time.
