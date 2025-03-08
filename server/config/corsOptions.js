const whitelist = [
  'https://www.yoursite.com',
  'http://127.0.0.1:5173',
  'http://localhost:5173',
];

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
