import User from '../model/Users.js';
import argon2 from 'argon2';

export default async function seedAdmin() {
  try {
    const hashedPassword = await argon2.hash('gxdYGMDRwRo6uUW2rLi');
    await User.create({
      Username: 'ElifMakeupStudio_Admin.2025',
      Password: hashedPassword,
      Role: 'Admin'
    });
    console.log('Admin user created.');
  } catch (error) {
    console.error('Seeder error:', error);
  }
}
