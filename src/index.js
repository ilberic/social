import './index.css';
import './bootstrap-grid.min.css'
import {rerenderEntireTree} from "./render";
import state, {addPostBLL, addPostUI} from "./redux/state";


rerenderEntireTree(state, addPostBLL, addPostUI);

