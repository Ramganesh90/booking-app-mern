export const createError = (status, message) => {
    const error = new Error();
    error.status = status || 500;
    error.message = message || "Something wrong";
    return error;
};
