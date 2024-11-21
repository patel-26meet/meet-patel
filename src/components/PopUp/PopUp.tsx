import React, { useState, useEffect, FC } from 'react';
import './PopUp.css';
import risk from '../../assets/risk.png';

interface PopUpProps {
  startAfter?: number;
  duration?: number;
}

const PopUp: FC<PopUpProps> = ({ startAfter = 3000, duration = 15000 }) => {
  const [show, setShow] = useState<boolean>(true);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    const openTimer = setTimeout(() => setStart(true), startAfter);
    const fadeTimer = setTimeout(() => setShow(false), startAfter + duration);
    const closeTimer = setTimeout(
      () => setStart(false),
      startAfter + duration + 1000,
    );

    return () => {
      clearTimeout(openTimer);
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [startAfter, duration]);

  return (
    start && (
      <div className={`popUp ${show ? 'fadein' : 'fadeout'}`}>
        <div className="popUp__container">
          <button onClick={() => setShow(false)} className="popUp__close" />
          <div className="popUp__header">
            <img className="popUp__header__img" src={risk} alt="risk" />
            <span className="popUp__header__text">
              Your computer might be at risk
            </span>
          </div>
          <p className="popUp__text__first">
            Antivirus software might not be installed
          </p>
          <p className="popUp__text__second">
            Click this baloon to fix this problem.
          </p>
        </div>
      </div>
    )
  );
};

export default PopUp;
