"use strict";

var intersect = require("lines-intersect");
var inside = require("point-inside-polygon");

function polygon_points_inside(p0, p1) {
    var i;
    for (i = 0; i < p0.length; i += 1) {
        if (inside(p0[i], p1)) {
            return true;
        }
    }
    for (i = 0; i < p1.length; i += 1) {
        if (inside(p1[i], p0)) {
            return true;
        }
    }
    return false;
}

function polygon_edges_overlap(p0, p1) {
    for (var i = 0; i < p0.length - 1; i += 1) {
        for (var j = 0; j < p1.length - 1; j += 1) {
            if (intersect(p0[i][0], p0[i][1], p0[i + 1][0], p0[i + 1][1], 
                          p1[j][0], p1[j][1], p1[j + 1][0], p1[j + 1][1])) {
                return true;
            }
        }
    }
    return false;
}

function overlap (p0, p1) {

    // polygons overlap if either

    // 1. one of the points of one polygon is inside the other polygon polygon
    if (polygon_points_inside(p0, p1)) {
        return true;
    }

    // 2. one of the edges overlap
    if (polygon_edges_overlap(p0, p1)) {
        return true;
    }

    return false;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = overlap;
}

