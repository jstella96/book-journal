import { Router} from 'express';
import { UserService } from '../../services/index.js';
import { UserModel } from '../../models/User.js'
const route = Router();

export default (app) => {
    app.use('/user', route);    
    route.get('/',  async (req, res) => {//, 
      console.log('d')
      //const userId = req.body.userId //problem
      //const UserServiceInstance = new UserService({UserModel});
     // const user = await UserServiceInstance.findUser(userId);
      return res.json('s').status(200);
    });
    route.post('/signup',  async (req, res) => {
      const userDTO = req.body
      const UserServiceInstance = new UserService({UserModel});
      const user = await UserServiceInstance.create(userDTO);
      return res.json(user).status(200);
    });

    route.post('/tag',  async (req, res) => {
      const userDTO = req.body
      const UserServiceInstance = new UserService({UserModel});
      const user = await UserServiceInstance.create(userDTO);
      return res.json(user).status(200);
    });

}