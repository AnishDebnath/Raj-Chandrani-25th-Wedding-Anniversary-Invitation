/**
 * Countdown calculation utility for Raj & Chandrani's 25th Wedding Anniversary
 * Target Event: Saturday, 23 January 2027 at 6:00 PM IST (UTC+5:30)
 */

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  totalSeconds: number;
}

// 23 January 2027, 18:00:00 IST
// In ISO with offset: 2027-01-23T18:00:00+05:30
export const ANNIVERSARY_TARGET_TIMESTAMP = new Date('2027-01-23T18:00:00+05:30').getTime();

export function calculateCountdown(
  nowMs: number = Date.now(),
  targetMs: number = ANNIVERSARY_TARGET_TIMESTAMP
): CountdownTime {
  const differenceMs = targetMs - nowMs;

  if (differenceMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: true,
      totalSeconds: 0,
    };
  }

  const totalSeconds = Math.floor(differenceMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isCompleted: false,
    totalSeconds,
  };
}

export function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
