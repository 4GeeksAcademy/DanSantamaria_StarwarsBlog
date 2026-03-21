import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Vehicles = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await res.json();
        const results = data.results;

        const detailedVehicles = await Promise.all(
          results.map(async (item) => {
            try {
              const resDetail = await fetch(item.url);
              const detail = await resDetail.json();
              const props = detail.result?.properties || {};
              return {
                uid: item.uid,
                type: "vehicles",
                name: props.name || item.name,
                model: props.model || "Unknown",
                vehicle_class: props.vehicle_class || "Unknown",
                manufacturer: props.manufacturer || "Unknown",
              };
            } catch {
              return {
                uid: item.uid,
                type: "vehicles",
                name: item.name,
                model: "Unknown",
                vehicle_class: "Unknown",
                manufacturer: "Unknown",
              };
            }
          })
        );

        dispatch({ type: "set_vehicles", payload: detailedVehicles });
      } catch (err) {
        console.error(err);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="container">
      <h1 className="text-white text-center">Vehicles</h1>

      <div className="row g-4 justify-content-center">
        {store.vehicles.map((item) => (
          <div
            key={item.uid}
            className="col-12 col-sm-6 col-md-4 col-lg-3 row g-4"
          >
            <Card item={item} type="vehicles" />
          </div>
        ))}
      </div>

    </div>
  );
};