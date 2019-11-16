import db from '../../../config/db.config'
import sequelize from 'sequelize'

const membersModel = db.membersModel
const orderModel = db.orderModel
const orderDetailsModel = db.orderDetailsModel


export function countSaleUnit(_username) {

    return new Promise((resolve, reject ) => {

        membersModel.findOne({where : { username: _username }}).then((obj) => {

            let _shopid = obj.shopID

            console.info(`countSaleUnit method shopID = ${_shopid}`)

            orderModel.count({
                where: { paidFlag: 'Y' }

            }).then((obj) => {

                resolve(obj)
    
            }).catch((err) => {
    
                reject(err)
    
            })

        })
    })
}