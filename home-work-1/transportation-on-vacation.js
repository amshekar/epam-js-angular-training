function rentalCarCost(days) {
    const baseFare = 40;
    let totalFare = days * baseFare;
    if (days >= 3 && days < 7) {
        totalFare -= 20;
    }
    else if (days >= 7) {
        totalFare -= 50;
    }
    return totalRent;
}

