import db from '../../../config/db.config'
import { Op } from 'sequelize'

const membersModel = db.membersModel
const productModel = db.productModel

export function removeProductService(_username, productIDList) {

    return new Promise((resolve, reject) => {

        membersModel.findOne({ where: { username: _username } }).then((obj) => {

            let _shopid = obj.shopID

            productModel.destroy({
                where: {
                    shopID: _shopid,
                    productID: {
                        [Op.in]: productIDList
                    }
                }
            }, {
                truncate: {
                    /* Delete All FK table */
                    cascade: true
                }
            }).then((Obj) => {
                resolve(Obj)
            }).catch((err) => {
                reject(err)
            })
        })
    })

}