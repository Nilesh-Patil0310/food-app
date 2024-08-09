import JWT from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    
    // Check if the token is provided and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "Authorization token is missing or malformed",
      });
    }

    const token = authHeader.split(" ")[1]; // Extract the token part

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized user, please provide a valid authorization token",
        });
      } else {
        req.body.id = decoded.id; // Using the decoded token's payload
        next();
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Auth API",
      error,
    });
  }
};

export default jwtAuth;
