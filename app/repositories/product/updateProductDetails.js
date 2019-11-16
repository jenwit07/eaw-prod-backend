import db from '../../../config/db.config'
import { Op } from 'sequelize'

const membersModel = db.membersModel
const productModel = db.productModel


export function updateProduct(_username, productDetals) {

    return new Promise((resolve, reject) => {

        membersModel.findOne({ where: { username: _username } }).then((obj) => {

            let _shopid = obj.shopID

            console.info("shop id " + _shopid)

            productDetals.updateDate = new Date(Date.now()).toLocaleString("en-GB", {timeZone: 'Asia/Bangkok'})

            console.log(productDetals)

            productModel.update( productDetals , { where: { shopID: _shopid, productID : productDetals.productID } }).then((Obj) => {

                resolve(Obj)

            }).catch((err) => {

                reject(err)

            })

        })
    })
}