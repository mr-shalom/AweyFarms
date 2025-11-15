import { User } from "../models/usersModel.js";

const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json({
      status: "success",
      result: allUser.length,
      data: { allUser },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: `Failed to fetch all users accounts`,
    });
  }
};

const getAUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: `Failed to fetch user account`,
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Failed to create new user account`,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Failed to update user account`,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: `user acount deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: `Failed to delete user account`,
    });
  }
};

export const usersController = {
  getAllUsers,
  getAUser,
  createNewUser,
  updateUser,
  deleteUser,
};
