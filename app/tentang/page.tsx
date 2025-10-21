import BackButton from "@/components/back-button";

export default function TentangPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose dark:prose-invert max-w-none">
        <BackButton />
        <h1>Tentang Mathkult</h1>
        <p>
          Ini adalah halaman tentang Mathkult. Di sini akan dijelaskan filosofi di balik Mathkult.
        </p>
        <p>
          (Konten dummy, akan direvisi nanti.)
        </p>
      </div>
    </div>
  );
}
