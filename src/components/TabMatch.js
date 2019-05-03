import React from "react";
import { Tab } from "semantic-ui-react";
import TabH2H from "./TabH2H";
import TabStatistics from "./TabStatistics";
import TabTopTeam from "./TabTopTeam";

const defaultValue = {
  ballPossession: "0",
  goalAttempts: "0",
  shotsOnGoal: "0",
  shotsOffGoal: "0",
  blockedShots: "0",
  freeKicks: "0",
  cornerKicks: "0",
  offsides: "0",
  goalkeeperSaves: "0",
  fouls: "0",
  redCards: "0",
  yellowCards: "0",
  totalPasses: "0",
  completedPasses: "0",
  tackles: "0"
};

const topTeams = {
  possession: [
    {
      id: 1,
      team: "Manchester City",
      value: "63.7"
    },
    {
      id: 2,
      team: "Bayern Munich",
      value: "62.2"
    },
    {
      id: 3,
      team: "FC Barcelona",
      value: "61.9"
    },
    {
      id: 4,
      team: "Chelsea",
      value: "61.8"
    },
    {
      id: 5,
      team: "Real Betis",
      value: "60.8"
    }
  ],
  freeKicks: [
    {
      id: 1,
      team: "Bayern Munich",
      value: "8.5"
    },
    {
      id: 2,
      team: "FC Barcelona",
      value: "7.8"
    },
    {
      id: 3,
      team: "Saint-Germain",
      value: "7.3"
    },
    {
      id: 4,
      team: "Real Madryt",
      value: "6.9"
    },
    {
      id: 5,
      team: "Chelsea",
      value: "6.5"
    }
  ],
  yellowCards: [
    {
      id: 1,
      team: "Bayern Munich",
      value: "8.5"
    },
    {
      id: 2,
      team: "FC Barcelona",
      value: "7.8"
    },
    {
      id: 3,
      team: "Saint-Germain",
      value: "7.3"
    },
    {
      id: 4,
      team: "Real Madryt",
      value: "6.9"
    },
    {
      id: 5,
      team: "Chelsea",
      value: "6.5"
    }
  ],
  redCards: [
    {
      id: 1,
      team: "Bayern Munich",
      value: "8.5"
    },
    {
      id: 2,
      team: "FC Barcelona",
      value: "7.8"
    },
    {
      id: 3,
      team: "Saint-Germain",
      value: "7.3"
    },
    {
      id: 4,
      team: "Real Madryt",
      value: "6.9"
    },
    {
      id: 5,
      team: "Chelsea",
      value: "6.5"
    }
  ],
  goals: [
    {
      id: 1,
      team: "Bayern Munich",
      value: "8.5"
    },
    {
      id: 2,
      team: "FC Barcelona",
      value: "7.8"
    },
    {
      id: 3,
      team: "Saint-Germain",
      value: "7.3"
    },
    {
      id: 4,
      team: "Real Madryt",
      value: "6.9"
    },
    {
      id: 5,
      team: "Chelsea",
      value: "6.5"
    }
  ]
};

const panes = [
  {
    menuItem: "H2H",
    render: props => (
      <Tab.Pane
        home5={props.home5}
        guest5={props.guest5}
        head2head5={props.head2head5}
        attached={false}
      >
        <h3>Ostatnie mecze: Gospodarzy</h3>
        <TabH2H matches={props.home5} />
        <h3>Ostatnie mecze: Gości</h3>
        <TabH2H matches={props.guest5} />
        <h3>Ostatnie mecze: Bezpośrednie</h3>
        <TabH2H matches={props.head2head5} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Statystyki",
    render: props => (
      <Tab.Pane
        statisticsHome={props.statisticsHome}
        statisticsGuest={props.statisticsGuest}
        attached={false}
      >
        <TabStatistics
          statisticsHome={props.statisticsHome || defaultValue}
          statisticsGuest={props.statisticsGuest || defaultValue}
        />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Top Team",
    render: props => (
      <Tab.Pane attached={false}>
        <TabTopTeam topTeams={topTeams} />
      </Tab.Pane>
    )
  }
];

const TabMatch = props => {
  return (
    <>
      <Tab
        home5={props.H2H.home5}
        guest5={props.H2H.guest5}
        head2head5={props.H2H.head2head5}
        statisticsHome={props.H2H.statisticsHome}
        statisticsGuest={props.H2H.statisticsGuest}
        menu={{ secondary: true, pointing: true }}
        panes={panes}
      />
    </>
  );
};

export default TabMatch;
