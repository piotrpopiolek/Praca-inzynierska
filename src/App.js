import React, { Component } from "react";
import Layout from "./components/Layout";
import RowMatch from "./components/RowMatch";
import "./App.css";

const data = {
  matches: [
    {
      id: 1,
      time: "13:30",
      home: "Wolves",
      guest: "Leicester",
      r1: "2.20",
      rX: "3.30",
      r2: "3.25",
      home5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      guest5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "AFC Wimbledon",
          guest: "West Ham",
          result: "4:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Bournemouth",
          guest: "West Ham",
          result: "2:0"
        },
        {
          date: "12.01.19",
          league: "Premier League",
          home: "West Ham",
          guest: "Arsenal",
          result: "1:0"
        },
        {
          date: "05.01.19",
          league: "Fa Cup",
          home: "West Ham",
          guest: "Birmingham",
          result: "2:0"
        }
      ],
      head2head5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "01.09.18",
          league: "Premier League",
          home: "West Ham",
          guest: "Wolves",
          result: "0:1"
        },
        {
          date: "09.01.16",
          league: "Fa Cup",
          home: "West Ham",
          guest: "Wolves",
          result: "1:0"
        },
        {
          date: "01.01.11",
          league: "Premier League",
          home: "West Ham",
          guest: "Wolves",
          result: "2:0"
        },
        {
          date: "16.10.10",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "1:1"
        }
      ]
    },
    {
      id: 2,
      time: "16:00",
      home: "Bournemouth",
      guest: "West Ham",
      r1: "2.37",
      rX: "3.40",
      r2: "2.90",
      home5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      guest5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      head2head5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ]
    },
    {
      id: 3,
      time: "16:00",
      home: "Liverpool",
      guest: "Crystal Palace",
      r1: "1.16",
      rX: "7.50",
      r2: "13.00",
      home5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      guest5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      head2head5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ]
    },
    {
      id: 4,
      time: "16:00",
      home: "Newcastle",
      guest: "Cardiff",
      r1: "1.85",
      rX: "3.50",
      r2: "4.20",
      home5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      guest5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      head2head5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ]
    },
    {
      id: 5,
      time: "16:00",
      home: "Southamptons",
      guest: "Everton",
      r1: "2.55",
      rX: "3.20",
      r2: "2.75",
      home5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      guest5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ],
      head2head5: [
        {
          date: "29.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "West Ham",
          result: "3:0"
        },
        {
          date: "26.01.19",
          league: "Fa Cup",
          home: "Shrewsbury",
          guest: "Wolves",
          result: "2:2"
        },
        {
          date: "19.01.19",
          league: "Premier League",
          home: "Wolves",
          guest: "Leicester",
          result: "4:3"
        },
        {
          date: "14.01.19",
          league: "Premier League",
          home: "Manchester City",
          guest: "Wolves",
          result: "3:0"
        },
        {
          date: "07.01.19",
          league: "Fa Cup",
          home: "Wolves",
          guest: "Liverpool",
          result: "2:1"
        }
      ]
    }
  ]
};

class App extends Component {
  render() {
    const matches = data.matches;
    return (
      <Layout>
        <h1>Sprzedaż tokenów SFT</h1>
        {matches.map(match => (
          <RowMatch match={match} />
        ))}
      </Layout>
    );
  }
}

export default App;
