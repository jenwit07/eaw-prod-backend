import db from '../../../config/db.config'
import sequelize from 'sequelize'

const CategoryModel = db.categoryModel;


export function category() {
    return new Promise((resolve, reject ) => {
        
        CategoryModel.findAll().then((obj) => {
            resolve(obj)

        }).catch((err) => {
            console.log(err)
            reject(err)

        })
    })
}