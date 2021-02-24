//num 14
function getproduits() {
  const url =
    "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/14/produits";
  // -- option pour faire la req AJAX -> ici req GET
  let fetchOptions = { method: "GET" };
  // -- faire la req AJAX vers le serveur pour récuperer le contenu du frigo
  // -- req HTTP vers le serveur et attente (en asynchrone) de la réponse
  fetch(url, fetchOptions)
    .then((response) => {
      // -- réponse au sens du protocole HTTP
      return response.json(); // -- extraire les données au format JSON
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées au format JSON
      console.log(dataJSON);
      let produits = dataJSON.results; // les films sont le tableau "results"

      //ranger par ordre alphabétique
      produits.sort((p1, p2) => {
        return p1.name < p2.name;
      });

      let resHTML = ""; // variable pour contenir le html généré
      // boucle sur le tableau des produits
      for (let p of produits) {
        resHTML =
          resHTML + '<option value="' + p.url + '">' + p.name + "</option>";
      }
      // insérer le HTML dans la liste <ul></ul> du fichier index.html
      document.getElementById("liste").innerHTML = resHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}

getproduits();
