export function formatMessage(str:any) {
    if (!str) return "";
  
    // Make first letter capital
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
