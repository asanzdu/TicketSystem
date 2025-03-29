import React, { useState, useEffect } from 'react';

function TicketForm({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers || []); // Inicializa con initialUsers o un array vacío
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Ejemplo de cómo podrías obtener los usuarios de una API
  useEffect(() => {
    async function fetchUsers() {
      try {
        // Simulación de una llamada a la API (reemplaza con tu lógica real)
        const response = await fetch('/api/users'); // Reemplaza '/api/users' con tu endpoint
        if (!response.ok) {
          throw new Error('No se pudieron cargar los usuarios');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {Array.isArray(users) && users.length > 0 ? ( // Verifica si users es un array y no está vacío
        users.map((user) => (
          <div key={user.id}>
            {user.name}
          </div>
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
}

export default TicketForm;