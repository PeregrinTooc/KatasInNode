"use strict"
function solve1(input) {
    const horizontalAndVerticalLines = input.filter(line => isVertical(line) || isHorizontal(line))
    let pointsTouchedTimes = new Map()
    for (let i = 0; i < horizontalAndVerticalLines.length; i++) {
        const line = horizontalAndVerticalLines[i];
        if (isVertical(line)) {
            const x = line.end.x
            let a = line.start.y < line.end.y ? line.start.y : line.end.y
            let b = line.start.y >= line.end.y ? line.start.y : line.end.y
            for (let y = a; y <= b; y++) {
                countTouches(x, y);
            }
        } else {
            const y = line.end.y
            let a = line.start.x < line.end.x ? line.start.x : line.end.x
            let b = line.start.x >= line.end.x ? line.start.x : line.end.x
            for (let x = a; x <= b; x++) {
                countTouches(x, y);
            }
        }
    }
    let points = []
    pointsTouchedTimes.forEach((value) => points.push(value))

    return points.filter(x => x > 1).length


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
}

function solve2(input) {

}

module.exports = { solve1, solve2 }