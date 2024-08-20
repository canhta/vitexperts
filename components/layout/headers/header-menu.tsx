import { appConfig } from '@/configs/app';
import Link from 'next/link';

const MainMenu = () => {
  return (
    <>
      <ul>
        {appConfig.routes.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainMenu;
