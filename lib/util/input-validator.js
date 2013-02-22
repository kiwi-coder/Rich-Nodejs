function InputValidator(message, judge) {
    var _judge = judge;
    var _message = message;

    this.validate = function (input) {
        if (_judge(input)) {
            throw new Error(_message);
        }
    };
};

InputValidator.addInputValidator = function (originFunc, validator) {
    var wrappedFunc = function (input) {
        validator.validate(input);
        return originFunc.call(this, input);
    }
    return wrappedFunc;
};

InputValidator.addDefault = function (originFunc, defaultInput, defaultValue) {
    var wrappedFunc = function (input) {
        var wrappedInput = input;
        if (input == defaultInput) wrappedInput = defaultValue;
        return originFunc.call(this, wrappedInput);
    };
    return wrappedFunc;
}

exports.InputValidator = InputValidator;