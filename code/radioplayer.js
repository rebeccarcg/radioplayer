// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
const parentElement = document.getElementById("channels");

const start = async () => {
  // hämtar responsen från url via fetch
  const response = await fetch(
    "http://api.sr.se/api/v2/channels?format=json&size=100"
  );
  // Här ändrar vi datan till json
  const data = await response.json();
  // kolla så att det funkar
  console.log("response", response);
  console.log("data", data);

  data.channels.forEach((ourRadioInfo) => {
    console.log(ourRadioInfo);

    const audiotag = document.createElement("div");
    audiotag.className = "container";
    audiotag.innerHTML = `<img class ="image" src = "${ourRadioInfo.image}"/> <div class="radioText"> <h2>${ourRadioInfo.name}</h2> <audio controls> <source src="${ourRadioInfo.liveaudio.url}" type="audio/mpeg" />
     </audio> </div> `;

    audiotag.style.backgroundColor = `#${ourRadioInfo.color}`;

    //Hämtar bilder från

    parentElement.appendChild(audiotag);
  });
};

start(); //Anropar funktionen

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
