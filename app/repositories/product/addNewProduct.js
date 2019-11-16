import db from '../../../config/db.config'
import util from 'util'

const productModel = db.productModel
const membersModel = db.membersModel

export function addNewProduct(_username, newProduct) {
    return new Promise((resolve, reject) => {

        console.log('newProduct' + util.inspect(newProduct))

        membersModel.findOne({ where: { username: _username } }).then((userInfo) => {

            console.info(`addNewProduct : shopID = ${userInfo.shopID}`)

            newProduct.shopID = userInfo.shopID
            newProduct.createBy = newProduct.updateBy = userInfo.username

            productModel.create(newProduct).then((obj) => {

                console.info('created record for new product')

                resolve(obj)

            }).catch((err) => {
                reject(err)
            })

        }).catch((err) => {
            reject(err)
        })

    })
}