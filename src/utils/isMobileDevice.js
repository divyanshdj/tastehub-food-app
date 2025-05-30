export const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false; // Server-side fallback
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
