import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.get('/users', (req: Request, res: Response) => {
  res.send('User routes are working');
});

export default router;
