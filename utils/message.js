function responSeccess(statusCode, data, message, res) {
  res.status(statusCode).json({
    payload: data,
    message: message,
  });
}

function responFailed(statusCode, message, res) {
  res.status(statusCode).json({
    message: message,
  });
}

module.exports = {
  responFailed,
  responSeccess,
};
