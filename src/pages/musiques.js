
import React, { useState } from 'react';

import CardList from '../card-list/card-list';

// import './musiques.css';

let musiques = [
    {
        id : 1,
        auteur: "Daft Punk",
        annee: 2013,
        titre: "Get lucky",
        imageUrl: "https://cdn-www.konbini.com/fr/images/files/2013/12/get-lucky-daft-punk.png"
    },
    {
        id : 2,
        auteur: "David Guetta ft Sia",
        annee: 2011,
        titre: "Titanium",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg"
    },
    {
        id : 3,
        auteur: "Shaka Ponk",
        annee: 2019,
        titre: "Smells like teen spirits",
        imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
    },
    {
        id : 4,
        auteur: "Imagine Dragon",
        annee: 2018,
        titre: "Natural",
        imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
    }
];

const Musiques = (props) => {

    return(
        <div>
            <CardList oeuvres={musiques} />
        </div>
    );
  }


export default Musiques;
