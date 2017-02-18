const HttpStatus = require('http-status-codes');

class ExpressStatus {

  static ok(res, result) {
    res.status(HttpStatus.OK).json(result);
  }

  static created(res, result) {
    res.status(HttpStatus.CREATED).json(result);
  }

  static error(res, err) {
    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
  }

  static json(res, json) {
    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.OK).json(json);
  }
}

module.exports = ExpressStatus;
