const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');
// const isAdmin = require('../middleware/isAdmin');


const router = require('express').Router();

router.get('/appointments', auth, appointmentController.getAppointmentsByuserId);
router.post('/appointments', auth, appointmentController.createAppointments);
router.put('/appointments/:id', auth, appointmentController.updateMyAppointment);
router.delete('/appointments/:id', auth,  appointmentController.deleteMyAppointment);


router.get('/appointments/doctor', auth, isDoctor, appointmentController.getMyAppointmentsAsDoctor);


module.exports = router;