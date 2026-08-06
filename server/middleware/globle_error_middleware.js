

function errorHandler(err, req, res, next) {

    if (err.isOperational) {
        return res.status(err.status_code).json({
            success: false,
            error: err.error_code,
            message: err.message
        });
    }

    // Unexpected error
    console.error(err);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
    
}



module.exports = {
    errorHandler
}