import { Inter } from 'next/font/google'

const inter = Inter({ 
    subsets: ['latin'],
    weight: ['700'],
})

/*
This photo album component is designed specifically for the Previous events section 
Parameters- 
images : An array of objects containing image links and overlay text 
 */
export default function PhotoAlbum({ images }: any) {
  
  return (
    <div className="container flex flex-wrap">
      {images.map((image: any) => {
        return (
          <a href={image.link} className="flex w-1/2 px-4 pb-8 flex-wrap">          
            <div className="relative text-center">
              <img
                src={image.image}
                className="block rounded-xl object-center object-cover w-full h-full aspect-square"
                alt=""
              />
              <h1 className={`absolute text-2xl text-white w-full top-1/2 -translate-y-1/2 ${inter.className}`}>{image.desc}</h1>
            </div>        
          </a>
        );
      })}
    </div>
  );
}
