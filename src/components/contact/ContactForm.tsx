import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Button from '../ui/Button';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', email: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

const inputClass =
  'mt-1 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200';

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: send `values` to your backend or a service like Formspree here.
    console.log('Contact form submitted', values);
    setSubmitted(true);
    setValues(initialValues);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-200">
        <p className="text-3xl">🎉</p>
        <h3 className="mt-2 text-xl font-semibold text-green-900">Thank you!</h3>
        <p className="mt-1 text-sm text-green-800">We have received your message and will reply soon.</p>
        <button
          type="button"
          className="mt-4 text-sm font-medium text-green-900 underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-stone-700">
          Name
        </label>
        <input id="name" name="name" type="text" value={values.name} onChange={handleChange} className={inputClass} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-stone-700">
          Email
        </label>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-stone-700">
          Message
        </label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange} className={inputClass} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        Send message
      </Button>
    </form>
  );
}
