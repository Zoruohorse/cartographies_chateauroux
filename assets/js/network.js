import{loadRepository,esc,norm,actorClaim,evidenceHtml}from'./data-loader.js';
const d = await loadRepository();
const ns = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('svg');
const filters = document.getElementById('filters');
const search = document.getElementById('search');
const center = document.getElementById('center');
const panel = document.getElementById('panel');
const details = document.getElementById('details');
const tip = document.getElementById('tip');
const count = document.getElementById('count');

// Données du nuage de Châteauroux conservées intégralement.
const graphData = {
  "nodes": [
    {
      "id": "Data center Google — Ozans / Étrechet",
      "label": "Data center\nGoogle\nOzans\nÉtrechet",
      "group": "Projet central",
      "size": 30,
      "detail": "Projet de campus de centres de données Google près de Châteauroux : 195 hectares, huit à dix bâtiments, raccordements électriques 225 kV puis 400 kV."
    },
    {
      "id": "ZAC d’Ozans",
      "label": "ZAC d’Ozans",
      "group": "Projet central",
      "size": 22,
      "detail": "Zone d’activités située à Étrechet, aux portes de Châteauroux ; parcelle de 195 hectares visée par Google."
    },
    {
      "id": "Data center miroir du Pêchereau",
      "label": "Data center\nmiroir du Pêchereau",
      "group": "Projet central",
      "size": 22,
      "detail": "Second site potentiel au Pêchereau / aérodrome Argenton-Le Pêchereau, destiné à prendre le relais du site d’Ozans en cas de défaillance."
    },
    {
      "id": "Ozans dire non",
      "label": "Ozans dire non",
      "group": "Noyau d’opposition local",
      "size": 24,
      "detail": "Collectif créé fin avril 2026 contre le projet Google ; rassemble citoyens, organisations syndicales, politiques et environnementales."
    },
    {
      "id": "PCF de l’Indre",
      "label": "PCF de l’Indre",
      "group": "Noyau d’opposition local",
      "size": 19,
      "detail": "Fédération départementale du Parti communiste français ; membre du collectif Ozans dire non et très critique sur l’opacité du projet."
    },
    {
      "id": "Les Écologistes",
      "label": "Les Écologistes",
      "group": "Noyau d’opposition local",
      "size": 17,
      "detail": "Organisation à l’origine d’une réunion publique à Châteauroux pour peser dans la concertation préalable."
    },
    {
      "id": "Confédération paysanne",
      "label": "Confédération paysanne",
      "group": "Noyau d’opposition local",
      "size": 17,
      "detail": "Alerte sur l’absence de détails concernant les impacts agricoles et environnementaux."
    },
    {
      "id": "Indre Nature / FNE locale",
      "label": "Indre Nature\nFNE locale",
      "group": "Noyau d’opposition local",
      "size": 17,
      "detail": "Association environnementale locale citée parmi les acteurs que les garants de la CNDP doivent rencontrer."
    },
    {
      "id": "Union de la gauche citoyenne",
      "label": "Union de la gauche citoyenne",
      "group": "Noyau d’opposition local",
      "size": 17,
      "detail": "Formation locale critique, représentée par Éric Domenge-Abeau."
    },
    {
      "id": "LFI",
      "label": "LFI",
      "group": "Noyau d’opposition local",
      "size": 17,
      "detail": "Mentionnée dans le corpus via des critiques contre Google et son projet de data center à Ozans."
    },
    {
      "id": "Jérémie Godet",
      "label": "Jérémie Godet",
      "group": "Opposants / critiques nommément cités",
      "size": 24,
      "detail": "Vice-président écologiste de la Région Centre-Val de Loire, délégué au Climat ; porte la fronde avec Ozans dire non, critique l’artificialisation, les PFAS et l’îlot de chaleur."
    },
    {
      "id": "Dominique Boué",
      "label": "Dominique Boué",
      "group": "Opposants / critiques nommément cités",
      "size": 19,
      "detail": "Secrétaire départemental du PCF de l’Indre ; dénonce l’absence de concertation, l’opacité et les incertitudes sur le refroidissement."
    },
    {
      "id": "Francis Martinet",
      "label": "Francis Martinet",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "L’un des initiateurs du collectif Ozans dire non ; insiste sur l’information des citoyens et la faible transparence autour du projet."
    },
    {
      "id": "Stéphanie Grelet",
      "label": "Stéphanie Grelet",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Militante communiste ; compare le dossier Google à d’autres projets menés selon elle « en sous-marin »."
    },
    {
      "id": "Raphaël Tillie",
      "label": "Raphaël Tillie",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Membre du collectif ; interroge l’îlot de chaleur et défend l’enjeu de souveraineté alimentaire."
    },
    {
      "id": "Cyrielle Chatelain",
      "label": "Cyrielle Chatelain",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Présidente du groupe écologiste et social à l’Assemblée nationale ; alerte sur le mirage des créations d’emplois."
    },
    {
      "id": "Jean Delavergne",
      "label": "Jean Delavergne",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Co-secrétaire des Écologistes de l’Indre ; critique la gestion territoriale de Gil Avérous et la fuite en avant technocratique."
    },
    {
      "id": "Éric Domenge-Abeau",
      "label": "Éric Domenge-Abeau",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Tête de liste de l’Union de la gauche citoyenne à Châteauroux ; ironise sur la succession d’annonces non abouties autour d’Ozans."
    },
    {
      "id": "Emmanuel de Saint Pol",
      "label": "Emmanuel de Saint Pol",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Agriculteur exproprié en 2012 ; exprime de la lassitude et un scepticisme face aux projets successifs sur la zone."
    },
    {
      "id": "Militant écologiste anonyme",
      "label": "Militant écologiste anonyme",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Évoque la faiblesse du rapport de force local, la difficulté à mobiliser et le manque d’informations d’Enedis/RTE."
    },
    {
      "id": "Gil Avérous",
      "label": "Gil Avérous",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 24,
      "detail": "Président LR de Châteauroux Métropole et maire de Châteauroux ; principal soutien local du projet, qu’il présente comme une chance historique."
    },
    {
      "id": "François Bonneau",
      "label": "François Bonneau",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Président socialiste de la Région Centre-Val de Loire ; voit dans le projet une « super opportunité »."
    },
    {
      "id": "Marc Descouraux",
      "label": "Marc Descouraux",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Maire d’Étrechet ; renvoie vers l’agglomération et indique ne pas avoir d’information précise sur l’avancement du projet."
    },
    {
      "id": "Vincent Millan",
      "label": "Vincent Millan",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Maire d’Argenton-sur-Creuse et président de la communauté de communes Éguzon-Argenton-Vallée de la Creuse ; confirme l’existence d’un projet miroir au Pêchereau, encore très préliminaire."
    },
    {
      "id": "Régis Blanchet",
      "label": "Régis Blanchet",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Maire de Buzançais ; évoque avec prudence l’entreprise américaine, dans un contexte local de discrétion autour des projets de data centers."
    },
    {
      "id": "Thibault Lanxade",
      "label": "Thibault Lanxade",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Préfet de l’Indre ; présenté comme soutien d’une stratégie de redynamisation numérique et industrielle autour d’Indre 2030."
    },
    {
      "id": "Nicolas Bouzou",
      "label": "Nicolas Bouzou",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Économiste, fondateur d’Asterès ; missionné pour imaginer le plan Indre 2030, incluant data centers, gigafactories et robotaxis."
    },
    {
      "id": "Chambre d’agriculture",
      "label": "Chambre d’agriculture",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Acteur mobilisé dans les calculs de Gil Avérous sur la valorisation de chaleur pour les serres et la déshydratation de luzerne."
    },
    {
      "id": "Google",
      "label": "Google",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 24,
      "detail": "Porteur industriel du projet ; envisage son premier data center exploité directement en France."
    },
    {
      "id": "Google France",
      "label": "Google France",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 19,
      "detail": "Maître d’ouvrage cité dans la saisine CNDP avec Tricolore Computing, Violet Computing et RTE."
    },
    {
      "id": "Tricolore Computing",
      "label": "Tricolore Computing",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 19,
      "detail": "Filiale liée à Google, mentionnée pour l’acquisition potentielle du terrain et comme maître d’ouvrage."
    },
    {
      "id": "Violet Computing",
      "label": "Violet Computing",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 15,
      "detail": "Filiale liée à Google et citée comme maître d’ouvrage dans la concertation CNDP."
    },
    {
      "id": "RTE",
      "label": "RTE",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 24,
      "detail": "Maître d’ouvrage du raccordement électrique ; raccordement 225 kV puis nouvelles lignes aériennes 400 kV."
    },
    {
      "id": "Enedis",
      "label": "Enedis",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 15,
      "detail": "Mentionné par un militant écologiste comme acteur sollicité sans obtenir d’informations précises."
    },
    {
      "id": "Decknet",
      "label": "Decknet",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 15,
      "detail": "Porteur d’un autre projet de data center plus modeste à Buzançais."
    },
    {
      "id": "Soprema Steel",
      "label": "Soprema Steel",
      "group": "Maîtres d’ouvrage / industriels",
      "size": 15,
      "detail": "Industriel présent sur la ZAC d’Ozans, l’un des rares bâtiments existants sur la zone."
    },
    {
      "id": "CNDP",
      "label": "CNDP",
      "group": "Concertation / institutions publiques",
      "size": 24,
      "detail": "Commission nationale du débat public ; lance la concertation préalable sur le projet Ozans-Châteauroux."
    },
    {
      "id": "Marc Papinutti",
      "label": "Marc Papinutti",
      "group": "Concertation / institutions publiques",
      "size": 15,
      "detail": "Président de la CNDP ; explique que la présence de RTE fait entrer le projet dans le périmètre de la CNDP."
    },
    {
      "id": "Jean-Louis Laure",
      "label": "Jean-Louis Laure",
      "group": "Concertation / institutions publiques",
      "size": 19,
      "detail": "Garant de la concertation CNDP ; se dit vigilant face au sentiment d’urgence et au secret des affaires."
    },
    {
      "id": "Dreal",
      "label": "Dreal",
      "group": "Concertation / institutions publiques",
      "size": 15,
      "detail": "Autorité environnementale citée parmi les experts que les garants doivent rencontrer."
    },
    {
      "id": "Ademe",
      "label": "Ademe",
      "group": "Concertation / institutions publiques",
      "size": 15,
      "detail": "Cité comme acteur expert ; associée à des travaux sur les data centers et leurs impacts urbains/environnementaux."
    },
    {
      "id": "État",
      "label": "État",
      "group": "Concertation / institutions publiques",
      "size": 19,
      "detail": "Inscrit le site parmi les projets industriels stratégiques nationaux et soutient la politique d’implantation de data centers."
    },
    {
      "id": "Préfecture de l’Indre",
      "label": "Préfecture de l’Indre",
      "group": "Concertation / institutions publiques",
      "size": 15,
      "detail": "Acteur local impliqué dans la stratégie Indre 2030 et les dynamiques de redynamisation industrielle."
    },
    {
      "id": "Ophélie Coelho",
      "label": "Ophélie Coelho",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Chercheuse associée à l’IRIS ; critique la diplomatie industrielle de terrain, la faiblesse des concertations et l’opacité des Big Tech."
    },
    {
      "id": "Loup Cellard",
      "label": "Loup Cellard",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Sociologue spécialiste de l’impact écologique des datacenters ; interroge la valorisation de la chaleur fatale pour une commune de la taille de Diors."
    },
    {
      "id": "Maxime Colin",
      "label": "Maxime Colin",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Juriste à France Nature Environnement ; critique la stratégie des GAFAM consistant à laisser les projets se développer discrètement."
    },
    {
      "id": "Cécile Diguet",
      "label": "Cécile Diguet",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Urbaniste au Studio Dégel ; souligne que la culture du secret des GAFAM nuit à l’anticipation urbaine et économique."
    },
    {
      "id": "Guillaume Gourgues",
      "label": "Guillaume Gourgues",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Politiste cité sur la faiblesse institutionnelle de la CNDP face aux projets industriels."
    },
    {
      "id": "La Quadrature du Net",
      "label": "La Quadrature du Net",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Association critique du numérique ; exprime des craintes sur les évolutions législatives favorables aux data centers."
    },
    {
      "id": "Le Nuage était sous nos pieds",
      "label": "Le Nuage était sous nos pieds",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Collectif critique des data centers ; cité sur l’intérêt social limité du projet et les créations d’emplois souvent sous-traitées."
    },
    {
      "id": "Hiatus",
      "label": "Hiatus",
      "group": "Réseau critique national / experts",
      "size": 15,
      "detail": "Collectif critique du numérique cité dans le débat national sur les grands entrepôts à serveurs."
    },
    {
      "id": "Opacité / secret des affaires",
      "label": "Opacité\nsecret des affaires",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Grief central : manque d’informations, culture du secret de Google et données techniques jugées insuffisantes."
    },
    {
      "id": "Artificialisation des sols",
      "label": "Artificialisation des sols",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Critique liée aux 195 hectares du projet et à l’imperméabilisation d’un vaste foncier."
    },
    {
      "id": "Îlot de chaleur",
      "label": "Îlot de chaleur",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Crainte d’un effet thermique massif près de la forêt de Châteauroux et des terres agricoles."
    },
    {
      "id": "PFAS / fluides frigorifiques",
      "label": "PFAS\nfluides frigorifiques",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Inquiétude sur les méthodes de refroidissement par air et les liquides frigorifiques potentiellement polluants."
    },
    {
      "id": "Consommation d’eau",
      "label": "Consommation d’eau",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Point sensible dans un territoire ayant connu du stress hydrique."
    },
    {
      "id": "Consommation électrique",
      "label": "Consommation électrique",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Nécessité de lignes THT 225 kV puis 400 kV ; capacité actuelle jugée insuffisante pour un très grand projet."
    },
    {
      "id": "Mirage de l’emploi",
      "label": "Mirage de l’emploi",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Critique selon laquelle les emplois promis seraient limités par rapport à la surface mobilisée."
    },
    {
      "id": "Souveraineté numérique",
      "label": "Souveraineté numérique",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Argument contesté en raison du Cloud Act et du contrôle des technologies par une multinationale américaine."
    },
    {
      "id": "Projet miroir",
      "label": "Projet miroir",
      "group": "Points de vigilance / griefs",
      "size": 17,
      "detail": "Risque d’extension territoriale avec un second site au Pêchereau."
    },
    {
      "id": "La Nouvelle République",
      "label": "La Nouvelle République",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Source locale centrale sur le projet Google, la concertation, le collectif Ozans dire non et les réactions politiques."
    },
    {
      "id": "Basta!",
      "label": "Basta!",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Média ayant publié l’enquête « Google avance masqué » et analysé l’opacité territoriale du projet."
    },
    {
      "id": "France 3 Centre-Val de Loire",
      "label": "France 3 Centre-Val\nde Loire",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Média ayant traité la division locale autour du premier data center Google en France."
    },
    {
      "id": "Le Monde",
      "label": "Le Monde",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Cité sur la confidentialité des informations écologiques des centres de données obtenue par les lobbys du secteur."
    },
    {
      "id": "ICI Berry",
      "label": "ICI Berry",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Média cité au sujet du plan Indre 2030 et des positions de Thibault Lanxade."
    },
    {
      "id": "Lou Welgryn",
      "label": "Lou Welgryn",
      "group": "Experts / voix critiques",
      "size": 15,
      "detail": "Coprésidente de Data for Good, déplore la fuite en avant et le gigantisme des projets."
    },
    {
      "id": "Data for Good",
      "label": "Data for Good",
      "group": "Experts / voix critiques",
      "size": 17,
      "detail": "Association plaidant pour un numérique d'intérêt général au niveau national."
    },
    {
      "id": "Philippe Chabeaudy",
      "label": "Philippe\nChabeaudy",
      "group": "Experts / voix critiques",
      "size": 15,
      "detail": "Habitant des Pennes-Mirabeau, s'oppose au projet Cézanne en raison des risques d'incendie."
    },
    {
      "id": "Maxime Efoui-Hess",
      "label": "Maxime\nEfoui-Hess",
      "group": "Experts / voix critiques",
      "size": 15,
      "detail": "Membre du Shift Project, critique la priorisation de l'électricité pour l'intelligence artificielle."
    },
    {
      "id": "Associations de Wissous",
      "label": "Associations\nWissous",
      "group": "Experts / voix critiques",
      "size": 15,
      "detail": "Collectifs locaux luttant en justice contre un projet de data center en Essonne."
    },
    {
      "id": "PS de l’Indre",
      "label": "PS de l’Indre",
      "group": "Experts / voix critiques",
      "size": 19,
      "detail": "Parti redoutant de devenir une colonie numérique et pointant la faiblesse des emplois créés."
    },
    {
      "id": "Gouvernement français",
      "label": "Gouvernement\nfrançais",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 20,
      "detail": "Soutient les investissements massifs dans l'IA et l'implantation de giga data centers."
    },
    {
      "id": "Maryvonne Le Brignonen",
      "label": "Maryvonne\nLe Brignonen",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Préfète de l'Indre, destinataire institutionnelle de la pétition des opposants au projet Google."
    },
    {
      "id": "France Datacenter",
      "label": "France\nDatacenter",
      "group": "Porteurs industriels",
      "size": 17,
      "detail": "Association représentant la filière professionnelle des data centers en France."
    },
    {
      "id": "Michaël Reffay",
      "label": "Michaël Reffay",
      "group": "Porteurs industriels",
      "size": 15,
      "detail": "Délégué général de France Datacenter, défend l'intérêt économique des implantations."
    },
    {
      "id": "EDF",
      "label": "EDF",
      "group": "Énergie / raccordement / foncier",
      "size": 17,
      "detail": "Énergéticien identifié comme ayant besoin de ces projets comme relais de croissance."
    },
    {
      "id": "Telehouse",
      "label": "Telehouse",
      "group": "Porteurs industriels",
      "size": 17,
      "detail": "Opérateur japonais, porteur du projet de data center Cézanne."
    },
    {
      "id": "Cézanne",
      "label": "Cézanne",
      "group": "Projet central",
      "size": 20,
      "detail": "Projet de data center de 70 MW aux Pennes-Mirabeau."
    },
    {
      "id": "Marie-Claire Eustache",
      "label": "Marie-Claire\nEustache",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Garante de la CNDP pour la concertation préalable à Ozans."
    },
    {
      "id": "Romane Harmel-Samarcq",
      "label": "Romane\nHarmel-Samarcq",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 15,
      "detail": "Garante de la CNDP pour la concertation préalable à Ozans."
    },
    {
      "id": "Sébastien Missoffe",
      "label": "Sébastien\nMissoffe",
      "group": "Porteurs industriels",
      "size": 19,
      "detail": "Directeur général de Google France, confirme l'étude des options pour Châteauroux."
    },
    {
      "id": "MyPetition.org",
      "label": "MyPetition.org",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Plateforme en ligne hébergeant la pétition de La France Insoumise."
    },
    {
      "id": "news.google.com",
      "label": "news.google.com",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Agrégateur d'actualités ayant relayé le sujet."
    },
    {
      "id": "Ouest-France",
      "label": "Ouest-France",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Média national ayant interviewé la direction de Google France."
    },
    {
      "id": "Risque d'incendie",
      "label": "Risque\nd'incendie",
      "group": "Points de vigilance / griefs",
      "size": 15,
      "detail": "Inquiétude formulée aux Pennes-Mirabeau face au dégagement thermique près d'une pinède."
    },
    {
      "id": "Saucissonnage de projet",
      "label": "Saucissonnage",
      "group": "Points de vigilance / griefs",
      "size": 15,
      "detail": "Contournement suspecté de la réglementation environnementale (cas de Wissous)."
    },
    {
      "id": "Pierre Allorant",
      "label": "P. Allorant\n(Ceser)",
      "group": "Concertation / institutions publiques",
      "size": 15,
      "detail": "Président du Ceser Centre-Val de Loire, prévoit un rapport consultatif sur le projet après saisine citoyenne."
    },
    {
      "id": "Ceser",
      "label": "Ceser",
      "group": "Concertation / institutions publiques",
      "size": 20,
      "detail": "Conseil économique, social et environnemental régional, saisi par les citoyens pour évaluer l'impact du data center."
    },
    {
      "id": "CGT Indre",
      "label": "CGT",
      "group": "Noyau d’opposition local",
      "size": 17,
      "detail": "Syndicat co-organisateur des manifestations et moteur de la saisine citoyenne au Ceser."
    },
    {
      "id": "Delphine Chambonneau",
      "label": "D. Chambonneau",
      "group": "Opposants / critiques nommément cités",
      "size": 12,
      "detail": "Élue d'opposition de Châteauroux ayant voté contre le raccordement électrique en conseil communautaire."
    },
    {
      "id": "Bruno Mascle",
      "label": "B. Mascle",
      "group": "Opposants / critiques nommément cités",
      "size": 12,
      "detail": "Élu d'opposition de Déols ayant voté contre le raccordement électrique en conseil communautaire."
    },
    {
      "id": "Anne Le Hénanff",
      "label": "A. Le Hénanff",
      "group": "Élus / acteurs favorables ou moteurs",
      "size": 17,
      "detail": "Ministre déléguée chargée de l'IA et du Numérique, soutient activement l'implantation au nom de la souveraineté."
    },
    {
      "id": "CTR de Châteauroux",
      "label": "CTR Châteauroux",
      "group": "Projet central",
      "size": 15,
      "detail": "Ancien centre de données régional en fermeture, illustrant la transition vers les méga-hubs très denses en énergie."
    },
    {
      "id": "Multinationales.org",
      "label": "Multinationales",
      "group": "Médias / sources cités",
      "size": 15,
      "detail": "Média indépendant publiant de longues enquêtes sur les stratégies d'influence des GAFAM."
    },
    {
      "id": "Lénéo",
      "label": "Lénéo",
      "group": "Porteurs / institutions du projet",
      "size": 17,
      "detail": "Start-up portant un projet de méthaniseur / centrale biomasse sur la ZAC d'Ozans."
    },
    {
      "id": "Fred Gagnot",
      "label": "F. Gagnot\n(Conf. Paysanne)",
      "group": "Organisations agricoles / foncières",
      "size": 15,
      "detail": "Porte-parole local s'inquiétant de la ponction sur les ressources en eau et en paille."
    },
    {
      "id": "Nicolas Pailloux",
      "label": "N. Pailloux\n(Chambre Agri)",
      "group": "Organisations agricoles / foncières",
      "size": 15,
      "detail": "Président de la chambre d'agriculture, attentif aux équilibres du marché de la biomasse."
    },
    {
      "id": "Alterric",
      "label": "Alterric",
      "group": "Porte-parole / entreprises associées",
      "size": 15,
      "detail": "Développeur éolien utilisant le data center pour justifier de nouveaux parcs."
    },
    {
      "id": "Philippe Latombe",
      "label": "P. Latombe",
      "group": "Élus / acteurs institutionnels",
      "size": 18,
      "detail": "Député appelant à un moratoire sur les implantations GAFAM et alertant sur le kill switch."
    },
    {
      "id": "Arcep",
      "label": "Arcep",
      "group": "Élus / acteurs institutionnels",
      "size": 16,
      "detail": "Autorité alertant sur l'explosion de l'empreinte environnementale du numérique."
    },
    {
      "id": "Guillaume Allart",
      "label": "G. Allart\n(Shift Project)",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Économiste alertant sur les conflits d'usage liés à l'eau et à la biomasse."
    },
    {
      "id": "Anti",
      "label": "Anti\n(Le Nuage)",
      "group": "Opposants / critiques nommément cités",
      "size": 15,
      "detail": "Militant dénonçant une stratégie de prédation des Big Tech sur les territoires précarisés."
    },
    {
      "id": "Mehdi Nezzar",
      "label": "Mehdi Nezzar",
      "group": "Élus / acteurs institutionnels",
      "size": 15,
      "detail": "Maire du Bourget ayant invalidé un permis de construire de data center."
    },
    {
      "id": "Nicolas Celnik",
      "label": "N. Celnik",
      "group": "Médias / sources cités",
      "size": 14,
      "detail": "Journaliste comparant les luttes contre les data centers à celles de Sainte-Soline."
    }
  ],
  "links": [
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "ZAC d’Ozans",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Data center miroir du Pêchereau",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Ozans dire non",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "PCF de l’Indre",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Les Écologistes",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Confédération paysanne",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Indre Nature / FNE locale",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Union de la gauche citoyenne",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "LFI",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Jérémie Godet",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Dominique Boué",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Francis Martinet",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Stéphanie Grelet",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Raphaël Tillie",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Cyrielle Chatelain",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Jean Delavergne",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Éric Domenge-Abeau",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Emmanuel de Saint Pol",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Militant écologiste anonyme",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Gil Avérous",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "François Bonneau",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Marc Descouraux",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Vincent Millan",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Régis Blanchet",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Thibault Lanxade",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Nicolas Bouzou",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Chambre d’agriculture",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Google",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Google France",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Tricolore Computing",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Violet Computing",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "RTE",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Enedis",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Decknet",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Soprema Steel",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "CNDP",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Marc Papinutti",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Jean-Louis Laure",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Dreal",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Ademe",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "État",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Préfecture de l’Indre",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Ophélie Coelho",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Loup Cellard",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Maxime Colin",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Cécile Diguet",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Guillaume Gourgues",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "La Quadrature du Net",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Le Nuage était sous nos pieds",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Hiatus",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Opacité / secret des affaires",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Artificialisation des sols",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Îlot de chaleur",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "PFAS / fluides frigorifiques",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Consommation d’eau",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Consommation électrique",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Mirage de l’emploi",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Souveraineté numérique",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Projet miroir",
      "kind": "rôle / position"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "ZAC d’Ozans",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Data center miroir du Pêchereau",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "PCF de l’Indre",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "Les Écologistes",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "Confédération paysanne",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "Indre Nature / FNE locale",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "Union de la gauche citoyenne",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "LFI",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Francis Martinet",
      "target": "Ozans dire non",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Stéphanie Grelet",
      "target": "PCF de l’Indre",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Dominique Boué",
      "target": "PCF de l’Indre",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Raphaël Tillie",
      "target": "Ozans dire non",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Jérémie Godet",
      "target": "Les Écologistes",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Jean Delavergne",
      "target": "Les Écologistes",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Éric Domenge-Abeau",
      "target": "Union de la gauche citoyenne",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Gil Avérous",
      "target": "Chambre d’agriculture",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Gil Avérous",
      "target": "ZAC d’Ozans",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Gil Avérous",
      "target": "Google",
      "kind": "rattachement / interaction"
    },
    {
      "source": "François Bonneau",
      "target": "État",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Vincent Millan",
      "target": "Data center miroir du Pêchereau",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Google",
      "target": "Google France",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Google",
      "target": "Tricolore Computing",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Google",
      "target": "Violet Computing",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Google",
      "target": "Opacité / secret des affaires",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Google",
      "target": "Souveraineté numérique",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Tricolore Computing",
      "target": "ZAC d’Ozans",
      "kind": "rattachement / interaction"
    },
    {
      "source": "CNDP",
      "target": "Marc Papinutti",
      "kind": "rattachement / interaction"
    },
    {
      "source": "CNDP",
      "target": "Jean-Louis Laure",
      "kind": "rattachement / interaction"
    },
    {
      "source": "CNDP",
      "target": "Dreal",
      "kind": "rattachement / interaction"
    },
    {
      "source": "CNDP",
      "target": "Ademe",
      "kind": "rattachement / interaction"
    },
    {
      "source": "CNDP",
      "target": "Google France",
      "kind": "rattachement / interaction"
    },
    {
      "source": "CNDP",
      "target": "RTE",
      "kind": "rattachement / interaction"
    },
    {
      "source": "RTE",
      "target": "Consommation électrique",
      "kind": "rattachement / interaction"
    },
    {
      "source": "RTE",
      "target": "Enedis",
      "kind": "rattachement / interaction"
    },
    {
      "source": "État",
      "target": "Préfecture de l’Indre",
      "kind": "rattachement / interaction"
    },
    {
      "source": "État",
      "target": "Thibault Lanxade",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Nicolas Bouzou",
      "target": "Thibault Lanxade",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ophélie Coelho",
      "target": "Opacité / secret des affaires",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Loup Cellard",
      "target": "Consommation d’eau",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Loup Cellard",
      "target": "Îlot de chaleur",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Maxime Colin",
      "target": "Opacité / secret des affaires",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Cécile Diguet",
      "target": "Opacité / secret des affaires",
      "kind": "rattachement / interaction"
    },
    {
      "source": "La Quadrature du Net",
      "target": "Souveraineté numérique",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Le Nuage était sous nos pieds",
      "target": "Mirage de l’emploi",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Hiatus",
      "target": "La Quadrature du Net",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Decknet",
      "target": "Régis Blanchet",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Decknet",
      "target": "Maîtres d’ouvrage / industriels",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "La Nouvelle République",
      "kind": "source / couverture"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Basta!",
      "kind": "source / couverture"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "France 3 Centre-Val de Loire",
      "kind": "source / couverture"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Le Monde",
      "kind": "source / couverture"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "ICI Berry",
      "kind": "source / couverture"
    },
    {
      "source": "Sébastien Missoffe",
      "target": "Google France",
      "kind": "représentation"
    },
    {
      "source": "Ouest-France",
      "target": "Sébastien Missoffe",
      "kind": "interview"
    },
    {
      "source": "PS de l’Indre",
      "target": "Data center Google — Ozans / Étrechet",
      "kind": "opposition"
    },
    {
      "source": "Ozans dire non",
      "target": "Maryvonne Le Brignonen",
      "kind": "pétition ciblée"
    },
    {
      "source": "LFI",
      "target": "MyPetition.org",
      "kind": "utilisation de plateforme"
    },
    {
      "source": "Gouvernement français",
      "target": "État",
      "kind": "incarnation"
    },
    {
      "source": "Telehouse",
      "target": "Cézanne",
      "kind": "porteur"
    },
    {
      "source": "Philippe Chabeaudy",
      "target": "Cézanne",
      "kind": "opposition"
    },
    {
      "source": "EDF",
      "target": "France Datacenter",
      "kind": "soutien indirect"
    },
    {
      "source": "Data for Good",
      "target": "Lou Welgryn",
      "kind": "représentation"
    },
    {
      "source": "France Datacenter",
      "target": "Michaël Reffay",
      "kind": "représentation"
    },
    {
      "source": "CNDP",
      "target": "Marie-Claire Eustache",
      "kind": "mandat"
    },
    {
      "source": "CNDP",
      "target": "Romane Harmel-Samarcq",
      "kind": "mandat"
    },
    {
      "source": "Cézanne",
      "target": "Risque d'incendie",
      "kind": "critique associée"
    },
    {
      "source": "Associations de Wissous",
      "target": "Saucissonnage de projet",
      "kind": "critique associée"
    },
    {
      "source": "Pierre Allorant",
      "target": "Ceser",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Ozans dire non",
      "target": "Ceser",
      "kind": "saisine citoyenne"
    },
    {
      "source": "CGT Indre",
      "target": "Ozans dire non",
      "kind": "rattachement / interaction"
    },
    {
      "source": "Delphine Chambonneau",
      "target": "Consommation électrique",
      "kind": "opposition"
    },
    {
      "source": "Bruno Mascle",
      "target": "Consommation électrique",
      "kind": "opposition"
    },
    {
      "source": "Éric Domenge-Abeau",
      "target": "Consommation électrique",
      "kind": "opposition"
    },
    {
      "source": "Anne Le Hénanff",
      "target": "Souveraineté numérique",
      "kind": "défense / promotion"
    },
    {
      "source": "CTR de Châteauroux",
      "target": "Data center Google — Ozans / Étrechet",
      "kind": "contraste / remplacement"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Multinationales.org",
      "kind": "source / couverture"
    },
    {
      "source": "ZAC d’Ozans",
      "target": "Lénéo",
      "kind": "implantation concurrente"
    },
    {
      "source": "Lénéo",
      "target": "Fred Gagnot",
      "kind": "opposition ressource"
    },
    {
      "source": "Lénéo",
      "target": "Nicolas Pailloux",
      "kind": "vigilance marché"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Alterric",
      "kind": "alibi énergétique"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Philippe Latombe",
      "kind": "cible moratoire"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Arcep",
      "kind": "évaluation macro"
    },
    {
      "source": "Lénéo",
      "target": "Guillaume Allart",
      "kind": "analyse critique"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Anti",
      "kind": "opposition nationale"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Mehdi Nezzar",
      "kind": "inspiration lutte"
    },
    {
      "source": "Data center Google — Ozans / Étrechet",
      "target": "Nicolas Celnik",
      "kind": "couverture médiatique"
    }
  ]
};
const actorsByName = new Map(d.actors.map(a => [a.name, a]));
const graphActors = new Map(graphData.nodes.map(n => [n.id, actorsByName.get(n.id)]));
const repositoryRelations = d.relations;
d.actors = graphData.nodes.map(n => {
  const actor = graphActors.get(n.id);
  if (!actor) throw new Error(`Acteur absent du référentiel : ${n.id}`);
  return {...actor, short_name: n.label.replace(/\s+/g, ' ').trim(), description: n.detail};
});
d.actorById = new Map(d.actors.map(a => [a.id, a]));
d.relations = graphData.links.filter(link => graphActors.has(link.source) && graphActors.has(link.target)).map((link, index) => {
  const source_id = graphActors.get(link.source)?.id;
  const target_id = graphActors.get(link.target)?.id;
  if (!source_id || !target_id) throw new Error(`Lien sans acteur : ${index}`);
  const documented = repositoryRelations.find(r =>
    r.source_id === source_id && r.target_id === target_id && r.summary === link.kind);
  return {
    id: `network_relation_${index}`, source_id, target_id,
    type: link.kind, summary: link.kind,
    certainty: documented?.certainty || '', evidence_ids: documented?.evidence_ids || []
  };
});
// Palette de Fouju appliquée uniquement à la vue réseau.
const foujuColors = {project:'#0f172a',opposants:'#ef4444','elus-opp':'#8b5cf6','elus-fav':'#2563eb',orgs:'#10b981',porteurs:'#312e81'};
for (const [key, color] of Object.entries(foujuColors)) {
  if (d.taxonomy.categories[key]) d.taxonomy.categories[key].color = color;
}

