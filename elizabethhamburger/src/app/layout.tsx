import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import styles from "./index.module.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="../public/favicon.ico"
        />
      </head>
      <body className={styles.body}>
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=elizabethhamburger"></script>
    </html>
  );
}
