# vue-js-2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Tuto utilisé

Streaming twitch:
https://dev.twitch.tv/docs/embed/everything
Google et youtube sont vos meilleurs amis afin de trouver des solutions à vos
problémes.

Plein de tutos react découpé en parties :
https://nabendu82.medium.com/youtube-video-create-a-twitch-clone-using-react-5-94fe929e7af8


Design quand même inspiré de ce tuto en react :
https://www.youtube.com/watch?v=gLNIVdtaW3A


Aprés c'est que de l'affichage et l'utilisation de composantes, 
récupérer les valeurs dans une requête get. Donc une fois
que j'ai eu la mécanique ça c'est fait tout seul.

Je me suis créé un répository pour ne pas retaper la requête 
30000 mille fois, toutes les requêtes sont présente dans
le dossier API. Cela m'a grandement simplifié la vie. Pour ne
pas retaper une requête aussi longue que mon bras.

Je me suis créer un semblant d' "injecteur de dépendance" avec le
repository factory qui ce charge d'aller chercher les objets pour moi.

