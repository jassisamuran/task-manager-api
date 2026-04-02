const express = require('express')
const routes = require('./src/routes')

const app = express()
app.use(express.json())
app.use('/api', routes)

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Task Manager API running on port ${PORT}`)
})

module.exports = app
