import Image from "next/image";
import { portfolio } from "@/data/portfolio";

type LifePhotoData =
  (typeof portfolio.life.collections)[number]["photos"][number];

function photoFrame(photo: LifePhotoData) {
  const portrait = photo.height > photo.width;

  return {
    maxWidthClass: portrait ? "max-w-[12rem]" : "max-w-[18rem]",
    sizes: portrait ? "192px" : "288px",
  };
}

type LifePhotoProps = {
  photo: LifePhotoData;
};

export function LifePhoto({ photo }: LifePhotoProps) {
  const { maxWidthClass, sizes } = photoFrame(photo);

  return (
    <figure
      className={`group relative mx-auto h-auto w-full shrink-0 overflow-hidden rounded-lg shadow-photo ${maxWidthClass}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-accent/10 motion-reduce:transition-none"
      />
    </figure>
  );
}

type LifePhotoGridProps = {
  photos: readonly LifePhotoData[];
};

export function LifePhotoGrid({ photos }: LifePhotoGridProps) {
  if (photos.length === 1) {
    return <LifePhoto photo={photos[0]} />;
  }

  return (
    <ul className="columns-1 gap-4 space-y-4 sm:columns-2">
      {photos.map((photo) => (
        <li key={photo.src} className="break-inside-avoid">
          <LifePhoto photo={photo} />
        </li>
      ))}
    </ul>
  );
}
