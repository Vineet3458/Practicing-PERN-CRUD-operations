import { createUserServices, deleteUserServices, getAllUsersServices, getUserByIdServices, updateUserServices } from "../models/userModel.js";

// Standardized Response function
const handleResponse = (res, status, data, message) => {
  res.status(status).json({
    status,
    data,
    message,
  });
}

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await createUserServices({ name, email });
    handleResponse(res, 201, newUser, "User created successfully");
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersServices();
    handleResponse(res, 200, users, "Users retrieved successfully");
    } catch (error) {
    next(error);
  }
};

export const getUsersById = async (req, res, next) => {
    try {
    const { id } = req.params;
    const user = await getUserByIdServices(id);
    if (!user) {
        return handleResponse(res, 404, null, "User not found");
    }
    handleResponse(res, 200, user, "User retrieved successfully");
    } catch (error) {
    next(error);
  }     
};

export const updateUser = async (req, res, next) => {
    try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await updateUserServices(id, { name, email });
    if (!updatedUser) {
        return handleResponse(res, 404, null, "User not found");
    }
    handleResponse(res, 200, updatedUser, "User updated successfully");
    } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
    try {
    const { id } = req.params;
    const deletedUser = await deleteUserServices(id);
    if (!deletedUser) {
        return handleResponse(res, 404, null, "User not found");
    }
    handleResponse(res, 200, deletedUser, "User deleted successfully");
    } catch (error) {
    next(error);
  }
};