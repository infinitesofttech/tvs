import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        bannerImage="page-banner21.jpg"
      />
      <ContactForm />
    </>
  );
}
