import fastify from 'fastify'

const app = fastify()
const port = 3334

app.get('/hello', () => {
  return 'Hello world '
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${port}`)
  })
