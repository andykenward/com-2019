import type { ProjectData } from "../types"

export const Clients = ({ clients }: Pick<ProjectData, "clients">) => (
  <>
    {(clients ?? []).map((client, index) => (
      <strong className="uppercase font-sans font-medium" key={index}>
        {client}
      </strong>
    ))}
  </>
)
