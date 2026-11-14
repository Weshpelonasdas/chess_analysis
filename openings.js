/**
 * Répertoire complet d'ouvertures d'échecs
 * 80+ ouvertures avec coups théoriques et explications
 * Format: [nom, coups_SAN, explication]
 */
const OP=[
// ═══════ 1.e4 e5 ═══════
['Italienne — Giuoco Piano','e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3','Bc4 vise f7 et d5 ; plan c3-d4 ouvre le centre rapidement.'],
['Italienne — Evans Gambit','e4 e5 Nf3 Nc6 Bc4 Bc5 b4','Sacrifice b4 pour gagner du temps et ouvrir le centre. Ouverture romantique du XIXe siècle.'],
['Italienne — Deux Cavaliers','e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5','4…Nf6 crée des complications tactiques aiguës.'],
['Espagnole — Ruy Lopez','e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O','Le grand classique. Pression chronique sur e5. Kasparov, Fischer, Carlsen.'],
['Espagnole — Berlin','e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5','Ultra-solide. Kramnik bat Kasparov en 2000 avec cette défense.'],
['Espagnole — Marshall','e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5','Gambit Marshall : sacrifice de pion pour une attaque persistante.'],
['Espagnole — Schliemann','e4 e5 Nf3 Nc6 Bb5 f5','Contre-attaque agressive des Noirs contre la Ruy Lopez.'],
['Espagnole — Variante Fermée','e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4','La ligne principale moderne. Manœuvres profondes.'],
['Écossaise','e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6','Centre ouvert, jeu très direct. Kasparov années 90.'],
['Écossaise — Gambit','e4 e5 Nf3 Nc6 d4 exd4 Bc4','Variante gambitative, prêt à sacrifier pour initiative.'],
['Gambit du Roi — Accepté','e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4','Le plus romantique des gambits, favori du XIXe siècle.'],
['Gambit du Roi — Refusé','e4 e5 f4 Bc5 Nf3 d6 Nc3 Nc6','Les Noirs refusent le pion et jouent solidement avec Fc5.'],
['Vienne','e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3','Transposition possible vers le Gambit du Roi, flexible.'],
['Petroff — Défense Russe','e4 e5 Nf3 Nf6 Nxe5 d6 Nd3 Nxe4 Qe2 Qe7','Hyper-solide, choisie par Kramnik, Anand, Caruana. Vise les nulles.'],
['Défense Philidor','e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 O-O O-O','Solide mais passif ; le fou c8 est souvent problématique.'],
['Quatre Cavaliers','e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6','Position symétrique, très équilibrée.'],
['Ponziani','e4 e5 Nf3 Nc6 c3 d5 Qa4 f6','Ouverture ancienne préparant d4.'],
['Centre Game','e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4','Les Blancs sortent la Dame tôt, position un peu lâche.'],

// ═══════ 1.e4 — Sicilienne ═══════
['Sicilienne — Najdorf','e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7','La défense la plus populaire au monde. Fischer et Kasparov.'],
['Sicilienne — Dragon','e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6','Agressive ; les Noirs attaquent avec …Rxc3 et …d5.'],
['Sicilienne — Dragon Accéléré','e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4','Les Noirs jouent g6 sans d6, permettant …d5 en un coup.'],
['Sicilienne — Scheveningen','e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Be2 Be7 O-O O-O f4','Structure en hérisson, flexible et solide.'],
['Sicilienne — Sveshnikov','e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5','Faiblesse en d6 compensée par une case forte en d4.'],
['Sicilienne — Kan','e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6','Les Noirs attendent de voir le plan des Blancs avant de s\'engager.'],
['Sicilienne — Taimanov','e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6','Flexible : les Noirs retardent …d6 et gardent leurs options.'],
['Sicilienne — Sozin','e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bc4 e6 Bb3 Be7 Be3','Fischer adorait l\'attaque Sozin pour sa force directe.'],
['Sicilienne — Richter-Rauzer','e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 a6 O-O-O','Blancs roquent côté Dame, attaque directe côté roi.'],
['Sicilienne — Alapin (c3)','e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 e6 cxd4 d6','Alternative solide évitant la théorie profonde.'],
['Sicilienne — Grand Prix','e4 c5 Nc3 Nc6 f4 g6 Nf3 Bg7 Bb5 Nd4 O-O','Attaque f4 rapide sans jouer d4, très agressive.'],
['Sicilienne — Morra Gambit','e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6 O-O Nf6','Sacrifice pour développement rapide contre la Sicilienne.'],
['Sicilienne — Closed (Fermée)','e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 f4','Les Blancs ne jouent pas d4, préparent f4 pour l\'initiative.'],

// ═══════ 1.e4 — Autres ═══════
['Française — Winawer','e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7','Les Noirs doublent les pions blancs en c.'],
['Française — Classique','e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4','Libérer le fou c8 est le défi principal.'],
['Française — Avance','e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6','Blancs occupent l\'espace, Noirs contre-jouent en c5.'],
['Française — Tarrasch','e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2','Structure de pion isolé possible.'],
['Française — Échange','e4 e6 d4 d5 exd5 exd5 Nf3 Nf6 Bd3 Be7 O-O O-O','Position symétrique, avantage blanc minimal.'],
['Caro-Kann — Classique','e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7','Très solide. Fou développé avant e6.'],
['Caro-Kann — Avance','e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Ne7 O-O c5','Blancs avancent en e5, Noirs contre-jouent c5.'],
['Caro-Kann — Panov','e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5','Structure type Dame, jeu actif.'],
['Caro-Kann — Karpov (Nd2)','e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6','Karpov jouait cela pour simplifier.'],
['Pirc — Autrichienne','e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O e5 dxe5 fxe5 Nd5','Très agressif, poussée f4-e5.'],
['Pirc — Classique','e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6','Jeu classique, les Noirs temporisent.'],
['Alekhine','e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7','Provocatrice : inviter les pions à avancer pour les attaquer.'],
['Scandinave','e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 Bf5 Bc4 e6','Dame sort tôt, compensé par structure solide.'],
['Scandinave — Variante Nf6','e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6 c4 Nb6 Nc3 Bg7','Le cavalier en b6 est inhabituel mais solide.'],
['Défense Moderne','e4 g6 d4 Bg7 Nc3 d6 Nf3 Nf6 Be2 O-O O-O c6','g6 sans d5, très flexible.'],

// ═══════ 1.d4 d5 ═══════
['Gambit Dame — Accepté','d4 d5 c4 dxc4 e3 Nf6 Bxc4 e6 Nf3 c5 O-O a6 Bb3','Les Noirs acceptent le pion et jouent c5 pour libérer leur jeu.'],
['Gambit Dame — Orthodoxe','d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3','La ligne classique du GDR. Lasker, Capablanca, Petrosian.'],
['Gambit Dame — Cambridge Springs','d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 c6 e3 Qa5','Pression inattendue sur c3 et d2.'],
['Gambit Dame — Ragozin','d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4','Hybride GDR/Nimzo, dynamique.'],
['Gambit Dame — Échange','d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6 e3 Be7','Jeu de minorité classique côté dame.'],
['Gambit Dame — Tarrasch','d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O','Pion isolé d5 mais jeu très actif des Noirs.'],
['Slave — Défense','d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4 O-O O-O','c6 soutient d5, très solide. Le fou sort avant que e6 ne le bloque.'],
['Slave — Semi-Slave','d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7','Flexible, les Noirs gardent les options ouvertes.'],
['Slave — Meran','d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7 Bd3 dxc4 Bxc4 b5','Contre-jeu actif des Noirs côté dame.'],
['Slave — Anti-Meran (Shirov)','d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 Bg5 h6 Bh4 dxc4 e4 g5 Bg3 b5','Très agressif, attaque de pions côté roi.'],
['Colle System','d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 c3 Nc6 Nbd2 Be7 O-O O-O','Simple et efficace, plan e3-e4 typique.'],
['Colle — Zukertort','d4 Nf6 Nf3 e6 e3 d5 Bd3 c5 O-O Nc6 b3 Be7 Bb2','Développement harmonieux, plan e3-e4.'],

// ═══════ 1.d4 Nf6 — Systèmes Indiens ═══════
['Est-Indienne — Classique','d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6','Les Noirs contre-jouent avec …e5 et …Cd4 ou …f5.'],
['Est-Indienne — Quatre Pions','d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5','4 pions en avant, très agressif.'],
['Est-Indienne — Sämisch','d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2','Prépare g4-h4, attaque de roque direct.'],
['Est-Indienne — Mar del Plata','d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7','Noirs f5-f4 côté roi, Blancs c5-b4 côté dame. Position très asymétrique.'],
['Ouest-Indienne','d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Nc3 Ne4','Le fou b7 presse la diagonale a8-h1.'],
['Nimzo-Indienne — Classique','d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b6','Les Noirs échangent le fou pour doubler les pions blancs en c.'],
['Nimzo-Indienne — Rubinstein','d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 Nf3 c5 O-O Nc6','Solide et positionnelle. Rubinstein l\'a popularisée.'],
['Nimzo-Indienne — Kasparov (4.Cf3)','d4 Nf6 c4 e6 Nc3 Bb4 Nf3 b6 Bg5 Bb7 e3 h6 Bh4 g5 Bg3 Ne4','Kasparov a développé cette ligne pour déséquilibrer.'],
['Nimzo-Indienne — Leningrad','d4 Nf6 c4 e6 Nc3 Bb4 Bg5 h6 Bh4 c5 d5 d6 e3 Bxc3+ bxc3 e5','Les Blancs acceptent les pions doublés mais gardent la paire de fous.'],
['Catalane','d4 Nf6 c4 e6 Nf3 d5 g3 Be7 Bg2 O-O O-O dxc4 Qc2 a6 Qxc4 b5','Pression durable sur la diagonale g2-a8. Favori de Kramnik.'],
['Catalane — Ouverte','d4 Nf6 c4 e6 Nf3 d5 g3 dxc4 Bg2 Bb4+ Bd2 a5','Les Noirs gardent le pion c4 avec a5.'],
['Grünfeld — Défense','d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3 c5 Be3 Qa5','Les Noirs attaquent directement le centre d4-e4. Kasparov adorait.'],
['Grünfeld — Échange','d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 c5 Ne2 Nc6','Grand centre blanc, les Noirs le bombardent.'],
['Benoni — Moderne','d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 f4 Bg7','Très déséquilibré. Noirs visent b2, Blancs attaquent avec f4-f5.'],
['Volga — Benko Gambit','d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6','Sacrifice de pions pour pression durable sur colonnes a et b.'],
['Budapest Gambit','d4 Nf6 c4 e5 dxe5 Ng4 Nf3 Bc5 e3 Nc6 Be2 O-O O-O','Contre-gambit surprenant qui perturbe le jeu blanc.'],

// ═══════ 1.d4 — Autres systèmes ═══════
['Système de Londres','d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Bd3 Bd6 Nbd2 O-O O-O','Simple et efficace. Conseillé aux débutants, peu de théorie.'],
['Trompovsky','d4 Nf6 Bg5 Ne4 Bf4 d5 e3 Nf6 Bd3 g6','Alternative agressive à 1.d4, évite les grandes théories.'],
['Torre','d4 Nf6 Nf3 e6 Bg5 d5 e3 Be7 Bd3 O-O Nbd2','Développement logique, pression sur f6.'],
['Attaque Barry','d4 Nf6 Nf3 g6 Nc3 d5 Bf4 Bg7 e3 O-O Be2','Système simple avec Ff4, bon pour les joueurs de club.'],

// ═══════ Hollandaise ═══════
['Hollandaise — Classique','d4 f5 Nf3 Nf6 g3 e6 Bg2 Be7 O-O O-O c4 d6','Les Noirs occupent e4 avec leur cavalier.'],
['Hollandaise — Leningrad','d4 f5 c4 Nf6 Nc3 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nc6 d5','Structure fianchetto, pression.'],
['Hollandaise — Stonewall','d4 f5 c4 e6 Nc3 Nf6 Nf3 d5 g3 c6 Bg2 Be7 O-O O-O','Pions e6-f5-d5-c6 bloquent le centre.'],

// ═══════ 1.c4 — Anglaise ═══════
['Anglaise — Sicilienne renversée','c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O','Les Blancs jouent une Sicilienne avec un temps de plus.'],
['Anglaise — Symétrique','c4 c5 Nc3 Nc6 Nf3 Nf6 g3 g6 Bg2 Bg7 O-O O-O d4 cxd4 Nxd4','Positions équilibrées et manœuvrières.'],
['Anglaise — Quatre Cavaliers','c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6','Flexible, transpositions possibles vers plein d\'ouvertures.'],

// ═══════ 1.Nf3 ═══════
['Réti','Nf3 d5 c4 d4 b4 g6 Bb2 Bg7 g3 Nf6 Bg2 O-O O-O','Hypermoderne : les Blancs contrôlent le centre depuis les flancs.'],
['Attaque Indienne du Roi (KIA)','Nf3 d5 g3 Nf6 Bg2 e6 O-O Be7 d3 O-O Nbd2 c5 e4','Système universel, jouable contre presque tout.'],

// ═══════ Ouvertures originales ═══════
['Larsen (1.b3)','b3 e5 Bb2 Nc6 e3 d5 Bb5 Bd6 Nf3','Le fou b2 presse e5 ; hypermoderne et original.'],
['Orang-Outan (1.b4)','b4 e5 Bb2 f6 e4 Bxb4 Bc4','Gambit exotique, déboussole les adversaires.'],
['Bird (1.f4)','f4 d5 Nf3 Nf6 e3 g6 Be2 Bg7 O-O O-O d3 c5','Similaire au London mais avec f4, jeu d\'attaque.'],

// ═══════ Gambits spéciaux ═══════
['Gambit Blackmar-Diemer','d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3','Gambit audacieux en 1.d4 pour ouvrir le jeu.'],
['Gambit Staunton','d4 f5 e4 fxe4 Nc3 Nf6 Bg5 Nc6 d5','Gambit contre la Hollandaise, très agressif.'],
['Défense Chigorin','d4 d5 c4 Nc6 Nc3 dxc4 Nf3 Nf6 e3 e5','Idées originales de Chigorin : cavaliers contre fous.'],
['Albin Counter-Gambit','d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3 Be6','Contre-gambit au Gambit Dame.'],
['Blumenfeld Gambit','d4 Nf6 c4 e6 Nf3 c5 d5 b5 dxe6 fxe6 cxb5 d5','Sacrifice de deux pions pour liberté et jeu actif.'],
['Défense Nimzowitsch (1…Cc6)','e4 Nc6 d4 d5 e5 Bf5 Nc3 e6 Nf3','Hypermoderne, cavalier en c6 d\'emblée.'],
['Hérisson — Hedgehog','c4 c5 Nf3 Nf6 g3 e6 Bg2 Be7 O-O O-O Nc3 a6 d4 cxd4 Nxd4 Qc7','Pions a6-b6-d6-e6, prêts à avancer …b5 ou …d5.'],
['Hippopotame','e4 g6 d4 b6 Nc3 Bb7 Nf3 e6 Bd3 d6 O-O Nd7','Tous les pions en 2e/3e rangée, développement très tardif.']
];
