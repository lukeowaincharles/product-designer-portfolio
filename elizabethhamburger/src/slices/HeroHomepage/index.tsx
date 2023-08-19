import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";

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
      {slice.primary.eyebrow}
      <PrismicNextImage field={slice.primary.hero_image} />
      {slice.primary.title}

      {/* <List classes="hero__badges-list" items={slice.items} /> */}
      <ul className="hero__badges-list">
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
