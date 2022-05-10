function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance / youSpeed) {
        return "Alive!"
    } else {
        return "Shark Bait!"
    }
}