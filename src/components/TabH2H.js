import React from "react";
import { Table } from "semantic-ui-react";

const TabH2H = props => {
  const matches = props.matches;

  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Liga</Table.HeaderCell>
          <Table.HeaderCell>Gospodarze</Table.HeaderCell>
          <Table.HeaderCell>Goście</Table.HeaderCell>
          <Table.HeaderCell>Wynik</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {matches.map(match => (
        <Table.Body>
          <Table.Row>
            <Table.Cell>{match.date}</Table.Cell>
            <Table.Cell>{match.league}</Table.Cell>
            <Table.Cell>{match.home}</Table.Cell>
            <Table.Cell>{match.guest}</Table.Cell>
            <Table.Cell>{match.result}</Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}
    </Table>
  );
};

export default TabH2H;
