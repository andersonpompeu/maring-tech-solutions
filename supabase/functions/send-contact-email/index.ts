import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  'maquina-lavar': 'Máquina de Lavar',
  'geladeira': 'Geladeira / Freezer',
  'fogao': 'Fogão / Cooktop',
  'microondas': 'Micro-ondas',
  'smart-tv': 'Smart TV',
  'celular': 'Celular / Smartphone',
  'outro': 'Outro',
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      throw new Error("Campos obrigatórios não preenchidos");
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 255 || phone.length > 20 || message.length > 1000) {
      throw new Error("Dados inválidos");
    }

    const serviceLabel = serviceLabels[service] || service;

    // Email to business owner
    const emailResponse = await resend.emails.send({
      from: "Contato Site <onboarding@resend.dev>", // Replace with your verified domain
      to: ["contato@tecnicomaringa.com.br"], // Replace with actual business email
      subject: `Nova Solicitação de Orçamento - ${serviceLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #4b5563; margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; }
            .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
            .cta { display: inline-block; background: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Nova Solicitação de Orçamento</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Recebida através do formulário do site</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 E-mail:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Telefone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">🔧 Serviço:</div>
                <div class="value">${serviceLabel}</div>
              </div>
              <div class="field">
                <div class="label">💬 Mensagem:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <a href="https://wa.me/55${phone.replace(/\D/g, '')}" class="cta">
                Responder via WhatsApp
              </a>
            </div>
            <div class="footer">
              Assistência Técnica Premium - Maringá/PR
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-contact-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
