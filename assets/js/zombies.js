function getZombies(){
    $.get(`https://pvz-2-api.vercel.app/api/zombies`,
        function (zombiesData){
            for (let zombie of zombiesData){
                $.get(`https://pvz-2-api.vercel.app/api/zombies/${zombie}`, function (data) {
                const infoZombies = `
                <div class="zombies-info">
                    <img class=imagen src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
                    <h2>${data.name}</h2>
                    <p><strong>Dureza:</strong> ${data.toughness ? data.toughness : "Desconocida"}</p>
                    <p><strong>Velocidad:</strong> ${data.speed ? data.speed : "No calculada"}</p>
                    <p><strong>Resistencia:</strong> ${data.stamina ? data.stamina : "Desconocida"}</p>
                    <p class="description"><strong>Descripción:</strong> ${!data.description.startsWith("No-data") ? data.description : "Desconocida"}</p>
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