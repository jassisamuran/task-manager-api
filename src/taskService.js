const tasks = []
let nextId = 1

class TaskService {
  getAllTasks() {
    return tasks
  }

  getTaskById(id) {
    return tasks.find(t => t.id === parseInt(id))
  }

  createTask(title, description) {
    if (!title) throw new Error('Title is required')
    const task = {
      id: nextId++,
      title,
      description: description || '',
      completed: false,
      createdAt: new Date().toISOString()
    }
    tasks.push(task)
    return task
  }

  updateTask(id, updates) {
    const task = this.getTaskById(id)
    if (!task) throw new Error('Task not found')
    Object.assign(task, updates)
    return task
  }

  deleteTask(id) {
    const index = tasks.findIndex(t => t.id === parseInt(id))
    if (index === -1) throw new Error('Task not found')
    return tasks.splice(index, 1)[0]
  }

  completeTask(id) {
    const task = this.getTaskById(id)
    if (!task) throw new Error('Task not found')
    task.completed = true
    return task
  }
}

module.exports = new TaskService()
