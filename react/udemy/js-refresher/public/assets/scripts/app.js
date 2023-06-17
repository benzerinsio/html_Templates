//import { apiKey } from "./util";
//import apiKey from "./util.js"; default case
//import * as util from "./util.js";
import { varA, varB as b } from "./util.js";


function transformToObjects(numberArray) {
    const transformedArray = numberArray.map((item)=> ({val: item}))
}

transformToObjects(1,2,3);
console.log(transformedArray);