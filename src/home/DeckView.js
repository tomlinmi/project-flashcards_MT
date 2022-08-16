
import { deleteDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import {useHistory,useParams } from "react-router-dom";


const DeckView = ({handleDelete})=> {
   
        const [cards, setCards] = useState([]);
        const [error, setError] = useState(undefined);


    useEffect(() => {
 
        const abortController = new AbortController();
      
          listCards(abortController.signal).then(setCards).catch(setError);
      
          return () => abortController.abort();
        }, []);
      
        if (error) {
          return <ErrorMessage error={error} />;
        }
       
        const listCards = cards.map((card) => < Card key={card.id} card={card} handleDelete={handleDelete} />);
      console.log(listCards);


      
  if (deck){
    return(


    <div className="border p-4 h-100 d-flex flex-column">
     <div>
   
     <h3 className="display-6 mb-6">{deck.name}</h3>
      </div>

      <p>{deck.description}</p>
 
      <div class="d-grid gap-6 d-md-block">  
    
      <button className="btn btn-secondary" onClick={()=>(deck.id)}>
      Edit
      </button>

      <button className="btn btn-primary" onClick={()=>(deck.id)}>
      Study
      </button>

      <button className="btn btn-primary" onClick={()=>(deck.id)}>
      + Add Cards
      </button>
    
      <button className="btn btn-danger" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>
     
  
      </div>
      <div>
      <h2 className="display-6 mb-6">Cards</h2>
      </div>
      <div class="d-grid gap-6 d-md-block"> 

      <button className="btn btn-secondary" onClick={()=>(deck.id)}>
      Edit
      </button>

      <button className="btn btn-danger" onClick={()=>handleDelete(deck.id)}>
      Delete Deck
      </button>

      </div>

      </div>
        
  );
    }
    return <ErrorMessage/>;
  
}

export default DeckView;
