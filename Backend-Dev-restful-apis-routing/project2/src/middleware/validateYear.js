const validateYear = (req, res, next) => {
    const { year } = req.query;

    // If year is not provided → skip validation (optional filter)
    if (!year) {
        return next();
    }

    const numericYear = Number(year);

    // Check valid number
    if (isNaN(numericYear) || !Number.isInteger(numericYear)) {
        return res.status(400).json({
            success: false,
            message: "Year must be a valid integer"
        });
    }

    const currentYear = new Date().getFullYear();

    // Check reasonable range
    if (numericYear < 1900 || numericYear > currentYear + 1) {
        return res.status(400).json({
            success: false,
            message: `Year must be between 1900 and ${currentYear + 1}`
        });
    }

    // Attach validated year
    req.year = numericYear;

    next();
};

module.exports = validateYear;
