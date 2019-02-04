import React from "react";
import { Table } from "semantic-ui-react";
import ProgressBar from "./ProgressBar";
import Bar from "./Bar";

const TabStatistics = () => (
  <Table celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell width="1">30</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="30" />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Posiadanie piłki
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">5</Table.Cell>
        <Table.Cell width="6">
          <Bar value="5" />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Próby strzałów
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały celne
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały niecelne
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały zablokowane
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Rzuty wolne
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Rzuty rożne
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Spalone
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Interwencje bramkarza
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Faule
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Żółte kartki
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Liczba podań
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">Cell</Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Pojedynki
        </Table.Cell>
        <Table.Cell width="6">Cell</Table.Cell>
        <Table.Cell width="1">Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TabStatistics;
