import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        {SITE.footerCopy} · © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
