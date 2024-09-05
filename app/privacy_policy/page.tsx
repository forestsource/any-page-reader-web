import Header from '../Header';
import Footer from '../Footer';
import PrivacyPolicy from './PrivacyPolicy';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
