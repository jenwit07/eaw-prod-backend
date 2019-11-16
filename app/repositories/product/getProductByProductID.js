import db from '../../../config/db.config'

const productModel = db.productModel

export function getProductByID(prodID) {

    console.log(prodID)

    return new Promise((resolve, reject) => {

        productModel.findOne({
            where: {
                productID: prodID
            }
        }).then((obj) => {
            let resArray = []
            obj.picture = JSON.parse(obj.picture)

            let size = obj.size.split(",").map(String)
            let sizeArray = []

            size.map(n => {
                sizeArray.push(
                    obj.availableSize.split('').join('').includes(n) ? "Y" : "N"
                )
            });

            obj.availableSize = {};
            size.forEach((key, i) => obj.availableSize[key] = sizeArray[i]);

            let color = obj.color.split(",").map(String)
            let colorArray = []

            color.map(n => {
                colorArray.push(
                    obj.availableColors.split('').join('').includes(n) ? "Y" : "N"
                )
            });

            obj.availableColors = {};
            color.forEach((key, i) => obj.availableColors[key] = colorArray[i]);

            resArray.push(obj)

            resolve(obj)

        }).catch((e) => {
            reject(e)

        })

    })


}