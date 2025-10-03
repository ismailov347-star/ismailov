declare global {
  interface Window {
    openGetCourseWidget?: () => void;
    clrtQueryData?: any;
    attachEvent?: (event: string, listener: (e: MessageEvent) => void) => void;
  }
}

export {};