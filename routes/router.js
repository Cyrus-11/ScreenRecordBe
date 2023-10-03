import { Router } from "express";
import { test, startRecording, addData, stopRecording } from "../controllers/videoController.js";
const router = Router();


router.get('/', test)
router.post('/start/video', startRecording)
router.post('/add/video/:id', addData)
router.post('/save/video/:id', stopRecording)

export default router;