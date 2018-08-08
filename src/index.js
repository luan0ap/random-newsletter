import get from './utils/get'

const { argv } = process
const type = argv[2]
const urls = argv.slice(3, process.argv.length)

const randomLink = (type, urls) => {
  const random = (array) => {
    const position = Math.floor(Math.random() * array.length)
    return ({
      item: array[position],
      index: position
    })
  }

  const remove = () => {}

  const get = () => {}

  const post = () => {}

  const options = {
    post: () => post(urls),
    undefined: () => {}
  }

  return options[type]()
}

console.log(randomLink(type, urls))

