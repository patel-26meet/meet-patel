import React, { useEffect, useState } from 'react';
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

// type ItemProps = {
//   text: React.ReactNode | string;
//   icon: string;
//   onHover?: (text: string) => void;
//   onClick?: (text: string) => void;
//   children?: React.ReactNode;
// };

// const Item: React.FC<ItemProps> = ({
//   text,
//   icon,
//   onHover = () => {},
//   onClick = () => {},
//   children,
// }) => {
//   function _onClick() {
//       if(typeof text == "string"){
//         onClick(text)
//       } else {
//         onClick("");
//       }
//   }

//   function onMouseEnter() {
//       if (typeof text === "string") {
//         onHover(text);
//       } else {
//         onHover("");
//       }
//   }

//   return (
//     <div
//       className="item"
//       onClick={_onClick}
//       onMouseEnter={onMouseEnter}
//     >
//       <img className="item-img" src={icon} />
//       <div className="item-texts">
//         <div className="item-text ">{text}</div>
//         {children}
//       </div>
//     </div>
//   );
// };

const StartMenu: React.FC<StartMenuProps> = ({ onClose, isOpen }) => {
  const [hovering, setHovering] = useState('');

  // function onMouseOver(e: React.MouseEvent<HTMLDivElement>) {
  //   const item = (e.target as HTMLElement).closest('.item');
  //   if (!item) return;
  //   const itemText = item.querySelector('.item-text')?.textContent;
  //   if (itemText) {
  //     setHovering(itemText);
  //   }
  // }

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
          <div className="start-menu-description">
            <div className="greeting">Hi! 🖐️</div>
            
            <div className="name">I am Meet.</div>
            
            <div className="cool-stuff">I try to make cool stuff.</div>
            
            <div className="windows-theme">Like this Windows-XP themed portfolio site.</div>
            
            <div className="more-projects">And much more like the ones on the home screen.</div>
            
            <div className="job-status">Yes, I am looking for a job.</div>
            
            <div className="thanks">Thanks for checking out the website! 🚀</div>
          </div>
        </div>


        <div className="start-menu-right">
          <div className='menu-item'>
            <img src={github} className='logos' alt="GitHub logo" />
            <a href="https://github.com/patel-26meet" target="_blank" rel="noopener noreferrer" className="start-menu-item-text">
              <span>GitHub</span>
            </a>
          </div>
          <div className='menu-item'>
            <img src={linkedin} className='logos' alt="LinkedIn logo" />
            <a href="https://www.linkedin.com/in/meet-patel-507361212t" target="_blank" rel="noopener noreferrer" className="start-menu-item-text">
              <span>LinkedIn</span>
            </a>
          </div>
          <div className='menu-item'>
            <img src={mail} className='logos' alt="Mail logo" />
            <a href="mailto:patel26meet@gmail.com" target="_blank" rel="noopener noreferrer" className="start-menu-item-text">
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
