import { headers } from "next/headers";

export default function ReplayHeaders() {
  const headersList = headers();
  const sortedHeaders = [...headersList.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <div>
      <h2>Headers</h2>
      <ul>
        {sortedHeaders.map((header, index) => (
          <li key={index}>{`${header[0]} = ${header[1]}`}</li>
        ))}
      </ul>
    </div>
  );
}
