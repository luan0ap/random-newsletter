const { get, add, remove } = require('./utils/requests')
const forEach = require('./utils/forEach')
const uuid = require('./utils/uuid')
const random = require('./utils/random')

const { argv } = process
const type = argv[2]
const params = argv.slice(3, argv.length)

const randomLink = (type, params) => {

  const URL = 'http://localhost:3000/newsletters'

  const deleteLink = url => id => remove(url)(id)

  const getLink = url => get(url).then(arr => random(arr))

  const postLink = url => link => add(url)({ link, id: uuid() })

  const options = {
    post: () => forEach(params)(ln => postLink(URL)(ln)),
    delete: () => forEach(params)(ln => deleteLink(URL)(ln)),
    get: () => {
      const isDeleted = params[0] === 'true'

      getLink(URL).then(({ link, id }) => {
        console.log(`\n${link}\n`)

        if (isDeleted) {
          deleteLink(URL)(id)
        }
      })
    }
  }

  return options[type]()
}

randomLink(type, params)

