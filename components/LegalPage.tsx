import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: Readonly<{
  title: string;
  updated: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-black dark:to-gray-950 min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">Last updated: {updated}</p>
        <div className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_h2]:scroll-mt-24 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 [&_a]:text-orange-600 dark:[&_a]:text-orange-400 [&_a]:underline">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
