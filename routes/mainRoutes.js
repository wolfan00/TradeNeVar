import { Router } from 'express';
const router = Router();
import { auth } from '../middleware/auth.js';

//Main routes
import users from './users.js';
import signup from './signup.js';
import login from './login.js';
import products from './products.js';
import refresh from './refresh.js';
import offers from './offers.js';
import offer_messages from './offer_messages.js';

//Routes
router.use('/api/products',auth, products);
router.use('/api/users',auth, users);

router.use('/api/signup', signup);
router.use('/api/login', login);
router.use(`/api/refresh`,refresh);

router.use('/api/offers',auth, offers);
router.use('/api/offers/:offerId/messages',auth, offer_messages);

export default router;