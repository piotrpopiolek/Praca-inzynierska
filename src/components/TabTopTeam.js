import React from "react";
import { Table } from "semantic-ui-react";

const TabTopTeam = () => (
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
          Notes
          <br />
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Rzuty rożne</Table.Cell>
        <Table.Cell>
          Notes
          <br />
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Żółte kartki</Table.Cell>
        <Table.Cell>
          Notes
          <br />
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Czerwone kartki</Table.Cell>
        <Table.Cell>
          Notes
          <br />
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Goli na mecz</Table.Cell>
        <Table.Cell>
          Notes
          <br />
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TabTopTeam;
