//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    img.src = image.url;
  });
}

function displayImages(images) {
  output.innerHTML = '';
  images.forEach((image) => {
    output.appendChild(image);
  });
}

btn.addEventListener("click", () => {
  const promises = images.map(downloadImage);

  Promise.all(promises)
    .then((downloadedImages) => {
      displayImages(downloadedImages);
    })
    .catch((error) => {
      console.error(error.message);
    });
});
