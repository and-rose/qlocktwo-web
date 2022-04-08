import React, { useEffect, useState } from "react";
import "./QLOCKTWO.css";
import { QLOCKTiles } from "./QLOCKTiles";
import { QLOCKCornerIndicators } from "./QLOCKCornerIndicators";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
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
  },
};

export function QLOCKTWO() {
  const [date, setDate] = useState(new Date());
  const [secondsSelected, setSecondsSelected] = useState(false);
  const [ampmSelected, setampmSelected] = useState(false);
  const [hideVerbose, setHideVerbose] = useState(false);

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
          meridiemIndicator={ampmSelected}
          hideVerbose={hideVerbose}
        />
      </div>
      <div className="QLOCKSettings">
        <ToggleButton
          value={"text"}
          sx={toggleButtonStyles}
          className={"VerboseButton"}
          color={"primary"}
          selected={hideVerbose}
          onChange={() => {
            setHideVerbose(!hideVerbose);
          }}
        >
          <CommentsDisabledIcon fontSize={"medium"} />
        </ToggleButton>
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
          <AccessTimeIcon fontSize={"medium"} />
        </ToggleButton>
        <ToggleButton
          value={"text"}
          sx={toggleButtonStyles}
          className={"AMPMButton"}
          color={"primary"}
          selected={ampmSelected}
          onChange={() => {
            setampmSelected(!ampmSelected);
          }}
        >
          <span>AM PM</span>
        </ToggleButton>
      </div>
    </div>
  );
}
