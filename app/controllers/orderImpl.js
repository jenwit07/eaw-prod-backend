import jwt from 'jwt-simple'
import commonKey from '../../config/commonKey'
import { getOrder } from '../repositories/order/orderList'
import { updateOrder } from '../repositories/order/updateOrder'


/* TODO : get all order record on a day/week/month/year ( Optional : paidFlag = Y? ) */
export async function getOrderlist(req, res) {

    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await getOrder(username, req.body).then((Obj) => {

        res.json({
            success: true,
            data: Obj
        })

    }).catch((err) => {

        res.json({
            success: false,
            message: err
        })

    })

}

/* TODO: update order paidDate, paidFlag for status Shipped, Pending, Delivered (must be flag update) */
export async function updateOrderList(req, res) {

    
    const Access = {
        jwtFromRequest: req.header('authorization'),
        secretOrKey: commonKey.secreatKey
    };

    var payload = await jwt.decode(Access.jwtFromRequest, Access.secretOrKey)

    var username = payload.sub

    await updateOrder(username, req.body).then((obj) => {

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