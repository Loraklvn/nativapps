export const flightCoulumns = [
  'flight.id',
  'flight.price',
  'flight.departure_time',
  'flight.arrival_time',
  'o.id',
  'o.name',
  'o.code',
  'o.country',
  'o.city',
  'd.id',
  'd.name',
  'd.code',
  'd.country',
  'd.city',
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
