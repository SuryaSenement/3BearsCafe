// Utility functions for handling image URLs

/**
 * Converts Google Drive share URLs to direct image URLs
 * @param url - Google Drive share URL
 * @returns Direct image URL or original URL if not a Google Drive link
 */
export const convertGoogleDriveUrl = (url: string): string => {
  if (!url) return '';
  
  // Check if it's a Google Drive share link
  const driveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(driveRegex);
  
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  return url;
};

/**
 * Validates if a URL is a valid image URL
 * @param url - Image URL to validate
 * @returns Boolean indicating if URL is valid
 */
export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Check for common image formats
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
  
  // Check for S3 URLs, Google Drive URLs, or common image hosting services
  const validHosts = [
    'amazonaws.com',
    'drive.google.com',
    'images.unsplash.com',
    'images.pexels.com',
    'cdn.',
    'imgur.com'
  ];
  
  return imageExtensions.test(url) || validHosts.some(host => url.includes(host));
};

/**
 * Gets the appropriate image URL for display
 * @param url - Original image URL
 * @returns Processed URL ready for display
 */
export const getDisplayImageUrl = (url: string): string => {
  if (!url) return '';
  
  // If it's already an S3 URL, return as is
  if (url.includes('amazonaws.com') || url.includes('s3')) {
    return url;
  }
  
  // If it's a Google Drive URL, convert it
  if (url.includes('drive.google.com')) {
    return convertGoogleDriveUrl(url);
  }
  
  return url;
};

/**
 * Generates a placeholder image URL based on event title
 * @param title - Event title
 * @returns Placeholder image URL
 */
export const getPlaceholderImageUrl = (title: string = 'Event'): string => {
  const encodedTitle = encodeURIComponent(title);
  return `https://via.placeholder.com/400x300/9333ea/ffffff?text=${encodedTitle}`;
};