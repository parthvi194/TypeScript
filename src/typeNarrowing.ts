function getChai(kind: string | number) {
    if(typeof kind === 'string'){
        return `Making ${kind} Chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string) {
    if (msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai..`
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai..`
    }
    return `chai order #${size}`
}

class kulhadChai {
    serve() {
        return `serving kulhad chai..`
    }
}

class Cutting {
    serve() {
        return `serving cutting chai..`
    }
}

function serve(chai:kulhadChai | Cutting) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}

type chaiOrder = {
    type: string
    sugar: number
}

function ischaiOrder(obj:any):obj is chaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" 
    )
}

function serveOrder(item:chaiOrder | string) {
    if (ischaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type masalaChai = {type: "masala"; spicelevel: number};
type gingerChai = {type: "ginger"; amount: number};
type elaichiChai = {type: "elaichi"; aroma: number};

type Chai = masalaChai | gingerChai | elaichiChai

function makeChai(order:Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
    }
}

function brew(order:masalaChai | gingerChai) {
    if ("spicelevel" in order) {
        // 
    }
}
