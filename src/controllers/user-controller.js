import { Router } from "express";

const router = Router();

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

export const userController = router;