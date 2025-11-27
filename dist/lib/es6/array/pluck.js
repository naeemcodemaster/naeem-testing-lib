export var pluck = function (elements, field) {
    return elements.map(function (e) { return e[field]; });
};
