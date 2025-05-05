import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import mainRoutes from './routes/mainRoutes.js';
import { adminJs, adminRouter } from './admin.js';

// Configuring dotenv
config();
const app = express();
app.use(adminJs.options.rootPath, adminRouter);
const port = 3000;

app.use(cookieParser());//cookie okumak için gerekli!
app.use(json());  // JSON verisini okumak için gerekli!
app.use(urlencoded({ extended: true })); // Form verisi için gerekli!
app.use("/",mainRoutes);// routes all Main routes

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`AdminJS: http://localhost:3000${adminJs.options.rootPath}`);
})