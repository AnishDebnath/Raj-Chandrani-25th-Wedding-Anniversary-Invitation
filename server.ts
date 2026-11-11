import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Persistent RSVP storage in JSON file
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'rsvps.json');

interface StoredRSVP {
  id: string;
  eventName: string;
  name: string;
  attendance: 'yes' | 'no';
  guests: number;
  phone?: string;
  notes?: string;
  submittedAt: string;
  ip?: string;
}

function loadRSVPs(): StoredRSVP[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error loading RSVPs:', err);
    return [];
  }
}

function saveRSVPs(list: StoredRSVP[]): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving RSVPs:', err);
  }
}

// Event details metadata API
app.get('/api/event', (_req: Request, res: Response) => {
  res.json({
    eventName: "25th Wedding Anniversary",
    coupleName: "Raj & Chandrani",
    anniversary: "25 Years of Togetherness",
    date: "23 January 2027",
    day: "Saturday",
    eventTime: "6:00 PM onwards",
    invitationFrom: "Our Son Rithvik",
    venue: {
      name: "ADB MANOR",
      address: "69/1 Purna Das Road, Kolkata - 700029",
      landmark: "Beside Triangular Park",
      googleMaps: "https://www.google.com/maps/search/?api=1&query=ADB+MANOR+69%2F1+Purna+Das+Road+Kolkata"
    },
    rsvpContacts: {
      raj: "9433007412",
      chandrani: "9432854364"
    }
  });
});

// GET /api/rsvp - list all responses with stats
app.get('/api/rsvp', (_req: Request, res: Response) => {
  const rsvps = loadRSVPs();
  const totalAttending = rsvps.filter(r => r.attendance === 'yes').length;
  const totalDeclined = rsvps.filter(r => r.attendance === 'no').length;
  const totalGuests = rsvps
    .filter(r => r.attendance === 'yes')
    .reduce((acc, curr) => acc + (Number(curr.guests) || 1), 0);

  res.json({
    success: true,
    count: rsvps.length,
    stats: {
      totalResponses: rsvps.length,
      totalAttending,
      totalDeclined,
      totalGuests
    },
    rsvps: rsvps.slice(-20).reverse() // Latest 20
  });
});

// POST /api/rsvp - submit new response with validation & duplicate detection
app.post('/api/rsvp', (req: Request, res: Response): void => {
  const { name, attendance, guests, phone, notes } = req.body;

  const trimmedName = typeof name === 'string' ? name.trim() : '';
  if (!trimmedName || trimmedName.length < 2) {
    res.status(400).json({ success: false, error: 'Please provide a valid full name (minimum 2 characters).' });
    return;
  }

  if (attendance !== 'yes' && attendance !== 'no') {
    res.status(400).json({ success: false, error: 'Attendance must be either "yes" or "no".' });
    return;
  }

  let finalGuests = 0;
  if (attendance === 'yes') {
    finalGuests = Number(guests);
    if (!Number.isInteger(finalGuests) || finalGuests < 1) {
      res.status(400).json({ success: false, error: 'Guest count must be at least 1 person.' });
      return;
    }
  }

  const existing = loadRSVPs();

  // Duplicate prevention: check if same name submitted in last 2 minutes
  const now = Date.now();
  const isDuplicate = existing.some(item => {
    const isSameName = item.name.toLowerCase() === trimmedName.toLowerCase();
    const itemTime = new Date(item.submittedAt).getTime();
    return isSameName && (now - itemTime < 120000); // 2 minutes
  });

  if (isDuplicate) {
    res.status(409).json({
      success: false,
      error: 'You have already submitted an RSVP for this name recently. Thank you!'
    });
    return;
  }

  const newEntry: StoredRSVP = {
    id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    eventName: "25th Wedding Anniversary - Raj & Chandrani",
    name: trimmedName,
    attendance,
    guests: finalGuests,
    phone: typeof phone === 'string' ? phone.trim() : undefined,
    notes: typeof notes === 'string' ? notes.trim() : undefined,
    submittedAt: new Date().toISOString(),
    ip: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress
  };

  existing.push(newEntry);
  saveRSVPs(existing);

  res.status(201).json({
    success: true,
    message: attendance === 'yes'
      ? `Thank you ${trimmedName}! Your RSVP for ${finalGuests} guest(s) has been successfully recorded.`
      : `Thank you ${trimmedName} for letting us know. Warmest regards!`,
    rsvp: newEntry
  });
});

async function startServer() {
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
