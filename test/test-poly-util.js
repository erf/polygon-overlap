"use strict";

var assert  = require('assert');
var overlap = require('../index');

describe('poly-overlap', function () {

    it('polys overlap inside', function() {
        var poly0 = [[0,0], [1,0], [1,1], [0,1], [0,0]];
        var poly1 = [[0.5,0.5], [1.5,0.5], [1.5,1.5], [0.5,1.5], [0.5,0.5]];
        var result = overlap(poly0, poly1);
        assert(result===true);
    });

    it('polys overlap intersect', function() {
        var p0 = [[0,0], [2,0], [2,1], [0,1], [0,0]];
        var p1 = [[0.5,-0.5], [1.5,-0.5], [1.5,1.5], [0.5,1.5], [0.5,-0.5]];
        var result = overlap(p0, p1);
        assert(result===true);
    });

    it('polys dont overlap', function() {
        var poly0 = [[0,0], [1,0], [1,1], [0,1], [0,0]];
        var poly1 = [[2,2], [3,2], [3,3], [2,3], [2,2]];
        var result = overlap(poly0, poly1);
        assert(result===false);
    });

    it('polys should overlap (from real example)', function(){

        var tile = [ [ -90, 66.51326044311186 ],
            [ 0, 66.51326044311186 ],
            [ 0, 85.0511287798066 ],
            [ -90, 85.0511287798066 ],
            [ -90, 66.51326044311186 ] ];

        var poly = [ [ -180, -90 ],
            [ 180, -90 ],
            [ 180, 90 ],
            [ -180, 90 ],
            [ -180, -90 ] ];

        var result1 = overlap(tile, poly);
        assert(result1);

        var result2 = overlap(poly, tile);
        assert(result2);
    });

    it('polys overlap simple', function() {
        const p0 = [[0,0], [1,0], [1,1]];
        const p1 = [[0.5,0.5], [1.5,0.5], [1.5,1.5]];
        assert(overlap(p0, p1)===true);
    });

});
