/**
 * Here the file name is received via command line argument, then we use "file systems(fs)" node module to access the file contents,
 * and store them in an array in kingdom-code pair, and then we require the "main" function from ./utils/index file, we run the main
 * function with the input that we received and console what it returns.
 */
const {main} = require('./utils/index');
const fs = require("fs") 
const filename = process.argv[2];
var array  = fs.readFileSync(filename, "utf-8").toString().split("\n");
console.log(main(array));


