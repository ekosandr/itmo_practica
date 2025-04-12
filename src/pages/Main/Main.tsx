import { useEffect, useState } from "react";

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export const MainPage = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users?per_page=100"
        );

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Произошла ошибка при загрузке пользователей"
        );
        console.error("Ошибка при получении пользователей:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="github-users">
      <h1>Пользователи GitHub</h1>

      {loading && <p>Загрузка...</p>}

      {error && <p className="error">Ошибка: {error}</p>}

      {!loading && !error && (
        <table className="users-table">
          <thead>
            <tr>
              <th>Столбец 1</th>
              <th>Столбец 2</th>
              <th>Столбец 3</th>
              <th>Столбец 4</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {[1, 2, 3, 4].map((column) => (
                  <td key={`${user.id}-${column}`} className="user-cell">
                    <div className="user-item">
                      <img
                        src={user.avatar_url}
                        alt={`Аватар ${user.login}`}
                        className="user-avatar"
                      />
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.login}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
