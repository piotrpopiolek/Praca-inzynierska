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
            percent={
              Math.round(
                (parseInt(props.statisticsHome.goalAttempts) * 100) /
                  (parseInt(props.statisticsHome.goalAttempts) +
                    parseInt(props.statisticsGuest.goalAttempts))
              ) || "0"
            }
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
        <Table.Cell width="1">{props.statisticsHome.shotsOnGoal}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.shotsOnGoal) * 100) /
                (parseInt(props.statisticsHome.shotsOnGoal) +
                  parseInt(props.statisticsGuest.shotsOnGoal))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały celne
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.shotsOnGoal) * 100) /
                (parseInt(props.statisticsHome.shotsOnGoal) +
                  parseInt(props.statisticsGuest.shotsOnGoal))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.shotsOnGoal}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.shotsOffGoal}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.shotsOffGoal) * 100) /
                (parseInt(props.statisticsHome.shotsOffGoal) +
                  parseInt(props.statisticsGuest.shotsOffGoal))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały niecelne
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.shotsOffGoal) * 100) /
                (parseInt(props.statisticsHome.shotsOffGoal) +
                  parseInt(props.statisticsGuest.shotsOffGoal))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.shotsOffGoal}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.blockedShots}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.blockedShots) * 100) /
                (parseInt(props.statisticsHome.blockedShots) +
                  parseInt(props.statisticsGuest.blockedShots))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Strzały zablokowane
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.blockedShots) * 100) /
                (parseInt(props.statisticsHome.blockedShots) +
                  parseInt(props.statisticsGuest.blockedShots))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.blockedShots}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.freeKicks}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.freeKicks) * 100) /
                (parseInt(props.statisticsHome.freeKicks) +
                  parseInt(props.statisticsGuest.freeKicks))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Rzuty wolne
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.freeKicks) * 100) /
                (parseInt(props.statisticsHome.freeKicks) +
                  parseInt(props.statisticsGuest.freeKicks))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.freeKicks}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.cornerKicks}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.cornerKicks) * 100) /
                (parseInt(props.statisticsHome.cornerKicks) +
                  parseInt(props.statisticsGuest.cornerKicks))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Rzuty rożne
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.cornerKicks) * 100) /
                (parseInt(props.statisticsHome.cornerKicks) +
                  parseInt(props.statisticsGuest.cornerKicks))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.cornerKicks}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.offsides}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.offsides) * 100) /
                (parseInt(props.statisticsHome.offsides) +
                  parseInt(props.statisticsGuest.offsides))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Spalone
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.offsides) * 100) /
                (parseInt(props.statisticsHome.offsides) +
                  parseInt(props.statisticsGuest.offsides))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.offsides}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">
          {props.statisticsHome.goalkeeperSaves}
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.goalkeeperSaves) * 100) /
                (parseInt(props.statisticsHome.goalkeeperSaves) +
                  parseInt(props.statisticsGuest.goalkeeperSaves))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Interwencje bramkarza
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.goalkeeperSaves) * 100) /
                (parseInt(props.statisticsHome.goalkeeperSaves) +
                  parseInt(props.statisticsGuest.goalkeeperSaves))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">
          {props.statisticsGuest.goalkeeperSaves}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.fouls}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.fouls) * 100) /
                (parseInt(props.statisticsHome.fouls) +
                  parseInt(props.statisticsGuest.fouls))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Faule
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.fouls) * 100) /
                (parseInt(props.statisticsHome.fouls) +
                  parseInt(props.statisticsGuest.fouls))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.fouls}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.redCards}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.redCards) * 100) /
                (parseInt(props.statisticsHome.redCards) +
                  parseInt(props.statisticsGuest.redCards))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Czerwone kartki
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.redCards) * 100) /
                (parseInt(props.statisticsHome.redCards) +
                  parseInt(props.statisticsGuest.redCards))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.redCards}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.yellowCards}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.yellowCards) * 100) /
                (parseInt(props.statisticsHome.yellowCards) +
                  parseInt(props.statisticsGuest.yellowCards))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Żółte kartki
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.yellowCards) * 100) /
                (parseInt(props.statisticsHome.yellowCards) +
                  parseInt(props.statisticsGuest.yellowCards))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsHome.yellowCards}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.totalPasses}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.totalPasses) * 100) /
                (parseInt(props.statisticsHome.totalPasses) +
                  parseInt(props.statisticsGuest.totalPasses))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Liczba podań
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.totalPasses) * 100) /
                (parseInt(props.statisticsHome.totalPasses) +
                  parseInt(props.statisticsGuest.totalPasses))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.totalPasses}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">
          {props.statisticsHome.completedPasses}
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.completedPasses) * 100) /
                (parseInt(props.statisticsHome.completedPasses) +
                  parseInt(props.statisticsGuest.completedPasses))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Liczba podań celnych
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.completedPasses) * 100) /
                (parseInt(props.statisticsHome.completedPasses) +
                  parseInt(props.statisticsGuest.completedPasses))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">
          {props.statisticsGuest.completedPasses}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell width="1">{props.statisticsHome.tackles}</Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsHome.tackles) * 100) /
                (parseInt(props.statisticsHome.tackles) +
                  parseInt(props.statisticsGuest.tackles))
            )}
          />
        </Table.Cell>
        <Table.Cell width="3" textAlign="center">
          Pojedynki
        </Table.Cell>
        <Table.Cell width="6">
          <ProgressBar
            percent={Math.round(
              (parseInt(props.statisticsGuest.tackles) * 100) /
                (parseInt(props.statisticsHome.tackles) +
                  parseInt(props.statisticsGuest.tackles))
            )}
          />
        </Table.Cell>
        <Table.Cell width="1">{props.statisticsGuest.tackles}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TabStatistics;
