import type { ProjectData } from "../pages/types"

export const Tags = ({ data }: { data: ProjectData["tags"] }) =>
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
      {data.map((item, index: number) => (
        <li key={index}>
          <>{item}</>
        </li>
      ))}
    </ul>
  ) : null
