function cargarImagen(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.className = "w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${url}`));
  });
}

const urls = [
 'https://picsum.photos/id/866/200/300',
  'https://picsum.photos/id/483/200/300',
  'https://picsum.photos/id/1025/200/300' // sin el `hmac`
];

Promise.all(urls.map(url => cargarImagen(url)))
  .then(imagenes => {
    const contenedor = document.getElementById('contenedor-imagenes');
    imagenes.forEach(img => contenedor.appendChild(img));
  })
  .catch(error => {
    console.error('Error al cargar las imágenes:', error);
  });
