import { Request, Response } from 'express';
import { Enquiry } from '../models/Enquiry';

export const submitEnquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, parentName, childAge } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      parentName,
      childAge,
    });

    console.log('[Enquiry] Saved to MongoDB:', enquiry._id);

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
      id: enquiry._id,
    });
  } catch (error) {
    console.error('[Enquiry] Error processing submission:', error);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred',
    });
  }
};
