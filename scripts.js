// not 0-indexing so inverse units can be referenced with negative
var BaseUnits = {
    KILOGRAM: 1,
    METER:    2,
    SECOND:   3,
    AMPERE:   4,
    KELVIN:   5,
    MOLE:     6,
    CANDELA:  7,
    properties: {
        1: {symbol: "kg" },
        2: {symbol: "m"  },
        3: {symbol: "s"  },
        4: {symbol: "A"  },
        5: {symbol: "K"  },
        6: {symbol: "mol"},
        7: {symbol: "cd" }
    }
};

// excluding becquerel, sievert, lumen, and radian units for now
var Units = {
    KILOGRAM:  1,
    METER:     2,
    SECOND:    3,
    AMPERE:    4,
    KELVIN:    5,
    MOLE:      6,
    CANDELA:   7,
    COULOMB:   8,
    FARAD:     9,
    GRAY:     10,
    HENRY:    11,
    HERTZ:    12,
    JOULE:    13,
    KATAL:    14,
    LUX:      15,
    NEWTON:   16,
    OHM:      17,
    PASCAL:   18,
    SIEMENS:  19,
    TESLA:    20,
    VOLT:     21,
    WATT:     22,
    WEBER:    23,
    properties: {                      //  kg   m   s   A   K mol  cd
        1:  {symbol: "kg"    , baseUnits: [ 1,  0,  0,  0,  0,  0,  0]},
        2:  {symbol: "m"     , baseUnits: [ 0,  1,  0,  0,  0,  0,  0]},
        3:  {symbol: "s"     , baseUnits: [ 0,  0,  1,  0,  0,  0,  0]},
        4:  {symbol: "A"     , baseUnits: [ 0,  0,  0,  1,  0,  0,  0]},
        5:  {symbol: "K"     , baseUnits: [ 0,  0,  0,  0,  1,  0,  0]},
        6:  {symbol: "mol"   , baseUnits: [ 0,  0,  0,  0,  0,  1,  0]},
        7:  {symbol: "cd"    , baseUnits: [ 0,  0,  0,  0,  0,  0,  1]},
        8:  {symbol: "C"     , baseUnits: [ 0,  0,  1,  1,  0,  0,  0]},
        9:  {symbol: "F"     , baseUnits: [-1, -2,  4,  2,  0,  0,  0]},
        10: {symbol: "Gy"    , baseUnits: [ 0,  2, -2,  0,  0,  0,  0]},
        11: {symbol: "H"     , baseUnits: [ 1,  2, -2, -2,  0,  0,  0]},
        12: {symbol: "Hz"    , baseUnits: [ 0,  0, -1,  0,  0,  0,  0]},
        13: {symbol: "J"     , baseUnits: [ 1,  2, -2,  0,  0,  0,  0]},
        14: {symbol: "kat"   , baseUnits: [ 0,  0, -1,  0,  0,  1,  0]},
        15: {symbol: "lx"    , baseUnits: [ 0, -2,  0,  0,  0,  0,  1]},
        16: {symbol: "N"     , baseUnits: [ 1,  1, -2,  0,  0,  0,  0]},
        17: {symbol: "\u03C9", baseUnits: [ 1,  2, -3, -2,  0,  0,  0]},
        18: {symbol: "Pa"    , baseUnits: [ 1, -1, -2,  0,  0,  0,  0]},
        19: {symbol: "S"     , baseUnits: [-1, -2,  3,  2,  0,  0,  0]},
        20: {symbol: "T"     , baseUnits: [ 1,  0, -2, -1,  0,  0,  0]},
        21: {symbol: "V"     , baseUnits: [ 1,  2, -3, -1,  0,  0,  0]},
        22: {symbol: "W"     , baseUnits: [ 1,  2, -3,  0,  0,  0,  0]},
        23: {symbol: "Wb"    , baseUnits: [ 1,  2, -2, -1,  0,  0,  0]}
    }
};

// assumes a 1-indexed int array of enum indices, negative for inverse unit
function reduceUnits(units) {
    var reducedUnits = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < units.length; i++) {
        reducedUnits = addBaseUnits(reducedUnits, Units.properties[Math.abs(units[i])].baseUnits, units[i] < 0);
    }
    return reducedUnits;
}

function addBaseUnits(addTo, toAdd, inverse) {
    for (var i = 0; i < addTo.length; i++) {
        addTo[i] += (inverse ? -1 : 1) * toAdd[i];
    }
    return addTo;
}