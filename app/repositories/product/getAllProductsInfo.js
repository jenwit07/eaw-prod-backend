import db from '../../../config/db.config'


const membersModel = db.membersModel
const productModel = db.productModel

export function getAllProduct(_username) {

    /*
    1.เอา username ไปหาว่าอยู่ shopID ไหน
    2.select * from EAW_PRODUCTS where shop_id = req.body.shopid
    */

    return new Promise((resolve, reject) => {
        console.log('promise ' + _username)

        membersModel.findOne({ where: { username: _username } }).then((obj) => {

            let _shopid = obj.shopID

            productModel.findAll({
                where: {
                    shopID: _shopid
                }
            }).then((obj) => {

                /* {"url1": "http://placehold.it/400x200"} */
                let resArray = []
                obj.forEach(e => {
                    e.picture = JSON.parse(e.picture)

                    let size = e.size.split(",").map(String)
                    let sizeArray = []

                    size.map(n => {
                        sizeArray.push(
                            e.availableSize.split('').join('').includes(n) ? "Y" : "N"
                        )
                    });

                    e.availableSize = {};
                    size.forEach((key, i) => e.availableSize[key] = sizeArray[i]);

                    let color = e.color.split(",").map(String)
                    let colorArray = []

                    color.map(n => {
                        colorArray.push(
                            e.availableColors.split('').join('').includes(n) ? "Y" : "N"
                        )
                    });

                    e.availableColors = {};
                    color.forEach((key, i) =>  e.availableColors[key] = colorArray[i]);

                    resArray.push(e)
                });

                resolve(obj)
            }).catch((err) => {
                console.error(`serivce was error on productModel by query sopid = ${_shopid} and eror details =  ${err}`)
                reject(err)
            })

        }).catch((err) => {
            console.error(`serivce was error on membersModel by query username = ${_username} and eror details =  ${err}`)
            reject(err)
        })

    })
}