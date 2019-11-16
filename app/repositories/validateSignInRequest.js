import db from '../../config/db.config'

const membersModel = db.membersModel;

export async function validateSignInRequest(req, res, next) {

    /*  
    1.Find membersModel by Username
    2.IF record > { 0 check password } else { return no username in system }
    3.validate password if pass { next() } else { return worng password }
    */

    let usernameObj = {
        'username': `${req.body.username}`
    }

    console.info('Username : ' + usernameObj.username)

    await membersModel.findOne({ where: usernameObj }).then((obj) => {

        /* case username wrong */
        if(!obj) return res.json({ success: false, messege: 'username is incorrect' })

        let password = req.body.password

        if (password === obj.password) {
            next()
        } else {
            res.json({ success: false, messege: 'password is incorrect' })
        }

    }).catch((e) => {
        console.log("catch error  :" + e)
        res.json({
            success: false,
            message: e
        })
    })
}