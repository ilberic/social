import './index.css';
import './bootstrap-grid.min.css'
import {rerenderEntireTree} from "./render";
import state from "./redux/state";


rerenderEntireTree(state);

