function rentalCarCost(days) {
    const DAILY_CAR_RENT = 40;
    let totalCarRent;
    totalCarRent = days * DAILY_CAR_RENT;
    if (days >= 3 && days < 7) {
        totalCarRent -= 20;
    }
    else if (days >= 7) {
        totalCarRent -= 50;
    }
    return totalCarRent;
}

