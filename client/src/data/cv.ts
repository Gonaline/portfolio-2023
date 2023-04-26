const cvData = {
  technos: [
    { id: 1, img: 'js.jpg', ratio: 'square' },
    { id: 2, img: 'typescript.png', ratio: 'square' },
    { id: 3, img: 'html.svg', ratio: 'square' },
    { id: 4, img: 'css.svg', ratio: 'square' },
    { id: 5, img: 'react-js.svg', ratio: 'rectangle' },
    { id: 6, img: 'node-js.svg', ratio: 'rectangle' },
    { id: 7, img: 'express-js.png', ratio: 'rectangle' },
    { id: 8, img: 'nest-js.svg', ratio: 'rectangle' },
    { id: 9, img: 'mysql.png', ratio: 'rectangle' },
    { id: 10, img: 'typeorm.png', ratio: 'square' },
    { id: 11, img: 'figma.svg', ratio: 'rectangle' },
    { id: 12, img: 'git.svg', ratio: 'square' },
  ],
  jobs: [
    {
      id: 1,
      name: 'DÉVELOPPEUSE FULL STACK',
      detail: 'Stage',
      dates: '09/2022 - 03/2023',
      location: 'UTOCAT - LILLE',
      assignments:
        'Refonte de l’outil interne de l’exécution de suivi des contrats (backoffice) / Ajout de nouvelles fonctionnalités.',
      languages: '> REACT / TYPESCRIPT / NESTJS / TYPEORM / MYSQL',
    },
    {
      id: 2,
      name: 'AUTO-ENTREPRENARIAT',
      detail: 'Conception de stickers personnalisables',
      dates: '2013 - 2018',
      location: 'SAUT DE MOUTON',
      assignments:
        'Création des collections, charte graphique, catalogue, documents techniques; Fabrication; Réalisation et maintenance du e-shop (wordPress).',
      languages: '',
    },
    {
      id: 3,
      name: 'INTÉGRATRICE ERP',
      dates: '09/2019 - 08/2022',
      location: 'VOLMA SAS - HARNES',
      assignments:
        'Déploiement du configurateur de produits; Définition des besoins fonctionnels; Écriture des traitements; Tests, mises à jour & gestion des évolutions.',
      languages: '',
    },
    {
      id: 4,
      name: 'GESTIONNAIRE DE BASES DE DONNÉES',
      dates: '2017 - 08/2022',
      assignments:
        'Mise en place et administration des bases de données techniques, tarifaires & visuelles; Rédaction des procédures; Développement des bases de calcul des prix de revient / chiffrage de l’inventaire.',
      languages: '',
    },
    {
      id: 5,
      name: 'GRAPHISTE',
      dates: '2005 - 08/2022',
      assignments:
        'Mise en page des tarifs de vente (synchronisation Excel / InDesign); Refonte du logo et du site internet (contenu & graphisme); Photomontages; Création & dépôt de modèles auprès de l’INPI; Réalisation de catalogues, dépliants...; Illustration des produits, fiches techniques, plans; Étude de faisabilité.',
      languages: '',
    },
    {
      id: 6,
      name: 'RESPONSABLE DÉVELOPPEMENT ARTISTIQUE',
      dates: '2004 - 2005',
      assignments: '',
      languages: '',
    },
  ],

  formations: [
    {
      id: 1,
      name: 'FORMATION DÉVELOPPEMENT WEB',
      dates: '03 - 07/2022',
      location: 'Wild Code School - LILLE',
      assignments: [
        {
          id: 1,
          name: 'PROJET#3',
          object: 'Refonte du site du Handball Club de St Amand',
          languages: '> REACT / EXPRESS / MYSQL',
        },
        {
          id: 2,
          name: 'HACKATHON#1',
          object: 'Développement d’un site en 26h sur le thème de l’écologie',
          languages: '> REACT / APPEL API / FIGMA',
        },
        {
          id: 3,
          name: 'PROJET#2',
          object: 'Développement d’un site de jeu de type Trivial Pursuit',
          link: 'https://know-it-game.netlify.app/',
          languages: '> REACT / APPEL API / FIGMA',
        },
      ],
    },
    {
      id: 2,
      name: 'BTS COMMUNICATION VISUELLE',
      dates: '1999 - 2001',
      location: 'ESAAT - ROUBAIX',
    },
    {
      id: 3,
      name: 'BT DESSINATEUR MAQUETTISTE Option Arts Appliqués',
      dates: '1996 - 1999',
    },
  ],

  skills: {
    softwares: ['Photoshop', 'Illustrator', 'InDesign', 'Excel'],
    personal: [
      'Persévérance',
      'Autonomie',
      'Rigueur',
      'Créativité',
      'Esprit d’équipe',
    ],
    language: ['Anglais scolaire'],
  },

  hobbies: [
    { id: 1, name: 'Bricolage / Déco' },
    { id: 2, name: 'Art artisanal' },
    {
      id: 3,
      name: 'Modelage de figurines en pâte polymère',
      link: 'https://issuu.com/alinegonce',
    },
  ],
};
export default cvData;
