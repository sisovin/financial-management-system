import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import transactionRoutes from './routes/transactionRoutes';
import savingGoalRoutes from './routes/savingGoalRoutes';
import reportRoutes from './routes/reportRoutes';
import jobPortalRoutes from './routes/jobPortalRoutes';
import userDashboardRoutes from './routes/userDashboardRoutes';
import blogRoutes from './routes/blogRoutes';
import pageBuilderRoutes from './routes/pageBuilderRoutes';
import freelancePlatformRoutes from './routes/freelancePlatformRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/saving-goals', savingGoalRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/job-portal', jobPortalRoutes);
app.use('/api/user-dashboard', userDashboardRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/page-builder', pageBuilderRoutes);
app.use('/api/freelance-platform', freelancePlatformRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
