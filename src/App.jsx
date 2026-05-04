import { useState } from "react";
import { Instagram, MessageCircle, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-villa.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dressing from "@/assets/dressing.jpg";
import doors from "@/assets/doors.jpg";
import kitchen from "@/assets/kitchen.jpg";
import lambris from "@/assets/lambris.jpg";
import vasque from "@/assets/vasque.jpg";

const realEstate = [
  { title: "Location & Vente", desc: "Appartements, villas et terrains soigneusement sélectionnés pour vous." },
  { title: "Gérance", desc: "Gestion locative complète et sereine de votre patrimoine immobilier." },
  { title: "Rénovation", desc: "Travaux de rénovation clé en main pour valoriser vos biens." },
];

const carpentry = [
  { title: "Chambres à coucher", img: bedroom, desc: "Mobilier de chambre conçu sur mesure, finitions raffinées." },
  { title: "Dressings", img: dressing, desc: "Rangements modulables et élégants adaptés à votre espace." },
  { title: "Cuisines", img: kitchen, desc: "Cuisines équipées sur mesure, fonctionnelles et chaleureuses." },
  { title: "Portes", img: doors, desc: "Portes intérieures en bois massif, design et durabilité." },
  { title: "Lambris & Bardage", img: lambris, desc: "Pose de lambris intérieur et bardage extérieur en bois." },
  { title: "Meubles vasque", img: vasque, desc: "Meubles de salle de bain artisanaux, alliant style et solidité." },
];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const WHATSAPP_NUMBER = "+221784866142";

  const submit = (e) => {
    e.preventDefault();
    const text = `Bonjour, je suis ${form.name} (${form.email}).%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Séné à l'Écoute Services" className="h-10 w-auto" />
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
            <li><a href="#home" className="hover:text-gold transition-colors">Accueil</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="#immobilier" className="hover:text-gold transition-colors">Immobilier</a></li>
            <li><a href="#menuiserie" className="hover:text-gold transition-colors">Menuiserie</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-soft transition-transform hover:scale-105 md:inline-block"
          >
            Devis gratuit
          </a>
          <button aria-label="Menu" className="md:hidden" onClick={() => setMenu(!menu)}>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
            </div>
          </button>
        </nav>
        {menu && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <ul className="space-y-3 text-sm">
              <li><a href="#home" onClick={() => setMenu(false)}>Accueil</a></li>
              <li><a href="#services" onClick={() => setMenu(false)}>Services</a></li>
              <li><a href="#immobilier" onClick={() => setMenu(false)}>Immobilier</a></li>
              <li><a href="#menuiserie" onClick={() => setMenu(false)}>Menuiserie</a></li>
              <li><a href="#contact" onClick={() => setMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <img src={heroImg} alt="Villa moderne au coucher du soleil" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gold-light">Immobilier · Menuiserie</p>
          <h1 className="text-5xl font-light leading-tight md:text-7xl">
            L'art de bâtir <span className="text-gradient-gold italic">vos espaces</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Séné à l'Écoute Services accompagne vos projets immobiliers et réalise sur mesure
            vos aménagements en bois, avec un savoir-faire artisanal d'exception.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="rounded-full bg-gradient-gold px-8 py-3.5 font-semibold text-charcoal shadow-elegant transition-transform hover:scale-105">
              Découvrir nos services
            </a>
            <a href="#contact" className="rounded-full border border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section id="services" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-dark">Nos expertises</p>
            <h2 className="text-4xl md:text-5xl">
              Deux savoir-faire, <span className="italic text-gradient-gold">une exigence</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              De la transaction immobilière à la création de mobilier sur mesure,
              nous mettons notre passion au service de vos projets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <a href="#immobilier" className="group relative overflow-hidden rounded-2xl bg-card p-10 shadow-soft transition-all hover:shadow-elegant">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-gold opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-charcoal text-2xl">🏠</div>
                <h3 className="text-3xl">Immobilier</h3>
                <p className="mt-3 text-muted-foreground">
                  Location, vente, gérance et rénovation d'appartements, villas et terrains.
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-gold-dark">En savoir plus →</span>
              </div>
            </a>
            <a href="#menuiserie" className="group relative overflow-hidden rounded-2xl bg-card p-10 shadow-soft transition-all hover:shadow-elegant">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-gold opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-charcoal text-2xl">🪵</div>
                <h3 className="text-3xl">Menuiserie</h3>
                <p className="mt-3 text-muted-foreground">
                  Fabrication artisanale : chambres, dressings, cuisines, portes, lambris, bardage, meubles vasque.
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-gold-dark">En savoir plus →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* IMMOBILIER */}
      <section id="immobilier" className="bg-cream px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-dark">01 — Immobilier</p>
            <h2 className="text-4xl md:text-5xl">
              Votre partenaire <span className="italic text-gradient-gold">immobilier</span> de confiance
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {realEstate.map((s, i) => (
              <div key={s.title} className="group rounded-xl border border-border bg-background p-8 transition-all hover:border-gold hover:shadow-soft">
                <div className="mb-4 font-display text-5xl text-gold">0{i + 1}</div>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-gradient-gold p-1 shadow-elegant">
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-charcoal px-8 py-6 text-cream md:flex-row">
              <p className="font-display text-2xl">Un projet immobilier en tête ?</p>
              <a href="#contact" className="rounded-full bg-gradient-gold px-6 py-3 font-semibold text-charcoal">
                Parlons-en
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MENUISERIE */}
      <section id="menuiserie" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-dark">02 — Menuiserie</p>
            <h2 className="text-4xl md:text-5xl">
              Le bois, <span className="italic text-gradient-gold">façonné avec passion</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Chaque pièce est unique. Nos artisans menuisiers créent des aménagements
              durables qui s'intègrent parfaitement à votre intérieur.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {carpentry.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-xl bg-card shadow-soft transition-all hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-charcoal px-6 py-24 text-cream md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-light">Pourquoi nous choisir</p>
            <h2 className="text-4xl text-cream md:text-5xl">
              L'excellence au <span className="italic text-gradient-gold">cœur de chaque projet</span>
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { n: "+10", l: "Années d'expérience" },
              { n: "200+", l: "Projets réalisés" },
              { n: "100%", l: "Clients satisfaits" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-6xl text-gradient-gold md:text-7xl">{s.n}</div>
                <p className="mt-3 text-sm uppercase tracking-widest text-cream/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-dark">Contact</p>
            <h2 className="text-4xl md:text-5xl">
              Démarrons votre <span className="italic text-gradient-gold">projet</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Une question, un devis, un conseil ? Notre équipe est à votre écoute.
            </p>
            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <span className="mt-1 text-gold">📍</span>
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-muted-foreground">Diamniadio, Sénégal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 text-gold">📞</span>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-muted-foreground">+221 784866142</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 text-gold">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">mbagnickn828@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl bg-card p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 text-5xl">✓</div>
                <h3 className="text-2xl">Message envoyé</h3>
                <p className="mt-2 text-muted-foreground">Nous vous recontactons sous peu.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium">Nom</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-gold py-3.5 font-semibold text-charcoal shadow-soft transition-transform hover:scale-[1.02]"
                >
                  Envoyer le message
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-charcoal px-6 py-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <img src={logo} alt="Séné à l'Écoute Services" className="h-12 w-auto" />
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                Immobilier & menuiserie sur mesure. Un savoir-faire artisanal au service de vos projets.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gradient-gold">Navigation</h4>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                <li><a href="#home" className="hover:text-gold transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="#immobilier" className="hover:text-gold transition-colors">Immobilier</a></li>
                <li><a href="#menuiserie" className="hover:text-gold transition-colors">Menuiserie</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg text-gradient-gold">Nos services</h4>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                <li>Location & Vente</li>
                <li>Gérance immobilière</li>
                <li>Rénovation</li>
                <li>Menuiserie sur mesure</li>
                <li>Cuisines & Dressings</li>
                <li>Lambris & Bardage</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg text-gradient-gold">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-cream/70">
                <li className="flex items-start gap-2"><span className="text-gold">📍</span> Diamnidio, Sénégal</li>
                <li className="flex items-start gap-2"><span className="text-gold">📞</span> +221 784866142</li>
                <li className="flex items-start gap-2"><span className="text-gold">✉️</span> mbagnickn828@gmail.com</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold">
                  <Instagram size={16} />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.49a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.92z" /></svg>
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/60 md:flex-row">
            <p>© {new Date().getFullYear()} Séné à l'Écoute Services. Tous droits réservés.</p>
            <p>Conçu avec passion · Mentions légales · Politique de confidentialité</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
