// const asyncHandler = (requestHandler) => {
//     (req, res, next)=> {
//         Promise.resolve(requestHandler(req, res, next))
//         .catch((error)=> next(error))
//     }
// }

const asyncHandler = (fn) => {
    // Return an asynchronous middleware function that takes req, res, and next as parameters
    async(req, res, next)=> {  
        try {
            await fn(req, res, next);
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            })
        }
    }
}



export {asyncHandler}