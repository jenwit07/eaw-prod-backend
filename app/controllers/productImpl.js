import jwt from 'jwt-simple'
import { getAllProduct } from '../repositories/product/getAllProductsInfo'
import { addNewProduct } from '../repositories/product/addNewProduct'
import { updateAvailableFlag } from '../repositories/product/updateAvailableFlag'
import { updateProduct as updateProductService } from '../repositories/product/updateProductDetails'
import { removeProductService } from '../repositories/product/removeProduct'
import commonKey from '../../config/commonKey'
import { getProductByID } from '../repositories/product/getProductByProductID'

/* TODO : Get Product by Product ID */


/* DONE : Get Product Information */
export async function getProducts(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var _username = payload.sub

    console.log(_username)

    await getAllProduct(_username).then((obj) => {

        console.info('send all product information to username : ' + _username)

        res.json({
            success: true,
            data: obj
        })

    }).catch((err) => {

        console.error(`error on getProductInfo username = ${_username} and error ` + err)

        res.json({
            success: false,
            data: `error on getProductInfo with username : ' + ${_username}`
        })

    })

}

/* TODO : TEST Add Product */
export async function addProduct(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    console.log(Access.jwtFromRequest)

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var _username = payload.sub

    //TODO : get shopid from token

    /*
        -- Exactly Request --

        availableColors: "red" **checked**
        availableSize: "a" **checked**
        categoryid: 1 **checked**
        color: "red" **checked**
        note: "sss" **checked**
        picture: "{"url": "aaaaa"}" **checked**
        size: "a" **checked**
        unitPrice: "12345" **checked**
        inventory: "333333"
        safetyStock: "2222" 

    */

    var body = req.body

    var newProduct = {
        categoryID: body.categoryid,
        quatityPerUnit: body.quatityPerUnit,
        unitPrice: body.unitPrice,
        availableSize: body.availableSize,
        availableColors: body.availableColors,
        size: body.size,
        color: body.color,
        discountUnitPrice: body.discountUnitPrice,
        productAvailableFlag: body.productAvailableFlag,
        discountAvailableFlag: body.discountAvailableFlag,
        picture: body.picture,
        note: body.note,
        productName: body.productName,
        inventoryStock: body.inventory,
        safetyStick: body.safetyStock
    }

    await addNewProduct(_username, newProduct).then((obj) => {

        res.json({
            success: true,
            data: `add new product with product id ${obj.productID}`
        })

    }).catch((err) => {
        res.json({
            success: false,
            data: `error on getProductInfo with username : ' + ${_username} and error details = ${err}`
        })
    })

}

/* TEST : Update Available Product */
export async function updateAvailableProducts(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub


    await updateAvailableFlag(username, req.body).then((Obj) => {

        console.log(Obj)
        res.json({
            success: true,
            message: "update available product finshed "
        })

    }).catch((err) => {

        console.log(err)
        res.json({
            success: false,
            message: err
        })

    })

}

/* TEST : Update Product Detail */
export async function updateProduct(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await updateProductService(username, req.body).then((obj) => {

        console.log(obj)
        res.json({
            success: true,
            message: obj
        })

    }).catch((err) => {

        console.log(err)
        res.json({
            success: false,
            message: err
        })

    })

}

/* TODO : Remove Product */
export async function removeProduct(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await removeProductService(username, req.body).then((obj) => {

        console.log(obj)
        res.json({
            success: true,
            message: obj
        })

    }).catch((err) => {

        console.log(err)
        res.json({
            success: false,
            message: err
        })

    })

}

/* TODO : Get Product by Product Id */
export function getProductInfo(req, res) {

    let prodID = req.params.id;

    getProductByID(prodID).then((obj) => {
        console.log(obj)
        res.json({
            success: true,
            data: obj
        })

    }).catch((e) => {
        console.log(err)
        res.json({
            success: false,
            message: err
        })

    })

}