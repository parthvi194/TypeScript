"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} Chai...`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai..`;
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai..`;
    }
    return `chai order #${size}`;
}
class kulhadChai {
    serve() {
        return `serving kulhad chai..`;
    }
}
class Cutting {
    serve() {
        return `serving cutting chai..`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function ischaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (ischaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function makeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        // 
    }
}
//# sourceMappingURL=typeNarrowing.js.map