import './App.css';
import xpicon from "./assets/xp-icon.png";
import { X, Minus, Square, ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import StartMenu from './components/StartMenu';
import volume from './assets/Volume.png';
import wifi from './assets/Wireless Network Connection.png';
import music from './assets/My Music.png';
import bishop from './assets/bishop.png';
import Music from './components/Music.js';
import discord from './assets/discord.png';
import resume from './assets/resume.png';
import workouttracker from './assets/workout-tracker.png';
import minesweeper from './assets/Minesweeper.png';
import Minesweeper from './components/Minesweeper/minesweeper';
import BinaryBishop from './components/BinaryBishop';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import { LogIn } from './components/Startup/LogIn';
import risk from './assets/risk.png'
import PopUp from './components/PopUp/PopUp';
import WorkoutTracker from './components/WorkoutTracker';

type WindowName = 'Music' | 'minesweeper' | 'About Me' | 'Projects' | 'Contact' | 'Resume' | 'workout-tracker' | 'discord-clone' | 'binary-bishop';

interface WindowState {
  isMaximized: boolean;
  isMinimized: boolean;
  size: {
    width: string;
    height: string;
  };
  position: {
    x: number;
    y: number;
  };
}

interface WindowStates {
  [key: string]: WindowState;
}

interface DesktopIcon {
  name: WindowName;
  icon: string | {};
}

interface WindowComponents {
  [key: string]: React.ReactNode;
}

function App() {
  const [activeWindow, setActiveWindow] = useState<WindowName | null>(null);
  const [openWindows, setOpenWindows] = useState<WindowName[]>([]);
  const [startMenu, setStartMenu] = useState<boolean>(false);
  const [time, setTime] = useState<Date>(new Date());
  const [windowStates, setWindowStates] = useState<WindowStates>({});
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(false);
  }

  const DEFAULT_WINDOW_SIZE = {
    width: window.innerWidth > 600 ? '70vw' : '90vw', 
    height: window.innerWidth > 600 ? 'calc(70vh - 20px)' : '60vh'
  };

  const windowComponents: WindowComponents = {
    'Music': <Music />,
    'minesweeper': <Minesweeper />,
    'binary-bishop': <BinaryBishop/>,
    'Resume': <Resume/>,
    'About Me': <AboutMe/>,
    'workout-tracker': <WorkoutTracker/>
  };

  const desktopIcons: DesktopIcon[] = [
    { name: 'Music', icon: music },
    { name: 'binary-bishop', icon: bishop },
    { name: 'Resume', icon: resume },
    { name: 'workout-tracker', icon: workouttracker },
    { name: 'discord-clone', icon: discord },
    { name: 'minesweeper', icon: minesweeper }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleIconClick = (windowName: WindowName): void => {
    if (!openWindows.includes(windowName)) {
      setOpenWindows([...openWindows, windowName]);
      setWindowStates(prev => ({
        ...prev,
        [windowName]: {
          isMaximized: false,
          isMinimized: false,
          size: DEFAULT_WINDOW_SIZE,
          position: { x: 40, y: 40 }
        }
      }));
    }
    setActiveWindow(windowName);
  };

  const handleMinimize = (windowName: WindowName): void => {
    setWindowStates(prev => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        isMinimized: true
      }
    }));
    setActiveWindow(null);
  };

  const handleMaximize = (windowName: WindowName): void => {
    setWindowStates(prev => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        isMaximized: !prev[windowName].isMaximized,
        size: {
          width: '100vw',
          height: 'calc(100vh - 40px)'
        },
        position: {
          x: 0,
          y: 0
        }
      }
    }));
  };

  const handleClose = (windowName: WindowName): void => {
    setOpenWindows(openWindows.filter(name => name !== windowName));
    if (activeWindow === windowName) {
      setActiveWindow(null);
    }
    setWindowStates(prev => {
      const { [windowName]: removedState, ...rest } = prev;
      return rest;
    });
  };

  const handleTaskbarClick = (windowName: WindowName): void => {
    const windowState = windowStates[windowName];
    if (windowState.isMinimized || activeWindow !== windowName) {
      setWindowStates(prev => ({
        ...prev,
        [windowName]: {
          ...prev[windowName],
          isMinimized: false
        }
      }));
      setActiveWindow(windowName);
    } else {
      handleMinimize(windowName);
    }
  };

  const handleStartClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setStartMenu((prev) => !prev);
  };

  const closeStartMenu = () => {
    setStartMenu(false);
  }

  const getWindowIcon = (windowName: WindowName): string => {
    const iconObj = desktopIcons.find(icon => icon.name === windowName);
    if(iconObj && typeof iconObj.icon === 'string'){
      return iconObj.icon;
    }
    return ''
  }
  
  const handleResize = (
    e: React.MouseEvent<HTMLDivElement>,
    direction: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right' | 'left' | 'bottom' | 'top'
  ): void => {
    e.preventDefault();
    e.stopPropagation();
  
    if (!activeWindow) return;
  
    const startX = e.clientX;
    const startY = e.clientY;

    const startWidth = parseFloat(windowStates[activeWindow].size.width);
    const startHeight = parseFloat(windowStates[activeWindow].size.height);

    const startPosX = windowStates[activeWindow].position.x;
    const startPosY = windowStates[activeWindow].position.y;
  
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;

      let newX = startPosX;
      let newY = startPosY;
  
      if (direction.includes('right')) {
        newWidth = startWidth + deltaX;
      } 
      
      if (direction.includes('left')) {
        newWidth = startWidth - deltaX;
        newX = startPosX + deltaX;
      }
  
      if (direction.includes('bottom')) {
        newHeight = startHeight + deltaY;
      } 
      
      if (direction.includes('top')) {
        newHeight = startHeight - deltaY;
        newY = startPosY + deltaY;
      }
  
      const minWidth = window.innerWidth > 600 ? 300 : 200;
      const minHeight = window.innerWidth > 600 ? 200 : 150;

      newWidth = Math.max(newWidth, minWidth);
      newHeight = Math.max(newHeight, minHeight);

      const maxX = window.innerWidth - newWidth;
      const maxY = window.innerHeight - newHeight - 40; 

      newX = Math.min(newX, maxX);
      newY = Math.min(newY, maxY);

  
      setWindowStates((prev) => ({
        ...prev,
        [activeWindow]: {
          ...prev[activeWindow],
          size: {
            width: `${newWidth}px`,
            height: `${newHeight}px`,
          },
          position: {
            x: newX,
            y: newY,
          }
        },
      }));
    };
  
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; 
    const initialWindows: WindowName[] = ['Resume', 'minesweeper'];
  
    const initialStates = {
      minesweeper: {
        isMaximized: false,
        isMinimized: false,
        size: {
          width: isMobile ? '60vw' : '40vw', 
          height: isMobile ? '37vh' : '40vh',
        },
        position: {
          x: isMobile ? 10 : 50, 
          y: isMobile ? 10 : 50,
        },
      },
      Resume: {
        isMaximized: false,
        isMinimized: false,
        size: {
          width: isMobile ? '70vw' : '60vw', 
          height: isMobile ? '60vh' : '50vh',
        },
        position: {
          x: isMobile ? 5 : 200,
          y: isMobile ? 80 : 100,
        },
      },
    };
  
    setOpenWindows(initialWindows);
    setWindowStates(initialStates);
  }, []);
  

  return (
    <div>
      {showLogin && <LogIn />}
      {!showLogin && 
        <div className="windows-container" onClick={closeStartMenu}>
          <div className="desktop">
            <div className="icon-grid">
              {desktopIcons.map(({ name, icon }) => (
                <button
                  key={name}
                  onClick={() => handleIconClick(name)}
                  className="desktop-icon"
                >
                  <img src={icon as string} alt={`${name} icon`} />
                  <span className="icon-text">{name}</span>
                </button>
              ))}
            </div>
          </div>

          {openWindows.map((windowName) => {
            const windowState = windowStates[windowName];
            if (windowState?.isMinimized) return null;

            return (
              <Draggable
                key={windowName}
                handle=".window-header"
                defaultPosition={windowState?.position || { x: 25, y: 25 }}
                bounds="parent"
                onStart={() => setActiveWindow(windowName)}
                onDrag={(e, data) => {
                  setWindowStates((prev) => ({
                    ...prev,
                    [windowName]: {
                      ...prev[windowName],
                      position: {
                        x: data.x,
                        y: data.y,
                      },
                    },
                  }));
                }}
                disabled={windowState?.isMaximized}
              >
                <div
                  className={`window ${activeWindow === windowName ? 'active' : 'inactive'} ${windowState?.isMaximized ? 'maximized' : ''}`}
                  style={{
                    width: windowState?.size.width,
                    height: windowState?.size.height,
                    top: windowState?.isMaximized ? '0' : undefined,
                    left: windowState?.isMaximized ? '0' : undefined,
                    position: windowState?.isMaximized ? 'fixed' : 'absolute',
                    zIndex: activeWindow === windowName ? 10 : 1,
                    transform: windowState?.isMaximized ? 'none' : undefined
                  }}
                  onClick={() => setActiveWindow(windowName)}
                >
                  <div className="window-header">
                    <span className="window-title">
                      <img
                        src={getWindowIcon(windowName)}
                        alt={windowName}
                        className="button-icons"
                      />
                      {windowName}
                    </span>
                    <div className="window-controls">
                      <button
                        className="window-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMinimize(windowName);
                        }}
                      >
                        <Minus color="white" size={16} />
                      </button>
                      <button
                        className="window-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMaximize(windowName);
                          setActiveWindow(windowName);
                        }}
                      >
                        <Square color="white" size={16} />
                      </button>
                      <button
                        className="window-button close"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClose(windowName);
                        }}
                      >
                        <X color="white" size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="window-content">
                    {windowComponents[windowName] || `${windowName} content`}
                  </div>

                  <div className="resize-handle top-left" onMouseDown={(e) => handleResize(e, 'top-left')} />
                  <div className="resize-handle top-right" onMouseDown={(e) => handleResize(e, 'top-right')} />
                  <div className="resize-handle bottom-left" onMouseDown={(e) => handleResize(e, 'bottom-left')} />
                  <div className="resize-handle bottom-right" onMouseDown={(e) => handleResize(e, 'bottom-right')} />
                  <div className="resize-handle left" onMouseDown={(e) => handleResize(e, 'left')} />
                  <div className="resize-handle right" onMouseDown={(e) => handleResize(e, 'right')} />
                  <div className="resize-handle bottom" onMouseDown={(e) => handleResize(e, 'bottom')} />
                  <div className="resize-handle top" onMouseDown={(e) => handleResize(e, 'top')} />

                </div>
              </Draggable>
            );
          })}

          <div className="taskbar">
            <button className="start-button" onClick={handleStartClick}>
              <img src={xpicon} alt="Start" className="button-icons" />
              start
            </button>

            <div className="taskbar-windows">
              {openWindows.map((window) => (
                <button
                  key={window}
                  onClick={() => handleTaskbarClick(window)}
                  className={`taskbar-button ${activeWindow === window && !windowStates[window]?.isMinimized ? 'active' : ''}`}
                >
                  <img
                    src={getWindowIcon(window)}
                    alt={window}
                    className="button-icons"
                  />
                  {window}
                </button>
              ))}
            </div>

            <div className="system-tray">
              <div className="quick-icons">
                <div className='expand'>
                  <ChevronLeft className='expand-icon' size={20} />
                </div>
                <img src={volume} alt="Start" className="button-icons" />
                <img src={wifi} alt="wifi" className="button-icons" />
                <img src={risk} alt="risk" className="button-icons" />
                <div style={{ position: 'relative', width: 0, height: 0 }}>
                  <PopUp />
                </div>
              </div>
              <span className="clock">{formatTime(time)}</span>
            </div>
          </div>

          {startMenu && (
            <StartMenu onClose={closeStartMenu} isOpen={startMenu} />
          )}
        </div>
      }
    </div>
  );
}

export default App;