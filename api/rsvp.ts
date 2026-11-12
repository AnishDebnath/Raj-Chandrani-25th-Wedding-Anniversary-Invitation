// ponytail: Vercel serverless function for RSVP handling
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: true,
        message: 'RSVP endpoint ready',
      })
    );
    return;
  }

  if (req.method === 'POST') {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        body = JSON.parse(body);
      } else if (!body) {
        body = await new Promise((resolve) => {
          let raw = '';
          req.on('data', (chunk: any) => (raw += chunk));
          req.on('end', () => {
            try {
              resolve(JSON.parse(raw || '{}'));
            } catch {
              resolve({});
            }
          });
        });
      }

      const trimmedName = (body?.name || '').trim();
      if (!trimmedName || trimmedName.length < 2) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Please provide a valid full name.' }));
        return;
      }

      const entry = {
        id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        eventName: '25th Wedding Anniversary - Raj & Chandrani',
        name: trimmedName,
        attendance: body.attendance || 'yes',
        guests: Number(body.guests) || 1,
        phone: body.phone ? String(body.phone).trim() : undefined,
        notes: body.notes ? String(body.notes).trim() : undefined,
        submittedAt: new Date().toISOString(),
      };

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
    return;
  }

  res.statusCode = 405;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'Method Not Allowed' }));
}

