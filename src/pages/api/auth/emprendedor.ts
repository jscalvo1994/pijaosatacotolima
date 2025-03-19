import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Solicitud recibida para obtener datos del usuario con ID:", req.body.id);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    const { id } = req.body; // Extrae el ID enviado desde el frontend

    if (!id) {
      return res.status(400).json({ message: "ID requerido" });
    }

    console.log("Solicitud recibida para obtener datos del usuario con ID:", id);

    // 🔹 Hacemos la solicitud segura desde el backend al endpoint de Heroku
    const response = await fetch("https://dfwh-5ca5356b291e.herokuapp.com/receive/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    console.log("response", response);
    if (!response.ok) {
      throw new Error(`Error al obtener datos del usuario: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos recibidos desde Heroku:", data);

    return res.status(200).json(data); // 🔹 Enviamos la respuesta al frontend
  } catch (error) {
    console.error("Error en la API de Next.js:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
