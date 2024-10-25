import { useEffect, useState } from 'react';

export default function Page() {
  const [valorSensor, setValorSensor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Alejo2023Udec/nextjs-dashboard/contents/app/dashboard/data.json'); // Cambia esta URL
        const data = await response.json();
        // Asumiendo que el valor del sensor está dentro de un objeto
        setValorSensor(data.valor);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Datos del Sensor</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-300">
          <thead>
            <tr className="bg-blue-200 text-blue-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Valor</th>
            </tr>
          </thead>
          <tbody className="text-blue-600 text-sm font-light">
            <tr className="border-b border-blue-200 hover:bg-blue-100">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6">Sensor MQ</td>
              <td className="py-3 px-6">{valorSensor !== null ? `${valorSensor} ppm` : 'Cargando...'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
