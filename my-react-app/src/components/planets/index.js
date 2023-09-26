import { initialTravelPlan } from "./planet.js";
import { useState } from "react";
function PlaceTree({ place }) {
  const childrenPlaces = place.childPlaces;
  // 通过递归实现树级结构
  return (
    <li>
      {place.title}

      {childrenPlaces.length > 0 && (
        <ol>
          {childrenPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

export function TravelPlan() {
  const [plan] = useState({
    ...initialTravelPlan,
  });
  const childrenPlan = plan.childPlaces;
  return (
    <div>
      <h2>Place to Visit</h2>
      <ol>
        {childrenPlan.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </div>
  );
}
