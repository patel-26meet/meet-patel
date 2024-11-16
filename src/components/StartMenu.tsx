import React, { useEffect } from 'react';
import './StartMenu.css';
import power from "../assets/Power.png";
import logOff from "../assets/Logout.png";
import profile from '../assets/Profile.jpg';
import mail from '../assets/Email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

interface StartMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose, isOpen }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !document.querySelector('.start-menu')?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`start-menu ${isOpen ? 'open' : ''}`}>
      <div className="start-menu-header">
        <div className='profile-icon-div'>
          <img src={profile} alt="profile" className="profile-icon" />
        </div>
        <span className="start-menu-title">Meet Patel</span>
      </div>
      <div className="start-menu-body">
        <div className="start-menu-left">
          Hi!
        </div>
        <div className="start-menu-right">
          <div className='menu-item'>
            <img src={github} className='logos' alt="GitHub logo" />
            <a href="" target="_blank" rel="noopener noreferrer" className="start-menu-item-text">
              <span>GitHub</span>
            </a>
          </div>
          <div className='menu-item'>
            <img src={linkedin} className='logos' alt="LinkedIn logo" />
            <a href="" target="_blank" rel="noopener noreferrer" className="start-menu-item-text">
              <span>LinkedIn</span>
            </a>
          </div>
          <div className='menu-item'>
            <img src={mail} className='logos' alt="Mail logo" />
            <a href="" target="_blank" rel="noopener noreferrer" className="start-menu-item-text">
              <span>Mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="start-menu-bot">
        <button className="turn-off-btn">
          <img src={logOff} alt="Log off" className="button-icon" />
          <span>Log off</span>
          <img src={power} alt="Turn off" className="button-icon-2" />
          <span>Turn off Computer</span>
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
