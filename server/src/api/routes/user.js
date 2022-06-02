import { Router} from 'express';
import middlewares from '../middlewares/index.js';
import { UserService } from '../../services/index.js';
import { UserModel } from '../../models/User.js'
const route = Router();

export default (app) => {
    app.use('/user', route);    
    route.get('/', middlewares.isUserValid, async (req, res) => {
      const userId = req.body.userId //problem
      const UserServiceInstance = new UserService({UserModel});
      const user = await UserServiceInstance.findUser(userId);
      return res.json(user).status(200);
    });
    route.post('/', middlewares.isUserValid, async (req, res) => {
      const userDTO = req.body //problem
      const UserServiceInstance = new UserService({UserModel});
      const user = await UserServiceInstance.create(userDTO);
      return res.json(user).status(200);
    });

}