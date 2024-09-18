function getPlantas() {
  $.get(`https://pvz-2-api.vercel.app/api/plants/`, function (plantasData) {
    for (let planta of plantasData) {
      $.get(`https://pvz-2-api.vercel.app/api/plants/${planta}`, function (data) {
        const infoPlantas = `
        <div class="plant-info">
          <img src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
          <h2>${data.name}</h2>
          <p><strong>Costo:</strong> ${data["Sun cost"] || data["cost"] ? data["Sun cost"] || data["cost"] : "Desconocida"}</p>
          <p><strong>Recarga:</strong> ${data.Recharge || data.recharge ? data.Recharge || data.recharge : "Desconocida"}</p>
          <p><strong>Daño:</strong> ${data.damage ? data.damage : "Desconocida"}</p>
          <p><strong>Dureza:</strong> ${data.Toughness ? data.Toughness : "Desconocida"}</p>
          <p><strong>Rango:</strong> ${data.range ? data.range : "No calculado"}</p>
          <p><strong>Powerup:</strong> ${data.powerup ? data.powerup : "Desconocida"}</p>
          <p><strong>Especial:</strong> ${data.Special ? data.Special : "No es especial"}</p>
          ${data.Family || data.family ? `<p><strong>Familia:</strong> ${data.Family || data.family}</p>` : ``}
          <strong>Descripción:</strong> ${data.description ? data.description : "Desconocida"}</p>
        </div>`;
        
        $("#plant-list").append(infoPlantas);
      });
    }
  });
}

$(document).ready(function () {
  getPlantas();
});