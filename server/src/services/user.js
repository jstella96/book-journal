
export class UserService {
  constructor({UserModel}) {
    this.userModel = UserModel;
  }

  async findUser(userId) {
    const user = await this.userModel.findOne({userId:userId}).lean();
    return user;
  }
  async create(userDTO) {
    const user = await this.userModel.create(userDTO);
    return user;
  }
  async deleteUser(userId) {
    const user = await this.userModel.deleteOne({userId:userId});
    return user;
  }
  async setTag(userId,tagDTO) {
    const user = await this.userModel.updateOne({userId:userId},{ '$push': { tags : tagDTO} });
    return user;
  }
  async deleteTag(userId, tagId) {
    const user = await this.userModel.updateOne({userId:userId},{ '$pull': { tags : { _id: tagId }} });
    return user;
  }
  async setGenre(userId,genreDTO) {
    const user = await this.userModel.updateOne({userId:userId},{ '$push': { genres :genreDTO} });
    return user;
  }
  async deleteGenre(userId, genreId) {
    const user = await this.userModel.updateOne({userId:userId},{ '$pull': { genres : { _id: genreId }} });
    return user;
  }
}
