const router = require('express').Router();
const userRoutes = require('./user-routes');
// const plantRoutes

router.use('/users', userRoutes);


module.exports = router;
