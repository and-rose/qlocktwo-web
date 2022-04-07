import React from "react";
import "./QLOCKTWO.css";
import { QLOCKTiles } from "./QLOCKTiles";

const QLOCKString =
  "itlisasampmacquarterdctwentyfivexhalfstenftopasterunineonesixthreefourfivetwoeightelevenseventwelvetenseoclock";
const QLOCKTileChracters = QLOCKString.split("");

export function QLOCKTWO() {
  return (
    <div className="QLOCKTWOContainer">
      <QLOCKTiles characterList={QLOCKTileChracters} />
    </div>
  );
}
