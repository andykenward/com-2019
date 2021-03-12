export const Clients = ({ clients }: { clients?: string[] }) => (
  <>
    {(clients ?? []).map((client, index) => (
      <strong className="uppercase font-sans font-medium" key={index}>
        {client}
      </strong>
    ))}
  </>
)
