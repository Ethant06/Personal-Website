import { Section } from "@/components/layout/Section";
import { LifePhotoGrid } from "@/components/ui/LifePhoto";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

type LifeCollection = (typeof portfolio.life.collections)[number];

export function Life() {
  const { collections } = portfolio.life;

  return (
    <Section id="life">
      <SectionHeading>Outside of School</SectionHeading>
      <div className="mt-10 grid grid-cols-1 gap-12 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10">
        {collections.map((collection) => (
          <CollectionBlock key={collection.id} collection={collection} />
        ))}
      </div>
    </Section>
  );
}

function CollectionBlock({ collection }: { collection: LifeCollection }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border p-5 md:p-6">
      <Reveal>
        <h3>{collection.title}</h3>
        {collection.description ? (
          <p className="mt-3 text-pretty">{collection.description}</p>
        ) : null}
      </Reveal>
      <Reveal
        variant="image"
        delay={100}
        className="mt-auto flex items-center justify-center pt-6"
      >
        <LifePhotoGrid photos={collection.photos} />
      </Reveal>
    </article>
  );
}
