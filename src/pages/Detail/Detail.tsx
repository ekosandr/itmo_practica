import { useParams } from "react-router";

export const DetailPage = () => {
  const { id } = useParams();

  return <div>Detail {id}</div>;
};
