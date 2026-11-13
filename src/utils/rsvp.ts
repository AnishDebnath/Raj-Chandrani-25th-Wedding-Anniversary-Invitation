/**
 * RSVP validation and formatting utilities
 */

export interface RSVPFormData {
  name: string;
  attendance: 'yes' | 'no' | '';
  guests: number;
  phone?: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateRSVP(data: RSVPFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const trimmedName = (data.name || '').trim();
  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  if (!data.attendance) {
    errors.attendance = 'Please let us know whether you will attend.';
  }

  if (data.attendance === 'yes') {
    const guests = Number(data.guests);
    if (!Number.isInteger(guests) || guests < 1) {
      errors.guests = 'Number of guests must be at least 1.';
    } else if (guests > 20) {
      errors.guests = 'For parties larger than 20, please contact Raj or Chandrani directly.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createWhatsAppRSVPLink(phone: string, data: RSVPFormData): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const prefix = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
  
  const statusText = data.attendance === 'yes' 
    ? `Yes, I will be attending with ${data.guests} guest(s)! 🎉` 
    : `Unfortunately, I won't be able to make it, but sending my warmest anniversary wishes! 💐`;

  const message = `Namaskar! RSVP for Raj & Chandrani's 25th Wedding Anniversary:
Name: ${data.name.trim()}
Status: ${statusText}
${data.notes ? `Message: ${data.notes.trim()}` : ''}`;

  return `https://wa.me/${prefix}?text=${encodeURIComponent(message)}`;
}

export function createGoogleCalendarUrl(): string {
  // Event: Saturday, 23 Jan 2027 18:00 IST to 23:00 IST
  // In UTC: 20270123T123000Z to 20270123T173000Z
  const title = encodeURIComponent("Raj & Chandrani's 25th Wedding Anniversary");
  const details = encodeURIComponent(
    "Celebrating 25 Years of Togetherness! Invitation from our son RITHVIK.\nProgram starts by 6:00 PM onwards.\nVenue: ADB MANOR, 69/1 Purna Das Road, Kolkata - 700029, beside Triangular Park.\nR.S.V.P.: 9433007412 (Raj) · 9432854364 (Chandrani)"
  );
  const location = encodeURIComponent("ADB MANOR, 69/1 Purna Das Road, Kolkata - 700029, beside Triangular Park");
  const dates = "20270123T123000Z/20270123T173000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
