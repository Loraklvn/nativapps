export const flightCoulumns = [
  'flight.id',
  'flight.price',
  'flight.departure_time',
  'flight.arrival_time',
  'flight.origin',
  'flight.destination',
];

export const flightSortByColumns = ['price'];

export const reservationColumns = [
  'r.user_id',
  'r.flight_id',
  'r.created_at',
  'r.status',
  'f.id',
  'f.price',
  'f.departure_time',
  'f.arrival_time',
  'f.origin',
  'f.destination',
];
