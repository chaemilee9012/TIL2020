// import {mainTxt as m, func as f} from './main.js'; // import 받아서 쓸 이름 from '파일명'
import {m, f} from './main.js';
import * as sub from './sub.js';

var con = document.querySelector('.content');
con.innerHTML = `${m}와 ${sub.mainTxt}`;

console.log(sub);