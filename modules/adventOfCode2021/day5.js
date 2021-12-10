"use strict"
let pointsTouchedTimes
function solve1(input) {
    return getTouchedPoints(input.filter(line => isVertical(line) || isHorizontal(line)))
        .filter(x => x > 1).length;
}

function solve2(input) {
    return getTouchedPoints(input).filter(x => x > 1).length;
}

function getTouchedPoints(horizontalAndVerticalLines) {
    pointsTouchedTimes = new Map();
    markTouchedPoints(horizontalAndVerticalLines);
    let points = [];
    pointsTouchedTimes.forEach((value) => points.push(value));
    return points;
}

function markTouchedPoints(lines) {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (isVertical(line)) {
            markVertically(line);
        } else {
            if (isHorizontal(line)) {
                markHorizontally(line);
            } else {
                markDiagonally(line);
            }
        }
    }
}
function markVertically(line) {
    const x = line.end.x;
    let a = line.start.y < line.end.y ? line.start.y : line.end.y;
    let b = line.start.y >= line.end.y ? line.start.y : line.end.y;
    for (let y = a; y <= b; y++) {
        countTouches(x, y);
    }
}

function markDiagonally(line) {
    countTouches(line.start.x, line.start.y);
    let numberOfPointsLineTouchesBetweenStartAndEnd = Math.abs(line.end.x - line.start.x) - 1
    if (line.start.x < line.end.x && line.start.y < line.end.y) {
        for (let i = 1; i <= numberOfPointsLineTouchesBetweenStartAndEnd; i++) {
            countTouches(line.start.x + i, line.start.y + i);
        }
    }
    if (line.start.x > line.end.x && line.start.y > line.end.y) {
        for (let i = 1; i <= numberOfPointsLineTouchesBetweenStartAndEnd; i++) {
            countTouches(line.start.x - i, line.start.y - i);
        }
    }
    if (line.start.x > line.end.x && line.start.y < line.end.y) {
        for (let i = 1; i <= numberOfPointsLineTouchesBetweenStartAndEnd; i++) {
            countTouches(line.start.x - i, line.start.y + i);
        }
    }
    if (line.start.x < line.end.x && line.start.y > line.end.y) {
        for (let i = 1; i <= numberOfPointsLineTouchesBetweenStartAndEnd; i++) {
            countTouches(line.start.x + i, line.start.y - i);
        }
    }
    countTouches(line.end.x, line.end.y);
}

function markHorizontally(line) {
    const y = line.end.y;
    let a = line.start.x < line.end.x ? line.start.x : line.end.x;
    let b = line.start.x >= line.end.x ? line.start.x : line.end.x;
    for (let x = a; x <= b; x++) {
        countTouches(x, y);
    }
}

function isHorizontal(line) {
    return line.start.y == line.end.y;
}

function isVertical(line) {
    return line.start.x == line.end.x;
}

function countTouches(x, y) {
    let point = `x : ${x}, y : ${y}`;
    let n = 1;
    if (pointsTouchedTimes.has(point)) {
        n = pointsTouchedTimes.get(point) + 1;
    }
    pointsTouchedTimes.set(point, n);
}


module.exports = { solve1, solve2 }