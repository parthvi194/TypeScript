// UNION ( | )

let subs: number | string = '1M'

let apiRequestStatus: 'Pending' | 'Success' | 'error' = 'Pending'

apiRequestStatus = "Success"

let airLine: 'aisle' | 'window' | 'middle' = 'aisle'

airLine = "window"

const orders = ['12', '25', '19', '04']

// Any

let currOrder: string | undefined;

for(let order of orders){
    if (order === '19') {
        currOrder = order
        break
    }
    currOrder = "11";
}

currOrder = '42'

console.log(currOrder);

