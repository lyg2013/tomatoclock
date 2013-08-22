function timeDelta(date1, date2) {
    return date1.getTime() - date2.getTime();
}

function timeDeltaInHours(result) {
    return Math.floor((result / 1000) / (60 * 60));
}

function timeDeltaInMinuts(result) {
    return Math.floor((result / 1000) % (60 * 60) / 60);
}

function timeDeltaInSeconds(result) {
    return Math.floor(result / 1000  % 60);
}


exports.timeDelta = timeDelta;
exports.timeDeltaInHours = timeDeltaInHours;
exports.timeDeltaInMinuts = timeDeltaInMinuts;
exports.timeDeltaInSeconds = timeDeltaInSeconds;
