interface Chai {
    flavour: string
    price: number
    milk?: boolean;
}

const masala:Chai = {
    flavour: "masala",
    price: 30,
};

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: "Chai Caffe"}
// s.id = 2

interface Discountcal{
    (price: number): number
}

const apply50: Discountcal = (p) => p*0.5

interface Teamachine{
    start(): void;
    stop(): void
}

const machine: Teamachine = {
    start() {
        console.log("start");
        
    },
    stop() {
        console.log("stop");
        
    }
}

interface chaiRating {
    [flavour: string]: number
}

const ratings: chaiRating = {
    masala: 4.5,
    ginger: 4.5
}

interface User{
    name: string
}

interface User{
    age: number
}

const u: User = {
    name: "Parthvi",
    age: 22
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}