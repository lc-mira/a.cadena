# Catálogo — Alejandro Cadena Finanzas & Bienes Raíces

Sitio estático (HTML/CSS/JS) para GitHub Pages. Muestra el inventario de
Alejandro, la calculadora de crédito, el tablero de solicitudes y el formulario
"¿Buscas algo específico?". Los leads se envían al backend de Apps Script que
corre en la cuenta de Google de Alejandro.

## Cómo funciona

```
Visitante ──► Sitio (GitHub Pages) ──lee──► Hoja ESPEJO pública (Google Sheets API)
                       │
                       └──envía leads──► Web App de Apps Script (cuenta de Alejandro)
                                                  │
                                                  ├─► hoja MAESTRA privada (Leads, Portafolio)
                                                  └─► Meta (Conversions API, opcional)
```

El sitio **nunca** lee la hoja Maestra: solo el espejo, que no trae teléfonos,
comisiones ni notas privadas.

## Archivos

| Ruta | Para qué |
|---|---|
| `js/config.js` | **Único archivo que se edita.** IDs, API key, WhatsApp, marca, colores. |
| `inicio/` | Página de inicio. |
| `index.html` + `js/app.js` | Inventario (tarjetas, filtros, ficha emergente). |
| `ficha/` | Ficha técnica neutra para colegas: `ficha/?id=P0001`. |
| `solicitudes/` | Tablero público de requerimientos. |
| `credito/` | Calculadora de crédito hipotecario. |
| `consulta/` | Formulario "¿Buscas algo específico?". |
| `js/lead-api.js` | Envío de leads al Web App de Apps Script. |

## Configuración (`js/config.js`)

| Campo | Qué poner |
|---|---|
| `SPREADSHEET_ID` | ID del **espejo** (sale en `LC_diagnostico`). |
| `API_KEY` | API key de Google Cloud de Alejandro (Sheets API, restringida al dominio del sitio). |
| `LEADS_WEBAPP_URL` | URL del Web App (termina en `/exec`). |
| `BASE_URL` | Dirección pública del sitio, con `/` al final. |
| `WHATSAPP_NUMBER` | Código de país + número, sin `+`. |
| `META_PIXEL_ID` | Vacío = sin Pixel. |
| `MARCA_*`, `LOGO_URL`, `COLOR_*` | Marca y colores. |

La guía completa de instalación está en `INSTALAR-ALEJANDRO.md`.

## Qué se publica del inventario

Solo inmuebles con Estado "Disponible". Las observaciones públicas se limpian
de teléfonos y correos al copiarlas al espejo. Notas privadas, documentos,
comisión, encargado y celular **no** salen de la Maestra.
