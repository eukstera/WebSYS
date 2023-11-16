

export function ConvertGoogleDriveLinkToDirectURL(googleDriveLink) {
    // Extract the file ID from the provided link
    const fileIdMatch = googleDriveLink.match(/\/d\/([^/]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      
      // Construct the direct image URL
      const directURL = `https://drive.google.com/uc?id=${fileId}`;
      
      return directURL;
    }
    
    // If the link format is invalid, return null or an error message
    return null;
  }

  
 

  // exported functions right here