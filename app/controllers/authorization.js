import jwt from 'jwt-simple';
import commonKey from '../../config/commonKey'
import util from 'util'
import { category } from '../repositories/summary/category'
import db from '../../config/db.config'

const shopModel = db.shopModel
const membersModel = db.membersModel
const accessModel = db.accessModel

/* signIn method */
export async function loginRequest(req, res) {

  const payload = {
    sub: req.body.username,
    iat: new Date().getTime(),
    type: 'customer'
  }

  const _token = jwt.encode(payload, commonKey.secreatKey)

  let usernameObj = {
    username: `${req.body.username}`
  }

  var _userID

  await membersModel.findOne({ where: usernameObj }).then((obj) => {
    _userID = obj.userID;
    console.log('user id : ' + _userID + 'username : ' + usernameObj.username)
  })

  var accessObj = {
    userID: _userID,
    username: req.body.username,
    token: _token,
  }

  await accessModel.create(accessObj).then((obj) => {
    if (obj) {
      console.log('this case')
      
      category().then((c) => {
        let categoryList = []
        c.forEach(element => {
          categoryList.push(
            {
              categoryID: element.categoryID,
              categoryName: element.categoryName
            }
          )
        })

        return res.json({ success: true, accessToken: _token, category: categoryList})

      }).catch((err) => {
        return res.json({ success: false, err: `Service Error` })
        
      })

    } else {
      console.log(`Service cannot insert record into table EAW_ACCESS`)
      return res.json({ success: false, err: `Service Error` })

    }
  })

}

/* signUp method */
export async function registerRequest(req, res) {

  /*
    1.Validate Username ใน DB ว่ามีหรือป่าว ถ้าไม่มีไปต่อ ถ้ามี ดีดออก
    2.Insert record ลงใน EAW_SHOP ถ้า Success เอา shopID มาใช้ต่อ ถ้า Err ดีดออก
    3.Insert record ลงใน EAW_MEMBERS If Success Res Success esle rollback transaction
  */

  let shopObj = {
    contactFName: req.body.contactFName,
    contactLName: req.body.contactLName,
    Address: req.body.Address,
    City: req.body.City,
    State: req.body.State,
    PostalCode: req.body.PostalCode,
    Email: req.body.Email,
    Url: req.body.Url,
    PaymentMethod: req.body.PaymentMethod,
    companyName: req.body.companyName,
    TypeGoods: req.body.TypeGoods
  }

  let _shopID;

  let memberObj = {
    shopID: '',
    username: req.body.username,
    password: req.body.password,
    salt: '',
    userType: 'Owner'
  }

  console.log('shopObj' + util.inspect(shopObj))
  console.log('memberObj' + util.inspect(memberObj))

  await membersModel.count({ where: { 'username': req.body.username } }).then(c => {
    if (c > 0) {
      console.log(`username ${req.body.username} are duplicated`)
      return res.json({ success: false, err: `username ${req.body.username} are duplicated` })
    } else {
      console.log(`username isn't dupplicate`)

      shopModel.create(shopObj).then((obj) => {
        console.info('-----shopObj-----')
        console.info(obj)

        if (obj) {
          _shopID = obj.shopID
          memberObj.shopID = obj.shopID
          console.log('EAW_SHOP was created with shopID : ' + _shopID)

          membersModel.create(memberObj).then((obj) => {

            console.log('-----memberObj-----')
            console.info(obj)

            if (obj) {
              let _userID = obj.userID
              let _userName = obj.username
              console.log('EAW_MEMBER was created with userID : ' + _userID)
              return res.json({ success: true, message: `SignUp Complete with userID ${_userID} and username ${_userName}` })
            } else {
              console.log(`Service cannot insert record into table EAW_MEMBER`)
              return res.json({ success: false, err: `Service cannot insert record into table EAW_MEMBER` })

              /* TODO : ROLLBACK shopModel with shopID */

            }
          })

        } else {
          return res.json({ success: false, err: `Service cannot insert record into table EAW_SHOP` })
        }
      })
    }
  })

}


/* TODO : Log Out Methods */
export async function logoutRequest(req, res) {

  let _token = req.header('authorization')

  await accessModel.destroy({
    where: {
      token: _token
    }

  }).then(() => {
    res.json({
      success: true,
      data: []
    })

  }).catch((e) => {
    res.json({
      success: false,
      data: e
    })

  })



}