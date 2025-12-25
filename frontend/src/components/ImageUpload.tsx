import { useState, useRef } from 'react';
import { Upload, X, Check, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { makeAuthenticatedRequest, handleAuthError, getAuthToken } from '../utils/auth';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImageUpload, 
  currentImage, 
  className = '' 
}) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [preview, setPreview] = useState(currentImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setError('');
    setSuccess('');
    setUploading(true);

    // Debug: Check if we have a token
    const token = getAuthToken();
    console.log('Auth token available:', !!token);
    console.log('Token preview:', token ? `${token.substring(0, 20)}...` : 'null');

    try {
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Upload to S3 (with local fallback)
      const formData = new FormData();
      formData.append('image', file);

      let response;
      let data;

      try {
        // Try S3 upload first
        response = await makeAuthenticatedRequest('http://localhost:5000/api/upload/image', {
          method: 'POST',
          body: formData
        });
        data = await response.json();
      } catch (s3Error) {
        console.log('S3 upload failed, trying local upload...', s3Error);
        
        // Fallback to local upload
        response = await makeAuthenticatedRequest('http://localhost:5000/api/upload/local', {
          method: 'POST',
          body: formData
        });
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      setSuccess('Image uploaded successfully!');
      onImageUpload(data.imageUrl);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);

    } catch (error) {
      console.error('Upload error:', error);
      handleAuthError(error);
      setError(error instanceof Error ? error.message : 'Upload failed');
      setPreview(currentImage || '');
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = async () => {
    if (!preview) return;

    try {
      setUploading(true);
      
      // Only delete from S3 if it's an S3 URL
      if (preview.includes('amazonaws.com') || preview.includes('s3')) {
        const response = await makeAuthenticatedRequest('http://localhost:5000/api/upload/image', {
          method: 'DELETE',
          body: JSON.stringify({ imageUrl: preview })
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to delete image');
        }
      }

      setPreview('');
      onImageUpload('');
      setSuccess('Image removed successfully!');
      
      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      setTimeout(() => setSuccess(''), 3000);

    } catch (error) {
      console.error('Delete error:', error);
      handleAuthError(error);
      setError(error instanceof Error ? error.message : 'Failed to remove image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
        {preview ? (
          // Image Preview
          <div className="relative">
            <img 
              src={preview} 
              alt="Preview" 
              className="max-h-48 mx-auto rounded-lg shadow-md"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              disabled={uploading}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 disabled:opacity-50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          // Upload Prompt
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="text-gray-600 mb-2">Drop an image here, or click to select</p>
              <p className="text-sm text-gray-400">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>
        )}
      </div>

      {/* File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={uploading}
      />

      {/* Upload Button */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {uploading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Uploading...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            {preview ? 'Change Image' : 'Upload Image'}
          </>
        )}
      </button>

      {/* Success Message */}
      {success && (
        <div className="flex items-center gap-2 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg">
          <Check className="w-4 h-4" />
          <span className="text-sm">{success}</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;