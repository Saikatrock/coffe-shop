import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  useDocumentTitle('Page not found');

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-7xl">🫗</p>
      <h1 className="mt-4 text-4xl font-bold text-stone-900">Page not found</h1>
      <p className="mt-3 text-stone-600">Looks like this cup is empty. The page you are looking for does not exist.</p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}
