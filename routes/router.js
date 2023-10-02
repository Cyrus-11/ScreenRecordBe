import { Router } from "express";
import { test, startRecording, addData, stopRecording } from "../controllers/videoController.js";
const router = Router();


router.get('/', test)
router.post('/start/vids', startRecording)
router.post('/add/vids/:id', addData)
router.post('/save/vids/:id', stopRecording)

export default router;