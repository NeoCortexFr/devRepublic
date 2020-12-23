import React from 'react';
import {
  ArrowUpLeft,
  ArrowUp,
  ArrowDown,
  ArrowUpCircle,
  Command,
  Book,
  ArrowLeftCircle,
  ArrowDownCircle,
  ArrowRightCircle,
  CornerDownLeft,
} from 'react-feather';

import './keyboard.scss';

const Keyboard = () => (
  <div className="keyboard">
    <div className="line">
      <span className="first low2 red">Echap</span>
      <span className="first red">F1</span>
      <span className="first red">F2</span>
      <span className="first yellow">F3</span>
      <span className="first yellow">F4</span>
      <span className="first yellow">F5</span>
      <span className="first yellow">F6</span>
      <span className="first green">F7</span>
      <span className="first green">F8</span>
      <span className="first green">F9</span>
      <span className="first green">F10</span>
      <span className="first blue">F11</span>
      <span className="first blue">F12</span>
      <span className="first low2 blue">Fn<br />Lock</span>
      <span className="first blue">Inser</span>
      <span className="first purple">Suppr</span>
      <span className="first arrow purple"><ArrowUpLeft /></span>
      <span className="first arrow purple">Fin</span>
      <span className="first arrow purple"><ArrowUp /></span>
      <span className="first arrow purple"><ArrowDown /></span>
    </div>
    <div className="line">
      <span className="carre red">2</span>
      <span className="red">1</span>
      <span className="red">2</span>
      <span className="red">3</span>
      <span className="yellow">4</span>
      <span className="yellow">5</span>
      <span className="yellow">6</span>
      <span className="yellow">7</span>
      <span className="yellow">8</span>
      <span className="green">9</span>
      <span className="green">0</span>
      <span className="green">)]</span>
      <span className="blue">+=</span>
      <span className="space low blue">Back</span>
      <span className="low purple">Verr<br />Num</span>
      <span className="purple">/</span>
      <span className="purple">*</span>
      <span className="purple">-</span>
    </div>
    <div className="line">
      <span className="tab red">Tab</span>
      <span className="red">A</span>
      <span className="red">Z</span>
      <span className="red">E</span>
      <span className="yellow">R</span>
      <span className="yellow">T</span>
      <span className="yellow">Y</span>
      <span className="yellow">U</span>
      <span className="yellow">I</span>
      <span className="yellow">O</span>
      <span className="green">P</span>
      <span className="green">^</span>
      <span className="green">$£</span>
      <span className="low arrow green"><CornerDownLeft /></span>
      <span className="purple">7</span>
      <span className="purple">8</span>
      <span className="purple">9</span>
      <span className="purple">+</span>
    </div>
    <div className="line">
      <span className="lock red">Lock</span>
      <span className="red">Q</span>
      <span className="red">S</span>
      <span className="red">D</span>
      <span className="yellow">F</span>
      <span className="yellow">G</span>
      <span className="yellow">H</span>
      <span className="yellow">J</span>
      <span className="yellow">K</span>
      <span className="yellow">L</span>
      <span className="green">M</span>
      <span className="green">%</span>
      <span className="green">µ</span>
      <span className="empty" />
      <span className="purple">4</span>
      <span className="purple">5</span>
      <span className="purple">6</span>
      <span />
    </div>
    <div className="line">
      <span className="shift red">Shift</span>
      <span className="red">&gt;</span>
      <span className="red">W</span>
      <span className="red">X</span>
      <span className="red">C</span>
      <span className="yellow">V</span>
      <span className="yellow">B</span>
      <span className="yellow">N</span>
      <span className="yellow">?</span>
      <span className="green">;</span>
      <span className="green">:</span>
      <span className="green">!</span>
      <span className="low shiftRight green">Shift</span>
      <span className="arrow green"><ArrowUpCircle /></span>
      <span className="purple">1</span>
      <span className="purple">2</span>
      <span className="purple">3</span>
      <span className="low arrow purple"><CornerDownLeft /></span>
    </div>
    <div className="line">
      <span className="low red">Ctrl</span>
      <span className="low red">Fn</span>
      <span className="red"><Command /></span>
      <span className="low red">Alt</span>
      <span className="spaceBar yellow" />
      <span className="low yellow">Alt Gr</span>
      <span className="green"><Book /></span>
      <span className="low green">Ctrl</span>
      <span className="low green">Fn</span>
      <span className="arrow blue"><ArrowLeftCircle /></span>
      <span className="arrow blue"><ArrowDownCircle /></span>
      <span className="arrow blue"><ArrowRightCircle /></span>
      <span className="purple">0</span>
      <span className="purple">.</span>
      <span />
    </div>
  </div>
);

export default Keyboard;
