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
      <span className="first low2">Echap</span>
      <span className="first">F1</span>
      <span className="first">F2</span>
      <span className="first">F3</span>
      <span className="first">F4</span>
      <span className="first">F5</span>
      <span className="first">F6</span>
      <span className="first">F7</span>
      <span className="first">F8</span>
      <span className="first">F9</span>
      <span className="first">F10</span>
      <span className="first">F11</span>
      <span className="first">F12</span>
      <span className="first low2">Fn<br />Lock</span>
      <span className="first">Inser</span>
      <span className="first">Suppr</span>
      <span className="first"><ArrowUpLeft /></span>
      <span className="first">Fin</span>
      <span className="first"><ArrowUp /></span>
      <span className="first"><ArrowDown /></span>
    </div>
    <div className="line">
      <span>2</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>0</span>
      <span>)]</span>
      <span>+=</span>
      <span className="space low">Back</span>
      <span className="low">Verr<br />Num</span>
      <span>/</span>
      <span>*</span>
      <span>-</span>
    </div>
    <div className="line">
      <span className="tab">Tab</span>
      <span>A</span>
      <span>Z</span>
      <span>E</span>
      <span>R</span>
      <span>T</span>
      <span>Y</span>
      <span>U</span>
      <span>I</span>
      <span>O</span>
      <span>P</span>
      <span>^</span>
      <span>$£</span>
      <span className="low"><CornerDownLeft /></span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>+</span>
    </div>
    <div className="line">
      <span className="lock">Lock</span>
      <span>Q</span>
      <span>S</span>
      <span>D</span>
      <span>F</span>
      <span>G</span>
      <span>H</span>
      <span>J</span>
      <span>K</span>
      <span>L</span>
      <span>M</span>
      <span>%</span>
      <span>µ</span>
      <span className="empty" />
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span />
    </div>
    <div className="line">
      <span className="shift">Shift</span>
      <span>&gt;</span>
      <span>W</span>
      <span>X</span>
      <span>C</span>
      <span>V</span>
      <span>B</span>
      <span>N</span>
      <span>?</span>
      <span>;</span>
      <span>:</span>
      <span>!</span>
      <span className="low shiftRight">Shift</span>
      <span><ArrowUpCircle /></span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span className="low"><CornerDownLeft /></span>
    </div>
    <div className="line">
      <span className="low">Ctrl</span>
      <span className="low">Fn</span>
      <span><Command /></span>
      <span className="low">Alt</span>
      <span className="spaceBar" />
      <span className="low">Alt Gr</span>
      <span><Book /></span>
      <span className="low">Ctrl</span>
      <span className="low">Fn</span>
      <span><ArrowLeftCircle /></span>
      <span><ArrowDownCircle /></span>
      <span><ArrowRightCircle /></span>
      <span>0</span>
      <span>.</span>
      <span />
    </div>
  </div>
);

export default Keyboard;
