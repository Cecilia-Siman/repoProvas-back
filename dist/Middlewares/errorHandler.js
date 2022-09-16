"use strict";
exports.__esModule = true;
function errorHandler(error, req, res, next) {
    if (error.code === 'Not Found') {
        res.status(404).send(error.message);
    }
    if (error.code === 'Not Valid') {
        res.status(412).send(error.message);
    }
    if (error.code === 'Unauthorized') {
        res.status(401).send(error.message);
    }
    if (error.code === 'Bad request') {
        res.status(400).send(error.message);
    }
}
exports["default"] = errorHandler;
