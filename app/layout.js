import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
  title: 'KhajuriConnect — Books from local stores, connected to you.',
  description: 'A premium digital marketplace connecting Khajuri Market bookstores with readers across Indore.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><AntdRegistry>{children}</AntdRegistry></body></html>;
}
