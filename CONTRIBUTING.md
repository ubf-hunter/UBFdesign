# Politique d'utilisation & Guide de contribution

> **English version below** — see [Usage Policy & Contribution Guide](#usage-policy--contribution-guide).

Merci de l'intérêt que vous portez à **UBFdesign**. Ce dépôt est un **portfolio personnel** : les contributions techniques restent occasionnelles, mais les retours et signalements sont pleinement bienvenus.

---

## 1. Politique d'utilisation

### 1.1 Licence

Le **code** de ce site (React, SCSS, configuration Vite) est distribué sous **licence MIT** — voir [LICENSE](LICENSE). Vous pouvez :

- l'utiliser à des fins personnelles ou commerciales ;
- le modifier et le redistribuer ;
- vous en inspirer pour votre propre portfolio.

À condition de conserver la mention de copyright et le texte de la licence dans toute redistribution du code source.

### 1.2 Ce que la MIT NE couvre PAS

- Les **visuels du portfolio** (mockups, logos de projets clients, photographies personnelles) restent la propriété de leurs auteurs.
- L'**identité de marque** UBFdesign (nom, logo, palette) reste personnelle à Béni Uwayo. Ne pas la réutiliser telle quelle pour un autre portfolio.

Réutiliser une capture d'écran ou un mockup nécessite un accord explicite.

### 1.3 Absence de garantie

Le code est fourni « tel quel », sans garantie d'aucune sorte.

### 1.4 Signalement de sécurité

Pour tout problème de sécurité (fuite d'information, XSS, etc.), contactez l'auteur directement — **ne créez pas d'issue publique**.

---

## 2. Contribution

### 2.1 Types de contributions bienvenues

- 🐛 **Bugs** — un composant qui casse sur un navigateur, une image manquante, un lien mort
- ♿ **Accessibilité** — contraste, navigation clavier, lecteur d'écran
- 📱 **Responsive** — un cas d'usage mobile qui ne rend pas bien
- 💡 **Suggestions UI/UX** — micro-interactions, hiérarchie visuelle
- 🌍 **Traduction** — améliorations orthographiques FR/EN

### 2.2 Workflow

1. **Ouvrez une issue** décrivant le problème ou la suggestion.
2. Attendez un retour avant de démarrer une pull request importante.
3. Pour un correctif rapide (typo, petit CSS) : PR directe possible, en référence à une issue.
4. Utilisez une branche `fix/…` ou `feat/…` selon le cas.
5. Committez avec un message clair à l'impératif :

   ```
   fix: corrige le débordement du header sur mobile
   feat: ajoute un lien vers le CV téléchargeable
   ```

### 2.3 Style de code

- Respectez la configuration **ESLint** existante (`npm run lint` doit passer).
- **SCSS** : suivez la structure existante dans `src/styles/`.
- Les nouveaux composants React vont dans `src/components/`, en PascalCase, avec leur propre fichier `.scss` associé si besoin.

### 2.4 Code de conduite

**Respect mutuel.** Aucune forme de harcèlement, discrimination ou attaque personnelle ne sera tolérée. Les retours doivent porter sur le code ou le design, jamais sur les personnes.

### 2.5 Contact

- **Auteur** : Béni Uwayo — [@ubf-hunter](https://github.com/ubf-hunter)
- **Issues** : [github.com/ubf-hunter/UBFdesign/issues](https://github.com/ubf-hunter/UBFdesign/issues)

---

# Usage Policy & Contribution Guide

Thanks for your interest in **UBFdesign**. This repository is a **personal portfolio**: technical contributions are occasional, but feedback and reports are fully welcome.

---

## 1. Usage Policy

### 1.1 License

The **code** of this site (React, SCSS, Vite config) is distributed under the **MIT License** — see [LICENSE](LICENSE). You may:

- use it for personal or commercial purposes;
- modify and redistribute it;
- draw inspiration from it for your own portfolio.

Provided you keep the copyright notice and license text in any source code redistribution.

### 1.2 What MIT does NOT cover

- **Portfolio visuals** (mockups, client project logos, personal photographs) remain the property of their authors.
- The **UBFdesign brand identity** (name, logo, palette) is personal to Béni Uwayo. Do not reuse it as-is for another portfolio.

Reusing a screenshot or a mockup requires explicit agreement.

### 1.3 No warranty

The code is provided "as is", without warranty of any kind.

### 1.4 Security reporting

For any security issue (information leak, XSS, etc.), contact the author directly — **do not create a public issue**.

---

## 2. Contribution

### 2.1 Welcome contribution types

- 🐛 **Bugs** — a component breaking on a browser, a missing image, a dead link
- ♿ **Accessibility** — contrast, keyboard navigation, screen reader
- 📱 **Responsive** — a mobile use case not rendering well
- 💡 **UI/UX suggestions** — micro-interactions, visual hierarchy
- 🌍 **Translation** — FR/EN spelling improvements

### 2.2 Workflow

1. **Open an issue** describing the problem or suggestion.
2. Wait for feedback before starting a significant pull request.
3. For a quick fix (typo, small CSS): direct PR possible, referencing an issue.
4. Use a `fix/…` or `feat/…` branch depending on the case.
5. Commit with a clear imperative message:

   ```
   fix: correct header overflow on mobile
   feat: add link to downloadable CV
   ```

### 2.3 Code style

- Follow the existing **ESLint** configuration (`npm run lint` must pass).
- **SCSS**: follow the existing structure in `src/styles/`.
- New React components go in `src/components/`, PascalCase, with their own `.scss` file if needed.

### 2.4 Code of conduct

**Mutual respect.** No form of harassment, discrimination or personal attack will be tolerated. Feedback must be about the code or the design, never about individuals.

### 2.5 Contact

- **Author**: Béni Uwayo — [@ubf-hunter](https://github.com/ubf-hunter)
- **Issues**: [github.com/ubf-hunter/UBFdesign/issues](https://github.com/ubf-hunter/UBFdesign/issues)
