type chaiOrder = {
    type: string; 
    sugar: number; 
    strong: boolean;
};

function makeChai(order: chaiOrder) {
    console.log(order);
}

function serveChai(order: chaiOrder) {
    console.log(order);
}

type teaRecipe = {
    water: number;
    milk: number
}

// class masalaChai implements teaRecipe {
//     water = 100;
//     milk = 50
// }

interface cupSize  {
    size: "small" | "large"
}

class chai implements cupSize{
    size: "small" | "large" = "large";
}

// type Response = {ok:true} | {ok:false}
// class myRes implements Response{
//     ok: boolean = true;
// }

type teaType = "masala" | "ginger" | "lemon"

function orderChai(t:teaType) {
    console.log(t);
}

type baseChai = {teaLeaves: number}
type Extra = {masala: number}

type masalaChai = baseChai & Extra

const cup: masalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Parthvi"}
const u2: User = {username: "Parthvi", bio: "parthvi.ai"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "ChaiAurCode"