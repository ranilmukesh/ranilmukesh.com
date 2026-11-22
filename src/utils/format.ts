/** Format a content date consistently (UTC, so build machines in any time zone agree). */
export function formatDate(date: Date, style: 'long' | 'short' | 'month' = 'long') {
  const options: Intl.DateTimeFormatOptions =
    style === 'month'
      ? { year: 'numeric', month: 'short', timeZone: 'UTC' }
      : style === 'short'
        ? { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }
        : { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  return date.toLocaleDateString('en-US', options);
}
