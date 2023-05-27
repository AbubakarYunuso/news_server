const { Router } = require(`express`)
const { categoriesController} = require(`../cotrollers/categories.controller.js`)

const router = Router()

router.get(`/categories`,categoriesController.getCategore)
router.post(`/categories`,categoriesController.addCategore)
router.delete(`/categories/:id`,categoriesController.deleteCategore)


module.exports = router