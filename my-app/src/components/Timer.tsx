import React, { FC } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = React.useState(300);
  const [whiteTime, setWhiteTime] = React.useState(300);
  const timer = React.useRef<null | ReturnType<typeof setInterval>>(null);

  React.useEffect(() => {
    startTime();
  }, [currentPlayer]);

  function startTime() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
    currentPlayer?.color === Colors.WHITE
      ? decrementWhiteTimer
      : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Черные фигуры - {blackTime}</h2>
      <h2>Белые фигуры - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
