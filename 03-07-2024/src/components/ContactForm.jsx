import { useState } from 'react';
import formStyles from './styles/form.module.css';

// Ho definito il componente funzionale che rappresenta il modulo di contatto
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  // Ho usato Hook useState per creare una variabile di stato formData con un oggetto iniziale
  // che rappresenta i dati del modulo e setFormData è la funzione per aggiornare lo stato

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Definisco la funzione handleChange che gestisce le modifiche ai campi del modulo
  // Aggiorno lo stato formData con i nuovi valori dei campi del modulo
  // Se il tipo di input è 'checkbox', uso il valore checked, altrimenti uso il valore value

  const handleSubmit = (e) => {
    e.preventDefault();
    // In questo caso non faccio nulla quando il modulo viene inviato
  };

//qui avrei potuto gestire l'invio del modulo con la funzione handleSubmit ed anche i messaggi di errore creando nuove funzioni (NON è STATO RICHIESTO)

  return (
    <div className={formStyles.container}>
      <div className={formStyles.formContainer}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={formStyles.formGroup}>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.formGroup}>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.formGroup}>
            <label htmlFor="queryType">Query Type *</label>
            <div className={formStyles.queryOptions}>
              <label>
                <input
                  type="radio"
                  name="queryType"
                  value="general"
                  checked={formData.queryType === 'general'}
                  onChange={handleChange}
                />
                General Enquiry
              </label>
              <label>
                <input
                  type="radio"
                  name="queryType"
                  value="support"
                  checked={formData.queryType === 'support'}
                  onChange={handleChange}
                />
                Support Request
              </label>
            </div>
          </div>
          <div className={formStyles.formGroup}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={formStyles.consentContainer}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label>I consent to being contacted by the team *</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={formStyles.stateDisplay}>
        <h2>Form Data</h2>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Query Type:</strong> {formData.queryType}</p>
        <p><strong>Message:</strong> {formData.message}</p>
        <p><strong>Consent:</strong> {formData.consent ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default ContactForm;
