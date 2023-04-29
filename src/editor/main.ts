import LeftEngine from '../left/main';
import './style/main.css';

let player = document.getElementById('player') as HTMLCanvasElement;
let engine = new LeftEngine(player);