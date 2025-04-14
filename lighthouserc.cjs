module.exports = {
  ci: {
    collect: {
      // Используем статические файлы вместо запуска сервера
      staticDistDir: "./dist",
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
