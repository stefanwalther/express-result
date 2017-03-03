
class ValidationError {
  constructor( o ) {
    Object.assign(this, o);
  }
}

class ValidationErrors {
  constructor() {
    this.ValidationErrors = [];
    this.length = this.ValidationErrors.length;
  }

  add(o) {
    this.length = this.ValidationErrors.push(o);
  }

  // Todo: remove

  // Todo: find

}

module.exports = ValidationErrors;
