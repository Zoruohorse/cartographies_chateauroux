// -----> DONNÉES INTÉGRÉES <-----
const graphData = {
  "nodes": [
    {"id": "Data center Google — Ozans / Étrechet", "label": "Data center\nGoogle\nOzans\nÉtrechet", "group": "Projet central", "size": 30, "detail": "Projet de campus de centres de données Google près de Châteauroux : 195 hectares, huit à dix bâtiments, raccordements électriques 225 kV puis 400 kV."}, 
    {"id": "ZAC d’Ozans", "label": "ZAC d’Ozans", "group": "Projet central", "size": 22, "detail": "Zone d’activités située à Étrechet, aux portes de Châteauroux ; parcelle de 195 hectares visée par Google."}, 
    {"id": "Data center miroir du Pêchereau", "label": "Data center\nmiroir du Pêchereau", "group": "Projet central", "size": 22, "detail": "Second site potentiel au Pêchereau / aérodrome Argenton-Le Pêchereau, destiné à prendre le relais du site d’Ozans en cas de défaillance."}, 
    {"id": "Ozans dire non", "label": "Ozans dire non", "group": "Noyau d’opposition local", "size": 24, "detail": "Collectif créé fin avril 2026 contre le projet Google ; rassemble citoyens, organisations syndicales, politiques et environnementales."}, 
    {"id": "PCF de l’Indre", "label": "PCF de l’Indre", "group": "Noyau d’opposition local", "size": 19, "detail": "Fédération départementale du Parti communiste français ; membre du collectif Ozans dire non et très critique sur l’opacité du projet."}, 
    {"id": "Les Écologistes", "label": "Les Écologistes", "group": "Noyau d’opposition local", "size": 17, "detail": "Organisation à l’origine d’une réunion publique à Châteauroux pour peser dans la concertation préalable."}, 
    {"id": "Confédération paysanne", "label": "Confédération paysanne", "group": "Noyau d’opposition local", "size": 17, "detail": "Alerte sur l’absence de détails concernant les impacts agricoles et environnementaux."}, 
    {"id": "Indre Nature / FNE locale", "label": "Indre Nature\nFNE locale", "group": "Noyau d’opposition local", "size": 17, "detail": "Association environnementale locale citée parmi les acteurs que les garants de la CNDP doivent rencontrer."}, 
    {"id": "Union de la gauche citoyenne", "label": "Union de la gauche citoyenne", "group": "Noyau d’opposition local", "size": 17, "detail": "Formation locale critique, représentée par Éric Domenge-Abeau."}, 
    {"id": "LFI", "label": "LFI", "group": "Noyau d’opposition local", "size": 17, "detail": "Mentionnée dans le corpus via des critiques contre Google et son projet de data center à Ozans."}, 
    {"id": "Jérémie Godet", "label": "Jérémie Godet", "group": "Opposants / critiques nommément cités", "size": 24, "detail": "Vice-président écologiste de la Région Centre-Val de Loire, délégué au Climat ; porte la fronde avec Ozans dire non, critique l’artificialisation, les PFAS et l’îlot de chaleur."}, 
    {"id": "Dominique Boué", "label": "Dominique Boué", "group": "Opposants / critiques nommément cités", "size": 19, "detail": "Secrétaire départemental du PCF de l’Indre ; dénonce l’absence de concertation, l’opacité et les incertitudes sur le refroidissement."}, 
    {"id": "Francis Martinet", "label": "Francis Martinet", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "L’un des initiateurs du collectif Ozans dire non ; insiste sur l’information des citoyens et la faible transparence autour du projet."}, 
    {"id": "Stéphanie Grelet", "label": "Stéphanie Grelet", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Militante communiste ; compare le dossier Google à d’autres projets menés selon elle « en sous-marin »."}, 
    {"id": "Raphaël Tillie", "label": "Raphaël Tillie", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Membre du collectif ; interroge l’îlot de chaleur et défend l’enjeu de souveraineté alimentaire."}, 
    {"id": "Cyrielle Chatelain", "label": "Cyrielle Chatelain", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Présidente du groupe écologiste et social à l’Assemblée nationale ; alerte sur le mirage des créations d’emplois."}, 
    {"id": "Jean Delavergne", "label": "Jean Delavergne", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Co-secrétaire des Écologistes de l’Indre ; critique la gestion territoriale de Gil Avérous et la fuite en avant technocratique."}, 
    {"id": "Éric Domenge-Abeau", "label": "Éric Domenge-Abeau", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Tête de liste de l’Union de la gauche citoyenne à Châteauroux ; ironise sur la succession d’annonces non abouties autour d’Ozans."}, 
    {"id": "Emmanuel de Saint Pol", "label": "Emmanuel de Saint Pol", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Agriculteur exproprié en 2012 ; exprime de la lassitude et un scepticisme face aux projets successifs sur la zone."}, 
    {"id": "Militant écologiste anonyme", "label": "Militant écologiste anonyme", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Évoque la faiblesse du rapport de force local, la difficulté à mobiliser et le manque d’informations d’Enedis/RTE."}, 
    {"id": "Gil Avérous", "label": "Gil Avérous", "group": "Élus / acteurs favorables ou moteurs", "size": 24, "detail": "Président LR de Châteauroux Métropole et maire de Châteauroux ; principal soutien local du projet, qu’il présente comme une chance historique."}, 
    {"id": "François Bonneau", "label": "François Bonneau", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Président socialiste de la Région Centre-Val de Loire ; voit dans le projet une « super opportunité »."}, 
    {"id": "Marc Descouraux", "label": "Marc Descouraux", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Maire d’Étrechet ; renvoie vers l’agglomération et indique ne pas avoir d’information précise sur l’avancement du projet."}, 
    {"id": "Vincent Millan", "label": "Vincent Millan", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Maire d’Argenton-sur-Creuse et président de la communauté de communes Éguzon-Argenton-Vallée de la Creuse ; confirme l’existence d’un projet miroir au Pêchereau, encore très préliminaire."}, 
    {"id": "Régis Blanchet", "label": "Régis Blanchet", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Maire de Buzançais ; évoque avec prudence l’entreprise américaine, dans un contexte local de discrétion autour des projets de data centers."}, 
    {"id": "Thibault Lanxade", "label": "Thibault Lanxade", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Préfet de l’Indre ; présenté comme soutien d’une stratégie de redynamisation numérique et industrielle autour d’Indre 2030."}, 
    {"id": "Nicolas Bouzou", "label": "Nicolas Bouzou", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Économiste, fondateur d’Asterès ; missionné pour imaginer le plan Indre 2030, incluant data centers, gigafactories et robotaxis."}, 
    {"id": "Chambre d’agriculture", "label": "Chambre d’agriculture", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Acteur mobilisé dans les calculs de Gil Avérous sur la valorisation de chaleur pour les serres et la déshydratation de luzerne."}, 
    {"id": "Google", "label": "Google", "group": "Maîtres d’ouvrage / industriels", "size": 24, "detail": "Porteur industriel du projet ; envisage son premier data center exploité directement en France."}, 
    {"id": "Google France", "label": "Google France", "group": "Maîtres d’ouvrage / industriels", "size": 19, "detail": "Maître d’ouvrage cité dans la saisine CNDP avec Tricolore Computing, Violet Computing et RTE."}, 
    {"id": "Tricolore Computing", "label": "Tricolore Computing", "group": "Maîtres d’ouvrage / industriels", "size": 19, "detail": "Filiale liée à Google, mentionnée pour l’acquisition potentielle du terrain et comme maître d’ouvrage."}, 
    {"id": "Violet Computing", "label": "Violet Computing", "group": "Maîtres d’ouvrage / industriels", "size": 15, "detail": "Filiale liée à Google et citée comme maître d’ouvrage dans la concertation CNDP."}, 
    {"id": "RTE", "label": "RTE", "group": "Maîtres d’ouvrage / industriels", "size": 24, "detail": "Maître d’ouvrage du raccordement électrique ; raccordement 225 kV puis nouvelles lignes aériennes 400 kV."}, 
    {"id": "Enedis", "label": "Enedis", "group": "Maîtres d’ouvrage / industriels", "size": 15, "detail": "Mentionné par un militant écologiste comme acteur sollicité sans obtenir d’informations précises."}, 
    {"id": "Decknet", "label": "Decknet", "group": "Maîtres d’ouvrage / industriels", "size": 15, "detail": "Porteur d’un autre projet de data center plus modeste à Buzançais."}, 
    {"id": "Soprema Steel", "label": "Soprema Steel", "group": "Maîtres d’ouvrage / industriels", "size": 15, "detail": "Industriel présent sur la ZAC d’Ozans, l’un des rares bâtiments existants sur la zone."}, 
    {"id": "CNDP", "label": "CNDP", "group": "Concertation / institutions publiques", "size": 24, "detail": "Commission nationale du débat public ; lance la concertation préalable sur le projet Ozans-Châteauroux."}, 
    {"id": "Marc Papinutti", "label": "Marc Papinutti", "group": "Concertation / institutions publiques", "size": 15, "detail": "Président de la CNDP ; explique que la présence de RTE fait entrer le projet dans le périmètre de la CNDP."}, 
    {"id": "Jean-Louis Laure", "label": "Jean-Louis Laure", "group": "Concertation / institutions publiques", "size": 19, "detail": "Garant de la concertation CNDP ; se dit vigilant face au sentiment d’urgence et au secret des affaires."}, 
    {"id": "Dreal", "label": "Dreal", "group": "Concertation / institutions publiques", "size": 15, "detail": "Autorité environnementale citée parmi les experts que les garants doivent rencontrer."}, 
    {"id": "Ademe", "label": "Ademe", "group": "Concertation / institutions publiques", "size": 15, "detail": "Cité comme acteur expert ; associée à des travaux sur les data centers et leurs impacts urbains/environnementaux."}, 
    {"id": "État", "label": "État", "group": "Concertation / institutions publiques", "size": 19, "detail": "Inscrit le site parmi les projets industriels stratégiques nationaux et soutient la politique d’implantation de data centers."}, 
    {"id": "Préfecture de l’Indre", "label": "Préfecture de l’Indre", "group": "Concertation / institutions publiques", "size": 15, "detail": "Acteur local impliqué dans la stratégie Indre 2030 et les dynamiques de redynamisation industrielle."}, 
    {"id": "Ophélie Coelho", "label": "Ophélie Coelho", "group": "Réseau critique national / experts", "size": 15, "detail": "Chercheuse associée à l’IRIS ; critique la diplomatie industrielle de terrain, la faiblesse des concertations et l’opacité des Big Tech."}, 
    {"id": "Loup Cellard", "label": "Loup Cellard", "group": "Réseau critique national / experts", "size": 15, "detail": "Sociologue spécialiste de l’impact écologique des datacenters ; interroge la valorisation de la chaleur fatale pour une commune de la taille de Diors."}, 
    {"id": "Maxime Colin", "label": "Maxime Colin", "group": "Réseau critique national / experts", "size": 15, "detail": "Juriste à France Nature Environnement ; critique la stratégie des GAFAM consistant à laisser les projets se développer discrètement."}, 
    {"id": "Cécile Diguet", "label": "Cécile Diguet", "group": "Réseau critique national / experts", "size": 15, "detail": "Urbaniste au Studio Dégel ; souligne que la culture du secret des GAFAM nuit à l’anticipation urbaine et économique."}, 
    {"id": "Guillaume Gourgues", "label": "Guillaume Gourgues", "group": "Réseau critique national / experts", "size": 15, "detail": "Politiste cité sur la faiblesse institutionnelle de la CNDP face aux projets industriels."}, 
    {"id": "La Quadrature du Net", "label": "La Quadrature du Net", "group": "Réseau critique national / experts", "size": 15, "detail": "Association critique du numérique ; exprime des craintes sur les évolutions législatives favorables aux data centers."}, 
    {"id": "Le Nuage était sous nos pieds", "label": "Le Nuage était sous nos pieds", "group": "Réseau critique national / experts", "size": 15, "detail": "Collectif critique des data centers ; cité sur l’intérêt social limité du projet et les créations d’emplois souvent sous-traitées."}, 
    {"id": "Hiatus", "label": "Hiatus", "group": "Réseau critique national / experts", "size": 15, "detail": "Collectif critique du numérique cité dans le débat national sur les grands entrepôts à serveurs."}, 
    {"id": "Opacité / secret des affaires", "label": "Opacité\nsecret des affaires", "group": "Points de vigilance / griefs", "size": 17, "detail": "Grief central : manque d’informations, culture du secret de Google et données techniques jugées insuffisantes."}, 
    {"id": "Artificialisation des sols", "label": "Artificialisation des sols", "group": "Points de vigilance / griefs", "size": 17, "detail": "Critique liée aux 195 hectares du projet et à l’imperméabilisation d’un vaste foncier."}, 
    {"id": "Îlot de chaleur", "label": "Îlot de chaleur", "group": "Points de vigilance / griefs", "size": 17, "detail": "Crainte d’un effet thermique massif près de la forêt de Châteauroux et des terres agricoles."}, 
    {"id": "PFAS / fluides frigorifiques", "label": "PFAS\nfluides frigorifiques", "group": "Points de vigilance / griefs", "size": 17, "detail": "Inquiétude sur les méthodes de refroidissement par air et les liquides frigorifiques potentiellement polluants."}, 
    {"id": "Consommation d’eau", "label": "Consommation d’eau", "group": "Points de vigilance / griefs", "size": 17, "detail": "Point sensible dans un territoire ayant connu du stress hydrique."}, 
    {"id": "Consommation électrique", "label": "Consommation électrique", "group": "Points de vigilance / griefs", "size": 17, "detail": "Nécessité de lignes THT 225 kV puis 400 kV ; capacité actuelle jugée insuffisante pour un très grand projet."}, 
    {"id": "Mirage de l’emploi", "label": "Mirage de l’emploi", "group": "Points de vigilance / griefs", "size": 17, "detail": "Critique selon laquelle les emplois promis seraient limités par rapport à la surface mobilisée."}, 
    {"id": "Souveraineté numérique", "label": "Souveraineté numérique", "group": "Points de vigilance / griefs", "size": 17, "detail": "Argument contesté en raison du Cloud Act et du contrôle des technologies par une multinationale américaine."}, 
    {"id": "Projet miroir", "label": "Projet miroir", "group": "Points de vigilance / griefs", "size": 17, "detail": "Risque d’extension territoriale avec un second site au Pêchereau."}, 
    {"id": "La Nouvelle République", "label": "La Nouvelle République", "group": "Médias / sources cités", "size": 15, "detail": "Source locale centrale sur le projet Google, la concertation, le collectif Ozans dire non et les réactions politiques."}, 
    {"id": "Basta!", "label": "Basta!", "group": "Médias / sources cités", "size": 15, "detail": "Média ayant publié l’enquête « Google avance masqué » et analysé l’opacité territoriale du projet."}, 
    {"id": "France 3 Centre-Val de Loire", "label": "France 3 Centre-Val\nde Loire", "group": "Médias / sources cités", "size": 15, "detail": "Média ayant traité la division locale autour du premier data center Google en France."}, 
    {"id": "Le Monde", "label": "Le Monde", "group": "Médias / sources cités", "size": 15, "detail": "Cité sur la confidentialité des informations écologiques des centres de données obtenue par les lobbys du secteur."}, 
    {"id": "ICI Berry", "label": "ICI Berry", "group": "Médias / sources cités", "size": 15, "detail": "Média cité au sujet du plan Indre 2030 et des positions de Thibault Lanxade."}, 
    {"id": "Lou Welgryn", "label": "Lou Welgryn", "group": "Experts / voix critiques", "size": 15, "detail": "Coprésidente de Data for Good, déplore la fuite en avant et le gigantisme des projets."},
    {"id": "Data for Good", "label": "Data for Good", "group": "Experts / voix critiques", "size": 17, "detail": "Association plaidant pour un numérique d'intérêt général au niveau national."},
    {"id": "Philippe Chabeaudy", "label": "Philippe\nChabeaudy", "group": "Experts / voix critiques", "size": 15, "detail": "Habitant des Pennes-Mirabeau, s'oppose au projet Cézanne en raison des risques d'incendie."},
    {"id": "Maxime Efoui-Hess", "label": "Maxime\nEfoui-Hess", "group": "Experts / voix critiques", "size": 15, "detail": "Membre du Shift Project, critique la priorisation de l'électricité pour l'intelligence artificielle."},
    {"id": "Associations de Wissous", "label": "Associations\nWissous", "group": "Experts / voix critiques", "size": 15, "detail": "Collectifs locaux luttant en justice contre un projet de data center en Essonne."},
    {"id": "PS de l’Indre", "label": "PS de l’Indre", "group": "Experts / voix critiques", "size": 19, "detail": "Parti redoutant de devenir une colonie numérique et pointant la faiblesse des emplois créés."},
    {"id": "Gouvernement français", "label": "Gouvernement\nfrançais", "group": "Élus / acteurs favorables ou moteurs", "size": 20, "detail": "Soutient les investissements massifs dans l'IA et l'implantation de giga data centers."},
    {"id": "Maryvonne Le Brignonen", "label": "Maryvonne\nLe Brignonen", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Préfète de l'Indre, destinataire institutionnelle de la pétition des opposants au projet Google."},
    {"id": "France Datacenter", "label": "France\nDatacenter", "group": "Porteurs industriels", "size": 17, "detail": "Association représentant la filière professionnelle des data centers en France."},
    {"id": "Michaël Reffay", "label": "Michaël Reffay", "group": "Porteurs industriels", "size": 15, "detail": "Délégué général de France Datacenter, défend l'intérêt économique des implantations."},
    {"id": "EDF", "label": "EDF", "group": "Énergie / raccordement / foncier", "size": 17, "detail": "Énergéticien identifié comme ayant besoin de ces projets comme relais de croissance."},
    {"id": "Telehouse", "label": "Telehouse", "group": "Porteurs industriels", "size": 17, "detail": "Opérateur japonais, porteur du projet de data center Cézanne."},
    {"id": "Cézanne", "label": "Cézanne", "group": "Projet central", "size": 20, "detail": "Projet de data center de 70 MW aux Pennes-Mirabeau."},
    {"id": "Marie-Claire Eustache", "label": "Marie-Claire\nEustache", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Garante de la CNDP pour la concertation préalable à Ozans."},
    {"id": "Romane Harmel-Samarcq", "label": "Romane\nHarmel-Samarcq", "group": "Élus / acteurs favorables ou moteurs", "size": 15, "detail": "Garante de la CNDP pour la concertation préalable à Ozans."},
    {"id": "Sébastien Missoffe", "label": "Sébastien\nMissoffe", "group": "Porteurs industriels", "size": 19, "detail": "Directeur général de Google France, confirme l'étude des options pour Châteauroux."},
    {"id": "MyPetition.org", "label": "MyPetition.org", "group": "Médias / sources cités", "size": 15, "detail": "Plateforme en ligne hébergeant la pétition de La France Insoumise."},
    {"id": "news.google.com", "label": "news.google.com", "group": "Médias / sources cités", "size": 15, "detail": "Agrégateur d'actualités ayant relayé le sujet."},
    {"id": "Ouest-France", "label": "Ouest-France", "group": "Médias / sources cités", "size": 15, "detail": "Média national ayant interviewé la direction de Google France."},
    {"id": "Risque d'incendie", "label": "Risque\nd'incendie", "group": "Points de vigilance / griefs", "size": 15, "detail": "Inquiétude formulée aux Pennes-Mirabeau face au dégagement thermique près d'une pinède."},
    {"id": "Saucissonnage de projet", "label": "Saucissonnage", "group": "Points de vigilance / griefs", "size": 15, "detail": "Contournement suspecté de la réglementation environnementale (cas de Wissous)."}, 
    {"id": "Pierre Allorant", "label": "P. Allorant\n(Ceser)", "group": "Concertation / institutions publiques", "size": 15, "detail": "Président du Ceser Centre-Val de Loire, prévoit un rapport consultatif sur le projet après saisine citoyenne."},
    {"id": "Ceser", "label": "Ceser", "group": "Concertation / institutions publiques", "size": 20, "detail": "Conseil économique, social et environnemental régional, saisi par les citoyens pour évaluer l'impact du data center."},
    {"id": "CGT Indre", "label": "CGT", "group": "Noyau d’opposition local", "size": 17, "detail": "Syndicat co-organisateur des manifestations et moteur de la saisine citoyenne au Ceser."},
    {"id": "Delphine Chambonneau", "label": "D. Chambonneau", "group": "Opposants / critiques nommément cités", "size": 12, "detail": "Élue d'opposition de Châteauroux ayant voté contre le raccordement électrique en conseil communautaire."},
    {"id": "Bruno Mascle", "label": "B. Mascle", "group": "Opposants / critiques nommément cités", "size": 12, "detail": "Élu d'opposition de Déols ayant voté contre le raccordement électrique en conseil communautaire."},
    {"id": "Anne Le Hénanff", "label": "A. Le Hénanff", "group": "Élus / acteurs favorables ou moteurs", "size": 17, "detail": "Ministre déléguée chargée de l'IA et du Numérique, soutient activement l'implantation au nom de la souveraineté."},
    {"id": "CTR de Châteauroux", "label": "CTR Châteauroux", "group": "Projet central", "size": 15, "detail": "Ancien centre de données régional en fermeture, illustrant la transition vers les méga-hubs très denses en énergie."},
    {"id": "Multinationales.org", "label": "Multinationales", "group": "Médias / sources cités", "size": 15, "detail": "Média indépendant publiant de longues enquêtes sur les stratégies d'influence des GAFAM."},
    {"id": "Lénéo", "label": "Lénéo", "group": "Porteurs / institutions du projet", "size": 17, "detail": "Start-up portant un projet de méthaniseur / centrale biomasse sur la ZAC d'Ozans."},
    {"id": "Fred Gagnot", "label": "F. Gagnot\n(Conf. Paysanne)", "group": "Organisations agricoles / foncières", "size": 15, "detail": "Porte-parole local s'inquiétant de la ponction sur les ressources en eau et en paille."},
    {"id": "Nicolas Pailloux", "label": "N. Pailloux\n(Chambre Agri)", "group": "Organisations agricoles / foncières", "size": 15, "detail": "Président de la chambre d'agriculture, attentif aux équilibres du marché de la biomasse."},
    {"id": "Alterric", "label": "Alterric", "group": "Porte-parole / entreprises associées", "size": 15, "detail": "Développeur éolien utilisant le data center pour justifier de nouveaux parcs."},
    {"id": "Philippe Latombe", "label": "P. Latombe", "group": "Élus / acteurs institutionnels", "size": 18, "detail": "Député appelant à un moratoire sur les implantations GAFAM et alertant sur le kill switch."},
    {"id": "Arcep", "label": "Arcep", "group": "Élus / acteurs institutionnels", "size": 16, "detail": "Autorité alertant sur l'explosion de l'empreinte environnementale du numérique."},
    {"id": "Guillaume Allart", "label": "G. Allart\n(Shift Project)", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Économiste alertant sur les conflits d'usage liés à l'eau et à la biomasse."},
    {"id": "Anti", "label": "Anti\n(Le Nuage)", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Militant dénonçant une stratégie de prédation des Big Tech sur les territoires précarisés."},
    {"id": "Mehdi Nezzar", "label": "Mehdi Nezzar", "group": "Élus / acteurs institutionnels", "size": 15, "detail": "Maire du Bourget ayant invalidé un permis de construire de data center."},
    {"id": "Nicolas Celnik", "label": "N. Celnik", "group": "Médias / sources cités", "size": 14, "detail": "Journaliste comparant les luttes contre les data centers à celles de Sainte-Soline."}

  ], 
  "links": [
    {"source": "Data center Google — Ozans / Étrechet", "target": "ZAC d’Ozans", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Data center miroir du Pêchereau", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Ozans dire non", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "PCF de l’Indre", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Les Écologistes", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Confédération paysanne", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Indre Nature / FNE locale", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Union de la gauche citoyenne", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "LFI", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Jérémie Godet", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Dominique Boué", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Francis Martinet", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Stéphanie Grelet", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Raphaël Tillie", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Cyrielle Chatelain", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Jean Delavergne", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Éric Domenge-Abeau", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Emmanuel de Saint Pol", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Militant écologiste anonyme", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Gil Avérous", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "François Bonneau", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Marc Descouraux", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Vincent Millan", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Régis Blanchet", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Thibault Lanxade", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Nicolas Bouzou", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Chambre d’agriculture", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Google", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Google France", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Tricolore Computing", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Violet Computing", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "RTE", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Enedis", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Decknet", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Soprema Steel", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "CNDP", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Marc Papinutti", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Jean-Louis Laure", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Dreal", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Ademe", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "État", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Préfecture de l’Indre", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Ophélie Coelho", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Loup Cellard", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Maxime Colin", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Cécile Diguet", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Guillaume Gourgues", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "La Quadrature du Net", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Le Nuage était sous nos pieds", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Hiatus", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Opacité / secret des affaires", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Artificialisation des sols", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Îlot de chaleur", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "PFAS / fluides frigorifiques", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Consommation d’eau", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Consommation électrique", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Mirage de l’emploi", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Souveraineté numérique", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Projet miroir", "kind": "rôle / position"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "ZAC d’Ozans", "kind": "rattachement / interaction"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Data center miroir du Pêchereau", "kind": "rattachement / interaction"}, 
    {"source": "Ozans dire non", "target": "PCF de l’Indre", "kind": "rattachement / interaction"}, 
    {"source": "Ozans dire non", "target": "Les Écologistes", "kind": "rattachement / interaction"}, 
    {"source": "Ozans dire non", "target": "Confédération paysanne", "kind": "rattachement / interaction"}, 
    {"source": "Ozans dire non", "target": "Indre Nature / FNE locale", "kind": "rattachement / interaction"}, 
    {"source": "Ozans dire non", "target": "Union de la gauche citoyenne", "kind": "rattachement / interaction"}, 
    {"source": "Ozans dire non", "target": "LFI", "kind": "rattachement / interaction"}, 
    {"source": "Francis Martinet", "target": "Ozans dire non", "kind": "rattachement / interaction"}, 
    {"source": "Stéphanie Grelet", "target": "PCF de l’Indre", "kind": "rattachement / interaction"}, 
    {"source": "Dominique Boué", "target": "PCF de l’Indre", "kind": "rattachement / interaction"}, 
    {"source": "Raphaël Tillie", "target": "Ozans dire non", "kind": "rattachement / interaction"}, 
    {"source": "Jérémie Godet", "target": "Les Écologistes", "kind": "rattachement / interaction"}, 
    {"source": "Jean Delavergne", "target": "Les Écologistes", "kind": "rattachement / interaction"}, 
    {"source": "Éric Domenge-Abeau", "target": "Union de la gauche citoyenne", "kind": "rattachement / interaction"}, 
    {"source": "Gil Avérous", "target": "Chambre d’agriculture", "kind": "rattachement / interaction"}, 
    {"source": "Gil Avérous", "target": "ZAC d’Ozans", "kind": "rattachement / interaction"}, 
    {"source": "Gil Avérous", "target": "Google", "kind": "rattachement / interaction"}, 
    {"source": "François Bonneau", "target": "État", "kind": "rattachement / interaction"}, 
    {"source": "Vincent Millan", "target": "Data center miroir du Pêchereau", "kind": "rattachement / interaction"}, 
    {"source": "Google", "target": "Google France", "kind": "rattachement / interaction"}, 
    {"source": "Google", "target": "Tricolore Computing", "kind": "rattachement / interaction"}, 
    {"source": "Google", "target": "Violet Computing", "kind": "rattachement / interaction"}, 
    {"source": "Google", "target": "Opacité / secret des affaires", "kind": "rattachement / interaction"}, 
    {"source": "Google", "target": "Souveraineté numérique", "kind": "rattachement / interaction"}, 
    {"source": "Tricolore Computing", "target": "ZAC d’Ozans", "kind": "rattachement / interaction"}, 
    {"source": "CNDP", "target": "Marc Papinutti", "kind": "rattachement / interaction"}, 
    {"source": "CNDP", "target": "Jean-Louis Laure", "kind": "rattachement / interaction"}, 
    {"source": "CNDP", "target": "Dreal", "kind": "rattachement / interaction"}, 
    {"source": "CNDP", "target": "Ademe", "kind": "rattachement / interaction"}, 
    {"source": "CNDP", "target": "Google France", "kind": "rattachement / interaction"}, 
    {"source": "CNDP", "target": "RTE", "kind": "rattachement / interaction"}, 
    {"source": "RTE", "target": "Consommation électrique", "kind": "rattachement / interaction"}, 
    {"source": "RTE", "target": "Enedis", "kind": "rattachement / interaction"}, 
    {"source": "État", "target": "Préfecture de l’Indre", "kind": "rattachement / interaction"}, 
    {"source": "État", "target": "Thibault Lanxade", "kind": "rattachement / interaction"}, 
    {"source": "Nicolas Bouzou", "target": "Thibault Lanxade", "kind": "rattachement / interaction"}, 
    {"source": "Ophélie Coelho", "target": "Opacité / secret des affaires", "kind": "rattachement / interaction"}, 
    {"source": "Loup Cellard", "target": "Consommation d’eau", "kind": "rattachement / interaction"}, 
    {"source": "Loup Cellard", "target": "Îlot de chaleur", "kind": "rattachement / interaction"}, 
    {"source": "Maxime Colin", "target": "Opacité / secret des affaires", "kind": "rattachement / interaction"}, 
    {"source": "Cécile Diguet", "target": "Opacité / secret des affaires", "kind": "rattachement / interaction"}, 
    {"source": "La Quadrature du Net", "target": "Souveraineté numérique", "kind": "rattachement / interaction"}, 
    {"source": "Le Nuage était sous nos pieds", "target": "Mirage de l’emploi", "kind": "rattachement / interaction"}, 
    {"source": "Hiatus", "target": "La Quadrature du Net", "kind": "rattachement / interaction"}, 
    {"source": "Decknet", "target": "Régis Blanchet", "kind": "rattachement / interaction"}, 
    {"source": "Decknet", "target": "Maîtres d’ouvrage / industriels", "kind": "rattachement / interaction"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "La Nouvelle République", "kind": "source / couverture"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Basta!", "kind": "source / couverture"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "France 3 Centre-Val de Loire", "kind": "source / couverture"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "Le Monde", "kind": "source / couverture"}, 
    {"source": "Data center Google — Ozans / Étrechet", "target": "ICI Berry", "kind": "source / couverture"}, 
    {"source": "Sébastien Missoffe", "target": "Google France", "kind": "représentation"},
    {"source": "Ouest-France", "target": "Sébastien Missoffe", "kind": "interview"},
    {"source": "PS de l’Indre", "target": "Data center Google — Ozans / Étrechet", "kind": "opposition"},
    {"source": "Ozans dire non", "target": "Maryvonne Le Brignonen", "kind": "pétition ciblée"},
    {"source": "LFI", "target": "MyPetition.org", "kind": "utilisation de plateforme"},
    {"source": "Gouvernement français", "target": "État", "kind": "incarnation"},
    {"source": "Telehouse", "target": "Cézanne", "kind": "porteur"},
    {"source": "Philippe Chabeaudy", "target": "Cézanne", "kind": "opposition"},
    {"source": "EDF", "target": "France Datacenter", "kind": "soutien indirect"},
    {"source": "Data for Good", "target": "Lou Welgryn", "kind": "représentation"},
    {"source": "France Datacenter", "target": "Michaël Reffay", "kind": "représentation"},
    {"source": "CNDP", "target": "Marie-Claire Eustache", "kind": "mandat"},
    {"source": "CNDP", "target": "Romane Harmel-Samarcq", "kind": "mandat"},
    {"source": "Cézanne", "target": "Risque d'incendie", "kind": "critique associée"},
    {"source": "Associations de Wissous", "target": "Saucissonnage de projet", "kind": "critique associée"}, 
    {"source": "Pierre Allorant", "target": "Ceser", "kind": "rattachement / interaction"},
    {"source": "Ozans dire non", "target": "Ceser", "kind": "saisine citoyenne"},
    {"source": "CGT Indre", "target": "Ozans dire non", "kind": "rattachement / interaction"},
    {"source": "Delphine Chambonneau", "target": "Consommation électrique", "kind": "opposition"},
    {"source": "Bruno Mascle", "target": "Consommation électrique", "kind": "opposition"},
    {"source": "Éric Domenge-Abeau", "target": "Consommation électrique", "kind": "opposition"},
    {"source": "Anne Le Hénanff", "target": "Souveraineté numérique", "kind": "défense / promotion"},
    {"source": "CTR de Châteauroux", "target": "Data center Google — Ozans / Étrechet", "kind": "contraste / remplacement"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Multinationales.org", "kind": "source / couverture"},
    {"source": "ZAC d’Ozans", "target": "Lénéo", "kind": "implantation concurrente"},
    {"source": "Lénéo", "target": "Fred Gagnot", "kind": "opposition ressource"},
    {"source": "Lénéo", "target": "Nicolas Pailloux", "kind": "vigilance marché"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Alterric", "kind": "alibi énergétique"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Philippe Latombe", "kind": "cible moratoire"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Arcep", "kind": "évaluation macro"},
    {"source": "Lénéo", "target": "Guillaume Allart", "kind": "analyse critique"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Anti", "kind": "opposition nationale"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Mehdi Nezzar", "kind": "inspiration lutte"},
    {"source": "Data center Google — Ozans / Étrechet", "target": "Nicolas Celnik", "kind": "couverture médiatique"}
  ]
};

// -----> LA LIGNE DE CONNEXION <-----
const graph = graphData;

const colors = {"Projet central": "#111827", "Noyau d’opposition local": "#15803d", "Opposants / critiques nommément cités": "#dc2626", "Élus / acteurs favorables ou moteurs": "#2563eb", "Maîtres d’ouvrage / industriels": "#0f766e", "Concertation / institutions publiques": "#7c3aed", "Réseau critique national / experts": "#0891b2", "Points de vigilance / griefs": "#f97316", "Médias / sources cités": "#64748b"};
const groups = ["Concertation / institutions publiques", "Maîtres d’ouvrage / industriels", "Médias / sources cités", "Noyau d’opposition local", "Opposants / critiques nommément cités", "Points de vigilance / griefs", "Projet central", "Réseau critique national / experts", "Élus / acteurs favorables ou moteurs"];
const central = "Data center Google — Ozans / Étrechet";

const svg = document.getElementById('svg'), chart = document.getElementById('chart'), details = document.getElementById('details'), tooltip = document.getElementById('tooltip'), checks = document.getElementById('checks'), countEl = document.getElementById('count');
let width = chart.clientWidth, height = chart.clientHeight;
svg.setAttribute('viewBox', [0,0,width,height].join(' '));
const ns = "http://www.w3.org/2000/svg";
const g = document.createElementNS(ns,'g'); svg.appendChild(g);
const linkG = document.createElementNS(ns,'g'), nodeG = document.createElementNS(ns,'g'); g.appendChild(linkG); g.appendChild(nodeG);
const activeGroups = new Set(groups);
groups.forEach(gr => {
  const label = document.createElement('label');
  label.innerHTML = `<input type="checkbox" checked value="${gr}"><span class="legend-dot" style="background:${colors[gr]}"></span><span>${gr}</span>`;
  checks.appendChild(label);
});
checks.addEventListener('change', e => {
  if(e.target.type === 'checkbox') { e.target.checked ? activeGroups.add(e.target.value) : activeGroups.delete(e.target.value); applyFilters(); }
});
const nodes = graph.nodes.map(d => Object.assign({}, d));
const nodeById = new Map(nodes.map(d => [d.id,d]));
const links = graph.links.map(d => Object.assign({}, d, {source: nodeById.get(d.source), target: nodeById.get(d.target)})).filter(d => d.source && d.target);
const linkEls = links.map(l => {
  const line = document.createElementNS(ns,'line'); line.classList.add('link'); line.dataset.source = l.source.id; line.dataset.target = l.target.id; linkG.appendChild(line); return line;
});
const nodeEls = nodes.map(n => {
  const el = document.createElementNS(ns,'g'); el.classList.add('node'); el.dataset.id = n.id; el.dataset.group = n.group;
  const c = document.createElementNS(ns,'circle'); c.setAttribute('r', n.size); c.setAttribute('fill', colors[n.group] || '#999');
  const t = document.createElementNS(ns,'text'); t.setAttribute('dy', n.size + 13);
  n.label.split('\n').forEach((part,i) => { const tsp = document.createElementNS(ns,'tspan'); tsp.textContent = part; tsp.setAttribute('x', 0); tsp.setAttribute('dy', i===0 ? 0 : 12); t.appendChild(tsp); });
  el.appendChild(c); el.appendChild(t); nodeG.appendChild(el);
  el.addEventListener('click', () => selectNode(n));
  el.addEventListener('mouseenter', ev => showTip(n, ev)); el.addEventListener('mousemove', ev => showTip(n, ev)); el.addEventListener('mouseleave', () => tooltip.style.opacity = 0);
  drag(el,n); return el;
});
function initialPosition() {
  const ring = {"Projet central":0,"Noyau d’opposition local":150,"Opposants / critiques nommément cités":260,"Élus / acteurs favorables ou moteurs":310,"Maîtres d’ouvrage / industriels":225,"Concertation / institutions publiques":285,"Réseau critique national / experts":380,"Points de vigilance / griefs":330,"Médias / sources cités":435};
  const byGroup = {}; nodes.forEach(n => (byGroup[n.group] ||= []).push(n));
  nodes.forEach(n => {
    if(n.id === central) { n.x = width/2; n.y = height/2; return; }
    const arr = byGroup[n.group], idx = arr.indexOf(n), total = arr.length;
    let base = Object.keys(byGroup).indexOf(n.group) * 0.55;
    if(n.group === "Maîtres d’ouvrage / industriels") base = -0.2;
    if(n.group === "Points de vigilance / griefs") base = 2.5;
    const angle = base + idx * (Math.PI*2/Math.max(total,1));
    const r = ring[n.group] || 300;
    n.x = width/2 + Math.cos(angle)*r; n.y = height/2 + Math.sin(angle)*r;
  });
}
initialPosition();
function tick() {
  for(let k=0;k<2;k++) {
    links.forEach(l => {
      const dx = l.target.x-l.source.x, dy = l.target.y-l.source.y, dist = Math.hypot(dx,dy) || 1;
      const desired = l.source.id===central || l.target.id===central ? 170 : 120;
      const f = (dist-desired)*0.012, fx = dx/dist*f, fy = dy/dist*f;
      if(!l.source.fixed) { l.source.x += fx; l.source.y += fy; }
      if(!l.target.fixed) { l.target.x -= fx; l.target.y -= fy; }
    });
    for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++) {
      const a=nodes[i], b=nodes[j], dx=b.x-a.x, dy=b.y-a.y, dist=Math.hypot(dx,dy)||1, min=a.size+b.size+38;
      if(dist < min) { const f=(min-dist)/dist*0.028; if(!a.fixed) {a.x-=dx*f; a.y-=dy*f;} if(!b.fixed) {b.x+=dx*f; b.y+=dy*f;} }
    }
    nodes.forEach(n => {
      if(n.id !== central && !n.fixed) { n.x += (width/2 - n.x)*0.0015; n.y += (height/2 - n.y)*0.0015; }
      n.x = Math.max(40, Math.min(width-40, n.x)); n.y = Math.max(40, Math.min(height-40, n.y));
    });
  }
  linkEls.forEach((el,i) => { const l=links[i]; el.setAttribute('x1',l.source.x); el.setAttribute('y1',l.source.y); el.setAttribute('x2',l.target.x); el.setAttribute('y2',l.target.y); });
  nodeEls.forEach((el,i) => el.setAttribute('transform',`translate(${nodes[i].x},${nodes[i].y})`));
  requestAnimationFrame(tick);
}
tick();
function selectNode(n) {
  nodeEls.forEach(el => el.classList.remove('selected','dim')); linkEls.forEach(el => el.classList.remove('dim'));
  const neigh = new Set([n.id]);
  links.forEach(l => { if(l.source.id===n.id) neigh.add(l.target.id); if(l.target.id===n.id) neigh.add(l.source.id); });
  nodeEls.forEach(el => { if(!neigh.has(el.dataset.id)) el.classList.add('dim'); if(el.dataset.id===n.id) el.classList.add('selected'); });
  linkEls.forEach((el,i) => { const l=links[i]; if(l.source.id!==n.id && l.target.id!==n.id) el.classList.add('dim'); });
  details.innerHTML = `<h2>${escapeHtml(n.id)}</h2><span class="pill" style="background:${colors[n.group]}">${escapeHtml(n.group)}</span><p>${escapeHtml(n.detail)}</p><p class="mini"><strong>Connexions visibles :</strong> ${[...neigh].filter(x=>x!==n.id).map(escapeHtml).join(', ') || 'aucune'}</p>`;
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function showTip(n, ev) { tooltip.textContent = n.id + " — " + n.group; tooltip.style.opacity = 1; const rect = chart.getBoundingClientRect(); tooltip.style.left = (ev.clientX - rect.left) + 'px'; tooltip.style.top = (ev.clientY - rect.top) + 'px'; }
function applyFilters() {
  const q = document.getElementById('search').value.trim().toLowerCase(); let visible = 0;
  nodeEls.forEach((el,i) => { const n = nodes[i]; const ok = activeGroups.has(n.group) && (!q || (n.id + " " + n.group + " " + n.detail).toLowerCase().includes(q)); el.classList.toggle('hidden', !ok); if(ok) visible++; });
  linkEls.forEach((el,i) => { const l = links[i]; const sEl = nodeEls[nodes.indexOf(l.source)], tEl = nodeEls[nodes.indexOf(l.target)]; el.classList.toggle('hidden', sEl.classList.contains('hidden') || tEl.classList.contains('hidden')); });
  countEl.textContent = visible + " nœuds affichés sur " + nodes.length;
}
document.getElementById('search').addEventListener('input', applyFilters); applyFilters();
document.getElementById('reset').onclick = () => { document.getElementById('search').value = ""; document.querySelectorAll('#checks input').forEach(cb => { cb.checked=true; activeGroups.add(cb.value); }); nodeEls.forEach(el => el.classList.remove('selected','dim','hidden')); linkEls.forEach(el => el.classList.remove('dim','hidden')); details.innerHTML = `<h2>Data center Google — Ozans / Étrechet</h2><span class="pill" style="background:#111827">Projet central</span><p>Projet de campus de centres de données Google près de Châteauroux : 195 hectares, huit à dix bâtiments, raccordements électriques 225 kV puis 400 kV.</p><p class="mini">Lecture rapide : plus le nœud est gros, plus l’acteur est structurant dans le corpus.</p>`; applyFilters(); };
document.getElementById('center').onclick = () => { currentZoom = 1; panX = 0; panY = 0; updateTransform(); };
function drag(el,n) {
  let down=false, ox=0, oy=0;
  el.addEventListener('pointerdown', ev => { down=true; n.fixed=true; el.setPointerCapture(ev.pointerId); const pt = toSvg(ev); ox = n.x-pt.x; oy=n.y-pt.y; });
  el.addEventListener('pointermove', ev => { if(!down) return; const pt=toSvg(ev); n.x=pt.x+ox; n.y=pt.y+oy; });
  el.addEventListener('pointerup', ev => { down=false; el.releasePointerCapture(ev.pointerId); });
}
let currentZoom=1, panX=0, panY=0, panning=false, sx=0, sy=0;
function updateTransform() { g.setAttribute('transform', `translate(${panX},${panY}) scale(${currentZoom})`); }
function toSvg(ev) { const rect = svg.getBoundingClientRect(); return {x:(ev.clientX-rect.left-panX)/currentZoom, y:(ev.clientY-rect.top-panY)/currentZoom}; }
svg.addEventListener('wheel', ev => { ev.preventDefault(); const scale = ev.deltaY < 0 ? 1.08 : 0.92; currentZoom = Math.max(.35, Math.min(2.8, currentZoom*scale)); updateTransform(); }, {passive:false});
svg.addEventListener('pointerdown', ev => { if(ev.target===svg) { panning=true; sx=ev.clientX-panX; sy=ev.clientY-panY; svg.style.cursor='grabbing'; } });
svg.addEventListener('pointermove', ev => { if(panning) { panX=ev.clientX-sx; panY=ev.clientY-sy; updateTransform(); } });
svg.addEventListener('pointerup', () => { panning=false; svg.style.cursor='grab'; });
window.addEventListener('resize', () => { width = chart.clientWidth; height = chart.clientHeight; svg.setAttribute('viewBox', [0,0,width,height].join(' ')); });
