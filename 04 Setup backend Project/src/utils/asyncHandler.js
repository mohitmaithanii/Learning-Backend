const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};


export { asyncHandler };

/* 
const asyncHandler = () => {}
const asyncHandler = (function) => {() => {}}
const asyncHandler = (function) => async () => {}

const asyncHandler = (fun) => async (req, res, next) => {
    try {
        await fun(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message,
        });
    }
};
*/
