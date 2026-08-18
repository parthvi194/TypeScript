function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Masala")
wrapInArray(22)
wrapInArray({flavor: "Ginger"})

function pair<PA, PI>(pa: PA, pi: PI): [PA, PI] {
    return [pa, pi]
}

pair("masala", "test")
pair("masala", 22)
pair("masala", {flavor: "Ginger"})

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

interface apiPromise<T>{
    status: number,
    data: T
}

const res: apiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "Ginger"}
}

