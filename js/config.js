// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN — Alejandro Cadena Finanzas & Bienes Raíces
// Este es el único archivo que se edita para ajustar el sitio.
// Los valores "PENDIENTE_..." se llenan al terminar la instalación
// (ver INSTALAR-ALEJANDRO.md, pasos 5 y 6).
// ─────────────────────────────────────────────────────────────
const CONFIG = {
  // ID de la hoja ESPEJO PÚBLICA (la que crea el backend), NO el de la Maestra.
  // Sale en el correo de salud y al ejecutar LC_diagnostico en Apps Script.
  SPREADSHEET_ID: "PENDIENTE_ID_DEL_ESPEJO",

  // API key de Google Cloud, creada en el proyecto de Google Cloud de
  // ALEJANDRO (Sheets API habilitada, restringida al dominio del sitio).
  API_KEY: "PENDIENTE_API_KEY_DE_ALEJANDRO",

  // Pestaña del espejo que se lee. El backend la deja siempre como la primera.
  RANGE: "Portafolio",

  // Cada cuánto se refresca el inventario con la página abierta (milisegundos).
  // 120000 = 2 minutos. Subirlo reduce el consumo de la cuota de la API de Sheets.
  REFRESH_INTERVAL_MS: 120000,

  // Meta Pixel. Vacío = el sitio funciona igual, sin tracking.
  META_PIXEL_ID: "",

  // WhatsApp de la inmobiliaria: código de país + número, sin "+" ni espacios.
  WHATSAPP_NUMBER: "573168332724",
  WHATSAPP_MESSAGE: "Hola, quiero más información sobre los inmuebles disponibles.",

  // URL del despliegue (Web App) de Apps Script de la cuenta de Alejandro.
  // Recibe los leads. Termina en /exec.
  LEADS_WEBAPP_URL: "PENDIENTE_URL_DEL_WEB_APP",

  // Dirección pública del sitio, con "/" al final. Se usa en los mensajes que
  // se comparten (por ejemplo "Copiar para WhatsApp" en Solicitudes).
  BASE_URL: "https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/",

  // Marca
  MARCA_NOMBRE: "Alejandro Cadena Finanzas & Bienes Raíces",
  MARCA_FRASE: "Tu inversión, nuestra prioridad",
  LOGO_URL: "",          // ej. "img/logo.png" (ruta relativa a la raíz del sitio)
  FOTO_AGENTE_URL: "",   // ej. "img/alejandro.jpg"

  // Colores (opcionales). Vacío = los colores originales del catálogo.
  COLOR_PRIMARIO: "#0f5b4f",
  COLOR_PRIMARIO_OSCURO: "#0b4339",
};
