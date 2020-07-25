import { Sortable } from "./Sortable";

export class NumbersCollection implements Sortable {
    constructor(public data: number[]) {}

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    get length(): number {
        return this.data.length;
    }

    swap(leftIndex: number, rightIndex: number): void {
        let leftValue = this.data[leftIndex];

        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftValue;
    }
}
