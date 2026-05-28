const express = require('express')
const router = express.Router()
const taskController = require('./taskController')
const liveUpdatesRoutes = require('./routes/liveUpdates')

router.get('/tasks', taskController.getAllTasks)
router.get('/tasks/:id', taskController.getTask)
router.post('/tasks', taskController.createTask)
router.put('/tasks/:id', taskController.updateTask)
router.delete('/tasks/:id', taskController.deleteTask)
router.patch('/tasks/:id/complete', taskController.completeTask)

// Include live updates routes
router.use('/live-updates', liveUpdatesRoutes);

module.exports = router
