import { Features } from "@welcome/@types/api";
import { api } from "connection/api";
import useSWR from "swr/immutable";
import { Card } from "../Card";
import { Placeholder } from "./loading";

const fetcher = (url: string) => api.get<Features>(url).then(({ data }) => data);

function Main() {
  const { data: features } = useSWR("/features", fetcher, { suspense: true });

  return (
    <div className="grid grid-cols-3 gap-3">
      {features?.map(({ id, title, description }) => (
        <Card key={id} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
}

const Cards = Object.assign(Main, {
  Placeholder,
});

export { Cards };
