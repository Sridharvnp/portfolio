import img1 from '../imagegallery/1.jpg'
import img2 from '../imagegallery/2.png'
import img3 from '../imagegallery/3.jpg'
import img4 from '../imagegallery/4.png'
import img5 from '../imagegallery/5.jpg'
import img6 from '../imagegallery/6.png'
import img7 from '../imagegallery/7.jpg'
import img8 from '../imagegallery/8.png'
import img9 from '../imagegallery/9.jpg'



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Gallery() {
  return (
    <div className="w-full max-w-[1000px] mx-auto my-12 px-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="mb-5 w-full rounded-lg break-inside-avoid"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
