var mainTxt = 'hello';
var func = function() {
  return 1000;
}

// export {mainTxt, func};
export {mainTxt as m, func as f};
// export {mainTxt as default};
// export {내보낼 값 as default(1개 값 내보낼 때)}