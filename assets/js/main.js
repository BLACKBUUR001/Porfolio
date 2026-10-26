/* =========================================================
   Projets — source : Notion › Projet UX › Liste Projet UX/UI
   tone : fond de la carte · ac : accent du mockup
   ========================================================= */
const Y = "#ffc61a", K = "#0a0a0a", D1 = "#161616", D2 = "#1d1d1d";

const PROJECTS = [
  { name: "MuridPro", type: "Mobile", desc: "Accompagnement spirituel", wide: true, img: "assets/img/muridpro.jpg",
    url: "https://www.figma.com/proto/R1UovdnSla519lwIdwfO3e/Murid-pro-V4?node-id=1782-10949&viewport=639%2C300%2C0.12&t=2VgUJ8ey9BNZoPcZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1782%3A10949&page-id=0%3A1" },
  { name: "Domtrust", type: "Mobile", desc: "Aide ménagère", img: "assets/img/domtrust.webp",
    url: "https://www.figma.com/proto/zTXUbU0cSBhNrevVGUsg6M/Maquette-UI?node-id=186-4307&viewport=750%2C487%2C0.43&t=M7ssMc5fImnTqHtf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A3&page-id=8%3A4486" },
  // hidden : absent des listes, visible seulement via projet.html?p=gouvnum&k=<key>
  { name: "Gouvnum", type: "Web", desc: "Plateforme gouvernementale", wide: true, tone: Y, ac: K, hidden: true, key: "rJ3rP3Xm",
    url: "https://www.figma.com/proto/nFFNc3kwgvcmswoyT9gffY/GouvNum?node-id=132-2198&viewport=-260%2C-722%2C0.16&t=kgAGWjvBHDKI8oop-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=132%3A2198&page-id=0%3A1&show-proto-sidebar=1" },
  { name: "SenDon", type: "Mobile", desc: "Don de sang · CNTS", img: "assets/img/sendon.jpg",
    url: "https://www.figma.com/proto/yjgTqAqKJzrRcJX3rggype/SenDon?node-id=202-2230&viewport=138%2C438%2C0.09&t=nFpfcZ7NGf7VqjEJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=201%3A1239&show-proto-sidebar=1&page-id=0%3A1" },
  { name: "The Booker Hotels", type: "Web", desc: "Réservation d'hôtels", wide: true, tone: D1, ac: Y,
    url: "https://www.figma.com/proto/fnKU4v23NoWQueM89710WM/Bookers-hotels?node-id=298-4011&t=jipBfZqCRMwEX1zf-1&scaling=scale-down&content-scaling=fixed&page-id=298%3A1546&starting-point-node-id=298%3A4011" },
  { name: "The Bookers App", type: "Mobile", desc: "Réservation d'hôtels", tone: Y, ac: K,
    url: "https://www.figma.com/proto/fnKU4v23NoWQueM89710WM/Bookers-hotels?node-id=1227-19254&t=Fn7mLQ2By0dQaYDP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1227%3A19254" },
  { name: "Sunu Events", type: "Web", desc: "Billetterie & événementiel", tone: D2, ac: Y,
    url: "https://www.figma.com/proto/RFdHzTEwzCh38Ucz3CEOOD/Sen-Events?node-id=1-166&starting-point-node-id=1%3A166&t=WVXtrvQyfjDCfZI1-1" },
  { name: "Smart Park", type: "Web", desc: "Réservation de parking", tone: D1, ac: Y,
    url: "https://www.figma.com/proto/AfU2RgnaIsMBkkZYgsLIVB/Smart-park?node-id=2-2&t=MtDQissVwidW7x8Z-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" },
  { name: "ONN", type: "Web", desc: "Observatoire National du Numérique", tone: Y, ac: K,
    url: "https://www.figma.com/proto/zFHIhkHjyaNHSkdohhPZQm/Observatoire-National-de-Num%C3%A9rique?node-id=1-2&t=hR7bFxWYJNmW1Obq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
  { name: "Batinov", type: "Web", desc: "Site vitrine · construction modulaire", tone: D1, ac: Y,
    url: "https://www.figma.com/proto/zEKWZ6aXTLSvmwWEepjryo/Batinov-2.0?node-id=147-110&p=f&t=AmG82ginkumEP48r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
  { name: "Diass Industries", type: "Web", desc: "Site corporate", tone: D2, ac: Y,
    url: "https://www.figma.com/proto/78zv7Fl8Er3K0SQAEYTvI2/Diass-industries?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&t=ZoB3pdTOeJhtxGZW-1" },
  { name: "CPPS", type: "Web", desc: "Chaîne parlementaire", tone: Y, ac: K,
    url: "https://www.figma.com/proto/OnyCsM1lSm7VnOPRQtS9aQ/CPPS?node-id=251-4013&t=gTR1AgdKNASyCDNo-0&scaling=scale-down&content-scaling=fixed&page-id=251%3A3472&starting-point-node-id=251%3A4013" },
  { name: "Landing Page NT", type: "Web", desc: "Landing page · Niane Technologie", wide: true, tone: D2, ac: Y,
    url: "https://www.figma.com/proto/qOpzn2iVEW7V1Htlt3fCn0/NT-landingpage?node-id=5-2&t=AjmOsrJrkoVzUDVB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
];

/* =========================================================
   Études de cas (page projet.html?p=slug)
   Source : explications de Cheikh projet par projet, + Notion pour Domtrust.
   Un projet sans entrée ici affiche une page courte : présentation + prototype.
   Champs : tagline, status (optionnel), context, problem[], solution[[titre, texte]],
   method[[titre, texte]], features[], audience[]
   ========================================================= */
const CASES = {
  MuridPro: {
    tagline: "Une application qui accompagne chaque utilisateur dans son cheminement spirituel, au quotidien.",
    context: "MuridPro est une application d'accompagnement spirituel. Elle réunit au même endroit tout ce dont l'utilisateur a besoin pour sa pratique : lire des xassidas et le Coran, programmer ses lectures (drouss), faire ses duas et son tasbih, trouver la Qibla et regarder des vidéos spirituelles.",
    problem: [
      "Les contenus spirituels (xassidas, Coran, vidéos) sont éparpillés entre plusieurs applications, sites et groupes.",
      "Il est difficile de garder une pratique régulière sans outil pour programmer et suivre ses lectures.",
      "Les outils du quotidien (tasbih, duas, direction de la Qibla) ne sont pas réunis dans une même expérience.",
      "Les vidéos spirituelles sont noyées dans des réseaux sociaux qui ne sont pas pensés pour elles.",
    ],
    solution: [
      ["Bibliothèque spirituelle", "Lecture des xassidas et du Coran en PDF, dans un lecteur pensé pour une lecture confortable."],
      ["Programme de lectures", "L'utilisateur planifie ses drouss et ses lectures pour garder une pratique régulière."],
      ["Outils de pratique", "Duas, tasbih numérique et boussole de la Qibla, accessibles en un geste depuis l'accueil."],
      ["Vidéos spirituelles", "Un fil de vidéos courtes, au format vertical façon TikTok, dédié aux contenus spirituels."],
    ],
    method: [
      ["Comprendre la pratique", "Lister les gestes spirituels du quotidien que l'application doit accompagner, de la lecture au tasbih."],
      ["Organiser les contenus", "Regrouper xassidas, Coran, drouss, duas et vidéos dans une architecture simple à parcourir."],
      ["Concevoir les écrans", "Un accueil qui met les outils de pratique à portée de main, puis chaque module dans une UI apaisée et lisible."],
      ["Prototyper", "Relier les parcours clés dans un prototype Figma interactif, de l'accueil à la lecture et aux vidéos."],
    ],
    features: [
      "Lecture des xassidas et du Coran en PDF",
      "Programmation des lectures et des drouss",
      "Duas et tasbih numérique",
      "Boussole de la Qibla",
      "Fil de vidéos spirituelles au format vertical",
    ],
    audience: ["Fidèles qui veulent une pratique régulière", "Lecteurs de xassidas et du Coran", "Communauté mouride, au Sénégal et dans la diaspora"],
  },

  Domtrust: {
    tagline: "Aider les foyers sénégalais à trouver facilement une aide ménagère de confiance.",
    status: "Projet en cours",
    context: "Domtrust est une application qui met en relation les foyers sénégalais avec des aides ménagères et des agences de services à domicile : ménage, garde d'enfants, aide aux personnes âgées. Un système de matching propose les profils les plus adaptés au besoin de chaque foyer.",
    problem: [
      "Trouver une aide ménagère fiable passe encore surtout par le bouche-à-oreille.",
      "Les compétences, les disponibilités et les tarifs manquent de transparence.",
      "Aucun espace centralisé ne regroupe plusieurs agences et profils.",
      "Les prestations sont difficiles à suivre une fois la personne trouvée.",
    ],
    solution: [
      ["Matching", "Le foyer décrit son besoin, l'application propose les profils les plus adaptés selon le service, la localisation et la disponibilité."],
      ["Profils transparents", "Expérience, services proposés, avis et tarifs visibles avant de réserver."],
      ["Réservation & suivi", "Réservation avec calendrier, paiement sécurisé et suivi des prestations dans l'application."],
    ],
    method: [
      ["Analyser le problème", "Partir des freins concrets des foyers : confiance, manque de transparence, offre dispersée."],
      ["Penser deux publics", "Les foyers qui cherchent une aide, et les agences qui gèrent leurs profils et leur planning."],
      ["Définir le matching", "Choisir les critères qui comptent pour proposer le bon profil : besoin, localisation, disponibilité."],
      ["Maquetter & prototyper", "Concevoir les parcours de l'application mobile dans Figma, jusqu'au prototype interactif."],
    ],
    features: [
      "Matching selon le besoin, la localisation et la disponibilité",
      "Profils détaillés avec avis",
      "Réservation en ligne avec calendrier",
      "Paiement sécurisé",
      "Suivi des prestations",
      "Messagerie intégrée",
    ],
    audience: ["Foyers et familles", "Actifs avec peu de temps", "Personnes âgées", "Agences de services à domicile"],
  },

  Gouvnum: {
    tagline: "Centraliser et valider les projets numériques de l'État avant leur lancement.",
    context: "Gouvnum est une plateforme gouvernementale du Sénégal. Le constat de départ : beaucoup de projets numériques publics se ressemblent, et certaines institutions les lancent sans vérification préalable. Avec Gouvnum, chaque institution soumet son projet digital, qui est examiné par différentes commissions avant d'être validé.",
    problem: [
      "De nombreux projets numériques publics se ressemblent et font doublon.",
      "Des institutions lancent leurs projets sans vérification ni coordination.",
      "Aucune vue d'ensemble ne recense les projets numériques de l'État.",
      "Les décisions sur les projets ne suivent pas un circuit de validation clair.",
    ],
    solution: [
      ["Soumission centralisée", "Chaque institution dépose son projet digital sur une seule plateforme, dans un format commun."],
      ["Circuit de commissions", "Le projet passe devant les commissions concernées, avec un suivi de son avancement à chaque étape."],
      ["Décision claire", "Le projet est validé, ou on oriente l'institution vers la fusion avec un projet existant."],
      ["Vue d'ensemble", "Un référentiel des projets numériques de l'État pour repérer les doublons."],
    ],
    method: [
      ["Comprendre le circuit", "Cartographier le parcours d'un projet, de la soumission par l'institution à la décision finale."],
      ["Définir les rôles", "Distinguer l'expérience des institutions qui soumettent et celle des commissions qui examinent."],
      ["Concevoir les écrans", "Formulaire de soumission guidé, tableau de suivi des statuts, espace d'examen pour les commissions."],
      ["Prototyper", "Relier les parcours clés dans un prototype Figma interactif."],
    ],
    features: [
      "Soumission guidée d'un projet digital",
      "Suivi du statut à chaque étape d'examen",
      "Espace d'examen pour les commissions",
      "Décision : validation ou fusion avec un projet existant",
      "Référentiel des projets numériques de l'État",
    ],
    audience: ["Institutions publiques", "Commissions d'examen", "Pilotage du numérique de l'État"],
  },

  SenDon: {
    tagline: "Donner son sang plus facilement, et être récompensé pour son engagement.",
    context: "SenDon est une application de don de sang pensée pour la CNTS (Centre National de Transfusion Sanguine) au Sénégal. Elle aide les donneurs à suivre les campagnes de collecte, à réserver leur créneau, à connaître leur groupe sanguin et à être récompensés pour leurs dons.",
    problem: [
      "Les donneurs ne savent pas toujours où et quand ont lieu les campagnes de collecte.",
      "Prendre rendez-vous pour donner son sang n'est pas simple.",
      "Beaucoup de personnes ne connaissent pas leur groupe sanguin.",
      "Peu de choses motivent les donneurs à revenir régulièrement.",
    ],
    solution: [
      ["Campagnes & planning", "Les campagnes de don de sang affichées avec leur lieu et leurs dates, et la réservation d'un créneau."],
      ["Groupe sanguin", "Le donneur retrouve son groupe sanguin et l'historique de ses dons dans son profil."],
      ["Récompenses", "Des prix et des bons d'achat pour remercier et fidéliser les donneurs."],
    ],
    method: [
      ["Comprendre le parcours du donneur", "De la découverte d'une campagne jusqu'au don, puis au retour pour un nouveau don."],
      ["Lever les freins", "Rendre visibles les campagnes et simplifier la réservation d'un créneau."],
      ["Motiver le retour", "Intégrer un système de récompenses pour encourager le don régulier."],
      ["Maquetter & prototyper", "Concevoir les écrans de l'application mobile et le prototype interactif dans Figma."],
    ],
    features: [
      "Liste des campagnes de don de sang",
      "Réservation d'un créneau dans le planning",
      "Groupe sanguin et historique des dons",
      "Prix et bons d'achat pour les donneurs",
    ],
    audience: ["Donneurs de sang", "Nouveaux donneurs", "CNTS et équipes de collecte"],
  },

  "The Booker Hotels": {
    tagline: "Trouver et réserver un hôtel ou une chambre en quelques clics, depuis le web.",
    context: "The Booker Hotels est une plateforme web de réservation. Les visiteurs y découvrent des hôtels, comparent les chambres et réservent leur séjour en ligne. Le projet existe aussi en version application mobile (The Bookers App).",
    problem: [
      "Comparer plusieurs hôtels et chambres prend du temps.",
      "Les informations utiles (prix, disponibilités, équipements) sont dispersées.",
      "Réserver demande souvent d'appeler ou de passer par plusieurs intermédiaires.",
    ],
    solution: [
      ["Recherche & filtres", "Trouver un hôtel selon la destination, les dates et le budget."],
      ["Fiches claires", "Photos, chambres, équipements et prix réunis sur une même page."],
      ["Réservation en ligne", "Choix de la chambre et confirmation de la réservation dans un parcours court."],
    ],
    method: [
      ["Cartographier le parcours", "De la recherche d'un hôtel jusqu'à la confirmation de la réservation."],
      ["Hiérarchiser l'information", "Mettre en avant ce qui aide à décider : photos, prix, disponibilités."],
      ["Concevoir les pages", "Accueil, résultats de recherche, fiche hôtel et tunnel de réservation."],
      ["Prototyper", "Relier le parcours complet dans un prototype Figma interactif."],
    ],
    features: [
      "Recherche par destination, dates et budget",
      "Fiches hôtels et chambres détaillées",
      "Réservation en ligne",
      "Récapitulatif et confirmation de séjour",
    ],
    audience: ["Voyageurs", "Touristes", "Professionnels en déplacement"],
  },

  "The Bookers App": {
    tagline: "Réserver un hôtel, une chambre ou un restaurant, directement depuis son téléphone.",
    context: "The Bookers App est la version mobile de The Booker Hotels. Elle reprend le même service de réservation d'hôtels et de chambres, élargi aux restaurants, avec des parcours pensés pour le téléphone.",
    problem: [
      "Réserver un hôtel ou un restaurant depuis un téléphone est souvent laborieux.",
      "Les informations utiles sont dispersées entre plusieurs applications et sites.",
      "Les parcours de réservation web ne sont pas adaptés à un usage mobile rapide.",
    ],
    solution: [
      ["Recherche rapide", "Trouver un hôtel, une chambre ou un restaurant en quelques gestes."],
      ["Fiches lisibles", "Photos, prix et disponibilités adaptés à un petit écran."],
      ["Réservation mobile", "Un parcours court, pensé pour être fait d'une main."],
    ],
    method: [
      ["Partir du web", "Reprendre le service de The Booker Hotels et l'adapter aux usages mobiles."],
      ["Simplifier les parcours", "Réduire le nombre d'étapes entre la recherche et la confirmation."],
      ["Concevoir les écrans", "Accueil, recherche, fiche établissement et réservation, en mobile first."],
      ["Prototyper", "Relier les écrans dans un prototype Figma interactif."],
    ],
    features: [
      "Réservation d'hôtels et de chambres",
      "Réservation de restaurants",
      "Recherche et filtres",
      "Suivi des réservations",
    ],
    audience: ["Voyageurs", "Clients de restaurants", "Utilisateurs mobiles"],
  },

  "Sunu Events": {
    tagline: "Une plateforme événementielle pour acheter ses billets et organiser ses événements.",
    context: "Sunu Events réunit tout ce qui touche à l'événementiel au Sénégal, avec deux espaces. L'espace acheteur permet de découvrir les événements, d'acheter ses billets et de les retrouver. L'espace organisateur permet de créer, planifier et suivre l'avancement de ses événements.",
    problem: [
      "Trouver les événements à venir et acheter un billet reste compliqué.",
      "Les billets achetés sont difficiles à retrouver le jour J.",
      "Les organisateurs n'ont pas d'outil simple pour créer et suivre leurs événements.",
    ],
    solution: [
      ["Espace acheteur", "Découvrir les événements, acheter son billet et retrouver tous ses billets au même endroit."],
      ["Espace organisateur", "Créer un événement, le planifier et suivre son état d'avancement."],
      ["Une seule plateforme", "Les deux côtés de l'événement, public et organisateurs, réunis dans un même produit."],
    ],
    method: [
      ["Séparer les deux publics", "Concevoir deux espaces distincts : acheteurs et organisateurs."],
      ["Parcours acheteur", "De la découverte d'un événement à l'achat, puis à la consultation des billets."],
      ["Parcours organisateur", "De la création d'un événement à sa planification et à son suivi."],
      ["Prototyper", "Relier les deux espaces dans un prototype Figma interactif."],
    ],
    features: [
      "Catalogue des événements",
      "Achat de billets en ligne",
      "Espace « Mes billets »",
      "Création et planification d'événements",
      "Suivi de l'avancement des événements",
    ],
    audience: ["Public et participants", "Organisateurs d'événements"],
  },

  "Smart Park": {
    tagline: "Trouver et réserver une place de parking au Sénégal, sans tourner en rond.",
    context: "Smart Park est une application de stationnement pensée pour le Sénégal. Elle aide les automobilistes à trouver un parking et à réserver leur place à l'avance.",
    problem: [
      "Trouver une place de parking en ville fait perdre du temps.",
      "On ne sait pas à l'avance si un parking a encore des places libres.",
      "Il n'est pas possible de réserver sa place avant d'arriver.",
    ],
    solution: [
      ["Trouver un parking", "Les parkings disponibles autour de soi ou de sa destination."],
      ["Réserver sa place", "Choisir un créneau et réserver sa place avant d'arriver."],
      ["Suivre sa réservation", "Retrouver ses réservations en cours dans l'application."],
    ],
    method: [
      ["Comprendre le besoin", "Partir du trajet de l'automobiliste, jusqu'à l'arrivée au parking."],
      ["Simplifier la réservation", "Réduire la réservation à quelques étapes : parking, créneau, confirmation."],
      ["Concevoir les écrans", "Recherche, fiche parking, réservation et suivi."],
      ["Prototyper", "Relier le parcours complet dans un prototype Figma interactif."],
    ],
    features: [
      "Recherche de parkings",
      "Réservation d'une place",
      "Choix du créneau",
      "Suivi des réservations",
    ],
    audience: ["Automobilistes", "Gestionnaires de parkings"],
  },

  ONN: {
    tagline: "Suivre les indicateurs clés du numérique au Sénégal, en un coup d'œil.",
    context: "L'ONN (Observatoire National du Numérique) est une plateforme qui permet de consulter les KPI du secteur numérique au Sénégal, sous forme d'indicateurs lisibles.",
    problem: [
      "Les données sur le numérique sont dispersées entre plusieurs sources.",
      "Les chiffres bruts sont difficiles à lire et à comparer.",
      "Il manque une vue d'ensemble de l'évolution du secteur.",
    ],
    solution: [
      ["Indicateurs centralisés", "Les KPI du numérique réunis sur une seule plateforme."],
      ["Visualisation", "Des graphiques et des chiffres clés pour lire les données rapidement."],
      ["Vue d'ensemble", "Une lecture claire de l'état du secteur numérique."],
    ],
    method: [
      ["Recenser les indicateurs", "Identifier les KPI à présenter et leur organisation par thème."],
      ["Choisir les visualisations", "Associer à chaque indicateur la forme la plus lisible : chiffre clé, courbe, comparaison."],
      ["Concevoir les pages", "Tableaux de bord et pages thématiques, de la vue d'ensemble au détail."],
      ["Prototyper", "Relier les pages dans un prototype Figma interactif."],
    ],
    features: [
      "Tableau de bord des KPI du numérique",
      "Indicateurs organisés par thème",
      "Graphiques et chiffres clés",
    ],
    audience: ["Décideurs publics", "Acteurs du numérique", "Chercheurs et journalistes"],
  },

  Batinov: {
    tagline: "Un site vitrine aussi modulaire que les bâtiments qu'il présente.",
    context: "Batinov est une entreprise privée spécialisée dans la construction modulaire de bâtiments. Le site devait refléter ce savoir-faire : une landing page et un site vitrine soignés, eux-mêmes construits de façon modulaire.",
    problem: [
      "La construction modulaire est un concept encore peu connu du grand public.",
      "Il fallait donner confiance et présenter le savoir-faire de l'entreprise.",
      "Le site devait pouvoir évoluer facilement avec de nouvelles réalisations et offres.",
    ],
    solution: [
      ["Design modulaire", "Une page construite en blocs réutilisables, à l'image des bâtiments de Batinov."],
      ["Mise en valeur", "Réalisations, avantages de la construction modulaire et offres présentés clairement."],
      ["Conversion", "Des appels à l'action pour prendre contact avec l'entreprise."],
    ],
    method: [
      ["Comprendre l'activité", "Saisir ce qui fait la différence de la construction modulaire."],
      ["Penser en modules", "Concevoir un système de sections réutilisables, comme une construction modulaire."],
      ["Concevoir la vitrine", "Landing page et pages vitrines soignées, orientées prise de contact."],
      ["Prototyper", "Relier les pages dans un prototype Figma interactif."],
    ],
    features: [
      "Landing page de présentation",
      "Pages vitrines de l'entreprise",
      "Mise en avant des réalisations",
      "Prise de contact",
    ],
    audience: ["Particuliers", "Entreprises", "Promoteurs immobiliers"],
  },

  "Diass Industries": {
    tagline: "Un site corporate pour présenter une entreprise du bâtiment avec sérieux et clarté.",
    context: "Diass Industries est une entreprise privée du secteur du bâtiment. Le projet : concevoir son site corporate, une vitrine qui présente l'entreprise, ses activités et ses réalisations.",
    problem: [
      "L'entreprise avait besoin d'une présence en ligne professionnelle.",
      "Ses activités et réalisations devaient être présentées clairement.",
      "Les visiteurs devaient pouvoir prendre contact facilement.",
    ],
    solution: [
      ["Site corporate", "Une vitrine qui présente l'entreprise, ses valeurs et ses activités."],
      ["Réalisations", "Les projets de l'entreprise mis en valeur."],
      ["Prise de contact", "Des points de contact visibles sur l'ensemble du site."],
    ],
    method: [
      ["Comprendre l'entreprise", "Ses activités, ses clients et l'image à transmettre."],
      ["Structurer le site", "Organiser les pages : entreprise, activités, réalisations, contact."],
      ["Concevoir l'interface", "Une identité corporate sobre et professionnelle."],
      ["Prototyper", "Relier les pages dans un prototype Figma interactif."],
    ],
    features: [
      "Présentation de l'entreprise",
      "Pages activités",
      "Réalisations",
      "Contact",
    ],
    audience: ["Clients", "Partenaires", "Investisseurs"],
  },

  CPPS: {
    tagline: "La chaîne parlementaire sénégalaise et panafricaine, en direct et à la demande.",
    context: "CPPS est une chaîne parlementaire sénégalaise et panafricaine. La plateforme permet de regarder la chaîne en direct, de consulter le programme et de retrouver les émissions.",
    problem: [
      "Le public a besoin d'un accès simple au direct de la chaîne.",
      "Le programme et les émissions doivent être faciles à consulter.",
      "Les contenus parlementaires doivent rester accessibles et lisibles par tous.",
    ],
    solution: [
      ["Direct", "Le live de la chaîne mis en avant dès l'arrivée sur la plateforme."],
      ["Programme", "La grille des programmes, claire et facile à parcourir."],
      ["Émissions", "Un espace pour retrouver les émissions et leurs vidéos."],
    ],
    method: [
      ["Comprendre les usages", "Regarder en direct, consulter le programme, retrouver une émission."],
      ["Hiérarchiser", "Placer le direct au cœur de l'expérience, puis le programme et les émissions."],
      ["Concevoir les pages", "Accueil avec le live, programme, émissions et lecteur vidéo."],
      ["Prototyper", "Relier les pages dans un prototype Figma interactif."],
    ],
    features: [
      "Lecteur du direct",
      "Programme de la chaîne",
      "Catalogue des émissions",
      "Vidéos à la demande",
    ],
    audience: ["Citoyens", "Public panafricain", "Journalistes et observateurs"],
  },

  "Landing Page NT": {
    tagline: "Une landing page pour présenter Niane Technologie et convertir les visiteurs en clients.",
    context: "NT (Niane Technologie) avait besoin d'une page vitrine. Le projet : concevoir une landing page qui présente l'entreprise et ses services, et qui transforme les visiteurs en clients.",
    problem: [
      "L'entreprise avait besoin d'une présence en ligne claire et convaincante.",
      "L'offre devait être comprise en quelques secondes.",
      "Les visiteurs devaient être guidés jusqu'à la prise de contact.",
    ],
    solution: [
      ["Message clair", "Une accroche et une présentation des services qui vont droit au but."],
      ["Preuves", "Des sections qui rassurent et donnent envie de faire confiance."],
      ["Conversion", "Des appels à l'action répartis le long de la page jusqu'au contact."],
    ],
    method: [
      ["Comprendre l'offre", "Ce que propose Niane Technologie et à qui."],
      ["Construire le récit", "Organiser la page de l'accroche jusqu'à l'appel à l'action."],
      ["Concevoir la landing", "Une interface pensée pour la conversion."],
      ["Prototyper", "Finaliser la page dans un prototype Figma interactif."],
    ],
    features: [
      "Section d'accroche",
      "Présentation des services",
      "Appels à l'action",
      "Formulaire de contact",
    ],
    audience: ["Prospects", "Entreprises clientes"],
  },
};

const slugify = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
PROJECTS.forEach(p => { p.slug = slugify(p.name); p.case = CASES[p.name] || null; });
const projectUrl = p => `projet.html?p=${p.slug}${p.hidden ? `&k=${p.key}` : ""}`;
// Projets affichés publiquement (grilles, compteurs, bandes, « projet suivant »)
const LISTED = PROJECTS.filter(p => !p.hidden);

const PAGES = [
  ["index.html", "Accueil", "accueil"],
  ["apropos.html", "À propos", "apropos"],
  ["services.html", "Services", "services"],
  ["projets.html", "Projets", "projets"],
  ["process.html", "Process", "process"],
];

const DOCK = [
  ["index.html", "Accueil", "accueil", "ph:house"],
  ["projets.html", "Projets", "projets", "ph:squares-four"],
  ["process.html", "Process", "process", "ph:path"],
  ["apropos.html", "Profil", "apropos", "ph:user"],
  ["contact.html", "Contact", "contact", "ph:chat-circle-dots"],
];

const SOCIALS = [
  ["LinkedIn", "ph:linkedin-logo", "https://www.linkedin.com/in/cheikh-ahmadou-fall-5411661b9/"],
  ["Behance", "ph:behance-logo", "https://www.behance.net/ahmaduhfaal"],
  ["Instagram", "ph:instagram-logo", "https://www.instagram.com/ahmaduh__faal/"],
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const page = document.body.dataset.page;

/* ---------- Header / footer / modal partagés ---------- */
function renderLayout() {
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="nav" id="nav">
      <div class="container nav__inner">
        <a href="index.html" class="nav__brand" aria-label="Accueil">
          <img src="assets/img/logo-icon.svg" alt="Blackbuur" class="nav__logo">
        </a>
        <nav class="nav__links" id="navLinks">
          ${PAGES.map(([href, label, id]) => `<a href="${href}" class="${id === page ? "is-active" : ""}">${label}</a>`).join("")}
        </nav>
        <div class="nav__actions">
          <a href="contact.html" class="btn btn--primary btn--sm nav__contact">Contact <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a>
          <button class="nav__burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="menu"><span></span><span></span></button>
        </div>
      </div>
    </header>

    <!-- Menu plein écran (mobile) -->
    <div class="menu" id="menu" aria-hidden="true">
      <nav class="menu__links">
        ${[...PAGES, ["contact.html", "Contact", "contact"]].map(([href, label, id], i) => `
          <a href="${href}" class="menu__link${id === page ? " is-active" : ""}" style="--i:${i}">
            <small>0${i + 1}</small><span>${label}</span><iconify-icon icon="ph:arrow-up-right"></iconify-icon>
          </a>`).join("")}
      </nav>
      <div class="menu__foot" style="--i:7">
        <a href="mailto:cheikhfalldigital@gmail.com">cheikhfalldigital@gmail.com</a>
        <div class="menu__socials">${SOCIALS.map(([l, icon, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${l}"><iconify-icon icon="${icon}"></iconify-icon></a>`).join("")}</div>
      </div>
    </div>

    <!-- Barre de navigation du bas (mobile), à portée de pouce -->
    <nav class="dock" id="dock" aria-label="Navigation rapide">
      ${DOCK.map(([href, label, id, icon]) => `
        <a href="${href}" class="dock__item${id === page ? " is-active" : ""}" ${id === page ? `aria-current="page"` : ""}>
          <iconify-icon icon="${icon}"></iconify-icon><span>${label}</span>
        </a>`).join("")}
    </nav>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="footer">
      <div class="container">
        <p class="footer__big">Un projet en tête ?<br><a href="contact.html">Parlons-en <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></p>
        <div class="footer__grid">
          <div>
            <a href="index.html" class="footer__brand" aria-label="Accueil"><img src="assets/img/logo-full.svg" alt="Blackbuur" class="footer__logo"></a>
            <p class="footer__role">UI/UX &amp; Product Designer</p>
          </div>
          <nav><h4>Pages</h4>${PAGES.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}</nav>
          <nav><h4>Réseaux</h4>${SOCIALS.map(([l, , u]) => `<a href="${u}" target="_blank" rel="noopener">${l}</a>`).join("")}</nav>
          <nav><h4>Contact</h4>
            <a href="mailto:cheikhfalldigital@gmail.com">cheikhfalldigital@gmail.com</a>
            <a href="https://wa.me/221776231314" target="_blank" rel="noopener">+221 77 623 13 14</a>
          </nav>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} Cheikh Ahmadou Fall · Blackbuur</span>
          <a href="#top">Haut de page ↑</a>
        </div>
      </div>
    </footer>

    <div class="modal" id="modal" aria-hidden="true">
      <div class="modal__backdrop" data-close></div>
      <div class="modal__box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <header class="modal__head">
          <div><small id="modalType"></small><h3 id="modalTitle"></h3></div>
          <div class="modal__actions">
            <a id="modalOpen" href="#" target="_blank" rel="noopener" class="btn btn--outline btn--sm">Ouvrir dans Figma <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a>
            <button class="icon-btn" data-close aria-label="Fermer"><iconify-icon icon="ph:x"></iconify-icon></button>
          </div>
        </header>
        <div class="modal__frame"><iframe id="modalFrame" title="Prototype Figma" allowfullscreen></iframe></div>
      </div>
    </div>`);
  document.body.id = "top";
}

/* ---------- Covers ---------- */
// Capture de l'écran d'accueil du prototype Figma, dans un cadre navigateur ou téléphone
function mockCover(p) {
  const shot = `<img class="mock__shot" src="assets/img/proto/${p.slug}.jpg" alt="Écran d'accueil du prototype ${p.name}" loading="lazy">`;
  if (p.type === "Mobile") return `<div class="mock mock--mobile">${shot}</div>`;
  return `<div class="mock mock--web">
    <div class="mock__bar"><i></i><i></i><i></i></div>
    ${shot}
  </div>`;
}

function projectCard(p, i) {
  return `
    <a href="${projectUrl(p)}" class="project reveal${p.wide ? " project--wide" : ""}" style="--d:${(i % 3) * 0.08}s" data-type="${p.type}" aria-label="Voir le projet ${p.name}">
      <div class="project__cover" style="--tone:${p.tone || D1};--ac:${p.ac || Y}">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : mockCover(p)}
        <span class="project__play">Voir le projet <iconify-icon icon="ph:arrow-right"></iconify-icon></span>
      </div>
      <div class="project__body">
        <div><h3>${p.name}</h3><p>${p.desc}</p></div>
        <span class="tag"><iconify-icon icon="${p.type === "Mobile" ? "ph:device-mobile" : "ph:monitor"}"></iconify-icon>${p.type}</span>
      </div>
    </a>`;
}

function renderProjects() {
  const grid = $("#projects");
  if (!grid) return;
  const limit = +grid.dataset.limit || LISTED.length;
  grid.innerHTML = LISTED.slice(0, limit).map(projectCard).join("");

  const counts = { all: LISTED.length, Web: 0, Mobile: 0 };
  LISTED.forEach(p => counts[p.type]++);
  $$(".filter").forEach(b => { const s = $("sup", b); if (s) s.textContent = counts[b.dataset.filter]; });
}

/* ---------- Page détail d'un projet (projet.html?p=slug) ---------- */
function renderCase() {
  const root = $("#case");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("p");
  const params = new URLSearchParams(location.search);
  const i = PROJECTS.findIndex(p => p.slug === slug && (!p.hidden || params.get("k") === p.key));
  if (i < 0) {
    root.innerHTML = `<section class="page-hero"><div class="container">
      <h1 class="page-hero__title">Projet <span>introuvable.</span></h1>
      <p class="page-hero__lead">Ce projet n'existe pas ou a changé d'adresse.</p>
      <a href="projets.html" class="btn btn--primary" style="margin-top:28px">Voir tous les projets <iconify-icon icon="ph:arrow-right"></iconify-icon></a>
    </div></section>`;
    return;
  }
  const p = PROJECTS[i], c = p.case, next = LISTED[(LISTED.indexOf(p) + 1) % LISTED.length];
  const icon = p.type === "Mobile" ? "ph:device-mobile" : "ph:monitor";
  document.title = `${p.name} — Étude de cas · Cheikh Ahmadou Fall`;
  // Projet privé : demande aux moteurs de recherche de ne pas l'indexer
  if (p.hidden) document.head.insertAdjacentHTML("beforeend", `<meta name="robots" content="noindex, nofollow">`);

  // Numérotation des sections présentes uniquement
  let n = 0;
  const head = (title, accent) => `<p class="eyebrow">${String(++n).padStart(2, "0")} — ${title}</p><h2 class="section__title">${accent}</h2>`;

  root.innerHTML = `
    <section class="page-hero case-hero">
      <div class="container">
        <p class="page-hero__crumb reveal"><a href="index.html">Accueil</a> <iconify-icon icon="ph:caret-right"></iconify-icon> <a href="projets.html">Projets</a> <iconify-icon icon="ph:caret-right"></iconify-icon> ${p.name}</p>
        <div class="case-hero__tags reveal" style="--d:.04s"><span class="tag"><iconify-icon icon="${icon}"></iconify-icon>${p.type}</span><span class="tag">${p.desc}</span>${c && c.status ? `<span class="tag tag--status"><iconify-icon icon="ph:hourglass-medium"></iconify-icon>${c.status}</span>` : ""}</div>
        <h1 class="page-hero__title reveal" style="--d:.08s">${p.name}<span>.</span></h1>
        ${c ? `<p class="page-hero__lead reveal" style="--d:.12s">${c.tagline}</p>` : ""}
        <div class="case-hero__actions reveal" style="--d:.16s">
          <button type="button" class="btn btn--primary" data-prototype="${p.slug}"><iconify-icon icon="ph:play-fill"></iconify-icon> Voir le prototype</button>
          <a href="${p.url}" target="_blank" rel="noopener" class="btn btn--outline">Ouvrir dans Figma <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="case-cover reveal" style="--tone:${p.tone || D1};--ac:${p.ac || Y}">
          ${p.img ? `<img src="${p.img}" alt="${p.name}">` : mockCover(p)}
        </div>
        <dl class="case-facts reveal">
          <div><dt>Rôle</dt><dd>UI/UX Designer</dd></div>
          <div><dt>Plateforme</dt><dd>${p.type === "Mobile" ? "Application mobile" : "Web"}</dd></div>
          <div><dt>Outil</dt><dd>Figma</dd></div>
          <div><dt>Livrable</dt><dd>Prototype interactif</dd></div>
        </dl>
      </div>
    </section>

    ${c ? `
    <section class="section case-block">
      <div class="container case-split">
        <div class="reveal">${head("Contexte", `Le <span>projet</span>`)}</div>
        <p class="case-lead reveal" style="--d:.08s">${c.context}</p>
      </div>
    </section>

    <section class="section light case-block">
      <div class="container">
        <div class="section__head reveal"><div>${head("Problème", `Ce qui <span>bloquait</span>`)}</div></div>
        <ol class="case-problems">
          ${c.problem.map((t, k) => `<li class="reveal" style="--d:${k * .06}s"><span>${String(k + 1).padStart(2, "0")}</span><p>${t}</p></li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="section case-block">
      <div class="container">
        <div class="section__head reveal"><div>${head("Solution", `Ce que j'ai <span>conçu</span>`)}</div></div>
        <div class="case-solutions" style="--cols:${c.solution.length}">
          ${c.solution.map(([t, d], k) => `<article class="case-card reveal" style="--d:${k * .06}s"><iconify-icon icon="ph:check-circle"></iconify-icon><h3>${t}</h3><p>${d}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight case-block">
      <div class="container">
        <div class="section__head reveal"><div>${head("Démarche", `Comment j'ai <span>avancé</span>`)}</div></div>
        <ol class="case-method">
          ${c.method.map(([t, d], k) => `<li class="reveal" style="--d:${k * .08}s"><span class="case-method__num">${k + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="section case-block">
      <div class="container case-split">
        <div class="reveal">
          ${head("Fonctionnalités", `L'essentiel du <span>produit</span>`)}
          ${c.audience ? `<p class="case-audience-title">Pour qui</p><div class="expertise">${c.audience.map(a => `<span>${a}</span>`).join("")}</div>` : ""}
        </div>
        <ul class="case-features reveal" style="--d:.08s">
          ${c.features.map(f => `<li><iconify-icon icon="ph:check-bold"></iconify-icon>${f}</li>`).join("")}
        </ul>
      </div>
    </section>` : ""}

    <section class="section ${c ? "" : "section--tight"} case-block">
      <div class="container">
        <div class="section__head reveal">
          <div>${head("Prototype", `Testez le <span>parcours</span>`)}</div>
          <a href="${p.url}" target="_blank" rel="noopener" class="link-arrow">Ouvrir dans Figma <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a>
        </div>
        <div class="case-proto${p.type === "Mobile" ? " case-proto--mobile" : ""} reveal" id="caseProto">
          <button type="button" class="case-proto__load">
            <!-- Capture du prototype en aperçu, sous le bouton de lecture -->
            <img class="case-proto__poster" src="${p.img || `assets/img/proto/${p.slug}.jpg`}" alt="" loading="lazy">
            <span class="case-proto__cta">
              <span class="case-proto__play"><iconify-icon icon="ph:play-fill"></iconify-icon></span>
              Charger le prototype interactif
            </span>
          </button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <a href="${projectUrl(next)}" class="case-next reveal">
          <small>Projet suivant</small>
          <span>${next.name} <iconify-icon icon="ph:arrow-right"></iconify-icon></span>
        </a>
      </div>
    </section>`;

  // Le prototype ne se charge qu'à la demande (iframe Figma lourde)
  $(".case-proto__load", root).addEventListener("click", () => {
    $("#caseProto").innerHTML = `<iframe title="Prototype Figma ${p.name}" allowfullscreen src="https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(p.url)}"></iframe>`;
  });
}

/* ---------- Bandes de projets (page À propos) ---------- */
function renderReels() {
  $$("[data-reel]").forEach(row => {
    const half = Math.ceil(LISTED.length / 2);
    const list = row.dataset.reel === "0" ? LISTED.slice(0, half) : LISTED.slice(half);
    const items = list.map((p, i) => `
      <span class="reel__item${i % 2 ? " reel__item--outline" : ""}">${p.name}<small>${p.type}</small></span>
      <iconify-icon class="reel__sep" icon="ph:asterisk-bold"></iconify-icon>`).join("");
    // Contenu doublé pour une boucle sans couture
    row.innerHTML = `<div class="reel__track">${items}${items}</div>`;
  });
}

function initFilters() {
  $$(".filter").forEach(btn => btn.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.toggle("is-active", b === btn));
    const f = btn.dataset.filter;
    $$(".project").forEach(card => {
      const show = f === "all" || card.dataset.type === f;
      card.classList.toggle("is-hidden", !show);
      card.classList.remove("is-entering");
      if (show) { void card.offsetWidth; card.classList.add("is-entering"); }
    });
  }));
}

/* ---------- Modal (Figma embed) ---------- */
function initModal() {
  const modal = $("#modal"), frame = $("#modalFrame");
  const open = p => {
    $("#modalTitle").textContent = p.name;
    $("#modalType").textContent = `${p.type} · ${p.desc}`;
    $("#modalOpen").href = p.url;
    frame.src = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(p.url)}`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  };
  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { frame.src = "about:blank"; }, 350);
  };
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-prototype]");
    if (btn) open(PROJECTS.find(p => p.slug === btn.dataset.prototype));
  });
  $$("[data-close]", modal).forEach(el => el.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("is-open")) close(); });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal, .journey").forEach(el => io.observe(el));
}

/* ---------- Parcours Process : tracé dessiné au scroll ---------- */
function initRoad() {
  const road = $("#road");
  if (!road) return;
  const steps = $$(".rstep", road);
  let ticking = false;
  const update = () => {
    ticking = false;
    const r = road.getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight * 0.7 - r.top) / r.height, 0), 1);
    road.style.setProperty("--p", p.toFixed(4));
    steps.forEach((s, i) => s.classList.toggle("is-on", p >= (i + 0.5) / steps.length));
  };
  update();
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
}

/* ---------- Counters ---------- */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
      const pad = end < 10 ? 2 : 0, t0 = performance.now(), dur = 1400;
      const tick = now => {
        const k = Math.min((now - t0) / dur, 1);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 3)))).padStart(pad, "0") + suffix;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$("[data-count]").forEach(el => io.observe(el));
}

/* ---------- Nav ---------- */
function initNav() {
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu"), dock = $("#dock");

  // Header opaque au scroll ; la barre du bas se cache en descendant et revient en remontant
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("is-scrolled", y > 10);
    dock.classList.toggle("is-hidden", y > lastY && y > 300);
    lastY = y;
  };
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  const setMenu = open => {
    document.documentElement.classList.toggle("menu-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  };
  burger.addEventListener("click", () => setMenu(!document.documentElement.classList.contains("menu-open")));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  addEventListener("pageshow", () => setMenu(false));
}

/* ---------- Sheets : modales animées ---------- */
const EMAIL = "cheikhfalldigital@gmail.com";
const PHONE = "+221 77 623 13 14";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const copyField = value => `
  <div class="copy sheet__item" style="--k:3">
    <code>${value}</code>
    <button type="button" data-copy="${value}">
      <iconify-icon class="i-copy" icon="ph:copy"></iconify-icon><iconify-icon class="i-done" icon="ph:check-bold"></iconify-icon> Copier
    </button>
  </div>`;

const badge = icon => `<div class="sheet__badge sheet__item" style="--k:0"><iconify-icon icon="${icon}"></iconify-icon></div>`;

const SHEETS = {
  email: () => `${badge("ph:envelope-simple")}
    <h3 class="sheet__item" style="--k:1">Écrivez-moi</h3>
    <p class="sheet__item" style="--k:2">Décrivez votre projet en quelques lignes, je vous réponds rapidement.</p>
    ${copyField(EMAIL)}
    <div class="sheet__actions sheet__item" style="--k:4"><a class="btn btn--primary" href="mailto:${EMAIL}">Ouvrir ma messagerie <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  whatsapp: () => `${badge("ph:whatsapp-logo")}
    <h3 class="sheet__item" style="--k:1">Discutons sur WhatsApp</h3>
    <p class="sheet__item" style="--k:2">Le plus rapide pour un premier échange ou une question.</p>
    ${copyField(PHONE)}
    <div class="sheet__actions sheet__item" style="--k:4"><a class="btn btn--primary" href="https://wa.me/221776231314" target="_blank" rel="noopener">Ouvrir WhatsApp <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  linkedin: () => `${badge("ph:linkedin-logo")}
    <h3 class="sheet__item" style="--k:1">Connectons-nous</h3>
    <p class="sheet__item" style="--k:2">Mon parcours, mes expériences et mes actualités de designer.</p>
    <div class="sheet__actions sheet__item" style="--k:3"><a class="btn btn--primary" href="${SOCIALS[0][2]}" target="_blank" rel="noopener">Voir mon profil LinkedIn <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  behance: () => `${badge("ph:behance-logo")}
    <h3 class="sheet__item" style="--k:1">Mon Behance</h3>
    <p class="sheet__item" style="--k:2">Mes projets UI/UX présentés en détail : maquettes, parcours et écrans clés.</p>
    <div class="sheet__actions sheet__item" style="--k:3"><a class="btn btn--primary" href="${SOCIALS[1][2]}" target="_blank" rel="noopener">Voir mon Behance <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  success: ({ name }) => `
    <div class="check sheet__item" style="--k:0">
      ${Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2, r = 70 + (i % 3) * 14;
        return `<span class="burst" style="--x:${Math.round(Math.cos(a) * r)}px;--y:${Math.round(Math.sin(a) * r)}px"></span>`;
      }).join("")}
      <svg viewBox="0 0 86 86"><circle cx="43" cy="43" r="43" /><path d="M26 44 l12 12 l22 -24" /></svg>
    </div>
    <h3 class="sheet__item" style="--k:1">Merci ${name} !</h3>
    <p class="sheet__item" style="--k:2">Votre message est bien envoyé. Je reviens vers vous très vite, directement par email.</p>
    <div class="sheet__actions sheet__item" style="--k:3">
      <button type="button" class="btn btn--primary" data-sheet-close>Parfait</button>
    </div>`,
  error: ({ mailto }) => `${badge("ph:warning-circle")}
    <h3 class="sheet__item" style="--k:1">Oups, l'envoi a échoué</h3>
    <p class="sheet__item" style="--k:2">Le message n'a pas pu partir. Vous pouvez réessayer, ou me l'envoyer directement depuis votre messagerie : tout est déjà pré-rempli.</p>
    <div class="sheet__actions sheet__item" style="--k:3">
      <a class="btn btn--primary" href="${mailto}">Envoyer par email <iconify-icon icon="ph:paper-plane-tilt"></iconify-icon></a>
      <button type="button" class="btn btn--outline" data-sheet-close>Réessayer</button>
    </div>`,
};

let sheetEl, lastFocus;
function openSheet(type, data = {}) {
  if (!sheetEl) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="sheet" aria-hidden="true">
        <div class="sheet__backdrop" data-sheet-close></div>
        <div class="sheet__box" role="dialog" aria-modal="true">
          <button class="sheet__close" data-sheet-close aria-label="Fermer"><iconify-icon icon="ph:x-bold"></iconify-icon></button>
          <div class="sheet__content"></div>
        </div>
      </div>
      <div class="toast" role="status"><iconify-icon icon="ph:check-circle-fill"></iconify-icon> Copié !</div>`);
    sheetEl = $(".sheet");
    sheetEl.addEventListener("click", e => {
      if (e.target.closest("[data-sheet-close]")) closeSheet();
      const copy = e.target.closest("[data-copy]");
      if (copy) copyText(copy);
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && sheetEl.classList.contains("is-open")) closeSheet(); });
  }
  lastFocus = document.activeElement;
  $(".sheet__content", sheetEl).innerHTML = SHEETS[type](data);
  sheetEl.classList.remove("is-closing");
  void sheetEl.offsetWidth; // relance les animations à chaque ouverture
  sheetEl.classList.add("is-open");
  sheetEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $(".sheet__close", sheetEl).focus({ preventScroll: true });
}

function closeSheet() {
  sheetEl.classList.add("is-closing");
  setTimeout(() => {
    sheetEl.classList.remove("is-open", "is-closing");
    sheetEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    lastFocus?.focus({ preventScroll: true });
  }, 250);
}

async function copyText(btn) {
  try { await navigator.clipboard.writeText(btn.dataset.copy); } catch (e) {
    const t = document.createElement("textarea");
    t.value = btn.dataset.copy; document.body.append(t); t.select(); document.execCommand("copy"); t.remove();
  }
  btn.classList.add("is-done");
  const toast = $(".toast");
  toast.classList.add("is-on");
  setTimeout(() => { btn.classList.remove("is-done"); toast.classList.remove("is-on"); }, 1800);
}

/* ---------- Contact ---------- */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;

  // Heure locale à Dakar
  const clock = $("#dakarTime");
  const tick = () => { clock.textContent = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Dakar" }).format(new Date()); };
  tick(); setInterval(tick, 30000);

  $$("[data-sheet]").forEach(b => b.addEventListener("click", () => openSheet(b.dataset.sheet)));

  form.addEventListener("submit", async e => {
    e.preventDefault();
    let ok = true;
    $$(".field", form).forEach(f => {
      const input = $("input, textarea", f);
      f.classList.remove("is-error");
      if (!input.checkValidity()) { void f.offsetWidth; f.classList.add("is-error"); ok = false; }
    });
    if (!ok) return;

    const d = new FormData(form);
    if (d.get("_honey")) return; // champ piège rempli = robot
    const subject = `${d.get("type")} — ${d.get("name")}`;
    const body = `${d.get("message")}\n\n${d.get("name")} · ${d.get("email")}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const first = String(d.get("name")).trim().split(" ")[0].replace(/[<>&"]/g, "");
    const btn = $(".brief__send", form);
    btn.classList.add("is-loading");
    btn.disabled = true;

    try {
      // FormSubmit transfère le message par email ; le 1er envoi déclenche un email d'activation
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nom: d.get("name"),
          Email: d.get("email"),
          "Type de projet": d.get("type"),
          Message: d.get("message"),
          _subject: `Portfolio · ${subject}`,
          _replyto: d.get("email"),
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== "true") throw new Error(json.message || res.status);
      form.reset();
      openSheet("success", { name: first });
    } catch (err) {
      console.error("Envoi du formulaire :", err);
      openSheet("error", { mailto });
    } finally {
      btn.classList.remove("is-loading");
      btn.disabled = false;
    }
  });
  $$(".field input, .field textarea", form).forEach(i => i.addEventListener("input", () => i.parentElement.classList.remove("is-error")));
}

/* ---------- Intro : le logo se dessine, rebondit, puis le rideau se lève ---------- */
const wait = ms => new Promise(r => setTimeout(r, ms));

async function runIntro() {
  const root = document.documentElement;
  if (!root.classList.contains("intro")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="loader" aria-hidden="true"><div class="loader__logo"></div></div>`);
  const loader = $(".loader");
  root.classList.remove("intro");

  // Logo SVG en ligne pour pouvoir animer ses tracés (sa <style> interne est retirée)
  try {
    const svg = await (await fetch("assets/img/logo-icon.svg")).text();
    $(".loader__logo", loader).innerHTML = svg.replace(/<\?xml[^>]*>/, "").replace(/<style>[\s\S]*?<\/style>/, "");
    $$(".loader__logo path", loader).forEach(p => p.style.setProperty("--len", Math.ceil(p.getTotalLength())));
  } catch (e) {
    $(".loader__logo", loader).innerHTML = `<img src="assets/img/logo-icon.svg" alt="">`;
  }

  void loader.offsetWidth;
  loader.classList.add("is-drawing");

  await wait(1300);
  loader.classList.add("is-filled");
  await wait(1100);
  loader.classList.add("is-leaving");
  try { sessionStorage.setItem("bb-seen", "1"); } catch (e) {}
  setTimeout(() => loader.remove(), 1000);
  await wait(500); // le hero s'anime pendant la levée du rideau
}

/* ---------- Transitions de page ---------- */
const pageLabel = (href, search = "") => {
  const file = href.split("/").pop().split(/[?#]/)[0] || "index.html";
  if (file === "projet.html") return (PROJECTS.find(p => p.slug === new URLSearchParams(search).get("p")) || {}).name || "Projet";
  const hit = PAGES.find(([h]) => h === file);
  return hit ? hit[1] : file === "contact.html" ? "Contact" : "";
};

function ptMarkup(label) {
  return `<div class="pt" aria-hidden="true"><div class="pt__inner">
    <img class="pt__logo" src="assets/img/logo-icon.svg" alt="">
    <div class="pt__mask"><span class="pt__label">${label}</span></div>
  </div></div>`;
}

async function runArrival() {
  const root = document.documentElement;
  if (!root.classList.contains("pt-in")) return;
  let label = "";
  try { label = sessionStorage.getItem("bb-pt") || ""; sessionStorage.removeItem("bb-pt"); } catch (e) {}
  document.body.insertAdjacentHTML("beforeend", ptMarkup(label));
  const pt = $$(".pt").pop();
  pt.classList.add("is-cover");
  root.classList.remove("pt-in");
  await wait(250);
  pt.classList.add("is-leave");
  setTimeout(() => pt.remove(), 1000);
  await wait(350); // le contenu commence à apparaître pendant que le rideau remonte
}

function initTransitions() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !url.pathname.endsWith(".html") && !url.pathname.endsWith("/")) return;
    if (url.pathname === location.pathname && url.hash) return; // ancre sur la même page
    e.preventDefault();

    const label = pageLabel(url.pathname, url.search);
    document.body.insertAdjacentHTML("beforeend", ptMarkup(label));
    const pt = $$(".pt").pop();
    pt.style.setProperty("--x", `${e.clientX || innerWidth / 2}px`);
    pt.style.setProperty("--y", `${e.clientY || innerHeight / 2}px`);
    void pt.offsetWidth;
    pt.classList.add("is-out");
    try { sessionStorage.setItem("bb-pt", label || " "); } catch (err) {}
    setTimeout(() => { location.href = url.href; }, 800);
  });
  // Retour arrière (bfcache) : on retire le rideau resté affiché
  addEventListener("pageshow", e => { if (e.persisted) $$(".pt").forEach(p => p.remove()); });
}

/* ---------- Init ---------- */
renderLayout();
renderCase();
renderProjects();
renderReels();
initFilters();
initModal();
initRoad();
initNav();
initContact();
initTransitions();
// Les apparitions au scroll démarrent une fois l'intro ou le rideau d'arrivée terminé
// (finally : même si l'intro échoue, le contenu s'affiche quand même)
Promise.all([runIntro(), runArrival()]).catch(console.error).finally(() => { initReveal(); initCounters(); });
