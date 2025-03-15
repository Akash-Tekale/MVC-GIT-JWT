import express from 'express';
import { GetUsers } from '../controllers/GetUsers.js';
import { CreateUser } from '../controllers/CreateUser.js';
import { UpdateUser } from '../controllers/UpdateUser.js';
import { DeleteUser } from '../controllers/DeleteUser.js';

const router = express.Router();

router.get("/",GetUsers);
router.post("/create",CreateUser);
router.put("/update/:id",UpdateUser);
router.delete("/delete/:id",DeleteUser);

export default router;