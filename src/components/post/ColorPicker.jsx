import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

import styles from "../css/colorPicker.module.css";
export default function ColorPicker({ setBgColor, color }) {
  const [color1, setColor1] = useState(color.first);
  const [color2, setColor2] = useState(color.second);
  const [selected, setSelected] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setBgColor({ first: color1, second: color2 });
  }, [color1, color2]);
  return (
    <div className={styles.colorPicker}>
      {!visible && (
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          open
        </button>
      )}
      {visible && (
        <div className={styles.colorArae}>
          {/* <button
            onClick={() => {
              setVisible(false);
            }}
            className={styles.button_close}
          >
            close
          </button> */}
          {selected === 1 ? (
            <HexColorPicker color={color1} onChange={setColor1} />
          ) : (
            <HexColorPicker color={color2} onChange={setColor2} />
          )}
          <div className={styles.info}>
            <div className={styles.colorInfo}>
              <div>Color 1 </div>
              <div
                onClick={() => setSelected(1)}
                className={styles.colorCircle}
                style={{ backgroundColor: color1 }}
              ></div>
            </div>

            <div className={styles.colorInfo}>
              <div>Color 2 </div>
              <div
                onClick={() => setSelected(2)}
                className={styles.colorCircle}
                style={{ backgroundColor: color2 }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
