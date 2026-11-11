import test from 'node:test';
import assert from 'node:assert/strict';
import { validateRSVP, createWhatsAppRSVPLink, createGoogleCalendarUrl } from './rsvp';

test('validateRSVP rejects empty name', () => {
  const result = validateRSVP({ name: '', attendance: 'yes', guests: 2 });
  assert.equal(result.isValid, false);
  assert.match(result.errors.name, /full name/);
});

test('validateRSVP rejects missing attendance', () => {
  const result = validateRSVP({ name: 'Amit Roy', attendance: '', guests: 2 });
  assert.equal(result.isValid, false);
  assert.match(result.errors.attendance, /attend/);
});

test('validateRSVP accepts valid positive attendance', () => {
  const result = validateRSVP({ name: 'Dr. Mukherjee', attendance: 'yes', guests: 3 });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateRSVP accepts negative attendance without requiring guest count', () => {
  const result = validateRSVP({ name: 'Shreya Sen', attendance: 'no', guests: 0 });
  assert.equal(result.isValid, true);
});

test('createWhatsAppRSVPLink generates properly formatted WhatsApp URL', () => {
  const url = createWhatsAppRSVPLink('9433007412', {
    name: 'Debashis Bose',
    attendance: 'yes',
    guests: 2,
    notes: 'Heartiest congratulations!'
  });
  assert.ok(url.startsWith('https://wa.me/919433007412?text='));
  assert.ok(url.includes(encodeURIComponent('Debashis Bose')));
});

test('createGoogleCalendarUrl generates valid calendar URL', () => {
  const calUrl = createGoogleCalendarUrl();
  assert.ok(calUrl.includes('calendar.google.com/calendar/render'));
  assert.ok(calUrl.includes('20270123T123000Z'));
  assert.ok(calUrl.includes('ADB%20MANOR'));
});
