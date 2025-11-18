import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

// Dữ liệu mẫu cây gia phả
const members = [
  { id: 1, name: "Nguyễn Văn A", parentId: null },
  { id: 2, name: "Nguyễn Văn B", parentId: 1 },
  { id: 3, name: "Nguyễn Văn C", parentId: 1 },
  { id: 4, name: "Nguyễn Văn D", parentId: 2 },
];

const handler = (req: Request): Response => {
  const url = new URL(req.url);

  if (url.pathname === "/members") {
    return new Response(JSON.stringify(members), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Not Found", { status: 404 });
};

const port = Number(Deno.env.get("PORT") || 3000);
console.log(`Server running on http://localhost:${port}`);
serve(handler, { port });
