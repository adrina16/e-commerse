
import express from "express";
import {getproduct, addproduct, deleteproduct, getproductbyid, updateproduct } from "../controller/controller.js";
const router = express.Router();




router.get("/", getproduct);

router.get("/:id", getproductbyid);


router.post("/", addproduct);

router.delete("/:id", deleteproduct);

router.patch("/:id", updateproduct);

export default router;
