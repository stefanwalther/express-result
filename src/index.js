const HttpStatus = require('http-status-codes');

// Todo: Just found express-status, which some similar functionality, have a look ...
class ExpressStatus {

  /**
   *
   * @param res
   * @param result
   *
   * @static
   */
  static ok(res, result) {
    res.status(HttpStatus.OK).json(result);
  }

  /**
   *
   * @param res
   * @param result
   *
   * @static
   */
  static created(res, result) {
    res.status(HttpStatus.CREATED).json(result);
  }

  /**
   *
   * @param res
   * @param err
   *
   * @static
   */
  static error(res, err) {
    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
  }

  /**
   *
   * @param res
   * @param json
   *
   * @static
   */
  static json(res, json) {
    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.OK).json(json);
  }

  static unauthorized(res, json) {
    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.UNAUTHORIZED).json(json);

  }
}

module.exports = ExpressStatus;
