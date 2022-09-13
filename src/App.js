import React from "react";
import "./styles.css";
import { useState } from "react";

const travelPlace = {
  "Beach areas": [
    { placetype: "Islands" },
    { place: "Majuli Island", rating: "Rating-9.5/10" },
    { place: "Diu Island ", rating: "Rating-7.5/10" },
    { place: "Divar Island ", rating: "Rating-9/10" },
    { placetype: "Beachresorts" },
    { place: "Le Pondy", rating: "Rating-9/10" },
    { place: "MAYFAIR Palm Beach Resort ", rating: "Rating-9.5/10" },
    { place: "Munjoh Ocean Resort, Havelock Island ", rating: "Rating-9/10" },
    { placetype: "Secluded beaches" },
    { place: "Om Beach, Karnataka", rating: "Rating-9.8/10" },
    { place: "Butterfly Beach, Goa", rating: "Rating-9/10" },
    { place: "Astaranga Beach, Odisha", rating: "Rating-8/10" }
  ],
  "Natural areas": [
    { placetype: "Mountain areas" },
    { place: "Kanchenjunga Mountain", rating: "Rating-9.5/10" },
    { place: "Mullayanagiri ", rating: "Rating-9/10" },
    { place: "Tadiandamol Peak ", rating: "Rating-9/10" },
    { placetype: "Forests" },
    { place: "Gavi Forest", rating: "Rating-8/10" },
    { place: "Polo Forest", rating: "Rating-9/10" },
    { place: "Bengal Safari", rating: "Rating-7/10" },
    { placetype: "Countryside areas" },
    { place: "Poovar, Kerala ", rating: "Rating-9/10" },
    { place: "Malana, Himachal Pradesh", rating: "Rating-8/10" },
    { place: "Kasol, Himachal Pradesh", rating: "Rating-9.2/10" }
  ],
  "Towns and cities": [
    { place: "Mumbai", rating: "Rating-6.67/10" },
    { place: "Jaipur", rating: "Rating-7.5/10" },
    { place: "Rishikesh", rating: "Rating-8.6/10" }
  ],
  "Winter sport areas": [
    { place: "Gulmarg", rating: "Rating-8/10" },
    { place: "Manali ", rating: "Rating-8.7/10" },
    { place: "Leh", rating: "Rating-8.6/10" }
  ],
  "Areas known for culture and heritage": [
    { place: "The Golden City In Punjab", rating: "Rating-9/10" },
    { place: "The City Of The Nawabs ", rating: "Rating-9.1/10" },
    { place: "A Potpourri Of Different Cultures", rating: "Rating-9.2/10" }
  ]
};

export default function App() {
  const [selectedplace, setplace] = useState("Beach areas");
  function placeClickHandler(place) {
    setplace(place);
  }
  return (
    <div className="App">
      <h1>Select the catogery of place you want to visit </h1>
      <div>
        {Object.keys(travelPlace).map((place) => (
          <button
            onClick={() => placeClickHandler(place)}
            class="place-selection"
          >
            {place}
          </button>
        ))}
      </div>
      <div class="main-continer">
        <ul>
          {travelPlace[selectedplace].map((item) => (
            <li key={item.name}>
              <div class="place-type">{item.placetype}</div>
              <div class="info"> {item.place} </div>
              <div class="info"> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
