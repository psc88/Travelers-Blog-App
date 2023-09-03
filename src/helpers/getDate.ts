/**
 * obtiene la fecha del dia en formato DD/MM/AAAA
 * @returns {string}
 */

export function GetCurrentDate() {
  const fecha = new Date();
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const año = fecha.getFullYear();

  return `${dia}/${mes}/${año}`;
}