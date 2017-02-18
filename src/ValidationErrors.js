
class ValidationError {

}

class ValidationErrors {
  constructor() {
    this.ValidationErrors = [];
    this.length = this.ValidationErrors.length;
  }

  add(o) {
    this.length = this.ValidationErrors.push(o);
  }

}

module.exports = ValidationErrors;
