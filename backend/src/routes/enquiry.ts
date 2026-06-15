import { Router } from 'express';
import { submitEnquiry } from '../controllers/enquiryController';
import { validateEnquiry } from '../validators/enquiry';

const router = Router();

router.post('/', validateEnquiry, submitEnquiry);

export default router;
