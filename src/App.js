import "./styles.css";

//function App(){
//State

//Comportement
const Select = () => {
  alert("Votre est interface va etre tester par Seliluim");
};
const Retour = () => {
  alert("Retour sur la page d'accueil");
};

//Affichage

export default function App() {
  return (
    <body>
      <div type="H1">
        <h1 className="heading">
          <span className="light">TAF : </span> <br />
          Testeur d'interface
        </h1>

        <div type="text" className="box">
          <div>
            <form className="boxform">
              <fieldset className="field"> Configuration du teste</fieldset>
              <input type="checkbox" value="ligne" name="En Ligne" /> En ligne
              <input type="checkbox" value="Boutton" name="Boutton" /> Boutton
              <input type="checkbox" value="Other" name="autre" /> Autre
            </form>
            <form className="boutton">
              <button className="b1" onClick={Select}>
                {" "}
                Tester
              </button>
              <button className="b2" onClick={Retour}>
                {" "}
                Retour
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
