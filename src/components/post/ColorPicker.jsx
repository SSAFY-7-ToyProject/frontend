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
      컬러피커
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
        <div>
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            close
          </button>
          {selected === 1 ? (
            <HexColorPicker color={color1} onChange={setColor1} />
          ) : (
            <HexColorPicker color={color2} onChange={setColor2} />
          )}
          <div onClick={() => setSelected(1)}>color1</div>
          <div onClick={() => setSelected(2)}>color2</div>
        </div>
      )}
    </div>
  );
}
