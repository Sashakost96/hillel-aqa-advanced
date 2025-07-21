function checkOrder(available, ordered) {
    if (ordered === 0) {
        return `Your order is empty.\n`;
    }
    if (ordered > available) {
        return `Your order is too large, we don't have enough goods.\n`;
    }
    return `Your order is accepted!\n`;
}

console.log(checkOrder(15, 5));
console.log(checkOrder(5, 15));
console.log(checkOrder(5, 0));
