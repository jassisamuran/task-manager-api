const express = require('express')
const router = express.Router()
const taskController = require('./taskController')
const authController = require('./controllers/authController')
const authMiddleware = require('./middleware/authMiddleware')

router.post('/login', authController.login)
router.get('/tasks', authMiddleware, taskController.getAllTasks)
router.get('/tasks/:id', authMiddleware, taskController.getTask)
router.post('/tasks', authMiddleware, taskController.createTask)
router.put('/tasks/:id', authMiddleware, taskController.updateTask)
router.delete('/tasks/:id', authMiddleware, taskController.deleteTask)
router.patch('/tasks/:id/complete', authMiddleware, taskController.completeTask)

module.exports = router
