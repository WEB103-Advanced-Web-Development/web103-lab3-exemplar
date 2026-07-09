import express from 'express'
import { getGifts } from '../controllers/gifts.js'

const router = express.Router()

// GET /gifts/
router.get('/', getGifts)

router.post('/', GiftsController.createGift)
router.delete('/:id', GiftsController.deleteGift)
router.patch('/:id', GiftsController.updateGift)

export default router