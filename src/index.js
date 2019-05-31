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
    return res.status(HttpStatus.OK).json(result);
  }

  /**
   *
   * @param res
   * @param result
   *
   * @static
   */
  static created(res, result) {
    return res.status(HttpStatus.CREATED).json(result);
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
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
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
    return res.status(HttpStatus.OK).json(json);
  }

  /**
   *
   * @param {*} res
   * @param {*} json
   * @static
   */
  static unauthorized(res, json) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(HttpStatus.UNAUTHORIZED).json(json);
  }

  static noContent(res) {
    return res.status(HttpStatus.NO_CONTENT);
  }
}

module.exports = ExpressStatus;
