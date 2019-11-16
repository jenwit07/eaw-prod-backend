import db from '../../../config/db.config'
import { Op } from 'sequelize'

const membersModel = db.membersModel
const orderModel = db.orderModel
const orderDetailsModel = db.orderDetailsModel

export function getOrder(_username, orderKey) {

    /* 
    
    orderKey = {
        orderDate: orderDate,
        paidFlag: paidFlag,
        paymentDate: paymentDate,
        shipFlag: shipFlag
    }
    
    */

    return new Promise((resolve, reject) => {

        membersModel.findOne({ where: { username: _username } }).then((obj) => {

            let _shopid = obj.shopID

            console.log('############' + _shopid)

            console.log(orderKey.shipFlag)

            orderDetailsModel.findAll({
                where: {
                    shopID: _shopid,
                    shipFlag: orderKey.shipFlag
                },
                include: [{
                    model: orderModel,
                    where: {
                        paidFlag: orderKey.paidFlag
                        // orderDate: {
                        //     [Op.between]: ["2017-10-05T09:57:30.000Z", "2020-10-05T09:57:30.000Z"]
                        // }
                    },
                    order: '"orderDate" DESC'
                }]
            }).then((obj) => {

                resolve(obj)

                // const resObj = obj.assign({}, {

                // })

            }).catch((err) => {

                console.log(err)

                reject(err)

            })

        })


    })

}