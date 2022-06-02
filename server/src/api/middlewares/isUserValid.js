import { UserModel } from '../../models/User.js';

const isUserValid = async (req, res, next) => {
   // User.create({name:"test"})
    next();
};
  

export { isUserValid };