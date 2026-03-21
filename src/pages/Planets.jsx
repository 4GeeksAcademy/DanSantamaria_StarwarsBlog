import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Planets = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/planets");
        const data = await res.json();
        const results = data.results;

        const detailedPlanets = await Promise.all(
          results.map(async (item) => {
            try {
              const resDetail = await fetch(item.url);
              const detail = await resDetail.json();
              const props = detail.result?.properties || {};
              return {
                uid: item.uid,
                type: "planets",
                name: props.name || item.name,
                climate: props.climate || "Unknown",
                terrain: props.terrain || "Unknown",
                population: props.population || "Unknown",
              };
            } catch {
              return {
                uid: item.uid,
                type: "planets",
                name: item.name,
                climate: "Unknown",
                terrain: "Unknown",
                population: "Unknown",
              };
            }
          })
        );

        dispatch({ type: "set_planets", payload: detailedPlanets });
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div className="container">
      <h1 className="text-white text-center">Planets</h1>

      <div className="row g-4 justify-content-center">
        {store.planets.map((item) => (
          <div
            key={item.uid}
            className="col-12 col-sm-6 col-md-4 col-lg-3 row g-4"
          >
            <Card item={item} type="planets" />
          </div>
        ))}
      </div>

    </div>
  );
};