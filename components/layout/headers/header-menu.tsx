import Link from "next/link";

const MainMenu = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Our Services</Link>
        </li>
        <li>
          <Link href="/team">Our team</Link>
        </li>
        <li>
          <Link href="/showcase">Showcases</Link>
        </li>
        <li>
          <Link href="/pricing-plan">Pricing</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
