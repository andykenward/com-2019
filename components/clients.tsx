export const Clients: React.FC<{ clients?: string[] }> = ({ clients }) => (
  <>
    {(clients ?? []).map((client, index) => (
      <strong className="uppercase font-sans font-medium" key={index}>
        {client}
      </strong>
    ))}
  </>
)
