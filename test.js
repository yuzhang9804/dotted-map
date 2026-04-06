const fs = require('fs')
const DottedMap = require('./index').default;

// The tests can only be ran after the lib has been built.

const map = new DottedMap({ height: 120 });

const svg = map.getSVG({
  radius: 0.22,
  color: {
    USA: '#0081F2',
    BRA: '#0081F2',
    JPN: '#0081F2',
    GBR: '#0081F2',
    DEU: '#0081F2',
    FRA: '#0081F2',
    CAN: '#0081F2',
    AUS: '#0081F2',
    KOR: '#0081F2',
    IND: '#0081F2',
    SGP: '#0081F2',
    SAU: '#0081F2',
    ARE: '#0081F2',
    ITA: '#0081F2',
    HKG: '#0081F2',
    TWN: '#0081F2',
    NLD: '#0081F2',
    CHE: '#0081F2',
    ESP: '#0081F2',
    THA: '#0081F2',
    TUR: '#0081F2',
    EGY: '#0081F2',
    POL: '#0081F2',
    AUT: '#0081F2',
    IRL: '#0081F2',
    PRT: '#0081F2',
    IDN: '#0081F2',
    MYS: '#0081F2',
    ZAF: '#0081F2',
    QAT: '#0081F2',
    KWT: '#0081F2',
    CHL: '#0081F2',
    NZL: '#0081F2',
    BEL: '#0081F2',
    VNM: '#0081F2',
    MEX: '#0081F2',
    PHL: '#0081F2',
    default: '#00000033'
  },
  shape: 'circle',
  backgroundColor: 'transparent',
});

// 下载 svg 文件
fs.writeFileSync('./map.svg', svg);
