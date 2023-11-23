const ApiError = require('../exceptions/api-errors');
module.exports = function (err,res, req, next) {
  if(err instanceof ApiError) {
    return res.status(err.status).json( {message: err.message, errors: err.errors});
  }
  return res.status(500,).json({message: 'Непредвиденная ошибка'})
}