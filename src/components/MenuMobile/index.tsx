import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '../../context/theme';
import { ToggleThemeButton } from '../ToggleThemeButton';

import styles from './styles.module.scss';

export function MenuMobile() {
  const { theme } = useTheme();
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = active ? 'hidden' : 'auto';
  }, [active]);

  const handleClickMenu = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setActive(!active)}
        className={styles.toggleMenuNavBarButton}
      >
        <span className={`${active && styles.active} ${styles[theme]}`} />
        <span className={`${active && styles.active} ${styles[theme]}`} />
      </button>
      <div
        className={`${styles.menuMobileContainer} ${active && styles.active} ${
          styles[theme]
        }`}
      >
        <nav
          className={`${
            active ? styles.animationOn : styles.animationOff
          } text`}
        >
          <Link href={'/'}>
            <a onClick={handleClickMenu}>Posts</a>
          </Link>
          <Link href={'/back-end'}>
            <a onClick={handleClickMenu}>Back-end</a>
          </Link>
          <Link href={'/front-end'}>
            <a onClick={handleClickMenu}>Front-end</a>
          </Link>
          <Link href={'/mobile'}>
            <a onClick={handleClickMenu}>Mobile</a>
          </Link>
          <Link href={'/devops'}>
            <a onClick={handleClickMenu}>DevOps</a>
          </Link>
        </nav>

        <div className={`${styles.themeButton} ${active && styles.active}`}>
          <ToggleThemeButton />
        </div>
      </div>
    </>
  );
}
