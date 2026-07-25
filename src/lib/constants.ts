// Set VITE_APP_URL once the Sampada app is deployed (e.g. https://app.sampada.in).
// Falls back to localhost for local development against the sibling `sampada` project.
export const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5173";

// Every landing-page CTA sends the visitor straight into the app's onboarding
// flow, which creates a personal workspace automatically. If they already
// have an account, the login page (linked from onboarding) handles that —
// the landing page doesn't need to know the difference.
export const ONBOARD_URL = `${APP_URL}/onboarding`;
