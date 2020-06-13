var BaseUnits = {
    KILOGRAM: 0,
    METER:    1,
    SECOND:   2,
    AMPERE:   3,
    KELVIN:   4,
    MOLE:     5,
    CANDELA:  6,
    properties: {
        0: {symbol: "kg" },
        1: {symbol: "m"  },
        2: {symbol: "s"  },
        3: {symbol: "A"  },
        4: {symbol: "K"  },
        5: {symbol: "mol"},
        6: {symbol: "cd" }
    }
};

var DerivedUnits = {
    COULOMB:   0,
    FARAD:     1,
    GRAY:      2,
    HENRY:     3,
    HERTZ:     4,
    JOULE:     5,
    KATAL:     6,
    LUX:       7,
    NEWTON:    8,
    OHM:       9,
    PASCAL:   10,
    SIEMENS:  11,
    TESLA:    12,
    VOLT:     13,
    WATT:     14,
    WEBER:    15,
    properties: {                      //  kg   m   s   A   K mol  cd
        0:  {symbol: "C"     , baseUnits: [ 0,  0,  1,  1,  0,  0,  0]},
        1:  {symbol: "F"     , baseUnits: [-1, -2,  4,  2,  0,  0,  0]},
        2:  {symbol: "Gy"    , baseUnits: [ 0,  2, -2,  0,  0,  0,  0]},
        3:  {symbol: "H"     , baseUnits: [ 1,  2, -2, -2,  0,  0,  0]},
        4:  {symbol: "Hz"    , baseUnits: [ 0,  0, -1,  0,  0,  0,  0]},
        5:  {symbol: "J"     , baseUnits: [ 1,  2, -2,  0,  0,  0,  0]},
        6:  {symbol: "kat"   , baseUnits: [ 0,  0, -1,  0,  0,  1,  0]},
        7:  {symbol: "lx"    , baseUnits: [ 0, -2,  0,  0,  0,  0,  1]},
        8:  {symbol: "N"     , baseUnits: [ 1,  1, -2,  0,  0,  0,  0]},
        9:  {symbol: "\u03C9", baseUnits: [ 1,  2, -3, -2,  0,  0,  0]},
        10: {symbol: "Pa"    , baseUnits: [ 1, -1, -2,  0,  0,  0,  0]},
        11: {symbol: "S"     , baseUnits: [-1, -2,  3,  2,  0,  0,  0]},
        12: {symbol: "T"     , baseUnits: [ 1,  0, -2, -1,  0,  0,  0]},
        13: {symbol: "V"     , baseUnits: [ 1,  2, -3, -1,  0,  0,  0]},
        14: {symbol: "W"     , baseUnits: [ 1,  2, -3,  0,  0,  0,  0]},
        15: {symbol: "Wb"    , baseUnits: [ 1,  2, -2, -1,  0,  0,  0]}
    }
};

// excluding becquerel, sievert, lumen, and radian units for now