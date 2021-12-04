"use strict"
function solve1(input) {
    let { count, half } = initMetaData(input);
    countBits(input, count);
    let gamma = ""
    let epsilon = ""
    count.forEach((element) => {
        element > half ? gamma += "1" : gamma += "0"
        element > half ? epsilon += "0" : epsilon += "1"
    })
    return parseInt(epsilon, 2) * parseInt(gamma, 2)
}


function countBits(input, count) {
    input.forEach(element => {
        for (let index = 0; index < count.length; index++) {
            count[index] += parseInt(element.charAt(index));
        }
    });
}

function initMetaData(input) {
    let half = input.length / 2;
    let count = [];
    for (let index = 0; index < input[0].length; index++) {
        count.push(0);
    }
    return { count, half };
}

function solve2(input) {
    let report = []
    let determineCharToCheck = (meta, i) => {
        return meta.count[i] >= meta.half ? "1" : "0";
    }
    report = input.map(x => x)

    for (let i = 0; i < report[0].length; i++) {
        let meta = initMetaData(report);
        countBits(report, meta.count);
        report = report.filter(s => s.charAt(i) == determineCharToCheck(meta, i))
        if (report.length == 1) { break }
    }
    let oxGenRating = parseInt(report[0], 2)

    report = input.map(x => x)
    for (let i = 0; i < report[0].length; i++) {
        let meta = initMetaData(report);
        countBits(report, meta.count);
        let c = meta.count[i] <= meta.half ? "1" : "0"
        report = report.filter(s => s.charAt(i) == c)
        if (report.length == 1) { break }
    }
    let co2ScrubberRating = parseInt(report[0], 2)
    return co2ScrubberRating * oxGenRating
}

module.exports = { solve1, solve2 }

