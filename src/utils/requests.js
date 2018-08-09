const fetch = require('node-fetch')

const get = url => fetch(url).then(o => o.json())

const remove = url => id => fetch(`${url}/${id}`, {
  method: 'DELETE'
})

const add = url => data =>
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

module.exports = {
  get,
  remove,
  add
}