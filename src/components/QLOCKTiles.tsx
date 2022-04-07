import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./QLOCKTiles.css";
import styled from "styled-components";
import { Time } from "./QLOCKTWO";
import { ConstantWordPositions, QLOCKWordPosition } from "./WordPositions";

const Row = styled.div`
  display: flex;
  flex-
`;

const DIMENSIONS = { rows: 10, columns: 11 };

function enableRelatedTiles(
  tileInfo: QLOCKWordPosition,
  targetArray: boolean[][]
) {
  const tilePosition = tileInfo.startLocation;
  for (let i = 0; i < tileInfo.length; i++)
    targetArray[tilePosition[0]][tilePosition[1] + i] = true;
}

const emptyStatusArray = new Array<boolean>(DIMENSIONS.rows)
  .fill(false)
  .map(() => {
    return new Array<boolean>(DIMENSIONS.columns).fill(false);
  });

export function QLOCKTiles(props: { characterList: string[]; fullDate: Date }) {
  const characterList = props.characterList;
  const characterRows = [];

  const [enabledStatuses, setEnabledStatuses] =
    useState<boolean[][]>(emptyStatusArray);

  // const time: Time = {
  //   hours: props.fullDate.getHours(),
  //   minutes: props.fullDate.getMinutes(),
  //   seconds: props.fullDate.getSeconds(),
  // };

  const time: Time = {
    hours: 21,
    minutes: 15,
    seconds: props.fullDate.getSeconds(),
  };

  //Set The Clock Face Time
  useEffect(() => {
    const updatedStatuses = emptyStatusArray;

    enableRelatedTiles(ConstantWordPositions.It, updatedStatuses);
    enableRelatedTiles(ConstantWordPositions.Is, updatedStatuses);

    //Check if it's AM or PM
    if (time.hours >= 12) {
      //Get static position from predefined constant locations
      enableRelatedTiles(ConstantWordPositions.PM, updatedStatuses);
    } else {
      enableRelatedTiles(ConstantWordPositions.AM, updatedStatuses);
    }

    if (time.minutes === 45 || time.minutes === 15) {
      enableRelatedTiles(ConstantWordPositions.Quarter, updatedStatuses);
      if (time.minutes === 45) {
        enableRelatedTiles(ConstantWordPositions.To, updatedStatuses);
      } else {
        enableRelatedTiles(ConstantWordPositions.Past, updatedStatuses);
      }
    }

    setEnabledStatuses(updatedStatuses);
  }, [time.hours]);

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
