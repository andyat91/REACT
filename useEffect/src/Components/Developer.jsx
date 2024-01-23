import { useEffect } from "react";

export default function Developer({ developer }) {
  useEffect(
    function () {
      console.log(developer);
    },
    [developer]
  );

  return <p>{developer.name}</p>;
}
