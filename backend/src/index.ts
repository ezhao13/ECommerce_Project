import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import propertiesRouter from './routes/properties';
import searchRouter from './routes/search';
import authRouter from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/properties', propertiesRouter);
app.use('/api/search', searchRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
