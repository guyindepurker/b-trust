const btrustService = require('../services/btrust.service');

async function getData(req, res) {
  try {
    const data = await btrustService.query();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = {
    getData
}