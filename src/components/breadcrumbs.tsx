import Link from "next/link";
import styles from "./breadcrumbs.module.css";

type Breadcrumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Broodkruimelpad" className={styles.breadcrumbs}>
      <ol>
        {items.map((item, index) => (
          <li key={index} aria-current={item.href ? undefined : "page"}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
