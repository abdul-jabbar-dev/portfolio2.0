import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '@/lib/cropImage';

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedFile: File) => void;
  onCancel: () => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCropComplete, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{x: number, y: number, width: number, height: number} | null>(null);

  const onCropCompleteHandler = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, 0);
      const response = await fetch(croppedImage as string);
      const blob = await response.blob();
      const file = new File([blob], `cropped_${Date.now()}.jpg`, { type: "image/jpeg" });
      onCropComplete(file);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col h-[75vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Crop Image</h3>
            <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <div className="relative flex-1 bg-gray-50 w-full overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropCompleteHandler}
            onZoomChange={setZoom}
          />
        </div>
        <div className="p-5 flex flex-col gap-5 bg-white border-t border-gray-100">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-600">Zoom</label>
                    <span className="text-xs text-gray-400">{Math.round(zoom * 100)}%</span>
                </div>
                <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
            </div>
            <div className="flex justify-end gap-3 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleSave}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow rounded-xl transition-all"
                >
                    Confirm & Save
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
