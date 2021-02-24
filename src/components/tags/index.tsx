import { FragmentProjectNavFragment } from "../../../generated/graphql"
import { Link } from "../link"
import styles from "./tags.module.css"
export const Tags: React.FC<Pick<FragmentProjectNavFragment, "tags">> = ({
  tags: data,
}) =>
  data?.length ? (
    <ul className=" mb-4 flex flex-wrap">
      {data.map(({ href, title }, index: number) =>
        title != null ? (
          <li className={styles.divide} key={index}>
            {href ? <Link href={href}>{title}</Link> : <>{title}</>}
          </li>
        ) : null
      )}
    </ul>
  ) : null
