import ContactPage from '@/components/components_contact/ContactPage';
import Login from '../../components/components_contact/Login';
export default function Contact() {
  return (
    <div>
      <main className="custom-main">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[100%]">
            <ContactPage />
          </div>
          <div>
            <Login />
          </div>
        </div>
      </main>
    </div>
  );
}
