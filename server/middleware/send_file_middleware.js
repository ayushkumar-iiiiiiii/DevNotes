







const check_token_middleware = async (req, res, next) => {

    const token = req.cookies.refresh_token

    if(!token){
        console.log("token not found")

        req.token_status = "not found"

        next()
        
    } else {
        console.log("token found")

        req.token_status = "found"

        next()
    }
    
}




module.exports = {
    check_token_middleware,
}