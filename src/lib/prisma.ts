// import { PrismaClient } from '@/generated/prisma';
// export const prisma = new PrismaClient();

import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'; // Example for PostgreSQL

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
