function getZombies(){
    $.get(`https://pvz-2-api.vercel.app/api/zombies`,
        function (zombiesData){
            for (let zombie of zombiesData){
                $.get(`https://pvz-2-api.vercel.app/api/zombies/${zombie}`, function (data) {
                const infoZombies = `
                <div class="zombies-info">
                <img class=imagen src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
         <h2>${data.name}</h2>
          <p><strong>Dureza:</strong> ${data.toughness || data.toughness}</p>
          ${data.speed ? `<p><strong>Velocidad:</strong> ${data.speed}</p>` : ``}
          ${data.stamina ? `<p><strong>Resistencia:</strong> ${data.stamina}</p>` : ``}
          ${data.description ? `<p class="description"><strong>Descripción:</strong> ${data.description}</p>` : ``}
        </div>`;

        $("#zombies-list").append(infoZombies);
                });
            }
        }
    );
}
$(document).ready(function () {
    getZombies();
});