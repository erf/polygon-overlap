# polygon-overlap

Check if two polygons overlap

# Install
`npm install polygon-overlap`

# Usage
```
const p0 = [[0,0], [1,0], [1,1]];
const p1 = [[0.5,0.5], [1.5,0.5], [1.5,1.5]];
assert(pu.overlap(p0, p1)===true);
```

# Tests
`mocha`

# Sources
[http://math.stackexchange.com/questions/254569/concave-polygons-overlapping-test](http://math.stackexchange.com/questions/254569/concave-polygons-overlapping-test)
