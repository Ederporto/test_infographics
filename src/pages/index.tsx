import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();


  return (
      <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
              className="dark self-center"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Icon_-_Wiki_Infographics.svg"
              alt="Wiki Infographics logo"
              width={100}
              height={100}
              priority
          />
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Wiki Infographics</h1>
          <div className="flex flex-row gap-8 w-full items-center justify-center p-8">
            <button
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
            >
              Login with Wikimedia
            </button>
            <button
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
                onClick={() => router.push('/infographics')}
            >
              Generate infographic
            </button>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/WikiMovimentoBrasil/wiki_infographics"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                aria-hidden
                src="https://nextjs.org/icons/github.svg"
                alt="Documentation icon"
                width={16}
                height={16}
            />
            Source code
          </a>
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://wikitech.wikimedia.org/wiki/Tool:Wiki_Infographics"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                aria-hidden
                src="https://nextjs.org/icons/window.svg"
                alt="Examples"
                width={16}
                height={16}
            />
            Documentation
          </a>
        </footer>
      </div>
  );
}