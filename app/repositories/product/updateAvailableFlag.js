import db from '../../../config/db.config'
import { Op } from 'sequelize'

const membersModel = db.membersModel
const productModel = db.productModel


export function updateAvailableFlag(_username, productList) {

    return new Promise((resolve, reject) => {

        membersModel.findOne({ where: { username: _username } }).then((obj) => {

            let _shopid = obj.shopID
            console.log("ShopID" + _shopid)

            let promises = [];

            productModel.sequelize.transaction({ autocommit: false }).then((t) => {

                productList.forEach(element => {
                    promises.push(
                        productModel.update({
                            productAvailableFlag: element.flag
                        }, {
                            where: {
                                shopID: _shopid,
                                productID: element.productID
                            },
                            transaction: t
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