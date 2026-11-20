export const audit = (action: string) => ({ action, at: Date.now() });
