import React, { useEffect, useState } from "react";
import "./QLOCKTWO.css";
import { QLOCKTiles } from "./QLOCKTiles";

const QLOCKString =
  "itlisasampmacquarterdctwentyfivexhalfstenftopasterunineonesixthreefourfivetwoeightelevenseventwelvetenseoclock";
const QLOCKTileChracters = QLOCKString.split("");

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export function QLOCKTWO() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateUpdateInterval = setInterval(() => {
      tick();
    }, 100);

    return () => {
      clearInterval(dateUpdateInterval);
    };
  }, []);

  function tick() {
    setDate(new Date());
  }
  return (
    <div className="QLOCKTWOContainer">
      <QLOCKTiles characterList={QLOCKTileChracters} fullDate={date} />
    </div>
  );
}
