import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Characters = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();
        const results = data.results;

        const detailedCharacters = await Promise.all(
          results.map(async (item) => {
            try {
              const resDetail = await fetch(item.url);
              const detail = await resDetail.json();
              const props = detail.result?.properties || {};
              return {
                uid: item.uid,
                type: "characters",
                name: props.name || item.name,
                gender: props.gender || "Unknown",
                hair_color: props.hair_color || "Unknown",
                eye_color: props.eye_color || "Unknown",
              };
            } catch {
              return {
                uid: item.uid,
                type: "characters",
                name: item.name,
                gender: "Unknown",
                hair_color: "Unknown",
                eye_color: "Unknown",
              };
            }
          })
        );

        dispatch({ type: "set_characters", payload: detailedCharacters });
      } catch (err) {
        console.error(err);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <h1 className="text-white text-center">Characters</h1>

      <div className="row g-4 justify-content-center">
        {store.characters.map((item) => (
          <div
            key={item.uid}
            className="col-12 col-sm-6 col-md-4 col-lg-3 row g-4"
          >
            <Card item={item} type="characters" />
          </div>
        ))}
      </div>
    </div>
  );
};