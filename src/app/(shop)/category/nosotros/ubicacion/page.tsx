import Head from 'next/head'

export default function UbicacionPage() {
    return (
<div className="flex flex-col items-center justify-center min-h-screen py-2">
  <h1 className="text-6xl font-bold mb-5">Ubicacion</h1>
  <div className="flex justify-center items-center w-full h-full, sm:w-full h-full, md:w-full h-full, lg:w-full h-full, xl:w-full h-full, 2xl:w-full h-full ">
    <iframe 
      className="border-1 w-full h-full, sm:w-full h-[540], md:w-full h-[540], lg:w-full h-[540], xl:w-full h-[540], 2xl:w-[540] h-[720px]" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5631.375191220108!2d-75.38507261602255!3d3.591239141207411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3bdfa9263d36f9%3A0x1326b2d879e20cfe!2sAtaco%2C%20Tolima!5e0!3m2!1ses-419!2sco!4v1713493317557!5m2!1ses-419!2sco" 
      allowFullScreen={true}
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de ubicación">
    </iframe>
  </div>
</div>
    )
}