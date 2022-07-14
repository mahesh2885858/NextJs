import User from "../models/User"

type UserDetails = {
  entity: string;
  email: string;
  platformAccess: string[];
  role: string;
  customSettings: {
    name: string;
    value: string;
  }[];
  name: string;
  displayName: string;
  avatar?: string;
  jobTitle: string;
  organization: string;
  tags: string[];
  bio?: string;
  createdAt: Date;
  modifiedAt: Date;
}

export const getUser = async (userId: string) => {
  try{
    const user = await User.findById(userId)
    return [user,null]
  } catch(err) {
    return [null,err]
  }
}

export const getUserByEmail = async (email: string) => {
  try{
    const user = await User.findOne({email})
    return [user,null]
  } catch(err) {
    return [null,err]
  }
}

export const getUsers = async () => {
  try{
    const users = await User.find()
    return [users,null]
  } catch(err) {
    console.log(err)
    return [null,"Error getting users"]
  }
}

export const createUser = async (user: UserDetails) => {
  try{
    const newUser = await User.create(user)
    return [newUser,null]
  } catch(err) {
    return [null,err]
  }
}

