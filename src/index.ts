import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

let collection = new NumbersCollection([10, 3, -5, 0]);

let sorter = new Sorter(collection);
sorter.sort();

console.log(collection.data);
