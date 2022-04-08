import React from "react";
import clsx from "clsx";
import "./QLOCKCornerIndicators.css";

export function QLOCKCornerIndicators(props: { additive: number }) {
  return (
    <div className="CornerIndicatorsContainer">
      <div
        className={clsx(
          "CornerIndicator",
          props.additive >= 1 && "tile-active"
        )}
        id={"topLeft"}
      ></div>
      <div
        className={clsx(
          "CornerIndicator",
          props.additive >= 2 && "tile-active"
        )}
        id={"topRight"}
      ></div>
      <div
        className={clsx(
          "CornerIndicator",
          props.additive >= 3 && "tile-active"
        )}
        id={"bottomLeft"}
      ></div>
      <div
        className={clsx(
          "CornerIndicator",
          props.additive >= 4 && "tile-active"
        )}
        id={"bottomRight"}
      ></div>
    </div>
  );
}
