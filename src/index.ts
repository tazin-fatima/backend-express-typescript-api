import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3000;

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to my first Express.js server!",
    success: true
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
