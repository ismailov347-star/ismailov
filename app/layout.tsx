import './globals.css';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
});

export const metadata = {
  title: "Система Лёгкого Контента — @isma.blog",
  description:
    "Как вырасти до 50 000 подписчиков без необходимости говорить на камеру, без сложного монтажа и без рекламы.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="overflow-x-hidden">
      <head>
        <script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js"></script>
      </head>
      <body className={`min-h-screen overflow-x-hidden ${playfair.variable}`}>{children}</body>
    </html>
  );
}