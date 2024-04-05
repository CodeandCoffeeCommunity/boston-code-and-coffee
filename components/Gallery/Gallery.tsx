import Link from 'next/link';

export default function Gallery({ photoAlbum }: any) {  
  return (
    <div className="container flex flex-wrap">
      {photoAlbum?.photoSample?.map((photo: any) => {
        return (
          <div key={photo?.id} className="flex w-1/2 px-4 pb-8 flex-wrap">            
            <div className="relative text-center">
              <Link href={`${photo?.baseUrl}${photo?.id}/676x380.jpg`}>
              <img
                src={`${photo?.baseUrl}${photo?.id}/676x380.jpg`}
                className="block rounded-xl object-center object-cover w-full h-full aspect-square"
                alt=""
              />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
