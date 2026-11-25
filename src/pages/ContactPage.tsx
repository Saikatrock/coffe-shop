import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { siteConfig } from '../data/siteConfig';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  useDocumentTitle('Contact');

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Questions, bookings or just want to say hi? We would love to hear from you." />

      <Section className="!pt-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
              <h3 className="text-xl font-semibold text-stone-900">Find us</h3>
              <address className="mt-3 space-y-1 text-sm not-italic text-stone-600">
                <p>📍 {siteConfig.address}</p>
                <p>📞 {siteConfig.phone}</p>
                <p>✉️ {siteConfig.email}</p>
              </address>

              <h3 className="mt-6 text-xl font-semibold text-stone-900">Opening hours</h3>
              <ul className="mt-3 space-y-1 text-sm text-stone-600">
                {siteConfig.hours.map((h) => (
                  <li key={h.days} className="flex justify-between">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-amber-100">
              <iframe
                title="Cafe location map"
                src={siteConfig.mapEmbedUrl}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
