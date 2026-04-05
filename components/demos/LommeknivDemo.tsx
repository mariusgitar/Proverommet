import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const tools = [
  {
    name: 'PDF-sammenslåer',
    description:
      'Slå sammen flere PDF-filer til ett dokument — direkte i nettleseren, ingen opplasting til server.',
    url: 'https://mariusgitar.github.io/PDFer/',
  },
  {
    name: 'QR-kodefabrikk',
    description:
      'Lag QR-koder raskt for lenker, dokumenter eller enkel deling. Med logo og justerbar kvalitet.',
    url: 'https://mariusgitar.github.io/QRfabrikken/',
  },
  {
    name: 'PersonWerner',
    description: 'Rydd bort personopplysninger fra tekst før deling og arkivering.',
    url: 'https://mariusgitar.github.io/personwerner/',
  },
  {
    name: 'Bildebasen',
    description: 'Konverter bilder mellom formater enkelt og greit — direkte i nettleseren.',
    url: 'https://mariusgitar.github.io/Bildebasen/',
  },
  {
    name: 'Bakgrunnsviskeren',
    description:
      'Fjerner bakgrunn fra både enkle og komplekse bilder – så effektiv at selv kaffeflekken i Teams-portrettet begynner å svette.',
    url: 'https://mariusgitar.github.io/Bakgrunnsvisker/',
  },
] as const;

export function LommeknivDemo() {
  return (
    <div
      className={`${inter.className} mx-auto w-full max-w-[600px] rounded-3xl bg-gradient-to-br from-[#e8f0ee] to-[#d4e4e0] p-5 text-[#1a3344] shadow-sm sm:p-6`}
    >
      <header className="mb-4 space-y-3 sm:mb-5">
        <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#1a3344] shadow-sm">
          Verktøyportal
        </span>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Byråkratens lommekniv</h3>
          <p className="text-sm leading-relaxed text-[#4a6577] sm:text-base">
            En liten samling digitale småverktøy for deg som lever blant PDF-er, skjemaer og de små flokene som
            dukker opp før lunsj.
          </p>
          <a
            href="https://mariusgitar.github.io/lommekniv-for-byrakrater/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#1a3344] px-5 py-3 font-semibold text-white"
          >
            Besøk Byråkratens lommekniv →
          </a>
        </div>
      </header>

      <div className="max-h-[540px] space-y-3 overflow-y-auto pr-1 sm:space-y-4">
        {tools.map((tool) => (
          <article key={tool.name} className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
            <h4 className="text-xl font-bold text-[#1a3344] sm:text-2xl">{tool.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#4a6577] sm:text-base">{tool.description}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-bold text-[#1a3344] hover:underline sm:text-base"
            >
              Åpne verktøy →
            </a>
          </article>
        ))}

        <article className="rounded-2xl bg-[#f2f6f5] p-5 text-center shadow-sm">
          <h4 className="text-lg font-semibold text-[#1a3344] sm:text-xl">Flere verktøy kommer</h4>
          <p className="mt-2 text-sm leading-relaxed text-[#4a6577] sm:text-base">
            Har du et genialt verktøyønske? Vi elsker gode idéer med litt kontorsjarm.
          </p>
        </article>
      </div>
    </div>
  );
}
