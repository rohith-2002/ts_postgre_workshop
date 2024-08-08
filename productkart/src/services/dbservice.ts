// Step 1: Import the JSON file
import * as dbData from '../db/db.json';

dbData.products[0].name = "pixel";
console.log(dbData.products);