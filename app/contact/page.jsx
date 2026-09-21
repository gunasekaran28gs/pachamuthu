import Form from 'next/form';

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">Contact Us</h1>
        <p className="mt-4 text-lg text-black dark:text-zinc-50">
          We would love to hear from you! If you have any questions, comments, or inquiries, please feel free to reach out to us. Our team is here to assist you and provide the information you need.
        </p>
        <p className="mt-4 text-lg text-black dark:text-zinc-50">
          You can contact us via email at <a href="mailto:info@pachamuthu.edu.in" className="text-blue-500 hover:underline">info@pachamuthu.edu.in</a>
        </p>
        <Form action="/api/contact" method="POST" className="mt-6 w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-black dark:text-zinc-50">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-black dark:text-zinc-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-zinc-50">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-black dark:text-zinc-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-black dark:text-zinc-50">Message</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-black dark:text-zinc-50" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send Message
          </button>
        </Form>
      </main>
    </div>
  );
}