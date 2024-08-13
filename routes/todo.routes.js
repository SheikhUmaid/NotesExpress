import { Router } from "express";
import { CreateNote, DeleteNote, GetAllNotes, GetOneNote, UpdateNote } from "../controllers/Todo.controllers.js";



const router = Router();




router.route("/create").post(CreateNote);
router.route("/delete/:id").delete(DeleteNote);
router.route("/update/:id").put(UpdateNote);
router.route("/getone/:id").get(GetOneNote);
router.route("/getall").get(GetAllNotes);


export default router



// 8jP5QAQBIaEpspTm
// sheikhumaid03