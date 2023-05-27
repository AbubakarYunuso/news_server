const { Router } = require(`express`)
const { commentsController} = require(`../cotrollers/comments.controller.js`)
const router = Router()



router.post(`/comments`,commentsController.addComments)
router.delete(`/comments`,commentsController.deleteComments)
router.get(`/comments/news/:id`,commentsController.getCommentsByNews)





module.exports = router