import { profile } from '../data/profile';

export function emailLinks(subject = 'Enquiry via your website', body = '') {
  const to = profile.email;
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return {
    mailto: `mailto:${to}?subject=${s}${body ? `&body=${b}` : ''}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${s}${body ? `&body=${b}` : ''}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${s}${body ? `&body=${b}` : ''}`
  };
}

export function isTouchDevice() {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
}

/** Opens the default mail app. Uses the top window so it also works when the site is embedded. */
export function openMailto(href: string) {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_top';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
}