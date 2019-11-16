import db from '../config/db.config'
const accessModel = db.accessModel



//TODO : Refresh Token Checker
export async function checkToken(req, res, next) {

    let _token = req.header('authorization')

    await accessModel.count({ where: { token: _token } }).then((c) => {
        if(c > 0) {
            next()

        }else {
            res.json({
                success: false,
                data: "Unauthorization"
            })
        }

    }).catch((e) => {
        console.error(e)

    })
}