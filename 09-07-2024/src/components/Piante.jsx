import styles from "../app.module.css";

// Definizione del componente Piante che accetta props pianta e onClick
function Piante({ pianta, onClick }) {
    const { id, nome, tipologia, necessita_di_luce, frequenza_di_annaffiatura, difficolta_di_cura, benefici } = pianta;

    return (
        <li className={styles.plantCard}>
            <div className={styles.plantDetails}>
                <strong>{nome}</strong> <br />
                Tipologia: <em>{tipologia}</em> 🌿 <br />
                Necessità di Luce: <em>{necessita_di_luce}</em> ☀️ <br />
                Frequenza di Annaffiatura: <em>{frequenza_di_annaffiatura}</em> 💧 <br />
                Difficoltà di Cura: <em>{difficolta_di_cura}</em> 🌱 <br />
                Benefici: <em>{benefici.join(", ")}</em> 🌸
            </div>
            <button id={id} onClick={onClick}>Cancella</button>
        </li>
    );
}

export default Piante;