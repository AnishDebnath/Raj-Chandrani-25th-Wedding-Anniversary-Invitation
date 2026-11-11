import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCountdown, padZero, ANNIVERSARY_TARGET_TIMESTAMP } from './countdown';

test('padZero formats single and double digits properly', () => {
  assert.equal(padZero(5), '05');
  assert.equal(padZero(0), '00');
  assert.equal(padZero(12), '12');
  assert.equal(padZero(100), '100');
});

test('calculateCountdown returns correct breakdown for a future date', () => {
  const target = 1000000000;
  // 2 days, 3 hours, 4 minutes, 5 seconds prior
  const offsetMs = (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000;
  const now = target - offsetMs;

  const result = calculateCountdown(now, target);
  assert.equal(result.days, 2);
  assert.equal(result.hours, 3);
  assert.equal(result.minutes, 4);
  assert.equal(result.seconds, 5);
  assert.equal(result.isCompleted, false);
});

test('calculateCountdown returns 0s when target is reached or passed', () => {
  const target = 1000000000;
  const resultPast = calculateCountdown(target + 5000, target);
  assert.equal(resultPast.days, 0);
  assert.equal(resultPast.hours, 0);
  assert.equal(resultPast.minutes, 0);
  assert.equal(resultPast.seconds, 0);
  assert.equal(resultPast.isCompleted, true);
});

test('target timestamp points to January 23, 2027 at 18:00 IST', () => {
  const targetDate = new Date(ANNIVERSARY_TARGET_TIMESTAMP);
  // UTC year 2027, month 0 (January), day 23
  assert.equal(targetDate.getUTCFullYear(), 2027);
  assert.equal(targetDate.getUTCMonth(), 0);
  assert.equal(targetDate.getUTCDate(), 23);
  // 18:00 IST is 12:30 UTC
  assert.equal(targetDate.getUTCHours(), 12);
  assert.equal(targetDate.getUTCMinutes(), 30);
});
