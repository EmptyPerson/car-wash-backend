import app from './app';
import sequelize from './config/db';

const PORT = process.env.PORT || 5001;

sequelize.sync({ force: false }) // `force: true` при необходимости пересоздать таблицы
  .then(() => {
    console.log('Database connected and synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

