import db from '../../../config/db.config'

const membersModel = db.membersModel


export function shopMember(_username) {

    return new Promise((resolve, reject ) => {

        membersModel.findOne({where : { username: _username }}).then((obj) => {

            let _shopid = obj.shopID

            console.info(`countSaleUnit method shopID = ${_shopid}`)

            membersModel.count({

                where: { shopID: _shopid },

            }).then((obj) => {

                resolve(obj)
    
            }).catch((err) => {
    
                reject(err)
    
            })

        })
    })
}