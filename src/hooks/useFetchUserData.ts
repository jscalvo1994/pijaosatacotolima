import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUserData = () => {
  const [tipoDocumentos, setTipoDocumentos] = useState<any[]>([]);
  const [sexos, setSexos] = useState<any[]>([]);
  const [nivelesEducativos, setNivelesEducativos] = useState<any[]>([]);
  const [departamentos, setDepartamentos] = useState<any[]>([]);
  const [departamentosNacimiento, setDepartamentosNacimiento] = useState<any[]>([]);
  const [minorias, setMinorias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('/api/send/tipo_documento'),
          axios.get('/api/send/sexo'),
          axios.get('/api/send/nivel_educativo'),
          axios.get('/api/send/departamento'),
          axios.get('/api/send/minorias'),
        ]);

        setTipoDocumentos(responses[0].data);
        setSexos(responses[1].data);
        setNivelesEducativos(responses[2].data);
        setDepartamentos(responses[3].data);
        setDepartamentosNacimiento(responses[3].data);
        setMinorias(responses[4].data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError('Hubo un error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { tipoDocumentos, sexos, nivelesEducativos, departamentos, departamentosNacimiento, minorias, loading, error };
};

export default useFetchUserData;
