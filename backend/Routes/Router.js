import express from 'express';
import { GetUsers } from '../controllers/GetUsers.js';
import { CreateUser } from '../controllers/CreateUser.js';
import { UpdateUser } from '../controllers/UpdateUser.js';
import { DeleteUser } from '../controllers/DeleteUser.js';

const router = express.Router();

router.get("/users",GetUsers);
router.post("/register",CreateUser);
router.put("/users/:id",UpdateUser);
router.delete("/users/:id",DeleteUser);

export default router;