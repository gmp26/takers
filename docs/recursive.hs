
tomove maxadd togo
  | togo == 0     = 1
  | togo < maxadd = togo
  | otherwise     = tomove maxadd (togo - maxadd - 1)

move total maxadd goal = 
  print $ total + tomove maxadd (goal - total)

main = move 15 4 23