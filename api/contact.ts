import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const url = process.env.SUPABASE_URL?.trim() || "";
  const key = process.env.SUPABASE_ANON_KEY?.trim() || "";

  if (!url || !key) {
    console.error("Missing Supabase credentials in Vercel.");
    return res.status(500).json({ error: "Database configuration error. Missing environment variables." });
  }

  try {
    const supabase = createClient(url, key);
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
}
