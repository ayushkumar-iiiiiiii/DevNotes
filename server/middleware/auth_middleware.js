const jwt = require('jsonwebtoken')
require('dotenv').config();
const UAParser = require('ua-parser-js')





// creating a middleware for check the req have a valid access token or not

const protect_route = async (req, res, next) => {

    let access_token = req.cookies.access_token

    if (!access_token) {
        return res.status(401).json({
            massage: "token not found"
        })
    }
    try {

        let decode = jwt.verify(access_token, process.env.ACCESS_JWT_SECRET)

        req.user = decode;

        next()

    } catch (error) {

        if(error.name === 'JsonWebTokenError'){
            return res.status(401).json({
            massage: "invalid token"
        })
        }

        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({
            massage: "token expire"
        })
        }

    }


}





// for getting the device info and os info and adding to req object

const get_device_info = async (req, res, next)=>{

    const parser = new UAParser(req.headers['user-agent']);

    const result = parser.getResult();

    const OS = result.os.name

    const browser = result.browser.name

    req.user = {
        os: OS,
        browser: browser
    }

    next()

}




// getting the ip of the user the making the signup api call





module.exports = {
    protect_route,
    get_device_info
}