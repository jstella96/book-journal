
export class UserService {
  constructor({UserModel}) {
    this.userModel = UserModel;
  }

  async findUser(userId) {
    const user = await this.userModel.find({_id:userId});
    return user;
  }
  async create(userDTO) {
    const user = await this.userModel.create(userDTO);
    return user;
  }
  async deleteUser(userId) {
    const user = await this.userModel.delete({_id:userId});
    return user;
  }
  async setTag(userId,tagDTO) {
    const user = await this.userModel.update({id:userId},{ '$push': { tag : tagDTO} });
    return user;
  }
  async deleteTag(userId, tagId) {
    const user = await this.userModel.update({_id:userId},{ '$pull': { tag : { _id: tagId }} });
    return user;
  }
}
