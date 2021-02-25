import { FragmentProjectNavFragment } from "../../../generated/graphql"
import { Link } from "../link"

export const Tags: React.FC<Pick<FragmentProjectNavFragment, "tags">> = ({
  tags: data,
}) =>
  data?.length ? (
    <ul className="mb-4 flex flex-wrap">
      <style jsx>{`
        li:last-child:after {
          display: none;
        }
        li:after {
          content: "•";
          margin: 0 0.5rem;
          font-size: 0.75rem;
          color: #959595;
        }
      `}</style>
      {data.map(({ href, title }, index: number) =>
        title != null ? (
          <li key={index}>
            {href ? <Link href={href}>{title}</Link> : <>{title}</>}
          </li>
        ) : null
      )}
    </ul>
  ) : null
