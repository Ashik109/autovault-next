"use client";
import Link from "next/link";
import { useSavedCars, toggleSavedCar } from "@/lib/saved-cars";
export default function SavedCars() {
  const cars = useSavedCars();
  return (
    <section className="rts-portfolio-area inner rts-section-gapNew">
      <div className="container">
        <h2>Saved cars</h2>
        {cars.length ? (
          <div className="row g-4">
            {cars.map((car) => (
              <div className="col-lg-4 col-md-6" key={car.id}>
                <article className="saved-car">
                  <Link href="/portfolio-details">
                    <img src={car.image} alt={car.title} />
                    <h3>{car.title}</h3>
                  </Link>
                  <button
                    className="rts-btn btn-primary"
                    type="button"
                    onClick={() => toggleSavedCar(car)}
                  >
                    Remove saved car
                  </button>
                </article>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p>You have no saved cars yet.</p>
            <Link href="/portfolio" className="rts-btn btn-primary">
              Browse cars
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