let w=innerWidth,h=innerHeight,zoom=1,px=0,py=0,panning=false,startX=0,startY=0,selected=null;
svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
const g=document.createElementNS(ns,'g'),lg=document.createElementNS(ns,'g'),ng=document.createElementNS(ns,'g');g.append(lg,ng);svg.append(g);
const active=new Set(Object.keys(d.taxonomy.categories).filter(x=>x!=='all'));
const degree=id=>d.relations.filter(r=>r.source_id===id||r.target_id===id).length;
const nodes=d.actors.map(a=>({...a,size:a.id===d.meta.id?48:Math.min(28,18+degree(a.id)*1.15)}));
const byId=new Map(nodes.map(n=>[n.id,n]));
const links=d.relations.map(r=>({...r,source:byId.get(r.source_id),target:byId.get(r.target_id)})).filter(r=>r.source&&r.target);
function init(){const groups={};nodes.forEach(n=>(groups[n.categories[0]]??=[]).push(n));const entries=Object.entries(groups);entries.forEach(([key,arr],gi)=>arr.forEach((n,i)=>{if(n.id===d.meta.id){n.x=w*.56;n.y=h*.5;n.fixed=true;return}const angle=gi*(Math.PI*2/Math.max(entries.length,1))+i*(Math.PI*2/Math.max(arr.length,1));const ring=235+gi*88;n.x=w*.56+Math.cos(angle)*ring;n.y=h*.5+Math.sin(angle)*ring}))}init();
const le=links.map(l=>{const p=document.createElementNS(ns,'path');p.classList.add('link');p.dataset.source=l.source.id;p.dataset.target=l.target.id;p.addEventListener('click',e=>{e.stopPropagation();selected={type:'relation',value:l};showRelation(l);highlightRelation(l)});p.addEventListener('mouseenter',e=>{if(!selected)highlightRelation(l);tip.innerHTML=`<strong>${esc(l.source.name)} → ${esc(l.target.name)}</strong><small>${esc(d.taxonomy.relation_types[l.type]?.label||l.type)}</small>`;showTip(e)});p.addEventListener('mousemove',moveTip);p.addEventListener('mouseleave',()=>{hideTip();if(!selected)clearHighlight()});lg.append(p);return p});
const ne=nodes.map(n=>{const el=document.createElementNS(ns,'g');el.classList.add('node');el.dataset.id=n.id;const hit=document.createElementNS(ns,'circle');hit.setAttribute('r',n.size+12);hit.setAttribute('fill','transparent');const c=document.createElementNS(ns,'circle');c.setAttribute('r',n.size);c.setAttribute('fill',d.taxonomy.categories[n.categories[0]]?.color||'#64748b');const t=document.createElementNS(ns,'text');t.setAttribute('y',n.size+20);const words=n.short_name.split(' ');const lines=n.short_name.length>20&&words.length>1?[words.slice(0,Math.ceil(words.length/2)).join(' '),words.slice(Math.ceil(words.length/2)).join(' ')]:[n.short_name];lines.forEach((line,i)=>{const sp=document.createElementNS(ns,'tspan');sp.setAttribute('x','0');sp.setAttribute('dy',i===0?'0':'15');sp.textContent=line.length>27?line.slice(0,25)+'…':line;t.append(sp)});el.append(hit,c,t);el.addEventListener('click',e=>{e.stopPropagation();selected={type:'actor',value:n};showActor(n);highlightNode(n.id)});el.addEventListener('mouseenter',e=>{if(!selected)highlightNode(n.id);const claim=actorClaim(d,n.id);tip.innerHTML=`<strong>${esc(n.name)}</strong><small>${esc(n.description)}${claim?`<br>${esc(d.taxonomy.stances[claim.value]?.label||claim.value)}`:''}</small>`;showTip(e)});el.addEventListener('mousemove',moveTip);el.addEventListener('mouseleave',()=>{hideTip();if(!selected)clearHighlight()});drag(el,n);ng.append(el);return el});
function tick(){for(let k=0;k<2;k++){links.forEach(l=>{const dx=l.target.x-l.source.x,dy=l.target.y-l.source.y,dist=Math.hypot(dx,dy)||1,desired=l.source.id===d.meta.id||l.target.id===d.meta.id?205:165,f=(dist-desired)*.005;if(!l.source.fixed){l.source.x+=dx/dist*f;l.source.y+=dy/dist*f}if(!l.target.fixed){l.target.x-=dx/dist*f;l.target.y-=dy/dist*f}});for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],dx=b.x-a.x,dy=b.y-a.y,dist=Math.hypot(dx,dy)||1,min=a.size+b.size+58;if(dist<min){const f=(min-dist)/dist*.032;if(!a.fixed){a.x-=dx*f;a.y-=dy*f}if(!b.fixed){b.x+=dx*f;b.y+=dy*f}}}nodes.forEach(n=>{if(!n.fixed){n.x+=(w*.56-n.x)*.00045;n.y+=(h*.5-n.y)*.00045}})}le.forEach((p,i)=>{const l=links[i],dr=Math.max(100,Math.hypot(l.target.x-l.source.x,l.target.y-l.source.y)*1.7);p.setAttribute('d',`M${l.source.x},${l.source.y} A${dr},${dr} 0 0,1 ${l.target.x},${l.target.y}`)});ne.forEach((e,i)=>e.setAttribute('transform',`translate(${nodes[i].x},${nodes[i].y})`));requestAnimationFrame(tick)}tick();
function connected(id){const set=new Set([id]);links.forEach(l=>{if(l.source.id===id)set.add(l.target.id);if(l.target.id===id)set.add(l.source.id)});return set}
function highlightNode(id){const keep=connected(id);ne.forEach(el=>{el.classList.toggle('active',el.dataset.id===id);el.classList.toggle('dimmed',!keep.has(el.dataset.id))});le.forEach((el,i)=>{const on=links[i].source.id===id||links[i].target.id===id;el.classList.toggle('active',on);el.classList.toggle('dimmed',!on)})}
function highlightRelation(l){ne.forEach(el=>{const on=el.dataset.id===l.source.id||el.dataset.id===l.target.id;el.classList.toggle('active',on);el.classList.toggle('dimmed',!on)});le.forEach((el,i)=>{const on=links[i]===l;el.classList.toggle('active',on);el.classList.toggle('dimmed',!on)})}
function clearHighlight(){ne.forEach(el=>el.classList.remove('active','dimmed'));le.forEach(el=>el.classList.remove('active','dimmed'))}
function showActor(a){const c=actorClaim(d,a.id),rels=d.relations.filter(r=>r.source_id===a.id||r.target_id===a.id);details.innerHTML=`<h2>${esc(a.name)}</h2><p>${esc(a.description)}</p>${c?`<h3>Position</h3><p>${esc(c.summary)}</p><p><b>Certitude :</b> ${esc(d.taxonomy.certainty_levels[c.certainty]?.label)}</p><h3>Preuves</h3>${evidenceHtml(d,c.evidence_ids)}`:''}<h3>Relations (${rels.length})</h3>${rels.map(r=>{const o=d.actorById.get(r.source_id===a.id?r.target_id:r.source_id);return `<div class="relationBox"><b>${esc(o?.name)}</b><br>${esc(d.taxonomy.relation_types[r.type]?.label||r.type)}<p>${esc(r.summary)}</p><small>${r.evidence_ids.length} preuve(s)</small></div>`}).join('')}`;panel.classList.add('active')}
function showRelation(r){details.innerHTML=`<h2>Justification du lien</h2><p><b>${esc(r.source.name)}</b> → <b>${esc(r.target.name)}</b></p><p><b>${esc(d.taxonomy.relation_types[r.type]?.label||r.type)}</b></p><p>${esc(r.summary)}</p><p>Certitude : ${esc(d.taxonomy.certainty_levels[r.certainty]?.label||r.certainty||'Non qualifiée')}</p><h3>Preuves</h3>${evidenceHtml(d,r.evidence_ids)}`;panel.classList.add('active')}
function renderFilters(){filters.innerHTML=[...active].map(k=>`<label class="check"><input type="checkbox" checked value="${k}"><span style="color:${d.taxonomy.categories[k].color}">●</span><span>${esc(d.taxonomy.categories[k].label)}</span></label>`).join('')}
function apply(){const q=norm(search.value);let visible=0;ne.forEach((el,i)=>{const n=nodes[i],c=actorClaim(d,n.id),ok=active.has(n.categories[0])&&(!q||norm([n.name,n.description,c?.summary].join(' ')).includes(q));el.classList.toggle('hidden',!ok);if(ok)visible++});le.forEach((el,i)=>el.classList.toggle('hidden',ne[nodes.indexOf(links[i].source)].classList.contains('hidden')||ne[nodes.indexOf(links[i].target)].classList.contains('hidden')));count.textContent=`${visible} nœuds affichés sur ${nodes.length}`}
function showTip(e){tip.style.display='block';moveTip(e)}function moveTip(e){tip.style.left=Math.min(innerWidth-350,e.clientX+14)+'px';tip.style.top=Math.min(innerHeight-90,e.clientY+14)+'px'}function hideTip(){tip.style.display='none'}
filters.onchange=e=>{e.target.checked?active.add(e.target.value):active.delete(e.target.value);apply()};search.oninput=apply;document.getElementById('close').addEventListener('click', () => {
  document.getElementById('panel').classList.remove('active');
  selected = null;
  clearHighlight();
});center.onclick=()=>{zoom=1;px=py=0;g.setAttribute('transform','')};
function drag(el,n){let down=false,moved=false,ox=0,oy=0;el.onpointerdown=e=>{down=true;moved=false;n.fixed=true;const pt=toGraph(e);ox=n.x-pt.x;oy=n.y-pt.y;el.setPointerCapture(e.pointerId);e.stopPropagation()};el.onpointermove=e=>{if(down){moved=true;const pt=toGraph(e);n.x=pt.x+ox;n.y=pt.y+oy}};el.onpointerup=e=>{down=false;if(n.id!==d.meta.id)n.fixed=false;el.releasePointerCapture(e.pointerId)}}
function toGraph(e){const r=svg.getBoundingClientRect();return{x:(e.clientX-r.left-px)/zoom,y:(e.clientY-r.top-py)/zoom}}
svg.addEventListener('wheel',e=>{e.preventDefault();const old=zoom;zoom=Math.max(.3,Math.min(3,zoom*(e.deltaY<0?1.09:.91)));const rect=svg.getBoundingClientRect(),mx=e.clientX-rect.left,my=e.clientY-rect.top;px=mx-(mx-px)*(zoom/old);py=my-(my-py)*(zoom/old);g.setAttribute('transform',`translate(${px},${py}) scale(${zoom})`)},{passive:false});
svg.addEventListener('pointerdown',e=>{if(e.target===svg){panning=true;startX=e.clientX-px;startY=e.clientY-py;svg.style.cursor='grabbing'}});window.addEventListener('pointermove',e=>{if(panning){px=e.clientX-startX;py=e.clientY-startY;g.setAttribute('transform',`translate(${px},${py}) scale(${zoom})`)}});window.addEventListener('pointerup',()=>{panning=false;svg.style.cursor='grab'});svg.addEventListener('click',e=>{if(e.target===svg){selected=null;panel.classList.remove('active');clearHighlight()}});window.addEventListener('resize',()=>{w=innerWidth;h=innerHeight;svg.setAttribute('viewBox',`0 0 ${w} ${h}`)});
renderFilters();apply();
