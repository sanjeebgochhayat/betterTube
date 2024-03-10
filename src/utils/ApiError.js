// Define a custom error class named ApiError that extends the built-in Error class
class ApiError extends Error {
// Constructor for the ApiError class, with parameters for statusCode, message, errors, and stack
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack=""
    ){
// Call the constructor of the parent class (Error) with the provided message
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success= false
        this.errors = errors
// Check if a stack trace is provided
        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

/*
super(message)
we use it besically when we are using extends ( inheriting )
When you're creating a subclass, you often want to initialize
both the properties inherited from the superclass and those
specific to the subclass. super() is used in the subclass 
constructor to call the superclass constructor and perform the 
initialization defined there before adding subclass-specific behavior.
*/