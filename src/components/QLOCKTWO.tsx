import React, { useEffect, useState } from "react";
import "./QLOCKTWO.css";
import { QLOCKTiles } from "./QLOCKTiles";
import { QLOCKCornerIndicators } from "./QLOCKCornerIndicators";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ToggleButton from "@mui/material/Button";

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
  const [secondsSelected, setSecondsSelected] = useState(false);

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
    <div className={"CentreWrapper"}>
      <div className="QLOCKTWOContainer">
        <QLOCKCornerIndicators additive={date.getMinutes() % 5} />
        <QLOCKTiles characterList={QLOCKTileChracters} fullDate={date} />
      </div>
      <ToggleButton
        className={"SecondsButton"}
        variant={"contained"}
        color={"primary"}
        onChange={() => {
          setSecondsSelected(!secondsSelected);
        }}
      >
        <AccessTimeIcon />
      </ToggleButton>
    </div>
  );
}
