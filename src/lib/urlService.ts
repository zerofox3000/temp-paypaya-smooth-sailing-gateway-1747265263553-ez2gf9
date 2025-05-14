
// Get the referral code from URL if present
export const getReferralFromURL = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('referralName');
};

// Add a referral code to the current URL
export const addReferralToURL = (referralName: string): string => {
  const url = new URL(window.location.href);
  url.searchParams.set('referralName', referralName);
  return url.toString();
};
