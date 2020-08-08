import moongose from 'mongoose';

const userSchema = new moongose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false }
});

const userModel = moongose.model("User", userSchema);

export default userModel;
