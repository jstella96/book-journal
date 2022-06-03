import { Router} from 'express';
import { UserService } from '../../services/index.js';
import { UserModel } from '../../models/User.js'
const route = Router();

export default (app) => {
    app.use('/users', route);    
    route.get('/:id',  async (req, res) => {//, 
      const userId = req.params.id
      const UserServiceInstance = new UserService({UserModel});
      const user = await UserServiceInstance.findUser(userId);
      return res.json(user).status(200);
    });
    route.post('/signup',  async (req, res) => {
      const userDTO = req.body
      const UserServiceInstance = new UserService({UserModel});
      const user = await UserServiceInstance.create(userDTO);
      return res.json(user).status(200);
    });

    route.post('/:id/tag',  async (req, res) => {
      const userId = req.params.id
      const tagDTO = req.body
      const UserServiceInstance = new UserService({UserModel});
      const result = await UserServiceInstance.setTag(userId,tagDTO);
      return res.json(result).status(200);
    });

    route.delete('/:id/tag',  async (req, res) => {
      const userId = req.params.id
      const tagId = req.body.tagId
      const UserServiceInstance = new UserService({UserModel});
      const result = await UserServiceInstance.deleteTag(userId,tagId);
      return res.json(result).status(200);
    });

    route.post('/:id/genre',  async (req, res) => {
      const userId = req.params.id
      const genreDTO = req.body
      const UserServiceInstance = new UserService({UserModel});
      const result = await UserServiceInstance.setGenre(userId,genreDTO);
      return res.json(result).status(200);
    });

    route.delete('/:id/genre',  async (req, res) => {
      const userId = req.params.id
      const genreId = req.body.genreId
      const UserServiceInstance = new UserService({UserModel});
      const result = await UserServiceInstance.deleteGenre(userId,genreId);
      return res.json(result).status(200);
    });
}