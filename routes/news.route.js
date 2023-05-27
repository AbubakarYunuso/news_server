const { Router } = require(`express`)
const router = Router()
const { newsController } = require(`../cotrollers/news.controller.js`)

router.post(`/news`,newsController.addNews)
router.patch(`/news/:id`,newsController.upgradeNews)
router.get(`/news/:id`,newsController.getNewsById)
router.get(`/news`,newsController.getAllNews)
router.get(`/news/categore/:id`,newsController.getNewsByCategories)
router.delete(`/news/:id`,newsController.deleteNews)




module.exports = router