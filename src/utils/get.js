export const get = url => fetch(url).then(o => o.json())

export const remove = url => index => fetch(`${url}?_start=${index-1}&_end=${index}`, {
  method: 'delete'
}).then(o => o.json())

export const post = url => item => fetch(url) 