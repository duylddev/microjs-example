const {send} = require('micro')
const Cat = require('../models/Cat')

module.exports.GET = async function (req, res) {

  let catId = res.params.catId
  let cat = await Cat.findOne({_id: catId})

  if (!cat) {
    send(res, 404, {msg: 'Not Found'})
    return
  }

  send(res, 200, cat)
}