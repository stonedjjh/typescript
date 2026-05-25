var Validations;
(function (Validations) {
    Validations.validateText = function (text) {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = function (date) {
        return (date instanceof Date && !isNaN(date.getTime())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Hol'));
