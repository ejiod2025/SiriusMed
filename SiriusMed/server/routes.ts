import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

async function loadSendgrid() {
  try {
    const mod = await import("@sendgrid/mail");
    return mod.default;
  } catch {
    return undefined;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/demo", async (req: Request, res: Response) => {
    const { name, email, company, role, phone, message } = req.body || {};

    if (!name || !email || !company) {
      return res.status(400).json({ message: "name, email and company are required" });
    }

    const to = process.env.TO_EMAIL || "info@voicebreeze.io";
    const from = process.env.SENDGRID_FROM || to;
    const apiKey = process.env.SENDGRID_API_KEY;

    const sgMail = await loadSendgrid();

    if (!apiKey || !sgMail) {
      return res.status(503).json({ message: "Email service not configured" });
    }

    try {
      sgMail.setApiKey(apiKey);

      const plain = `New SiriusMed demo request\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role || "-"}\nPhone: ${phone || "-"}\n\nMessage:\n${message || "-"}`;

      await sgMail.send({
        to,
        from,
        replyTo: String(email),
        subject: `SiriusMed Demo Request — ${company} (${name})`,
        text: plain,
        html: plain.replaceAll("\n", "<br/>")
      });

      return res.status(200).json({ message: "ok" });
    } catch (err: any) {
      // Do not propagate the error to the global error handler
      const msg = err?.message || "Failed to send email";
      return res.status(500).json({ message: msg });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
