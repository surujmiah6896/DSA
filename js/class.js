class Car{
    constructor(name){
        this.name = name;
    }

    
    getName() {
        console.log('Name is :', this.name);
        return this.name;
    }

    setName(n){
        this.name = n;
    }

}

const car1 = new Car('Bus');
console.log('object', car1);

car1.setName('jamal');
console.log("object", car1);

car1.getName();

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.mod = mod;
    }

    getFullInfo(){
        console.log('name:', this.getName(), "model:", this.mod);  
    }
    static sex= "male";
}

const model1 = new Model('Baike', '101');
console.log(model1);

model1.getName();
model1.getFullInfo();
console.log("model1.sex ",Model.sex);
