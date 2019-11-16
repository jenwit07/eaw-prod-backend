import { Router } from 'express'
import { homeRequest } from '../app/controllers/home'

const router = Router();

/* middleware zone */
router.use(function timeLog (req, res, next) {
    console.log('Authentication Needed Service with Time: ', Date.now())
    next()
})

router.route('/')
    .get((req, res) => {
        res.send('please sign in !!')
    })


export default router;