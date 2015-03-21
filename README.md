Takers
======

This will turn into a number of 'takers' levels.

IN 'Takers' you are allowed to take away up to N from one pile on your turn. There may be P piles.
* If N is equal to the largest pile size, the game is equivalent to nim.
* If P=1 and N < P, it's usually called 'Taker' or 'the subtraction game' and is isommorphic to NRICH gotit.
  N may take different values in each pile, with N_p in each, when again the game is isomorphic to nim with N_p in     each pile (or to a single pile equal to the nimsum of the N_p).
* If we allow taking from the middle of a pile, yielding 2 sub piles, then we have a disjunctive sum of Kayles games.

```
$ git clone https://github.com/gmp26/takers.git
$ cd takers
$ bower install
$ cd ..
$ python -m'SimpleHTTPServer'
```

Then browse to takers at localhost:8000.
