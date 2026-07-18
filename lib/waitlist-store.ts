const store = new Set<string>();

export function addEmail(email: string): boolean {
  if (store.has(email)) return false;
  store.add(email);
  return true;
}

export function getEmailCount(): number {
  return store.size;
}
