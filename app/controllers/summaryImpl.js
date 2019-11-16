import jwt from 'jwt-simple'
import db from '../../config/db.config'
import commonKey from '../../config/commonKey'
import { countSaleUnit } from '../repositories/summary/countSaleUnit'
import { sumRevenue } from '../repositories/summary/sumRevenue'
import { countPickuporder } from '../repositories/summary/pickupOrder'
import { shopMember } from '../repositories/summary/shopMember'
import { category } from '../repositories/summary/category'

const shopModel = db.shopModel
const membersModel = db.membersModel
const accessModel = db.accessModel


/* TODO : total sale per month */
export async function getSaleUnitsCount(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await countSaleUnit(username).then((obj) => {
        res.json({
            success: true,
            data: {
                sale_unit: obj
            }
        })
    }).catch((err) => {

        console.log(err)

        res.json({
            success: false,
            message: err
        })
    })

}

/* TODO : total count order waitting for pickup */
export async function getPickupOrder(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await countPickuporder(username).then((obj) => {

        console.group(obj)

        res.json({
            success: true,
            data: {
                "pickupOrder" : obj
            }
        })
    }).catch((err) => {

        console.log(err)

        res.json({
            success: false,
            message: err
        })
    })

}

/* TODO : total revenue */
export async function getSumRevenue(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await sumRevenue(username).then((obj) => {

        console.group(obj)

        res.json({
            success: true,
            data: obj[0]
        })
    }).catch((err) => {

        console.log(err)

        res.json({
            success: false,
            message: err
        })
    })

}

/* TODO : total staff member */
export async function getShopMember(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await shopMember(username).then((obj) => {

        console.group(obj)

        res.json({
            success: true,
            data: obj
        })
    }).catch((err) => {

        console.log(err)

        res.json({
            success: false,
            message: err
        })
    })
}

export async function getCategory(req, res) {

    await category().then((obj) => {

        console.group(obj)

        res.json({
            success: true,
            data: obj
        })
        
    }).catch((err) => {

        console.log(err)

        res.json({
            success: false,
            message: err
        })
    })

}