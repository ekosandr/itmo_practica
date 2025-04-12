module.exports = {
  ci: {
    collect: {
      // URL для проверки (можно заменить на ваш локальный сервер)
      url: ["http://localhost:3000"],
      // Команда для запуска сервера (используйте команду из вашего package.json)
      startServerCommand: "npm run preview",
      // Количество запусков для получения стабильных результатов
      numberOfRuns: 1,
    },
    upload: {
      // Загрузка результатов во временное хранилище
      target: "temporary-public-storage",
    },
    assert: {
      // Настройки проверок
      preset: "lighthouse:recommended",
    },
  },
};
