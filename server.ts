import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

// Initialize Supabase Client
const getSupabase = () => {
  const url = process.env.SUPABASE_URL?.trim() || "";
  const key = process.env.SUPABASE_ANON_KEY?.trim() || "";
  
  if (!url || !key) return null;
  
  // Basic validation for common typo from user prompt
  if (url.includes("vqzgoeylchglkoebuyisi")) {
     console.error("CRITICAL: Typo detected in SUPABASE_URL ('ebuyisi' instead of 'ebuysi'). Please check your AI Studio Secrets.");
  }

  try {
    return createClient(url, key);
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
    return null;
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;
  const supabase = getSupabase();

  app.use(express.json());

  // API Route: Handle Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Attempt to save to Supabase
    try {
      if (!supabase) {
        console.warn("Supabase client not initialized. Check your environment variables.");
        return res.status(500).json({ error: "Database configuration error. Please check server logs." });
      }

      const { error: supabaseError } = await supabase
        .from("contacts")
        .insert([{ name, email, message, created_at: new Date().toISOString() }]);

      if (supabaseError) {
        console.error("Supabase API error:", supabaseError);
        return res.status(500).json({ error: "Supabase error: " + supabaseError.message });
      }

      res.status(200).json({ message: "Thank you for your message! It has been saved to our database." });
    } catch (err) {
      console.error("Unexpected error in /api/contact:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
