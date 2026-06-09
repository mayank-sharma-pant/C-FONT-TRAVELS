/**
 * Add vehicles here when the business has real photos and specs.
 * Upload images to /public/fleet/ or use full URLs in `image`.
 */
export interface FleetVehicle {
  id: string;
  type: string;
  seating: string;
  luggage: string;
  ac: string;
  suitableFor: string;
  image: string | null;
  notes: string;
}

export const fleetIntro = {
  title: "Transport",
  description:
    "Vehicle type and availability depend on your route, dates, and group size. Contact us to discuss options — we do not list a fixed fleet on the website yet.",
};

/** Empty until the business adds real vehicle photos and specs */
export const fleetVehicles: FleetVehicle[] = [];
