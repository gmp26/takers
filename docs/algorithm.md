algorithm
=========

b = max number of balls allowed per go
t = total to make
r = running total 
i = initial run value

r = i

###Normal Play
Winning positions are at t - k(b+1), k >= 0
Next winning position when t-k(b+1) = r+n where n <= b
        => n = (t-r)-k(b+1)
        => n % (b+1) = (t-r)%(b+1)

###Misere Play
Aim for (t-1) instead
Next winning position when (t-1)-k(b+1) = r+n where n <= b
        => n = (t-r-1)-k(b+1)
        => n % (b+1) = (t-r-1)%(b+1)

###When in losing position
Choose 1 <= n <= b


