import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Photocopy Shop</h1>
        <p>Business Center &amp; Document Solutions</p>
      </header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()} Photocopy Shop. All rights reserved.
      </footer>
    </>
  );
}