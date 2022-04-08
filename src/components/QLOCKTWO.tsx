import React, { useEffect, useState } from "react";
import "./QLOCKTWO.css";
import { QLOCKTiles } from "./QLOCKTiles";
import { QLOCKCornerIndicators } from "./QLOCKCornerIndicators";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ToggleButton from "@mui/material/ToggleButton";

const QLOCKString =
  "itlisasampmacquarterdctwentyfivexhalfstenftopasterunineonesixthreefourfivetwoeightelevenseventwelvetenseoclock";
const QLOCKTileChracters = QLOCKString.split("");

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const toggleButtonStyles = {
  "&.MuiToggleButton-root": {
    backgroundColor: "#242830",
    color: "#2f3238",
    "&:hover": {
      backgroundColor: "#1e2229",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#1c1f26",
    color: "#e6e6e6",
    textShadow: "0vmin 0vmin 0.4vmin #f0f0f0",
  },
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
        <QLOCKTiles
          characterList={QLOCKTileChracters}
          fullDate={date}
          showSeconds={secondsSelected}
        />
      </div>
      <ToggleButton
        value={"text"}
        sx={toggleButtonStyles}
        className={"SecondsButton"}
        color={"primary"}
        selected={secondsSelected}
        onChange={() => {
          setSecondsSelected(!secondsSelected);
        }}
      >
        <AccessTimeIcon />
      </ToggleButton>
    </div>
  );
}
