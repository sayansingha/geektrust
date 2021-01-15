// import { crack, keyFinder, check } from './resolver.js' 

// import { readFileSync } from "fs";
const {geektrust} = require('./utils/index');
const fs = require("fs") 
const filename = process.argv[2];
var array  = fs.readFileSync(filename, "utf-8").toString().split("\n");
// let x = ["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU", "ICE MOMA MVT MTMHTM", "WATER SUMMER IS COMING", "FIRE AJXGAMUTA"];
// let y = ['SPACE'];

console.log(geektrust(array));


