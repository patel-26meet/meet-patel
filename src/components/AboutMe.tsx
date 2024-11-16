import { useState } from 'react';
import './AboutMe.css';


function AboutMe() {
  const [isCoolMode, setIsCoolMode] = useState(false);
  const [showChessPreview, setShowChessPreview] = useState(false);
  const [showWorkoutPreview, setShowWorkoutPreview] = useState(false);

  const toggleMode = () => {
    setIsCoolMode(!isCoolMode);
  };

  return (
    <div className={`about-me-container ${isCoolMode ? 'cool-mode' : 'normal-mode'}`}>
      <p>
        I am Meet<br />
        I like to build{' '}
        <span
          className="hover-word"
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          cool
          <button className="toggle-button" onClick={toggleMode}>
            {isCoolMode ? 'Normal Mode' : 'Cool Mode'}
          </button>
        </span>{' '}
        stuff.<br />
        I love experimenting with new things.<br />
        I like watching F1,{' '}
        <span
          className="hover-word"
          onMouseEnter={() => setShowChessPreview(true)}
          onMouseLeave={() => setShowChessPreview(false)}
        >
          chess
        </span>{' '}
        and cricket.<br />
        I recently started{' '}
        <span
          className="hover-word"
          onMouseEnter={() => setShowWorkoutPreview(true)}
          onMouseLeave={() => setShowWorkoutPreview(false)}
        >
          working out
        </span>{' '}
        and I love it!
      </p>

      {showChessPreview && (
        <div className="project-preview">
          {/* Display your chess engine project here */}

        </div>
      )}

      {showWorkoutPreview && (
        <div className="project-preview">
          {/* Display your workout tracker project here */}

        </div>
      )}
    </div>
  );
}

export default AboutMe;
