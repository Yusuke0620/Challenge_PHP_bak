import text from "./test3";
console.log(text);
import chalk from "chalk";


class Plant {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    greet() {
        console.log("こんにちは");
    }

    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`高さは${this.height}cmです`);
    }
}

/* クラス継承 */
class Flower extends Plant {
    constructor(name, color, height ) {
        super(name, height);
        this.color = color;
    }


    smell() {
        console.log("素晴らしい香りがします");
    }

    
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`色は${this.color}です`);
        console.log(`高さは${this.height}cmです`);
        this.smell();
    }
}


const flower = new Flower("サクラ", "ピンク", 25);

flower.info();
