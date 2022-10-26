class DoesNotExistError extends Error {
  constructor(resourceId) {
    super(`Resource ${resourceId} does not exist`);
  }
}

module.exports = { DoesNotExistError };
