import db from '../../../config/db.config'
import commonKey from '../../../config/commonKey'

const membersModel = db.membersModel
const orderModel = db.orderModel
const orderDetailsModel = db.orderDetailsModel


export function updateOrder(_username, orderlist) {

    /* 
       orderID : 1,
       paidFlag : "Y",
       deleteFlag : "Y",
       shipFlag : "Y",
       shipDate : sysdate 
    */

    return new Promise((resolve, reject) => {

        membersModel.findOne({ where: { username: _username } }).then((obj) => {

            let _shopid = obj.shopID
            console.log("ShopID" + _shopid)

            let promises = [];

            orderDetailsModel.sequelize.transaction({ autocommit: false }).then((t) => {

                orderlist.forEach(e => {

                    console.log("********************")
                    console.log([
                        e.shipFlag,
                        _shopid,
                        e.orderID,
                        e.paidFlag,
                        e.deleteFlag
                    ])
                    console.log("********************")

                    promises.push(

                        orderDetailsModel.update({
                            shipFlag: e.shipFlag,
                            /* TODO: shipDate update?? */
                        }, {
                            where: {
                                shopID: _shopid,
                                orderID: e.orderID
                            },
                            transaction: t
                        }).then((obj) => {

                            console.log(obj)

                            orderModel.update({
                                paidFlag: e.paidFlag,
                                deleteFlag: e.deleteFlag
                            }, {
                                where: {
                                    // shopID: _shopid,
                                    orderID: e.orderID
                                },
                                transaction: t
                            })
                        })

                    )

                })

                Promise.all(promises).then(resultdata => {
                    t.commit(t)
                    resolve(resultdata)
                }).catch(err => {
                    t.rollback(t)
                    console.log(err)
                    reject(err)
                });

            })

        })

    })

}