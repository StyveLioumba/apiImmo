const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const user_controller= require('../controllers/user.controller')

const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,('./public/upload/users'));
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
})


const upload = multer({storage});

router.get('/',user_controller.allUser);
router.get('/:id',user_controller.detailUser);
router.post('/admin',upload.single('picture'),user_controller.addUser);
router.post('/',auth(),upload.single('picture'),user_controller.addUser);
router.post('/login',user_controller.userLogin);
router.put('/:id',user_controller.updateUser);
router.delete('/:id',user_controller.deleteUser);

module.exports = router;