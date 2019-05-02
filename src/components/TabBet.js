import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Solo",
    render: props => (
      <Tab.Pane>
        <h3>
          Postaw zakład na mecz: {props.home} vs {props.guest}
        </h3>
      </Tab.Pane>
    )
  }
];

const TabBet = props => {
  return (
    <>
      <Tab
        home={props.matchDetail.home}
        guest={props.matchDetail.guest}
        r1={props.matchDetail.r1}
        rX={props.matchDetail.rX}
        r2={props.matchDetail.r2}
        menu={{ secondary: true, pointing: true }}
        panes={panes}
      />
    </>
  );
};

export default TabBet;
