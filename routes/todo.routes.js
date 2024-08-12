import { Router } from "express";
import { CreateNote, DeleteNote, UpdateNote } from "../controllers/Todo.controllers.js";



const router = Router();




router.route("/create").post(CreateNote);
router.route("/delete/:id").delete(DeleteNote);
router.route("/update/:id").put(UpdateNote);


export default router