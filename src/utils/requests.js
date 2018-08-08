const fetch = require('node-fetch')

const get = url => fetch(url).then(o => o.json())

const remove = url => index => fetch(`${url}?_start=${index - 1}&_end=${index}`, {
  method: 'DELETE'
})

const add = url => data =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(log => console.log(log))

module.exports = {
  get,
  remove,
  add
}