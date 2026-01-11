// 🔹 Données maintenances principales + secondaires
const maintenances = [
  { id:1, titre:"Vidange moteur", intervalle_km:10000, intervalle_mois:12 },
  { id:2, titre:"Filtre à huile", intervalle_km:10000, intervalle_mois:12 },
  { id:3, titre:"Filtre à air", intervalle_km:30000, intervalle_mois:24 },
  { id:4, titre:"Filtre habitacle", intervalle_km:20000, intervalle_mois:12 },
  { id:5, titre:"Bougies", intervalle_km:40000, intervalle_mois:36 },
  { id:6, titre:"Liquide de frein", intervalle_km:0, intervalle_mois:24 },
  { id:7, titre:"Plaquettes de frein", intervalle_km:0, intervalle_mois:0 },
  { id:8, titre:"Disques de frein", intervalle_km:0, intervalle_mois:0 },
  { id:9, titre:"Liquide de refroidissement", intervalle_km:0, intervalle_mois:48 },
  { id:10, titre:"Courroie accessoires", intervalle_km:80000, intervalle_mois:0 },
  { id:11, titre:"Contrôle éclairage", intervalle_km:15000, intervalle_mois:12 },
  { id:12, titre:"Contrôle pneus", intervalle_km:5000, intervalle_mois:6 },
  { id:13, titre:"Batterie", intervalle_km:0, intervalle_mois:36 }
];

