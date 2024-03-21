const wikipedia = require('./esm')

async function app () {
  const res = await wikipedia.search('Hello, world', 'en')
  console.log(res)
}

app()
