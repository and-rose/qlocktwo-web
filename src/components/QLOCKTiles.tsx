import clsx from "clsx";
import React from "react";
import "./QLOCKTiles.css";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-
`;

const DIMENSIONS = { rows: 10, columns: 10 };

export function QLOCKTiles(props: { characterList: string[] }) {
  const characterList = props.characterList;
  const characterRows = [];

  for (let i = 0; i < characterList.length; i += DIMENSIONS.columns + 1) {
    characterRows.push(characterList.slice(i, i + DIMENSIONS.columns + 1));
  }

  console.log(characterRows);

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
                />
              );
            })}
          </Row>
        );
      })}
    </div>
  );
}

function QLOCKTile(props: { character: string; id: string }) {
  return (
    <div className={clsx(`QLOCKTile tile${props.id}`)}>
      <text>{props.character}</text>
    </div>
  );
}
