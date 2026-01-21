interface ReCaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

declare global {
  interface Window {
    grecaptcha: ReCaptcha;
  }

  // Declare grecaptcha as a global variable
  const grecaptcha: ReCaptcha;
}

export {};
