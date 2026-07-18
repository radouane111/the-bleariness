import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mxmzqwcyucvpkfdcgfdg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bXpxd2N5dWN2cGtmZGNnZmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNzgyMDcsImV4cCI6MjA5OTk1NDIwN30.qqMm7BEnOgDbZ-wIcZAhDgG-t6zsDVuGcEAt3GDLB-o"
);
