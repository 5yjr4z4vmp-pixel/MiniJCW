// 🔹 Données maintenance
const maintenances = [
  { id:1, titre:"Vidange moteur", intervalle:"10 000 km / 1 an" },
  { id:2, titre:"Filtre à huile", intervalle:"À chaque vidange" },
  { id:3, titre:"Filtre à air", intervalle:"30 000 km" },
  { id:4, titre:"Filtre habitacle", intervalle:"20 000 km / 1 an" },
  { id:5, titre:"Bougies", intervalle:"40 000 km" },
  { id:6, titre:"Liquide de frein", intervalle:"2 ans" },
  { id:7, titre:"Plaquettes de frein", intervalle:"Selon usure" },
  { id:8, titre:"Disques de frein", intervalle:"Selon usure" },
  { id:9, titre:"Liquide de refroidissement", intervalle:"4 ans" },
  { id:10, titre:"Courroie accessoires", intervalle:"80 000 km" }
];

// 🔹 Tutoriels
const tutos = [
  {
    titre:"Vidange moteur",
    outils:["Clé à filtre","Clé dynamométrique","Bac de vidange","Huile 0W-30 norme BMW"],
    etapes:[
      "Faire chauffer le moteur",
      "Lever le véhicule en sécurité",
      "Dévisser le bouchon de vidange",
      "Remplacer le filtre à huile",
      "Remplir avec huile neuve",
      "Démarrer et vérifier le niveau"
    ]
  },
  {
    titre:"Remplacement des bougies",
    outils:["Douille bougie","Clé dynamométrique","Graisse céramique"],
    etapes:[
      "Déposer le cache moteur",
      "Débrancher les bobines",
      "Extraire les anciennes bougies",
      "Installer les nouvelles bougies",
      "Serrer au couple constructeur"
    ]
  },
  {
    titre:"Changement filtre à air",
    outils:["Tournevis cruciforme","Filtre neuf"],
    etapes:[
      "Ouvrir le boîtier du filtre à air",
      "Retirer l’ancien filtre",
      "Installer le filtre neuf",
      "Refermer le boîtier"
    ]
  },
  {
    titre:"Changement filtre habitacle",
    outils:["Tournevis cruciforme","Filtre neuf"],
    etapes:[
      "Ouvrir le compartiment sous la boîte à gants",
      "Retirer le filtre usagé",
      "Installer le nouveau filtre",
      "Refermer le compartiment"
    ]
  },
  {
    titre:"Liquide de frein",
    outils:["Bac de récupération","Kit purge frein","Liquide DOT 4"],
    etapes:[
      "Lever le véhicule",
      "Purger chaque roue en commençant par l’arrière droite",
      "Remplir le réservoir de liquide neuf",
      "Vérifier niveau et freins"
    ]
  },
  {
    titre:"Plaquettes de frein",
    outils:["Clé dynamométrique","Crics","Cales","Nouvelle plaquette"],
    etapes:[
      "Lever le véhicule",
      "Retirer la roue",
      "Démonter l’étrier",
      "Remplacer les plaquettes",
      "Remonter et serrer au couple",
      "Vérifier fonctionnement"
    ]
  }
];

// 🔹 Changement d’onglet
function show(section) {
  document.getElementById("maintenance").style.display="none";
  document.getElementById("tutos").style.display="none";
  document.getElementById(section).style.display="block";

  document.getElementById("btn-maintenance").classList.remove("active");
  document.getElementById("btn-tutos").classList.remove("active");
  document.getElementById("btn-" + section).classList.add("active");
}

// 🔹 Charger les maintenances
function loadMaintenance(){
  const container=document.getElementById("maintenance");
  container.innerHTML="";
  maintenances.forEach(m=>{
    const saved=localStorage.getItem("m"+m.id) || "";
    container.innerHTML+=`
      <div class="card">
        <h3>${m.titre}</h3>
        <div class="small">Intervalle : ${m.intervalle}</div>
        <input placeholder="Dernier km / date" value="${saved}"
          onchange="localStorage.setItem('m${m.id}', this.value)">
      </div>`;
  });
}

// 🔹 Charger les tutos
function loadTutos(){
  const container=document.getElementById("tutos");
  container.innerHTML="";
  tutos.forEach(t=>{
    container.innerHTML+=`
      <div class="card">
        <h3>${t.titre}</h3>
        <strong>Outils :</strong>
        <ul>${t.outils.map(o=>`<li>${o}</li>`).join("")}</ul>
        <strong>Étapes :</strong>
        <ol>${t.etapes.map(e=>`<li>${e}</li>`).join("")}</ol>
      </div>`;
  });
}

loadMaintenance();
loadTutos();
