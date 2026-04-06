'use client';

import Navbar from './Navbar';
import FullScreenMenu from './FullScreenMenu';
import { useMenu } from '@/contexts/MenuContext';

export default function Navigation() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <FullScreenMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
}





