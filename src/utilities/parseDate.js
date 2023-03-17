export default function parseDate(date) {
  const tempDate = new Date(date);
  const day = tempDate.toLocaleDateString('es-ES', { weekday: 'long' });
  const numberDay = tempDate.getDate();
  const month = tempDate.toLocaleDateString('es-ES', { month: 'long' });
  const year = tempDate.getFullYear();
  return `${day} ${numberDay} de ${month} ${year}`;
}
