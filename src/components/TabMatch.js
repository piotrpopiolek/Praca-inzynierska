import React from "react";
import { Tab } from "semantic-ui-react";
import TabH2H from "./TabH2H";
import TabStatistics from "./TabStatistics";
import TabTopTeam from "./TabTopTeam";

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
      <Tab.Pane attached={false}>
        <TabStatistics />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Top Team",
    render: props => (
      <Tab.Pane attached={false}>
        <TabTopTeam />
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
        menu={{ secondary: true, pointing: true }}
        panes={panes}
      />
    </>
  );
};

export default TabMatch;