// 🔹 Tutoriels complets avec outils/pièces/photos
const tutos = [
  // Vidange moteur
  {
    titre:"Vidange moteur",
    outils:[
      { nom:"Clé à filtre", mini:"83 19 0 418 398", generique:"Clé filtre universelle", liens:[
        {site:"Amazon", url:"https://www.amazon.fr/s?k=Clé+filtre+universelle"},
        {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Clé+filtre+universelle"},
        {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Clé+filtre+universelle"}
      ]}
    ],
    pieces:[
      { nom:"Filtre à huile", mini:"11 42 7 783 213", generique:"Filtre à huile moteur F56", liens:[
        {site:"Amazon", url:"https://www.amazon.fr/s?k=Filtre+huile+F56"},
        {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Filtre+huile+F56"},
        {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Filtre+huile+F56"}
      ]}
    ],
    etapes:[
      "Faire chauffer le moteur",
      "Lever le véhicule en sécurité",
      "Dévisser le bouchon de vidange",
      "Remplacer le filtre à huile",
      "Remplir avec huile neuve",
      "Démarrer et vérifier le niveau"
    ],
    images:[
      "images/vidange/vidange1.jpg",
      "images/vidange/vidange2.jpg",
      "images/vidange/vidange3.jpg"
    ]
  },
  // Bougies
  {
    titre:"Remplacement des bougies",
    outils:[
      { nom:"Douille bougie", mini:"12 12 0 417 682", generique:"Douille bougie 16mm", liens:[
        {site:"Amazon", url:"https://www.amazon.fr/s?k=Douille+bougie+16mm"},
        {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Douille+bougie+16mm"},
        {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Douille+bougie+16mm"}
      ]}
    ],
    pieces:[
      { nom:"Bougies", mini:"12 12 0 417 674", generique:"Bougie Iridium F56", liens:[
        {site:"Amazon", url:"https://www.amazon.fr/s?k=Bougie+Iridium+F56"},
        {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Bougie+Iridium+F56"},
        {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Bougie+Iridium+F56"}
      ]}
    ],
    etapes:[
      "Déposer le cache moteur",
      "Débrancher les bobines",
      "Extraire les anciennes bougies",
      "Installer les nouvelles bougies",
      "Serrer au couple constructeur"
    ],
    images:[
      "images/bougies/bougie1.jpg",
      "images/bougies/bougie2.jpg"
    ]
  },
  // Filtre à air
  {
    titre:"Remplacement du filtre à air",
    outils:[{ nom:"Tournevis cruciforme", mini:"–", generique:"Tournevis cruciforme", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Tournevis+cruciforme"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Tournevis+cruciforme"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Tournevis+cruciforme"}
    ]}],
    pieces:[{ nom:"Filtre à air", mini:"13 71 7 642 422", generique:"Filtre à air Mini F56", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Filtre+air+F56"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Filtre+air+F56"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Filtre+air+F56"}
    ]}],
    etapes:[
      "Ouvrir le capot moteur",
      "Dévisser le boîtier du filtre",
      "Retirer l'ancien filtre",
      "Insérer le nouveau filtre",
      "Refermer le boîtier et vérifier l'étanchéité"
    ],
    images:[
      "images/filtre_air/air1.jpg",
      "images/filtre_air/air2.jpg"
    ]
  },
  // Filtre habitacle
  {
    titre:"Remplacement du filtre habitacle",
    outils:[{ nom:"Tournevis plat", mini:"–", generique:"Tournevis plat", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Tournevis+plat"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Tournevis+plat"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Tournevis+plat"}
    ]}],
    pieces:[{ nom:"Filtre habitacle", mini:"64 11 9 086 551", generique:"Filtre habitacle F56", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Filtre+habitacle+F56"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Filtre+habitacle+F56"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Filtre+habitacle+F56"}
    ]}],
    etapes:[
      "Ouvrir le compartiment sous le tableau de bord",
      "Retirer le cache du filtre",
      "Extraire l'ancien filtre",
      "Insérer le nouveau filtre en respectant le sens du flux",
      "Refermer le cache"
    ],
    images:[
      "images/filtre_habitacle/habitacle1.jpg",
      "images/filtre_habitacle/habitacle2.jpg"
    ]
  },
  // Plaquettes de frein
  {
    titre:"Remplacement plaquettes de frein",
    outils:[{ nom:"Clé dynamométrique", mini:"–", generique:"Clé dynamométrique 10-100Nm", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Clé+dynamométrique"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Clé+dynamométrique"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Clé+dynamométrique"}
    ]}],
    pieces:[{ nom:"Plaquettes avant", mini:"34 11 6 766 677", generique:"Plaquettes frein F56", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Plaquettes+frein+F56"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Plaquettes+frein+F56"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Plaquettes+frein+F56"}
    ]}],
    etapes:[
      "Lever la voiture et retirer la roue",
      "Dévisser l'étrier de frein",
      "Retirer les anciennes plaquettes",
      "Installer les nouvelles plaquettes",
      "Reposer l'étrier et serrer au couple",
      "Remettre la roue et contrôler"
    ],
    images:[
      "images/plaquettes/plaquettes1.jpg",
      "images/plaquettes/plaquettes2.jpg"
    ]
  },
  // Disques de frein
  {
    titre:"Remplacement des disques de frein",
    outils:[{ nom:"Clé à choc / dynamométrique", mini:"–", generique:"Clé à choc ou dynamométrique", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Clé+à+choc"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Clé+à+choc"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Clé+à+choc"}
    ]}],
    pieces:[{ nom:"Disques de frein avant", mini:"34 21 6 756 435", generique:"Disque frein F56", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Disque+frein+F56"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Disque+frein+F56"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Disque+frein+F56"}
    ]}],
    etapes:[
      "Lever la voiture et retirer la roue",
      "Retirer l'étrier et le suspendre",
      "Retirer l'ancien disque",
      "Installer le nouveau disque",
      "Remonter l'étrier et serrer au couple",
      "Remettre la roue"
    ],
    images:[
      "images/disques/disques1.jpg",
      "images/disques/disques2.jpg"
    ]
  },
  // Liquide de frein
  {
    titre:"Remplacement liquide de frein",
    outils:[{ nom:"Purgeur / seringue", mini:"–", generique:"Kit purge liquide frein", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Kit+purge+frein"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Kit+purge+frein"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Kit+purge+frein"}
    ]}],
    pieces:[{ nom:"Liquide de frein DOT4", mini:"–", generique:"Liquide de frein DOT4", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Liquide+frein+DOT4"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Liquide+frein+DOT4"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Liquide+frein+DOT4"}
    ]}],
    etapes:[
      "Ouvrir le bocal du maître-cylindre",
      "Purger chaque étrier avec kit de purge",
      "Compléter le bocal avec liquide neuf",
      "Vérifier l'absence de bulles d'air"
    ],
    images:[
      "images/liquide_frein/liquide1.jpg",
      "images/liquide_frein/liquide2.jpg"
    ]
  },
  // Liquide de refroidissement
  {
    titre:"Remplacement liquide de refroidissement",
    outils:[{ nom:"Entonnoir, clé", mini:"–", generique:"Clé et entonnoir standard", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Clé+standard"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Clé+standard"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Clé+standard"}
    ]}],
    pieces:[{ nom:"Liquide de refroidissement MINI", mini:"81 22 9 407 452", generique:"Liquide de refroidissement F56", liens:[
      {site:"Amazon", url:"https://www.amazon.fr/s?k=Liquide+refroidissement+F56"},
      {site:"Oscaro", url:"https://www.oscaro.com/recherche?search=Liquide+refroidissement+F56"},
      {site:"eBay", url:"https://www.ebay.fr/sch/i.html?_nkw=Liquide+refroidissement+F56"}
    ]}],
    etapes:[
      "Ouvrir le bouchon radiateur à froid",
      "Vidanger le liquide ancien",
      "Remplir avec liquide neuf",
      "Purger le circuit via vis purge",
      "Vérifier niveau moteur froid"
    ],
    images:[
      "images/liquide_refroidissement/refroidissement1.jpg",
      "images/liquide_refroidissement/refroidissement2.jpg"
    ]
  }
  // 🔹 Pour les autres tutos secondaires (courroie accessoires, batterie, éclairage, pneus) tu peux les ajouter de la même façon
];

