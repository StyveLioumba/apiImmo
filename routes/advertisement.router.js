const express = require('express')
const router = express.Router();

const auth = require('../middleware/auth');

const advertisement_controller = require('../controllers/advertisement.controller');

const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,('./public/upload/advertisement'));
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
})


const upload = multer({storage});

router.post('/',auth(),upload.single('picture'),advertisement_controller.addAdvertisement);
router.post('/tags/',auth(),advertisement_controller.addAdvertisement);
router.post('/advantages/',auth(),advertisement_controller.addAdvertisement);
router.get('/',advertisement_controller.allAdvertisement);
router.get('/search/:q',advertisement_controller.searchAdvertisement);
router.get('/:id',advertisement_controller.detailAdvertisement);
router.put('/:id',auth(),advertisement_controller.updateAdvertisement);
router.delete('/:id',auth(),advertisement_controller.deleteAdvertisement);

module.exports = router;