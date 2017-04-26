function rentalCarCost(days) {
    const baseFare = 40;
    let totalRent = days * baseFare;
    if (days > 0 && days < 3) {
        totalRent = totalRent;
    }
    else if (days >= 3 && days < 7) {
        totalRent -= 20;
    }
    else if (days >= 7) {
        totalRent -= 50;
    }
    return totalRent;
}