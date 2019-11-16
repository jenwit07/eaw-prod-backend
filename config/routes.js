import { loginRequest, registerRequest, logoutRequest } from '../app/controllers/authorization'
import { healtCheck } from '../app/controllers/manageInitRequest'
import { validateSignInRequest } from '../app/repositories/validateSignInRequest'
import { getProducts, updateAvailableProducts, addProduct, removeProduct, updateProduct, getProductInfo } from '../app/controllers/productImpl'
import { getOrderlist, updateOrderList } from '../app/controllers/orderImpl'
import { getSaleUnitsCount, getSumRevenue, getPickupOrder, getShopMember, getCategory } from '../app/controllers/summaryImpl'
import { checkToken } from './tokenChecker'

module.exports = function (app, passport) {

    const requireJWTAuth = passport.authenticate("jwt", { session: false })

    /* Basic Request */
    app.get('/', healtCheck)
    app.post('/signin', validateSignInRequest, loginRequest)
    app.post('/register', registerRequest)
    app.get('/signout', checkToken, requireJWTAuth, logoutRequest)

    /* Manage Product Reqeuest */
    app.get('/products', checkToken, requireJWTAuth, getProducts)
    app.get('/product/:id',getProductInfo)
    app.post('/product/new', checkToken,requireJWTAuth, addProduct)
    app.post('/product/status', checkToken,requireJWTAuth, updateAvailableProducts)
    app.post('/product/update', checkToken,requireJWTAuth, updateProduct)
    app.post('/product/delete', checkToken,requireJWTAuth, removeProduct)

    /* Manage Order Reqeuest */
    app.post('/orders', checkToken,requireJWTAuth, getOrderlist)
    app.post('/order/status', checkToken,requireJWTAuth, updateOrderList)

    /* Manage Summary Reqeuest */
    app.get('/total/sales', checkToken,requireJWTAuth, getSaleUnitsCount)
    app.get('/total/order/pickups', checkToken,requireJWTAuth, getPickupOrder)
    app.get('/total/revenue', checkToken,requireJWTAuth, getSumRevenue)
    app.get('/staff/all', checkToken,requireJWTAuth, getShopMember)
    app.get('/category', checkToken,requireJWTAuth, getCategory)

}
