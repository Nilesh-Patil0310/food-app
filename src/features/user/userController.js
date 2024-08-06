export default class UserController {
  async getUser(req, res) {
    try {
      res.status(200).send("User Data");
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in signup API",
      });
    }
  }
}
