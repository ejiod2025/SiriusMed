import React from "react";

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={className}
      width="24"
      height="24"
    >
      <path 
        fill="currentColor"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 13.99c-.24.68-1.42 1.29-1.95 1.36c-.53.07-1.03.24-3.48-.73c-2.96-1.17-4.86-4.2-5.01-4.39c-.15-.19-1.22-1.62-1.22-3.1c0-1.48.77-2.21 1.05-2.51c.28-.3.61-.38.81-.38c.2 0 .39 0 .56.01c.18.01.42-.07.66.5c.24.59.83 2.02.9 2.17c.07.15.12.33.02.53c-.1.2-.15.33-.3.5c-.15.17-.31.38-.45.51c-.15.15-.3.31-.13.61c.17.3.76 1.25 1.63 2.03c1.12.99 2.06 1.3 2.35 1.45c.29.15.46.13.63-.08c.17-.21.72-.84.91-1.13c.19-.29.39-.24.65-.15c.26.09 1.67.79 1.96.93c.29.14.48.21.55.33c.07.12.07.69-.17 1.37z"
      />
    </svg>
  );
}

export function SMSIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={className}
      width="24"
      height="24"
    >
      <path 
        fill="currentColor"
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" 
      />
    </svg>
  );
}
