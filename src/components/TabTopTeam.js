import React from "react";
import { Table, Item } from "semantic-ui-react";

const TabTopTeam = props => (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Top</Table.HeaderCell>
        <Table.HeaderCell>Drużyny</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Posiadanie</Table.Cell>
        <Table.Cell verticalAlign="top">
          {props.topTeams.possession.map(item => (
            <p>
              {item.id}. {item.team} {item.value}
            </p>
          ))}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Rzuty rożne</Table.Cell>
        <Table.Cell>
          {props.topTeams.freeKicks.map(item => (
            <p>
              {item.id}. {item.team} {item.value}
            </p>
          ))}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Żółte kartki</Table.Cell>
        <Table.Cell>
          {props.topTeams.yellowCards.map(item => (
            <p>
              {item.id}. {item.team} {item.value}
            </p>
          ))}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Czerwone kartki</Table.Cell>
        <Table.Cell>
          {props.topTeams.redCards.map(item => (
            <p>
              {item.id}. {item.team} {item.value}
            </p>
          ))}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Goli na mecz</Table.Cell>
        <Table.Cell>
          {props.topTeams.goals.map(item => (
            <p>
              {item.id}. {item.team} {item.value}
            </p>
          ))}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TabTopTeam;
