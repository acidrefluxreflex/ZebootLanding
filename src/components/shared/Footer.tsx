import Link from "next/link";
import ParticleAnimation from "@/libs/ParticleAnimation";
export default function Footer() {
  return (
    <div>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Blog</header>
          <Link className="link link-hover" href={"blog/category/appnews"}>
            News
          </Link>

          <Link className="link link-hover" href={"blog/category/health"}>
            Health
          </Link>

          <Link className="link link-hover" href={"blog/category/zen"}>
            Zen
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Products</header>
          <a href="https://eveki.net" className="link link-hover">Zeboot</a>
          <a href="https://textcheckai.page.link/toapp" className="link link-hover">Eveki</a>
        
        </nav>
        {/* 
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        */}
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-row">
          <h2 className="text-2xl" style={{ fontFamily: "Futura" }}>
            Zeboot
          </h2>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end"></nav>
      </footer>
    </div>
  );
}
