import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";
// import List from "@/components/utils/list/list";

/**
 * Props for `HeroHomepage`.
 */
export type HeroHomepageProps = SliceComponentProps<Content.HeroHomepageSlice>;

/**
 * Component for "HeroHomepage" Slices.
 */
const HeroHomepage = ({ slice }: HeroHomepageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.hero}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {slice.primary.title}
        </h1>
        <PrismicRichText field={slice.primary.description} />
      </div>

      {/* <List classes="hero__badges-list" items={slice.items} /> */}
      <div className={styles.heroImage}>
        <PrismicNextImage field={slice.primary.hero_image} />
      </div>
      <ul className={styles.heroBadges}>
        {slice.items.map((item, index) => (
          <li key={index}>
            {item.badges}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeroHomepage;
