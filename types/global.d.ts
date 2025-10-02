declare global {
  interface Window {
    GC?: {
      showWidget?: (widgetId: string) => void;
    };
  }
}

export {};