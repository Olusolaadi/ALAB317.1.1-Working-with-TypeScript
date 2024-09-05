// @ts-check

class Vehicle {
  // For "status," use a union of literals to declare valid status options: "started" or "stopped"
    public status: 'stopped' | 'started' = "stopped";
    public make;
    public model;
    public wheels;
    // public errorCodes: '404' | '200' = '404'
  
    // Add appropriate types for all current Vehicle properties and method parameters.
    constructor(make: string, model: string, wheels: number | number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, "4");
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }

  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
      console.log(`The vehicle is running`);
    } else {
      console.log(`The vehicle is stopped`);
    }
  }

  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());

  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = Number(myBuick.wheels) - 1;
  myBuick.start();
  console.log(myBuick.status);
  console.log(myBuick.make);
  console.log(myBuick.wheels);
  console.log(myBuick.model);

  class NCycle<T> {
    public status: "stopped" | "started" = "stopped";
    public make;
    public model;
    public wheels;
  
    constructor(make: T | T[], model: T | T[], wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  
    print(index: number = 0): void {
      // if this.make and this.model are both arrays
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        // if parameter index exist in this,ake and this.model
        if (this.make[index] && this.model[index]) {
          console.log(`This NCycle has a ${this.make} ${this.model} at ${index}`);
        }
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle`);
        // if (typeof this.make === 'string' && typeof this.model === 'string') {
        //   console.log(`This is a ${this.make} ${this.model} NCycle`);
        // } else {
        //   console.log(`This is a ${this.make} ${this.model} are not strings!`);
        // }
      }
    }
  
  
  }
  
  const testCycle1 = new NCycle<number>(1, 2, 3);
  testCycle1.print();
  
  const testCycle2 = new NCycle<string>("Ford", "F150", 4);
  testCycle2.print();
  
  const testCycle3 = new NCycle<string>("Tesla", "Mode Y", 4);
  testCycle3.print(4);


  // --- NCycle Class

class NCycle<T> {
  public status: "stopped" | "started" = "stopped";
  public make;
  public model;
  public wheels;

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }

  print(index: number = 0): void {
    // if this.make and this.model are both arrays
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      // if parameter index exist in this,ake and this.model
      if (this.make[index] && this.model[index]) {
        console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}`);
      }
    } else {
      console.log(`This is a ${this.make} ${this.model} NCycle`);
      // if (typeof this.make === 'string' && typeof this.model === 'string') {
      //   console.log(`This is a ${this.make} ${this.model} NCycle`);
      // } else {
      //   console.log(`This is a ${this.make} ${this.model} are not strings!`);
      // }
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      // if parameter index exist in this,ake and this.model
      
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i ++){
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`);
      }
    }
  }

}

// const testCycle1 = new NCycle<number>(1, 2, 3);
// testCycle1.print();

// const testCycle2 = new NCycle<string>("Ford", "F150", 4);
// testCycle2.print();

// const testCycle3 = new NCycle<string>("Tesla", "Mode Y", 4);
// testCycle3.print(4);

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];

const testCycle4 = new NCycle<string[]>(makes4, models4, 4);

testCycle4.print(2);
// testCycle4.printAll();