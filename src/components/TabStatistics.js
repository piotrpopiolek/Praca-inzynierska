import React from "react";
import { Table } from "semantic-ui-react";
import ProgressBar from "./ProgressBar";

const TabStatistics = props => (
  <Table celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell width="1">
          {props.statisticsHome.ballPossession}%
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent={props.statisticsHome.ballPossession} />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Posiadanie piłki
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent={props.statisticsGuest.ballPossession} />
        </Table.Cell>
        <Table.Cell width="1">
          {props.statisticsGuest.ballPossession}%
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.goalAttempts}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.goalAttempts) * 100) /
                (parseInt(props.statisticsHome.goalAttempts) +
                  parseInt(props.statisticsGuest.goalAttempts))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Próby strzałów
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.goalAttempts) * 100) /
                (parseInt(props.statisticsHome.goalAttempts) +
                  parseInt(props.statisticsGuest.goalAttempts))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.goalAttempts}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">12</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="92" />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały celne
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="8" />
        </Table.Cell>
        <Table.Cell width="1">1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">6</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="66" />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały niecelne
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="34" />
        </Table.Cell>
        <Table.Cell width="1">3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">6</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="75" />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały zablokowane
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar percent="25" />
        </Table.Cell>
        <Table.Cell width="1">2</Table.Cell>
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
          Czerwone kartki
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
