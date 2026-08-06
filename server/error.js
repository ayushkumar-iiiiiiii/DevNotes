



// creating an apperror class

class AppError extends Error {

    constructor(massage, status_code, error_code) {

        super(massage)

        this.name = this.constructor.name
        this.status_code = status_code
        this.error_code = error_code
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor)
    }

}





// for valid client input 


class ValidationError extends AppError {

    constructor(message = "Invalid request data") {

        super(
            message,
            400,
            "VALIDATION_ERROR"
        );

    }

}





// Used when the user is not authenticated


class UnauthorizedError extends AppError {

    constructor(message = "Authentication required") {

        super(
            message,
            401,
            "UNAUTHORIZED"
        );

    }

}




// Used when the user is authenticated, but doesn't have permission


class ForbiddenError extends AppError {

    constructor(message = "You are not allowed to perform this action") {

        super(
            message,
            403,
            "FORBIDDEN"
        );

    }

}



// Used when the requested resource doesn't exist



class NotFoundError extends AppError {

    constructor(message = "Resource not found") {

        super(
            message,
            404,
            "NOT_FOUND"
        );

    }

}




//Used when the request conflicts with existing data


class ConflictError extends AppError {

    constructor(message = "Resource already exists") {

        super(
            message,
            409,
            "CONFLICT"
        );

    }

}








module.exports = {
    ValidationError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError
}
