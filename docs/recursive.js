// Generated by LiveScript 1.2.0
var tomove, move;
tomove = function(maxadd, togo){
  if (togo === 0) {
    return 1 + Math.floor(maxadd * Math.random());
  }
  if (togo < maxadd) {
    return togo;
  }
  return tomove(maxadd, togo - maxadd - 1);
};
move = function(total, maxadd, goal){
  return console.log(total + tomove(maxadd, goal - total));
};
move(15, 4, 23);