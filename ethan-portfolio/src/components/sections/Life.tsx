import { Section } from "@/components/layout/Section";
import { LifePhotoGrid } from "@/components/ui/LifePhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

type LifeCollection = (typeof portfolio.life.collections)[number];

export function Life() {
  const { collections } = portfolio.life;
  const featured = collections.find((collection) => collection.featured);
  const rest = collections.filter((collection) => !collection.featured);

  return (
    <Section id="life">
      <SectionHeading>Outside of School</SectionHeading>

      {featured ? (
        <div className="mt-10 grid items-start gap-8 md:mt-14 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <CollectionCopy collection={featured} />
          </div>
          <div className="md:col-span-7">
            <LifePhotoGrid
              photos={featured.photos}
              sizes="(min-width: 768px) 42vw, 90vw"
            />
          </div>
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 md:grid-cols-2 md:gap-10 lg:gap-14">
          {rest.map((collection) => (
            <CollectionBlock key={collection.id} collection={collection} />
          ))}
        </div>
      ) : null}
    </Section>
  );
}

function CollectionBlock({ collection }: { collection: LifeCollection }) {
  return (
    <article>
      <CollectionCopy collection={collection} />
      <div className="mt-5">
        <LifePhotoGrid
          photos={collection.photos}
          sizes="(min-width: 768px) 40vw, 90vw"
        />
      </div>
    </article>
  );
}

function CollectionCopy({
  collection,
  className = "",
}: {
  collection: LifeCollection;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3>{collection.title}</h3>
      {collection.description ? (
        <p className="mt-3 max-w-md text-pretty">{collection.description}</p>
      ) : null}
    </div>
  );
}
