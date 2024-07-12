import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import './App.css';

const players = [
    {
        name: "LeBron James",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
        position: "Forward",
        stats: { pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }
    },
    {
        name: "Stephen Curry",
        image: "https://hips.hearstapps.com/hmg-prod/images/stephen-curry-gettyimages-1398745379.jpg",
        position: "Guard",
        stats: { pointsPerGame: 30.1, assistsPerGame: 6.7, reboundsPerGame: 5.3 }
    },
    {
        name: "Kevin Durant",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Kevin-Durant-1.jpg",
        position: "Forward",
        stats: { pointsPerGame: 27.0, assistsPerGame: 5.6, reboundsPerGame: 7.1 }
    },
    {
        name: "Giannis Antetokounmpo",
        image: "https://www.bworldonline.com/wp-content/uploads/2023/11/NBA-Giannis-Antetokounmpo.jpg",
        position: "Forward",
        stats: { pointsPerGame: 29.5, assistsPerGame: 5.9, reboundsPerGame: 13.6 }
    },
    {
        name: "James Harden",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/230822124349-01-james-harden-file.jpg?c=16x9&q=h_833,w_1480,c_fill",
        position: "Guard",
        stats: { pointsPerGame: 24.6, assistsPerGame: 10.9, reboundsPerGame: 8.1 }
    },
    {
        name: "Kawhi Leonard",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2118637638.jpg?c=16x9&q=h_833,w_1480,c_fill",
        position: "Forward",
        stats: { pointsPerGame: 26.9, assistsPerGame: 5.0, reboundsPerGame: 7.3 }
    },
    {
        name: "Anthony Davis",
        image: "https://content.api.news/v3/images/bin/db2f157d4638950263d3ea84a4c12178",
        position: "Center",
        stats: { pointsPerGame: 21.4, assistsPerGame: 3.3, reboundsPerGame: 9.7 }
    },
    {
        name: "Luka Dončić",
        image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
        position: "Guard",
        stats: { pointsPerGame: 28.8, assistsPerGame: 8.6, reboundsPerGame: 9.2 }
    },
    {
        name: "Nikola Jokić",
        image: "https://www.sportico.com/wp-content/uploads/2024/05/GettyImages-2150575334-e1715201993568.jpg?w=1280&h=720&crop=1",
        position: "Center",
        stats: { pointsPerGame: 26.4, assistsPerGame: 8.3, reboundsPerGame: 10.8 }
    },
    {
        name: "Damian Lillard",
        image: "https://a.espncdn.com/i/headshots/nba/players/full/3907822.png",
        position: "Guard",
        stats: { pointsPerGame: 25.8, assistsPerGame: 7.1, reboundsPerGame: 4.6 }
    }
];

function App() {
    return (<>
         <h1 id='heading'>Basket Ball Players</h1>
        <div className="cards-container">
          
            {players.map((player, index) => (
                <BasketballPlayerCard
                    key={index}
                    name={player.name}
                    image={player.image}
                    position={player.position}
                    stats={player.stats}
                />
            ))}
        </div>
        </>
    );
}

export default App;
