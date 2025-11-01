const API = "http://localhost:3000";

interface datasProduct {
  nombre: string;
  categoria: string;
  marca: string;
  imagenUrl: string;
  precio: number;
  descuento: number;
  stock: number;
  descripcion: string;
  especificaciones: string;
  detallesFisicos: string;
  paisOrigen: string;
  valoracion: number;
}
export const crearProduct = async (datos: datasProduct) =>
  fetch(`${API}/productos`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  });
