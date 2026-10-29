import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { CartProvider } from '../components/CartProvider';
import CursorTrail from '../components/CursorTrail';

export const metadata = {
  title: 'KhajuriConnect — Books from local stores, connected to you.',
  description: 'A premium digital marketplace connecting Khajuri Market bookstores with readers across Indore.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><AntdRegistry><CartProvider><CursorTrail />{children}</CartProvider></AntdRegistry></body></html>;
}
