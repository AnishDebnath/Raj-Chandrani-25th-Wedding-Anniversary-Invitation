import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// ponytail: simple Vite middleware for RSVP persistence without needing an Express server
function rsvpPlugin(): Plugin {
  const dataDir = path.join(import.meta.dirname, 'data');
  const dataFile = path.join(dataDir, 'rsvps.json');

  const getRSVPs = (): any[] => {
    try {
      if (!fs.existsSync(dataFile)) return [];
      return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    } catch {
      return [];
    }
  };

  const saveRSVPs = (list: any[]) => {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(dataFile, JSON.stringify(list, null, 2), 'utf-8');
  };

  return {
    name: 'rsvp-api',
    configureServer(server) {
      server.middlewares.use('/api/rsvp', (req, res, next) => {
        if (req.method === 'GET') {
          const list = getRSVPs();
          const totalAttending = list.filter((r) => r.attendance === 'yes').length;
          const totalDeclined = list.filter((r) => r.attendance === 'no').length;
          const totalGuests = list
            .filter((r) => r.attendance === 'yes')
            .reduce((acc, curr) => acc + (Number(curr.guests) || 1), 0);

          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: true,
              count: list.length,
              stats: {
                totalResponses: list.length,
                totalAttending,
                totalDeclined,
                totalGuests,
              },
              rsvps: list.slice(-20).reverse(),
            })
          );
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const trimmedName = (data.name || '').trim();
              if (!trimmedName || trimmedName.length < 2) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'Please provide a valid full name.',
                  })
                );
                return;
              }

              const list = getRSVPs();
              const entry = {
                id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
                eventName: '25th Wedding Anniversary - Raj & Chandrani',
                name: trimmedName,
                attendance: data.attendance || 'yes',
                guests: Number(data.guests) || 1,
                phone: data.phone ? String(data.phone).trim() : undefined,
                notes: data.notes ? String(data.notes).trim() : undefined,
                submittedAt: new Date().toISOString(),
              };

              list.push(entry);
              saveRSVPs(list);

              res.statusCode = 201;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'RSVP submitted successfully',
                  rsvp: entry,
                })
              );
            } catch {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Failed to process RSVP.' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), rsvpPlugin()],
    resolve: {
      alias: {
        '@': import.meta.dirname,
      },
    },
    server: {
      port: 5173,
      open: false,
    },
  };
});