// 🔹 Fonction onglets
function show(section) {
  document.getElementById("maintenance").style.display="none";
  document.getElementById("tutos").style.display="none";
  document.getElementById(section).style.display="block";
  document.getElementById("btn-maintenance").classList.remove("active");
  document.getElementById("btn-tutos").classList.remove("active");
  document.getElementById("btn-" + section).classList.add("active");
}

// 🔹 Calcul prochain entretien
function calcNext(dateStr, intervalMois) {
  if(!dateStr || intervalMois===0) return null;
  const date = new Date(dateStr);
  date.setMonth(date.getMonth()+intervalMois);
  return date;
}

// 🔹 Couleur alerte
function statusColor(nextDate) {
  if(!nextDate) return '';
  const today = new Date();
  const diff = (nextDate - today)/(1000*60*60*24);
  if(diff<0) return 'rouge';
  if(diff<=30) return 'orange';
  return 'vert';
}

// 🔹 Charger maintenances
function loadMaintenance(){
  const container=document.getElementById("maintenance");
  container.innerHTML="";
  maintenances.forEach(m=>{
    const km = localStorage.getItem("km"+m.id) || '';
    const date = localStorage.getItem("date"+m.id) || '';
    const next = calcNext(date, m.intervalle_mois);
    const color = statusColor(next);
    const nextStr = next ? next.toLocaleDateString('fr-FR') : '';
    container.innerHTML+=`
      <div class="card">
        <h3>${m.titre}</h3>
        <div class="small">Intervalle: ${m.intervalle_km>0 ? m.intervalle_km+" km / " : ""}${m.intervalle_mois>0 ? m.intervalle_mois+" mois" : "—"}</div>
        <input placeholder="Dernier km" value="${km}" onchange="localStorage.setItem('km${m.id}', this.value)">
        <input type="date" placeholder="Date dernier entretien" value="${date}" onchange="localStorage.setItem('date${m.id}', this.value)">
        ${nextStr ? `<div class="status ${color}">Prochain entretien: ${nextStr}</div>` : ''}
      </div>`;
  });
}

// 🔹 Charger tutoriels
function loadTutos(){
  const container=document.getElementById("tutos");
  container.innerHTML="";
  tutos.forEach(t=>{
    container.innerHTML+=`
      <div class="card">
        <h3>${t.titre}</h3>
        <strong>Photos :</strong>
        <div class="photos">
          ${t.images.map(img=>`<img src="${img}">`).join('')}
        </div>
        <strong>Outils :</strong>
        <ul>
          ${t.outils.map(o=>`<li>${o.nom} (MINI: ${o.mini}, générique: ${o.generique}) <br>
            ${o.liens.map(l=>`<a href="${l.url}" target="_blank">${l.site}</a>`).join(' | ')}</li>`).join("")}
        </ul>
        <strong>Pièces :</strong>
        <ul>
          ${t.pieces.map(p=>`<li>${p.nom} (MINI: ${p.m
