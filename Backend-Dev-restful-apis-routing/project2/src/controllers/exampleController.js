const examples = require("../models/exampleModel");

exports.getAllExamples = (req, res) => {
    let filteredData = examples;

    const { author } = req.query;

    // Filter by author
    if (author) {
        filteredData = filteredData.filter(
            (item) => item.author.toLowerCase() === author.toLowerCase()
        );
    }

    // Filter by validated year
    if (req.year) {
        filteredData = filteredData.filter(
            (item) => item.year === req.year
        );
    }

    res.json({
        success: true,
        count: filteredData.length,
        data: filteredData
    });
};
