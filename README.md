# Carnet Coran

Carnet de suivi pour une enseignante de Coran : élèves, plannings de révision, notes de cours au stylet, comptes rendus PDF, bibliothèque d'audios et de PDF, paiements, envoi sur WhatsApp.

- Toutes les données restent sur l'appareil de l'enseignante (IndexedDB du navigateur). La page en ligne ne contient aucune donnée.
- Installation : ouvrir le lien, puis « Sur l'écran d'accueil » (Safari) ou « Ajouter à l'écran d'accueil » (Chrome). Toujours ouvrir le carnet avec l'icône.
- Sauvegarde : Réglages > Faire une sauvegarde (fichier .json avec les audios et les PDF), et Restaurer une sauvegarde.

## Modifier le carnet

1. Modifier `source/carnet.html`.
2. Lancer `node build.js` : fabrique `index.html` (jsPDF intégré, fonctionne hors ligne).
3. Envoyer sur GitHub : la page publiée se met à jour, les données de l'enseignante restent sur son appareil.
