"use strict"
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")


test("should accept a file", () => {
    const testFile = path.resolve("./tests/adventOfCode2021/integerTestFile.txt")

    expect(parser.parseToIntegerArray(testFile)).toEqual([1, 2, 3])
})