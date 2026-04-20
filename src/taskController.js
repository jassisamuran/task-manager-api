const taskService = require('./taskService')

exports.getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks()
  res.json({ tasks, count: tasks.length })
}

exports.getTask = (req, res) => {
  try {
    const task = taskService.getTaskById(req.params.id)
    if (!task) return res.status(404).json({ error: 'Task not found' })
    res.json(task)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.createTask = (req, res) => {
  try {
    const { title, description } = req.body
    const task = taskService.createTask(title, description)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateTask = (req, res) => {
  try {
    const task = taskService.updateTask(req.params.id, req.body)
    res.json(task)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.deleteTask = (req, res) => {
  try {
    taskService.deleteTask(req.params.id)
    res.status(204).send()
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.completeTask = (req, res) => {
  try {
    const task = taskService.completeTask(req.params.id)
    res.json(task)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}