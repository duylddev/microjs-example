const {send, json} = require('micro')

module.exports.GET = async function (req, res) {
  send(res, 200, {params: req.params, query: req.query})
}

module.exports.POST = async function (req, res) {

  let body = await json(req)

  send(res, 200, {params: req.params, query: req.query, body: body})
}