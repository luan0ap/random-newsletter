const { get, add, remove } = require('./utils/requests')

const { argv } = process
const type = argv[2]
const urls = argv.slice(3, argv.length)

const randomLink = (type, urls) => {

  const URL = 'http://localhost:3000/newsletters'

  const random = (array) => {
    const position = Math.floor(Math.random() * array.length)
    return ({
      item: array[position],
      index: position
    })
  }

  const deleteLink = (url, index) => remove(url)(index)

  const getLink = url => get(url).then(arr => random(arr))

  const postLink = url => item => add(url)(item)

  const options = {
    post: () => ( urls.forEach(ln => postLink(URL)(ln)) ),
    undefined: () => getLink(URL).then(({ item }) => console.log(item))
  }

  return options[type]()
}

randomLink(type, urls)

