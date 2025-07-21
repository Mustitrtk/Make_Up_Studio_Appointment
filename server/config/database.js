import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // 👈 .env dosyasını burada aktif hale getiriyoruz

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Veritabanı bağlantısı başarılı');
    } catch (error) {
        console.log('❌ Veritabanı bağlantı hatası:', error.message);
    }
};

export default db;
