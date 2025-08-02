import { Router } from "express"

const router = Router()

router.get('/', (req, res, next) => {
    res.send('Welcome to Gaming Store')
})

export default router