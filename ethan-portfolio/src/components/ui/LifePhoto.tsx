import Image from "next/image";
import { portfolio } from "@/data/portfolio";

type LifePhotoData =
  (typeof portfolio.life.collections)[number]["photos"][number];

type LifePhotoProps = {
  photo: LifePhotoData;
  sizes: string;
};

export function LifePhoto({ photo, sizes }: LifePhotoProps) {
  const portrait = photo.height > photo.width;

  return (
    <figure
      className={`mx-auto w-full rounded-lg shadow-photo ${
        portrait ? "max-w-[12rem]" : "max-w-[18rem]"
      }`}
    >
      <div className="group relative overflow-hidden rounded-lg">
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
      </div>
    </figure>
  );
}

type LifePhotoGridProps = {
  photos: readonly LifePhotoData[];
  sizes: string;
};

export function LifePhotoGrid({ photos, sizes }: LifePhotoGridProps) {
  if (photos.length === 1) {
    return <LifePhoto photo={photos[0]} sizes={sizes} />;
  }

  return (
    <ul className="columns-1 gap-4 space-y-4 sm:columns-2">
      {photos.map((photo) => (
        <li key={photo.src} className="break-inside-avoid">
          <LifePhoto photo={photo} sizes={sizes} />
        </li>
      ))}
    </ul>
  );
}
