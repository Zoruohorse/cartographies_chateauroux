const projectData = {
            meta: {
                title: "Cartographie interactive — Data Center Google Ozans",
                subtitle: "Projet de campus de centres de données Google de 195 hectares sur la ZAC d’Ozans, soutenu par l'État et l'agglomération, mais confronté à une contestation locale croissante portant sur l'opacité, l'impact hydrique, énergétique et l'artificialisation des sols."
            },
            taxonomy: {
                categories: {
                    "all": "Tous les acteurs",
                    "opposants": "Opposants & Experts",
                    "elus-opp": "Élus Opposés/Critiques",
                    "elus-fav": "Élus Favorables/Prudents",
                    "orgs": "Orgs & Collectifs",
                    "porteurs": "Porteurs & Économie"
                },
                stances: {
                    "all": "Toutes les positions",
                    "opposed": "Opposé / Critique",
                    "favorable": "Favorable / Soutien",
                    "neutral": "Prudent / Ambigü"
                }
            },
            actors: [
                { name: "Ozans dire non", category: "orgs", stance: "opposed", role: "Collectif citoyen contre Google", position: "Rassemble citoyens, organisations syndicales, politiques et environnementales face au projet.", evidence: "Constitution formelle du collectif d'opposition citoyenne.", certainty: "Haute" },
                { name: "PCF de l’Indre", category: "orgs", stance: "opposed", role: "Fédération départementale", position: "Membre du collectif Ozans dire non et très critique sur l’opacité du projet.", evidence: "Dénonciation de l'opacité.", certainty: "Haute" },
                { name: "Les Écologistes", category: "orgs", stance: "opposed", role: "Organisation politique", position: "À l’origine d’une réunion publique à Châteauroux pour peser dans la concertation préalable.", evidence: "Organisation de réunions publiques de concertation.", certainty: "Haute" },
                { name: "Confédération paysanne", category: "orgs", stance: "opposed", role: "Syndicat agricole", position: "Alerte sur l’absence de détails concernant les impacts agricoles et environnementaux.", evidence: "Alerte sur le manque de détails agricoles.", certainty: "Moyenne" },
                { name: "Indre Nature / FNE locale", category: "orgs", stance: "opposed", role: "Association environnementale locale", position: "Citée parmi les acteurs que les garants de la CNDP doivent rencontrer.", evidence: "Consultée au titre d'expert environnemental local.", certainty: "Haute" },
                { name: "Union de la gauche citoyenne", category: "orgs", stance: "opposed", role: "Formation locale critique", position: "Représentée par Éric Domenge-Abeau à l'échelle municipale.", evidence: "Intégrée à l'opposition municipale.", certainty: "Haute" },
                { name: "LFI", category: "orgs", stance: "opposed", role: "Mouvement politique national", position: "Mentionnée dans le corpus via des critiques contre Google et son projet de data center à Ozans.", evidence: "Auteur d'une pétition hébergée sur MyPetition.org.", certainty: "Haute" },
                { name: "Jérémie Godet", category: "elus-opp", stance: "opposed", role: "Vice-président écologiste de la Région Centre-Val de Loire", position: "Porte la fronde avec Ozans dire non, critique l’artificialisation, les PFAS et l’îlot de chaleur.", evidence: "Critiques publiques sur l'artificialisation et les PFAS.", certainty: "Haute" },
                { name: "Dominique Boué", category: "opposants", stance: "opposed", role: "Secrétaire départemental du PCF de l’Indre", position: "Dénonce l’absence de concertation, l’opacité et les incertitudes sur le refroidissement.", evidence: "Critique explicite du manque de transparence technologique.", certainty: "Moyenne" },
                { name: "Francis Martinet", category: "opposants", stance: "opposed", role: "Initiateur d'Ozans dire non", position: "Insiste sur l’information des citoyens et la faible transparence autour du projet.", evidence: "Initiateur direct du collectif citoyen.", certainty: "Haute" },
                { name: "Stéphanie Grelet", category: "opposants", stance: "opposed", role: "Militante communiste", position: "Compare le dossier Google à d’autres projets menés selon elle « en sous-marin ».", evidence: "Accuse le projet d'être mené « en sous-marin ».", certainty: "Faible" },
                { name: "Raphaël Tillie", category: "opposants", stance: "opposed", role: "Membre du collectif", position: "Interroge l’îlot de chaleur et défend l’enjeu de souveraineté alimentaire.", evidence: "Défense des enjeux de souveraineté alimentaire.", certainty: "Haute" },
                { name: "Cyrielle Chatelain", category: "elus-opp", stance: "opposed", role: "Députée, Présidente du groupe écologiste", position: "Alerte sur le mirage des créations d’emplois disproportionnées au regard du foncier.", evidence: "Intervention sur les ratios d'emploi limités.", certainty: "Haute" },
                { name: "Jean Delavergne", category: "opposants", stance: "opposed", role: "Co-secrétaire des Écologistes de l’Indre", position: "Critique la gestion territoriale de Gil Avérous et la fuite en avant technocratique.", evidence: "Cible politiquement la gestion de l'agglomération.", certainty: "Haute" },
                { name: "Éric Domenge-Abeau", category: "opposants", stance: "opposed", role: "Tête de liste de l’UGC à Châteauroux", position: "Ironise sur la succession d’annonces non abouties autour de la ZAC d'Ozans.", evidence: "Rappel des échecs industriels précédents sur la ZAC.", certainty: "Haute" },
                { name: "Emmanuel de Saint Pol", category: "opposants", stance: "opposed", role: "Agriculteur exproprié en 2012", position: "Exprime de la lassitude et un scepticisme face aux projets successifs sur la zone.", evidence: "Témoignage direct lié à une expropriation passée.", certainty: "Moyenne" },
                { name: "Militant écologiste anonyme", category: "opposants", stance: "opposed", role: "Militant de terrain", position: "Évoque la faiblesse du rapport de force local, la difficulté à mobiliser et le manque d’informations d’Enedis/RTE.", evidence: "Alerte sur l'asymétrie d'information.", certainty: "Faible" },
                { name: "Gil Avérous", category: "elus-fav", stance: "favorable", role: "Président LR de Châteauroux Métropole", position: "Principal soutien local du projet, qu’il présente comme une chance historique pour le territoire.", evidence: "Considère publiquement le projet comme une « chance historique ».", certainty: "Haute" },
                { name: "François Bonneau", category: "elus-opp", stance: "opposed", role: "Président socialiste de la Région Centre-Val de Loire", position: "Ne soutient plus le projet en l’état et critique son emprise foncière, ses besoins électriques, les nouvelles infrastructures nécessaires ainsi que la dépendance liée au stockage massif de données par une entreprise américaine.", evidence: "« En l’état, je ne le soutiens pas. »", certainty: "Haute" },
                { name: "Marc Descouraux", category: "elus-fav", stance: "neutral", role: "Ancien maire d’Étrechet", position: "Renvoie vers l’agglomération et indique ne pas avoir d’information précise sur l’avancement du projet.", evidence: "Avoue un manque d'informations précises.", certainty: "Faible" },
                { name: "Vincent Millan", category: "elus-fav", stance: "neutral", role: "Maire d’Argenton-sur-Creuse", position: "Confirme l’existence d’un projet miroir au Pêchereau, encore très préliminaire.", evidence: "Confirme prudemment les études pour le projet miroir.", certainty: "Moyenne" },
                { name: "Régis Blanchet", category: "elus-fav", stance: "neutral", role: "Maire de Buzançais", position: "Évoque avec prudence l’entreprise américaine, dans un contexte local de discrétion.", evidence: "Exprime une forte prudence due au secret.", certainty: "Moyenne" },
                { name: "Thibault Lanxade", category: "elus-fav", stance: "favorable", role: "Préfet de l’Indre", position: "Présenté comme soutien d’une stratégie de redynamisation numérique et industrielle via Indre 2030.", evidence: "Soutien institutionnel et étatique de la préfecture.", certainty: "Haute" },
                { name: "Nicolas Bouzou", category: "porteurs", stance: "favorable", role: "Économiste, fondateur d’Asterès", position: "Missionné pour imaginer le plan Indre 2030, incluant data centers, giga-factories et robotaxis.", evidence: "Intègre les data centers dans son plan stratégique territorial.", certainty: "Haute" },
                { name: "Chambre d’agriculture", category: "orgs", stance: "favorable", role: "Organisme consulaire agricole", position: "Acteur mobilisé dans les calculs de Gil Avérous sur la valorisation de la chaleur fatale pour les serres.", evidence: "Associée aux études techniques de valorisation de chaleur fatale.", certainty: "Haute" },
                { name: "Google", category: "porteurs", stance: "favorable", role: "Porteur industriel du projet", position: "Envisage son premier méga data center exploité en propre sur le territoire français.", evidence: "Entreprise commanditaire principale.", certainty: "Haute" },
                { name: "Google France", category: "porteurs", stance: "favorable", role: "Filiale nationale de Google et maître d’ouvrage", position: "Poursuit l’étude du premier campus Google exploité en propre en France, mais refuse de commenter le projet ou d’apporter des précisions alors que les interrogations locales s’intensifient.", evidence: "Contacté par l’AFP, Google France n’a pas souhaité faire de commentaire ni donner plus de détails à ce stade.", certainty: "Haute" },
                { name: "Tricolore Computing", category: "porteurs", stance: "favorable", role: "Filiale immobilière liée à Google", position: "Mentionnée pour l’acquisition potentielle du terrain et agissant comme maître d’ouvrage.", evidence: "Sert de véhicule d'acquisition foncière.", certainty: "Haute" },
                { name: "Violet Computing", category: "porteurs", stance: "favorable", role: "Filiale administrative liée à Google", position: "Citée formellement comme co-maître d’ouvrage dans la concertation CNDP.", evidence: "Structure administrative impliquée dans le dossier public.", certainty: "Haute" },
                { name: "RTE", category: "porteurs", stance: "neutral", role: "Gestionnaire du réseau de transport", position: "Prévoit une première liaison souterraine à 225 kV pour 2028-2029, puis des infrastructures aériennes à 400 kV sur plus de dix kilomètres à partir de 2031.", evidence: "Le raccordement comprend une première phase à 225 000 volts puis une seconde phase nécessitant des ouvrages à 400 000 volts.", certainty: "Haute" },
                { name: "Enedis", category: "porteurs", stance: "neutral", role: "Gestionnaire de distribution", position: "Mentionné par un militant écologiste comme acteur sollicité sans obtenir d’informations précises.", evidence: "Refus de communiquer des données précises constaté sur le terrain.", certainty: "Faible" },
                { name: "Decknet", category: "porteurs", stance: "favorable", role: "Porteur de projet", position: "Opère un autre projet de data center plus modeste à Buzançais.", evidence: "Présence industrielle parallèle dans le département.", certainty: "Haute" },
                { name: "Soprema Steel", category: "porteurs", stance: "neutral", role: "Industriel local", position: "Voisin direct présent sur la ZAC d’Ozans, constituant l’un des rares bâtiments industriels existants.", evidence: "Voisin direct sur le site visé.", certainty: "Haute" },
                { name: "CNDP", category: "orgs", stance: "neutral", role: "Autorité de débat public", position: "Lance officiellement la concertation préalable réglementaire sur le projet Ozans-Châteauroux.", evidence: "Saisie officiellement pour encadrer le débat public.", certainty: "Haute" },
                { name: "Marc Papinutti", category: "orgs", stance: "neutral", role: "Président de la CNDP", position: "Explique que la présence de RTE fait entrer le projet dans le périmètre obligatoire de la CNDP.", evidence: "Justifie juridiquement l'intervention de la CNDP.", certainty: "Haute" },
                { name: "Jean-Louis Laure", category: "orgs", stance: "neutral", role: "Garant de la concertation CNDP", position: "Se dit vigilant face au sentiment d’urgence imposé et au secret des affaires.", evidence: "Alerte sur les risques liés au secret des affaires.", certainty: "Moyenne" },
                { name: "Dreal", category: "orgs", stance: "neutral", role: "Autorité environnementale", position: "Citée parmi les experts et services instructeurs étatiques que les garants doivent rencontrer.", evidence: "Intégrée au processus de validation réglementaire.", certainty: "Haute" },
                { name: "Ademe", category: "orgs", stance: "neutral", role: "Agence de la transition écologique", position: "Associée à des travaux macro-économiques sur les data centers et leurs impacts environnementaux.", evidence: "Apporte une expertise technique nationale.", certainty: "Haute" },
                { name: "État", category: "elus-fav", stance: "favorable", role: "Autorité nationale", position: "Inscrit le site parmi les projets industriels stratégiques clés en main pour soutenir les infrastructures de calcul.", evidence: "Politique nationale de soutien aux infrastructures numériques.", certainty: "Haute" },
                { name: "Préfecture de l’Indre", category: "elus-fav", stance: "favorable", role: "Représentation de l'État", position: "Acteur local impliqué dans la stratégie Indre 2030 et l'instruction du dossier industriel.", evidence: "Accompagne l'implantation industrielle au niveau local.", certainty: "Haute" },
                { name: "Ophélie Coelho", category: "opposants", stance: "opposed", role: "Chercheuse associée à l’IRIS", position: "Critique la diplomatie industrielle de terrain, la faiblesse des concertations et l’opacité des Big Tech.", evidence: "Analyse experte de l'opacité des GAFAM.", certainty: "Haute" },
                { name: "Loup Cellard", category: "opposants", stance: "opposed", role: "Sociologue de l'impact écologique", position: "Interroge techniquement la valorisation réelle de la chaleur fatale pour une commune de la taille de Diors.", evidence: "Remet en cause la faisabilité technique locale.", certainty: "Haute" },
                { name: "Maxime Colin", category: "opposants", stance: "opposed", role: "Juriste à FNE", position: "Critique la stratégie des GAFAM consistant à laisser les projets s'implanter le plus discrètement possible.", evidence: "Dénonce les pratiques d'implantation furtives.", certainty: "Haute" },
                { name: "Cécile Diguet", category: "opposants", stance: "opposed", role: "Urbaniste au Studio Dégel", position: "Souligne que la culture sémantique du secret des GAFAM nuit à l’anticipation urbaine locale.", evidence: "Met en évidence l'impact de l'opacité sur l'urbanisme.", certainty: "Haute" },
                { name: "Guillaume Gourgues", category: "opposants", stance: "opposed", role: "Politiste", position: "Cité sur la faiblesse institutionnelle inhérente aux processus de la CNDP face aux projets industriels.", evidence: "Analyse le manque de poids des processus de concertation.", certainty: "Haute" },
                { name: "La Quadrature du Net", category: "orgs", stance: "opposed", role: "Association techno-critique", position: "Exprime de vives craintes sur les assouplissements législatifs successifs favorables aux entrepôts de serveurs.", evidence: "S'oppose aux assouplissements législatifs.", certainty: "Haute" },
                { name: "Le Nuage était sous nos pieds", category: "orgs", stance: "opposed", role: "Collectif critique des infrastructures", position: "Cité sur l’intérêt social limité du projet et le caractère souvent sous-traité des emplois créés.", evidence: "Remise en cause des retombées en matière d'emploi.", certainty: "Haute" },
                { name: "Hiatus", category: "orgs", stance: "opposed", role: "Collectif national", position: "Cité comme référence doctrinale dans le débat national sur la régulation des centres de serveurs.", evidence: "Participe au réseau national d'opposition technocritique.", certainty: "Haute" },
                { name: "Lou Welgryn", category: "opposants", stance: "opposed", role: "Coprésidente de Data for Good", position: "Déplore la fuite en avant et le gigantisme matériel des projets rattachés aux géants américains.", evidence: "S'oppose au gigantisme structurel.", certainty: "Haute" },
                { name: "Data for Good", category: "orgs", stance: "opposed", role: "Association nationale", position: "Plaidant activement pour un cadre numérique d'intérêt général au niveau macro-économique.", evidence: "Revendique une vision d'intérêt général face aux acteurs privés.", certainty: "Haute" },
                { name: "Philippe Chabeaudy", category: "opposants", stance: "opposed", role: "Contestataire projet Cézanne", position: "S'oppose au projet Telehouse aux Pennes-Mirabeau en raison des risques structurels d'incendie.", evidence: "Opposition locale fondée sur le risque incendie.", certainty: "Haute" },
                { name: "Maxime Efoui-Hess", category: "opposants", stance: "opposed", role: "Expert au Shift Project", position: "Critique la priorisation de la ressource et de la puissance électrique nationale pour l'IA.", evidence: "Conteste les arbitrages énergétiques nationaux.", certainty: "Haute" },
                { name: "Associations de Wissous", category: "orgs", stance: "opposed", role: "Collectifs juridiques d'Essonne", position: "Mènent la lutte en justice pour dénoncer le saucissonnage et les projets furtifs.", evidence: "Expérience juridique des recours contre le saucissonnage.", certainty: "Haute" },
                { name: "PS de l’Indre", category: "orgs", stance: "opposed", role: "Parti politique départemental", position: "Redoute de voir le département transformé en une colonie numérique dépendante et pointe la faiblesse des retombées locales.", evidence: "Peur d'une « colonie numérique ».", certainty: "Haute" },
                { name: "Gouvernement français", category: "elus-fav", stance: "favorable", role: "Pouvoir exécutif national", position: "Soutient les investissements massifs dans l'IA et accélère l'implantation des giga infrastructures.", evidence: "Pilotage macro-économique en faveur du secteur.", certainty: "Haute" },
                { name: "Maryvonne Le Brignonen", category: "elus-fav", stance: "neutral", role: "Préfète de l'Indre", position: "Destinataire institutionnelle désignée de la pétition des opposants au projet Google.", evidence: "Réceptionnaire officiel des requêtes citoyennes.", certainty: "Haute" },
                { name: "France Datacenter", category: "porteurs", stance: "favorable", role: "Association professionnelle du secteur", position: "Lobby officiel représentant les intérêts de la filière et défendant les vertus économiques des infrastructures.", evidence: "Lobby sectoriel officiel.", certainty: "Haute" },
                { name: "Michaël Reffay", category: "porteurs", stance: "favorable", role: "Délégué général, France Datacenter", position: "Défend l'intérêt économique et l'intégration territoriale moderne des projets.", evidence: "Porte-parole économique de l'industrie.", certainty: "Haute" },
                { name: "EDF", category: "porteurs", stance: "favorable", role: "Fournisseur d'énergie historique", position: "Identifié comme ayant un besoin commercial direct de ces projets lourds pour valoriser sa production décarbonée.", evidence: "Intérêt industriel et commercial direct.", certainty: "Haute" },
                { name: "Telehouse", category: "porteurs", stance: "favorable", role: "Opérateur japonais", position: "Porteur du projet Cézanne contesté aux Pennes-Mirabeau pour son emprise thermique.", evidence: "Développe des projets similaires soumis à critique.", certainty: "Haute" },
                { name: "Marie-Claire Eustache", category: "orgs", stance: "neutral", role: "Garante de la CNDP", position: "Désignée officiellement pour encadrer le processus de concertation préalable à Ozans.", evidence: "Nomination officielle.", certainty: "Haute" },
                { name: "Romane Harmel-Samarcq", category: "orgs", stance: "neutral", role: "Garante de la CNDP", position: "Désignée officiellement pour superviser la concertation préalable à Ozans.", evidence: "Nomination officielle.", certainty: "Haute" },
                { name: "Sébastien Missoffe", category: "porteurs", stance: "favorable", role: "Directeur général de Google France", position: "Confirme que l'entreprise étudie activement toutes les options techniques viables pour le site de Châteauroux.", evidence: "Déclarations à la presse sur la viabilité locale.", certainty: "Haute" }, 
                { name: "Pierre Allorant", category: "orgs", stance: "neutral", role: "Président du Ceser Centre-Val de Loire", position: "Accueille la saisine citoyenne pour produire un rapport consultatif sur les impacts du projet.", evidence: "Notre rôle est de regarder si les projets [...] sont un plus ou non pour les habitants.", certainty: "Haute" },
                { name: "Ceser", category: "orgs", stance: "neutral", role: "Assemblée consultative régionale", position: "Saisi par les opposants pour instruire le dossier et formuler un avis officiel au Conseil régional.", evidence: "Le Ceser va désigner une commission pour travailler sur le sujet, avec des auditions d’experts.", certainty: "Haute" },
                { name: "CGT Indre", category: "orgs", stance: "opposed", role: "Syndicat", position: "Co-organise les manifestations et porte activement la collecte des 4000 signatures pour la saisine citoyenne.", evidence: "La CGT et le collectif « Ozans dire non » organisent un deuxième rassemblement.", certainty: "Haute" },
                { name: "Delphine Chambonneau", category: "elus-opp", stance: "opposed", role: "Élue d'opposition (Châteauroux)", position: "S'est prononcée formellement contre la délibération autorisant l'étude de raccordement électrique.", evidence: "Adopté à 49 voix pour et trois voix contre (dont celle de Delphine Chambonneau).", certainty: "Haute" },
                { name: "Bruno Mascle", category: "elus-opp", stance: "opposed", role: "Élu d'opposition (Déols)", position: "S'est prononcé formellement contre la délibération autorisant l'étude de raccordement électrique.", evidence: "Adopté à 49 voix pour et trois voix contre (dont celle de Bruno Mascle).", certainty: "Haute" },
                { name: "Anne Le Hénanff", category: "elus-fav", stance: "favorable", role: "Ministre déléguée chargée de l'IA", position: "Encourage le déploiement de data centers en France pour des raisons géostratégiques.", evidence: "Implanter des centres de données sur notre sol est une priorité, au service de notre souveraineté numérique.", certainty: "Haute" },
                { name: "Lénéo", category: "porteurs", stance: "favorable", role: "Start-up (Énergies vertes)", position: "Porte un projet concurrent de centrale biomasse sur la ZAC d'Ozans, ajoutant une pression sur l'eau.", evidence: "Prévoit d'investir près de 60 millions d'euros.", certainty: "Haute" },
                { name: "Fred Gagnot", category: "opposants", stance: "opposed", role: "Porte-parole, Confédération paysanne", position: "S'oppose fermement à la centrale biomasse en raison de la ponction de 100 000 m3 d'eau et de la paille.", evidence: "L'eau est un bien commun qui doit servir en priority à l'alimentation.", certainty: "Haute" },
                { name: "Nicolas Pailloux", category: "orgs", stance: "neutral", role: "Président, Chambre d'agriculture", position: "Reste attentif aux impacts de la centrale biomasse sur l'équilibre du marché de la paille locale.", evidence: "Il faut rester attentif.", certainty: "Haute" },
                { name: "Alterric (Samuel Moisson)", category: "porteurs", stance: "favorable", role: "Développeur éolien", position: "Utilise la hausse de consommation électrique du data center pour justifier de nouveaux parcs éoliens.", evidence: "Consommation d’électricité va s’accroître [...] de l’installation d’un data center à Châteauroux.", certainty: "Haute" },
                { name: "Philippe Latombe", category: "elus-opp", stance: "opposed", role: "Député MoDem", position: "Dénonce la dépendance extraterritoriale aux GAFAM et demande un moratoire sur leurs implantations.", evidence: "Le 'kill switch' [...] n'est plus seulement une hypothèse mais une réalité.", certainty: "Haute" },
                { name: "Arcep", category: "orgs", stance: "neutral", role: "Autorité de régulation", position: "Alerte sur la hausse de +38% de la consommation électrique et demande plus de données sur l'impact de l'IA.", evidence: "Réclame des données précises sur l'impact environnemental de l'IA.", certainty: "Haute" },
                { name: "Guillaume Allart", category: "opposants", stance: "neutral", role: "Économiste, Shift Project", position: "Soulève les problèmes structurels d'arbitrage de l'eau en cas de sécheresse pour les projets de biomasse.", evidence: "Normalement l'Etat via le Préfet doit arbitrer.", certainty: "Haute" },
                { name: "Anti", category: "opposants", stance: "opposed", role: "Porte-parole, Le Nuage était sous nos pieds", position: "Dénonce le choix stratégique des Big Tech de s'implanter dans des zones économiquement vulnérables.", evidence: "Stratégie de prédation sur des territoires précarisés.", certainty: "Haute" },
                { name: "Mehdi Nezzar", category: "elus-opp", stance: "opposed", role: "Maire du Bourget", position: "Incarne une victoire institutionnelle locale en ayant invalidé le permis d'un projet de centre de données.", evidence: "Invalidé le permis de construire accordé à l’entreprise immobilière.", certainty: "Haute" },
                { name: "Nicolas Celnik", category: "opposants", stance: "opposed", role: "Journaliste et auteur", position: "Analyse et met en perspective les luttes anti-data centers avec d'autres grands combats écologiques.", evidence: "Les mêmes configurations de résistance qu’à Sainte-Soline.", certainty: "Haute" }, 
                { name: "Florence Laurent", category: "elus-opp", stance: "opposed", role: "Ancienne maire sans étiquette d’Étrechet", position: "A quitté ses mandats en raison de la prise en compte jugée insuffisante des avis communaux et de l’absence d’engagements précis.", evidence: "« Je suis arrivée à la conclusion que différents éléments de ce projet méritaient un engagement précis. »", certainty: "Haute" },
                { name: "Bruno Deterne", category: "elus-opp", stance: "opposed", role: "Ancien premier adjoint d’Étrechet", position: "A démissionné pour dénoncer l’absence de capacité décisionnelle de la commune.", evidence: "Démission collective présentée comme une décision « conjointe et mûrie ».", certainty: "Haute" },
                { name: "Marie-Pierre Chabenat-Canals", category: "elus-opp", stance: "opposed", role: "Ancienne adjointe d’Étrechet", position: "Dénonce l’absence de pouvoir communal, les risques environnementaux et les prélèvements de ressources.", evidence: "« Nous avons le sentiment d’être dans une réserve indienne. »", certainty: "Haute" },
                { name: "Christian Jubard", category: "elus-opp", stance: "opposed", role: "Ancien adjoint d’Étrechet", position: "A participé à la démission collective en contestant la gouvernance du projet.", evidence: "Le communiqué décrit un projet « hors norme qui échappe totalement à toute capacité de décision ».", certainty: "Haute" },
                { name: "Sylvie Gessier", category: "elus-opp", stance: "opposed", role: "Ancienne conseillère d’Étrechet", position: "A alerté sur l’opacité, les nuisances et l’absence de capacité locale à intervenir.", evidence: "A annoncé sa démission de l’ensemble de ses fonctions électives.", certainty: "Haute" },
                { name: "Châteauroux Métropole", category: "porteurs", stance: "favorable", role: "Communauté d’agglomération", position: "A approuvé le projet, autorisé la vente de 195 hectares et conserve l’essentiel du pouvoir de décision.", evidence: "Le conseil communautaire a voté la vente de 195 hectares.", certainty: "Haute" },
                { name: "Département de l’Indre", category: "elus-fav", stance: "favorable", role: "Collectivité départementale", position: "Soutient le projet et présente ses retombées économiques comme très importantes.", evidence: "A estimé que les retombées du projet seraient « très importantes ».", certainty: "Haute" }
            ],
            griefs: [
                { title: "🔒 Opacité / secret des affaires", text: "Grief central : manque criant d’informations techniques, culture de la confidentialité propre à Google et communication jugée parcellaire par les garants de la CNDP." },
                { title: "🌿 Artificialisation des sols", text: "Forte critique environnementale portant sur les 195 hectares prévus pour le campus de la ZAC d’Ozans, induisant une imperméabilisation massive." },
                { title: "🌡️ Îlot de chaleur urbain", text: "Crainte d’un impact thermique direct et continu à proximité immédiate de la forêt de Châteauroux et des terres agricoles arables environnantes." },
                { title: "☣️ PFAS & Refroidissement", text: "Inquiétude aiguë sur les fluides frigorifiques requis pour les architectures de refroidissement par air et les risques afférents de fuites." },
                { title: "💧 Consommation d’eau", text: "Point d'achoppement sémantique et stratégique majeur dans un département déjà soumis à des épisodes récurrents de stress hydrique." },
                { title: "⚡ Surcharge électrique", text: "Besoin structurel d'aménager de nouvelles liaisons électriques 225 kV puis 400 kV ; la capacité locale actuelle est jugée saturée par les experts." },
                { title: "💼 Mirage de l’emploi local", text: "Dénonciation par les économistes et élus du faible ratio d'emplois nets durables créés au regard du foncier et des ressources mobilisés." },
                { title: "🔒 Souveraineté et Cloud Act", text: "Contestation radicale de l'argument d'indépendance numérique, l'infrastructure étant sous la coupe d'une firme assujettie au droit extraterritorial américain." },
                { title: "📑 Risque de saucissonnage", text: "Soupçon de morcellement administratif délibéré (via des entités miroirs comme au Pêchereau ou Wissous) visant à contourner l'évaluation globale." },
                { title: "🔥 Risque d'incendie accru", text: "Inquiétudes modélisées à partir d'autres luttes nationales (projet Cézanne) portant sur les charges thermiques lourdes à proximité d'espaces arborés." },
                { title: "🏛️ Appel à l'arbitrage régional (Saisine)", text: "Face au blocage et au soutien inébranlable de l'agglomération, les opposants activent le levier de la 'saisine citoyenne' (4000 signatures) pour contraindre le Ceser à instruire le dossier de manière neutre." },
                { title: "🚰 Concurrence industrielle sur l'eau", text: "Le projet de centrale biomasse de Lénéo ajoute une consommation de 100 000 mètres cubes d'eau par an sur le même périmètre que Google, exacerbant la tension sur la ressource hydrique régionale." },
                { title: "🇺🇸 Souveraineté factice et 'Kill Switch'", text: "La mission de l'Assemblée nationale pointe la forte dépendance aux États-Unis, soulignant que des modèles peuvent être coupés à distance par Washington, vidant l'argument de souveraineté de sa substance." },
                { title: "🌬️ Effet domino énergétique", text: "La très forte consommation du data center est désormais officiellement utilisée par les promoteurs d'énergies renouvelables comme argument de nécessité pour imposer de nouveaux parcs éoliens dans le département." }, 
                { title: "🏛️ Crise institutionnelle à Étrechet", text: "La démission de la maire, de ses trois adjoints et d’une conseillère municipale transforme la contestation du projet en crise politique locale majeure et révèle l’absence de pouvoir décisionnel ressentie par la commune d’accueil." },
                { title: "📉 Revirement de la Région", text: "François Bonneau, auparavant favorable, déclare ne plus soutenir le projet en l’état en raison de l’emprise foncière, des besoins électriques et des enjeux de souveraineté liés au contrôle américain des données." },
                { title: "👷 Contradiction majeure sur les emplois", text: "Les annonces de 1 200 à 1 500 emplois permanents portées par Gil Avérous s’opposent aux estimations de 50 à 200 emplois pérennes citées par les élus démissionnaires, sans chiffre officiel détaillé communiqué par Google." },
                { title: "🗳️ Décision intercommunale contre autonomie communale", text: "Le transfert de la compétence d’urbanisme à Châteauroux Métropole et le caractère non contraignant de la concertation alimentent le sentiment qu’un référendum local ou un avis négatif d’Étrechet ne pourraient pas infléchir le projet." },
                { title: "🏠 Dévalorisation immobilière et trafic routier", text: "Les élus démissionnaires ajoutent aux griefs existants la perte potentielle de valeur des habitations riveraines, les nuisances visuelles et l’augmentation du trafic pendant un chantier annoncé sur dix à quinze ans." }
            ],
            vigilance: [
                "<strong>Culture du Secret et Opacité :</strong> Les élus des petites communes, les militants et la CNDP soulignent l'extrême discrétion de Google (agissant via Tricolore/Violet Computing), générant un fort sentiment de développement 'en sous-marin' (rétention d'informations d'Enedis/RTE).",
                "<strong>Incertitudes Écologiques (PFAS, Eau, Chaleur) :</strong> Le flou technique maintenu sur les systèmes de refroidissement suscite de sérieuses craintes concernant la gestion des fluides frigorifiques, le risque de stress hydrique et la formation d'îlots de chaleur massifs.",
                "<strong>Saucissonnage et Stratégie Foncière :</strong> L'apparition d'un 'projet miroir' au Pêchereau et la multiplication de filiales-écrans font craindre un contournement progressif de l'évaluation environnementale globale.",
                "<strong>Décalage Promesses / Réalité :</strong> La rhétorique locale évoquant une 'chance historique' (Gil Avérous) se heurte aux doutes des sociologues et experts pointant le mirage de l'emploi et l'incompatibilité de la valorisation de la chaleur pour de si petites communes.", 
                "<strong>Fermeture du CTR local :</strong> La fin de vie annoncée du Centre de Traitement et de Redondance (CTR) de Châteauroux met en lumière la nouvelle réalité industrielle : les petites structures régionales disparaissent au profit de méga-hubs ultra-denses comme celui projeté par Google à Ozans.",
                "<strong>Glissement de la contestation environnementale :</strong> Les collectifs agricoles et écologiques doivent désormais gérer le cumul de deux projets industriels majeurs sur la ZAC d'Ozans (Google et Lénéo), imposant de bien distinguer les griefs liés au refroidissement de ceux liés à la méthanisation.", 
                "<strong>Emprise foncière :</strong> Distinguer les 195 hectares vendus ou réservés à Tricolore Computing de l’emprise totale de 212 hectares citée par plusieurs sources.",
                "<strong>Puissance finale :</strong> Les sources utilisent 500 MW ou plus de 500 MW. Vérifier la puissance de raccordement contractualisée, la puissance informatique utile et le phasage exact.",
                "<strong>Lignes à 400 kV :</strong> Les publications évoquent alternativement une ou deux lignes aériennes sur plus de dix kilomètres. Le dossier technique RTE doit faire foi.",
                "<strong>Emplois :</strong> Les estimations varient de 50 à 1 500 emplois pérennes. Aucun détail officiel de Google ne permet encore de ventiler construction, exploitation, emplois directs et sous-traitance.",
                "<strong>Évolution du refroidissement :</strong> La communication est passée d’un refroidissement par air à un refroidissement par eau en circuit fermé. Les volumes initiaux, appoints, purges et performances en période de canicule restent à documenter.",
                "<strong>PFAS :</strong> Les élus démissionnaires demandent des garanties, mais aucune étude indépendante spécifique au site n’est identifiée dans le rapport.",
                "<strong>Google et Lénéo :</strong> Le prélèvement de 100 000 m³ d’eau par an concerne le projet Lénéo, juridiquement distinct du data center. Les impacts cumulés peuvent être étudiés sans fusionner les responsabilités.",
                "<strong>Concertations :</strong> Distinguer la concertation préalable Google-CNDP annoncée en novembre et décembre 2026 de celle portant sur les infrastructures électriques de RTE.",
                "<strong>Statut de Florence Laurent :</strong> La démission est annoncée le 15 septembre 2026, mais sa date de prise d’effet et l’organisation de l’intérim municipal ne sont pas précisées.",
                "<strong>Fiche Marc Descouraux :</strong> Son rôle de maire d’Étrechet est devenu obsolète. Son statut actuel n’étant pas documenté, ne pas lui attribuer automatiquement une nouvelle fonction.",
                "<strong>Élection partielle :</strong> Une nouvelle élection municipale est présentée comme probable, mais aucune date officielle n’est fournie.",
                "<strong>Soutien régional :</strong> La fiche de François Bonneau doit être remplacée et non dupliquée, afin de refléter son opposition explicite en l’état.",
                "<strong>Pétition :</strong> Les totaux de 16 000 et 18 000 signatures correspondent à des dates ou comptages différents. Préférer la formulation « plus de 16 000 signatures » tant qu’un décompte daté n’est pas consolidé.",
                "<strong>Prix du foncier :</strong> Le montant de 58,5 millions d’euros doit être distingué des investissements industriels, électriques et informatiques du campus."
            ],
            sources: [
                "<strong>La Nouvelle République :</strong> Source locale centrale sur le projet Google, la concertation, le collectif Ozans dire non et les réactions politiques.",
                "<strong>Basta! :</strong> Média ayant publié l’enquête « Google avance masqué » et analysé l’opacité territoriale du projet.",
                "<strong>France 3 Centre-Val de Loire :</strong> Média ayant traité la division locale autour du premier data center Google en France.",
                "<strong>Le Monde :</strong> Cité sur la confidentialité des informations écologiques des centres de données obtenue par les lobbys du secteur.",
                "<strong>ICI Berry :</strong> Média cité au sujet du plan Indre 2030 et des positions de Thibault Lanxade.",
                "<strong>MyPetition.org :</strong> Plateforme en ligne hébergeant la pétition de La France Insoumise.",
                "<strong>news.google.com :</strong> Agrégateur d'actualités ayant relayé le sujet.",
                "<strong>Ouest-France :</strong> Média national ayant interviewé la direction de Google France.", 
                "<strong>Multinationales.org :</strong> Production de longues enquêtes documentées décortiquant la stratégie d'influence territoriale, le lobbying et l'opacité des GAFAM en amont des élections municipales.",
                "<strong>Banque des Territoires :</strong> Couverture des arbitrages territoriaux, des missions parlementaires et de la dépendance stratégique.",
                "<strong>France 3 Régions :</strong> Mise en évidence des conflits d'usage périphériques (eau et paille) sur la zone d'Ozans.",
                "<strong>Multinationales.org & Halte au Contrôle Numérique :</strong> Analyse globale de la montée en puissance et des répertoires d'action des luttes anti-datacenters dans le monde.", 
                "<strong>Le Figaro :</strong> Article du 22 septembre 2026 documentant le revirement de François Bonneau, les enjeux fonciers, électriques et de souveraineté ainsi que la participation de la Région à la concertation.",
                "<strong>01net :</strong> Article du 22 septembre 2026 détaillant les cinq démissions, les deux phases du projet, la puissance proche de 500 MW et le calendrier des infrastructures électriques.",
                "<strong>France 3 Centre-Val de Loire :</strong> Articles des 14 et 15 septembre 2026 documentant les démissions de Florence Laurent, Bruno Deterne, Marie-Pierre Chabenat-Canals, Christian Jubard et Sylvie Gessier.",
                "<strong>Next INpact :</strong> Article du 16 septembre 2026 précisant le phasage du campus, les maîtres d’ouvrage, les préoccupations environnementales et l’absence de marge de manœuvre communale.",
                "<strong>ICI Berry :</strong> Ressources du 14 septembre 2026 sur les démissions, les projets Google et Lénéo, les promesses de 1 500 emplois et les garanties annoncées sur le refroidissement.",
                "<strong>La Relève et la Peste :</strong> Article du 16 septembre 2026 documentant l’investissement RTE annoncé à 300 millions d’euros et les interrogations sur la chaleur fatale.",
                "<strong>La Nouvelle République :</strong> Couverture locale de la crise municipale, de la visite de Gil Avérous et de la démission collective des élus d’Étrechet.",
                "<strong>La Tribune :</strong> Article du 19 septembre 2026 sur la montée de la contestation, les infrastructures électriques et les soutiens économiques locaux."
            ]
        };

        let activeCategory = "all";
        let activeStance = "all";
        let searchTerm = "";
        let lastFocusedElement = null;

        function normalizeText(value) {
            return String(value || "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .trim();
        }

        function getFilteredActors() {
            return projectData.actors.filter(actor => {
                const matchCategory = activeCategory === "all" || actor.category === activeCategory;
                const matchStance = activeStance === "all" || actor.stance === activeStance;
                const searchableText = normalizeText([
                    actor.name,
                    actor.role,
                    actor.position,
                    actor.evidence,
                    actor.certainty
                ].join(" "));
                const matchSearch = searchTerm === "" || searchableText.includes(searchTerm);

                return matchCategory && matchStance && matchSearch;
            });
        }

        function renderFilters() {
            const catContainer = document.getElementById("cat-filters-container");
            const stanceContainer = document.getElementById("stance-filters-container");

            catContainer.innerHTML = "";
            stanceContainer.innerHTML = "";

            Object.entries(projectData.taxonomy.categories).forEach(([key, label]) => {
                const count = key === "all"
                    ? projectData.actors.length
                    : projectData.actors.filter(actor => actor.category === key).length;

                const button = document.createElement("button");
                button.type = "button";
                button.className = `filter-btn ${key === activeCategory ? "active" : ""}`;
                button.setAttribute("aria-pressed", String(key === activeCategory));
                button.innerHTML = `
                    <span>${label}</span>
                    <span class="count">${count}</span>
                `;
                button.addEventListener("click", () => {
                    activeCategory = key;
                    renderFilters();
                    renderGrid();
                });

                catContainer.appendChild(button);
            });

            Object.entries(projectData.taxonomy.stances).forEach(([key, label]) => {
                const count = key === "all"
                    ? projectData.actors.length
                    : projectData.actors.filter(actor => actor.stance === key).length;

                const button = document.createElement("button");
                button.type = "button";
                button.className = `filter-btn ${key === activeStance ? "active" : ""}`;
                button.setAttribute("aria-pressed", String(key === activeStance));
                button.innerHTML = `
                    <span>${label}</span>
                    <span class="count">${count}</span>
                `;
                button.addEventListener("click", () => {
                    activeStance = key;
                    renderFilters();
                    renderGrid();
                });

                stanceContainer.appendChild(button);
            });
        }

        function renderGrid() {
            const grid = document.getElementById("actors-grid");
            const resultsCount = document.getElementById("results-count");
            const filteredActors = getFilteredActors();

            resultsCount.textContent = `${filteredActors.length} acteur${filteredActors.length > 1 ? "s" : ""} affiché${filteredActors.length > 1 ? "s" : ""} sur ${projectData.actors.length}`;
            grid.innerHTML = "";

            if (filteredActors.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        Aucun acteur ne correspond à votre recherche et aux filtres sélectionnés.
                    </div>
                `;
                return;
            }

            filteredActors.forEach(actor => {
                const card = document.createElement("article");
                card.className = `actor-card ${actor.stance}`;
                card.tabIndex = 0;
                card.setAttribute("role", "button");
                card.setAttribute("aria-label", `Ouvrir la fiche de ${actor.name}`);

                card.innerHTML = `
                    <div>
                        <div class="actor-header">
                            <div class="actor-name">${actor.name}</div>
                            <div class="actor-role">${actor.role}</div>
                        </div>

                        <div class="actor-body">${actor.position}</div>
                    </div>

                    <div class="actor-footer">
                        <span class="badge ${actor.stance}">
                            ${projectData.taxonomy.stances[actor.stance]}
                        </span>

                        <span class="certitude">
                            Certitude : ${actor.certainty}
                        </span>
                    </div>
                `;

                card.addEventListener("click", () => openActorModal(actor));
                card.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openActorModal(actor);
                    }
                });

                grid.appendChild(card);
            });
        }

        function renderGriefs() {
            const container = document.getElementById("griefs-grid");
            container.innerHTML = "";

            if (projectData.griefs.length === 0) {
                container.innerHTML = `<div class="empty-state">Aucun grief formellement identifié dans cette extraction.</div>`;
                return;
            }

            projectData.griefs.forEach(grief => {
                const card = document.createElement("article");
                card.className = "grief-card";
                card.innerHTML = `
                    <h2>${grief.title}</h2>
                    <p>${grief.text}</p>
                `;
                container.appendChild(card);
            });
        }

        function renderLists() {
            const vigilanceList = document.getElementById("vigilance-list");
            const sourcesList = document.getElementById("sources-list");

            vigilanceList.innerHTML = "";
            sourcesList.innerHTML = "";

            if (projectData.vigilance.length === 0) {
                vigilanceList.innerHTML = `<li style="color: var(--text-muted); list-style: none;">Aucun point de vigilance identifié.</li>`;
            } else {
                projectData.vigilance.forEach(item => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = item;
                    vigilanceList.appendChild(listItem);
                });
            }

            if (projectData.sources.length === 0) {
                sourcesList.innerHTML = `<li style="color: var(--text-muted); list-style: none;">Aucune source identifiée.</li>`;
            } else {
                projectData.sources.forEach(item => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = item;
                    sourcesList.appendChild(listItem);
                });
            }
        }

        function switchTab(tabName, button) {
            document.querySelectorAll(".tab-btn").forEach(tabButton => {
                tabButton.classList.remove("active");
            });

            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
            });

            button.classList.add("active");
            document.getElementById(`tab-${tabName}`).classList.add("active");
        }

        function openActorModal(actor) {
            lastFocusedElement = document.activeElement;

            document.getElementById("modal-name").textContent = actor.name;
            document.getElementById("modal-role").textContent = actor.role;
            document.getElementById("modal-position").textContent = actor.position;
            document.getElementById("modal-verbatim").textContent = actor.evidence || "Aucun verbatim direct extrait dans le corpus.";
            document.getElementById("modal-certainty").textContent = actor.certainty;

            const badge = document.getElementById("modal-stance-badge");
            badge.className = `badge ${actor.stance}`;
            badge.textContent = projectData.taxonomy.stances[actor.stance];

            toggleModal(true);
        }

        function toggleModal(show) {
            const modal = document.getElementById("actor-modal");
            modal.classList.toggle("active", show);
            document.body.style.overflow = show ? "hidden" : "";

            if (show) {
                document.getElementById("close-modal").focus();
            } else if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("header-title").textContent = projectData.meta.title;
            document.getElementById("header-subtitle").textContent = projectData.meta.subtitle;

            renderFilters();
            renderGrid();
            renderGriefs();
            renderLists();

            document.querySelectorAll(".tab-btn").forEach(button => {
                button.addEventListener("click", () => switchTab(button.dataset.tab, button));
            });

            const searchInput = document.getElementById("actor-search");
            const clearButton = document.getElementById("clear-search");

            searchInput.addEventListener("input", () => {
                searchTerm = normalizeText(searchInput.value);
                clearButton.classList.toggle("visible", searchTerm !== "");
                renderGrid();
            });

            clearButton.addEventListener("click", () => {
                searchInput.value = "";
                searchTerm = "";
                clearButton.classList.remove("visible");
                renderGrid();
                searchInput.focus();
            });

            document.getElementById("reset-filters").addEventListener("click", () => {
                activeCategory = "all";
                activeStance = "all";
                searchTerm = "";
                searchInput.value = "";
                clearButton.classList.remove("visible");
                renderFilters();
                renderGrid();
            });

            document.getElementById("close-modal").addEventListener("click", () => toggleModal(false));

            document.getElementById("actor-modal").addEventListener("click", event => {
                if (event.target.id === "actor-modal") {
                    toggleModal(false);
                }
            });

            document.addEventListener("keydown", event => {
                if (event.key === "Escape" && document.getElementById("actor-modal").classList.contains("active")) {
                    toggleModal(false);
                }
            });
        });
