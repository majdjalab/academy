class Dinosaur {
  name: string;
  age: number = 0;
  constructor(name: string) {
    this.name = name;
  }
}

let dino = new Dinosaur('Billy');
console.log(dino.age);
//Logs "0"
