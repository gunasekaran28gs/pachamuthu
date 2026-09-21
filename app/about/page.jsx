export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">About Us</h1>
        <p className="mt-4 text-lg text-black dark:text-zinc-50">
          Welcome to Pachamuthu Group of Institutions! We are committed to providing quality education and fostering a nurturing environment for our students. Our institution offers a wide range of programs and extracurricular activities to help students excel in their academic and personal growth.
        </p>
        <p className="mt-4 text-lg text-black dark:text-zinc-50">
          Our dedicated faculty and staff work tirelessly to ensure that every student receives the support and guidance they need to succeed. We believe in the power of education to transform lives and are proud to be a part of our students&apos; journeys.
        </p>
        <p className="mt-4 text-lg text-black dark:text-zinc-50">
          Join us at Pachamuthu Group of Institutions and be a part of our vibrant community where learning, innovation, and personal development thrive.
        </p>
      </main>
    </div>
  );
}