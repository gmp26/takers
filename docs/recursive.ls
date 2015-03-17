tomove = (maxadd, togo) ->
  | togo == 0     => 1 + Math.floor maxadd*Math.random!
  | togo < maxadd => togo
  | otherwise     =>  tomove maxadd, togo - maxadd - 1

move = (total, maxadd, goal) -> 
  console.log total + tomove maxadd, goal - total


squares = []

relabelSquaresFromToUsing = (from, to, using) ->
  for()


move 15,4,23
