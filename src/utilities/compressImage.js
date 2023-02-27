export default function compressImage(file) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.onload = () => {
      canvas.width = 100;
      canvas.height = 110;
      canvas
        .getContext('2d')
        .drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        blob => {
          if (blob === null) return reject(blob);
          else resolve(blob);
        },
        'image/jpeg',
        1
      );
    };
    image.src = URL.createObjectURL(file);
  });
}
