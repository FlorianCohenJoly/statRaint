import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// Autoriser tout le monde (en local uniquement !)
app.use(cors());

app.use(express.json());

app.get("/api/stats", (req, res) => {
    res.json({
        youtube: { followers: 1201, likes: 540, comments: 32 },
        instagram: { followers: 2300, likes: 760, comments: 45 },
        tiktok: { followers: 5000, likes: 2000, comments: 150 },
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
