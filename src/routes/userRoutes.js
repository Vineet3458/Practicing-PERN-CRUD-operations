import express from 'express';
import { createUser, deleteUser, getAllUsers, getUsersById, updateUser } from '../controllers/userController.js';
import validateUserInput from '../middlewares/inputValidator.js';

const router = express.Router();

router.post('/user', validateUserInput, createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getUsersById);
router.put('/user/:id', validateUserInput, updateUser);
router.delete('/user/:id', deleteUser);

export default router;