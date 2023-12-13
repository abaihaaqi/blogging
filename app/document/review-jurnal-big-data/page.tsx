export default function myJournalReviewPage() {
  return (
    <>
      <div className="my-6 text-center">
        <h1 className="mb-2 font-serif font-bold text-center text-xl md:text-3xl">
          Review Jurnal Big Data
        </h1>
        <p className="mb-1">Nizar Ahmad Baihaqi - 13 Desember 2023</p>
        <a
          href={`${process.env.BASE_URL}/documents/review-jurnal-big-data.doc`}
          className="text-blue-500 hover:text-white underline hover:no-underline"
        >
          Download DOC
        </a>
      </div>
      <iframe
        className="w-screen sm:w-[640px] md:w-[768px] aspect-video mx-auto"
        src={`https://docs.google.com/gview?url=${process.env.BASE_URL}/documents/review-jurnal-big-data.doc&embedded=true`}
      ></iframe>
    </>
  );
}
