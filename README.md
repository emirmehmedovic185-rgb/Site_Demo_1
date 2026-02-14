<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19TsDgDtqvYB_EsRsNYuVKH78Eduw7vzh

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key (if used)
3. Run the app:
   `npm run dev`

## Déploiement sur Vercel

1. Connectez votre dépôt GitHub à Vercel (https://vercel.com) et sélectionnez le repo.
2. Vercel détecte automatiquement le projet Vite. Si nécessaire, réglez la commande de build sur `npm run vercel-build` et le dossier de sortie sur `dist`.
3. Pour déployer manuellement depuis la ligne de commande :

```bash
npm install
npm run vercel-build
# Optionnel: deploy via Vercel CLI
# npm i -g vercel
# vercel deploy --prod ./dist
```

Remarques:
- Le fichier `vercel.json` définit la build statique et redirige toutes les routes vers `index.html` (SPA).
- Le script `vercel-build` est ajouté dans `package.json` et appelle `npm run build`.

### Déploiement automatique via GitHub Actions

Un workflow GitHub Actions est fourni pour builder et déployer automatiquement sur Vercel lors d'un push sur `main` ou `master`: `.github/workflows/vercel.yml`.

Avant d'activer le workflow, ajoutez dans les Secrets du dépôt GitHub les variables suivantes :

- `VERCEL_TOKEN`: jeton d'API personnel Vercel (Settings → Tokens sur vercel.com).
- `VERCEL_ORG_ID`: ID de l'organisation Vercel (disponible dans les paramètres du projet sur vercel.com).
- `VERCEL_PROJECT_ID`: ID du projet Vercel (disponible dans les paramètres du projet sur vercel.com).

Alternativement, vous pouvez laisser Vercel gérer les déploiements via l'intégration GitHub (recommandé pour la plupart des projets).
