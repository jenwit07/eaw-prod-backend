import db from '../../../config/db.config'
import sequelize from 'sequelize'

const membersModel = db.membersModel
const orderModel = db.orderModel
const orderDetailsModel = db.orderDetailsModel


export function sumRevenue(_username) {

    return new Promise((resolve, reject ) => {

        membersModel.findOne({where : { username: _username }}).then((obj) => {

            let _shopid = obj.shopID

            console.info(`countSaleUnit method shopID = ${_shopid}`)

            orderDetailsModel.findAll({
                raw: true,
                where: { shopID: _shopid },
                attributes: [[sequelize.fn('sum', sequelize.col('totalPaid')), 'sumAmount']],
                include: [{
                    model: orderModel,
                    where: {
                        paidFlag: 'Y'
                    },
                    attributes: []
                }]
            }).then((obj) => {

                resolve(obj)
    
            }).catch((err) => {
    
                reject(err)
    
            })

        })
    })
}