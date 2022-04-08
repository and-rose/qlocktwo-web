import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./QLOCKTiles.css";
import styled from "styled-components";
import { Time } from "./QLOCKTWO";
import {
  ConstantDigitShapes,
  ConstantWordPositions,
  QLOCKWordPosition,
} from "./WordPositions";

const Row = styled.div`
  display: flex;
  flex-
`;

const DIMENSIONS = { rows: 10, columns: 11 };

const MINUTE_DESCRIPTIONS = [
  ConstantWordPositions.OClock,
  ConstantWordPositions.FiveMinute,
  ConstantWordPositions.TenMinute,
  ConstantWordPositions.Quarter,
  ConstantWordPositions.Twenty,
  ConstantWordPositions.TwentyFive,
  ConstantWordPositions.Half,
];

const HOUR_DESCRIPTIONS = [
  ConstantWordPositions.Twelve,
  ConstantWordPositions.One,
  ConstantWordPositions.Two,
  ConstantWordPositions.Three,
  ConstantWordPositions.Four,
  ConstantWordPositions.Five,
  ConstantWordPositions.Six,
  ConstantWordPositions.Seven,
  ConstantWordPositions.Eight,
  ConstantWordPositions.Nine,
  ConstantWordPositions.Ten,
  ConstantWordPositions.Eleven,
  ConstantWordPositions.Twelve,
];

function enableRelatedTiles(
  tileInfo: QLOCKWordPosition,
  targetArray: boolean[][]
) {
  const tilePosition = tileInfo.startLocation;
  for (let i = 0; i < tileInfo.length; i++)
    targetArray[tilePosition[0]][tilePosition[1] + i] = true;
}

function enableDigit(
  tensDigit: [number, number][],
  onesDigit: [number, number][],
  targetArray: boolean[][],
  rowStart: number
) {
  tensDigit.map((position) => {
    return (targetArray[rowStart + position[0]][position[1]] = true);
  });

  onesDigit.map((position) => {
    return (targetArray[rowStart + position[0]][6 + position[1]] = true);
  });
}

function enableSecondInterval(seconds: number, targetArray: boolean[][]) {}

function generateEmptyArray() {
  return new Array<boolean>(DIMENSIONS.rows).fill(false).map(() => {
    return new Array<boolean>(DIMENSIONS.columns).fill(false);
  });
}

function enableTimeInterval(
  minutes: number,
  hours: number,
  targetArray: boolean[][],
  meridiemIndicator: boolean,
  verbose: boolean
) {
  const fiveMinuteIndex = Math.floor(minutes / 5);

  //Display "It Is" conditionally
  if (verbose) {
    enableRelatedTiles(ConstantWordPositions.It, targetArray);
    enableRelatedTiles(ConstantWordPositions.Is, targetArray);
  }

  //Display "AM" or "PM" conditionally
  if (meridiemIndicator) {
    if (hours >= 12) {
      enableRelatedTiles(ConstantWordPositions.PM, targetArray);
    } else {
      enableRelatedTiles(ConstantWordPositions.AM, targetArray);
    }
  }

  //Check if we are in the first half of an hour or on it precisely
  if (fiveMinuteIndex > 6) {
    enableRelatedTiles(ConstantWordPositions.To, targetArray);
    enableRelatedTiles(
      MINUTE_DESCRIPTIONS[6 - (fiveMinuteIndex % 6)],
      targetArray
    );
  } else if (fiveMinuteIndex > 0 && fiveMinuteIndex <= 6) {
    enableRelatedTiles(ConstantWordPositions.Past, targetArray);
    enableRelatedTiles(MINUTE_DESCRIPTIONS[fiveMinuteIndex], targetArray);
  } else {
    enableRelatedTiles(MINUTE_DESCRIPTIONS[fiveMinuteIndex], targetArray);
  }

  //Show either the current hour or the next
  const hourIndex = (hours % 12) + (fiveMinuteIndex > 6 ? 1 : 0);
  enableRelatedTiles(HOUR_DESCRIPTIONS[hourIndex], targetArray);
}

export function QLOCKTiles(props: {
  characterList: string[];
  fullDate: Date;
  showSeconds: boolean;
}) {
  const characterList = props.characterList;
  const characterRows = [];

  const [enabledStatuses, setEnabledStatuses] = useState<boolean[][]>(
    generateEmptyArray()
  );

  //Set The Clock Face Time
  useEffect(() => {
    const time: Time = {
      hours: props.fullDate.getHours(),
      minutes: props.fullDate.getMinutes(),
      seconds: props.fullDate.getSeconds(),
    };

    const updatedStatuses = generateEmptyArray();

    props.showSeconds
      ? enableDigit(
          ConstantDigitShapes[Math.floor((time.seconds / 10) % 10)],
          ConstantDigitShapes[Math.floor(time.seconds % 10)],
          updatedStatuses,
          2
        )
      : enableTimeInterval(
          time.minutes,
          time.hours,
          updatedStatuses,
          false,
          true
        );

    setEnabledStatuses(updatedStatuses);
  }, [props.fullDate]);

  for (let i = 0; i < characterList.length; i += DIMENSIONS.columns) {
    characterRows.push(characterList.slice(i, i + DIMENSIONS.columns));
  }

  return (
    <div className="QLOCKTiles">
      {characterRows.map((characters, rowIndex) => {
        return (
          <Row className={`QLOCKTilesRow qTilesRow${rowIndex}`}>
            {characters.map((singleCharacter, colIndex) => {
              return (
                <QLOCKTile
                  character={singleCharacter}
                  id={`r${rowIndex}c${colIndex}`}
                  enabled={enabledStatuses[rowIndex][colIndex]}
                />
              );
            })}
          </Row>
        );
      })}
    </div>
  );
}

function QLOCKTile(props: { character: string; id: string; enabled: boolean }) {
  return (
    <div
      className={clsx(
        `QLOCKTile tile${props.id}`,
        props.enabled && "tile-active"
      )}
    >
      <text>{props.character}</text>
    </div>
  );
}
