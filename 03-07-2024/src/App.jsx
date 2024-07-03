import ContactForm from './components/ContactForm';
import './components/styles/index.css';  
import appStyles from './components/styles/App.module.css';

function App() {
  return (
    <div className={appStyles.app}>
      <ContactForm />
    </div>
  );
}

export default App;