
import "./App.css";
import{useState} from "react"
export default function App() {
  
  const names = [
    {
      name: "JAI Bhim",
      url:
        "https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg",
      rating:"9.6",
      summary:"When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice."
    },
    {
      name: "Asuran",
      url:
        "https://cdn.celpox.com/bby_uploads/media/8dc4d5f103a78d848ee743da4382f5c4.jpg",
      rating:"8.6",
      summary:"The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. Will the farmer, a loving father and a pacifist by heart, be able to save his hot-blooded son is the rest of the story.."
    },
    {
      name: "Pariyerum Perumal",
      url:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d614f446dad59cb487ff5df80995b0f8ae51f4d052120e83ec73ca541f76afd0._RI_V_TTW_.jpg",
      rating:"8.8",
      summary:"A law student from a lower caste begins a friendship with his classmate, a girl who belongs to a higher caste, and the men in her family start giving him trouble over this"
    },
    {
      name: "Soorarai Pottru",
      url:
        "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/11/16/file79eu5fnczvr1e74ix3eg-914541-1605524324.jpg?itok=viOYLPQa",
      rating:"9.1",
      summary:"Nedumaaran Rajangam (Maara) sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way."
    },
    {
      name: "Iron man 2",
      url:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating:" 7",
      summary:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "The Avengers",
      url:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      rating:"8",
      summary:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    },
    {
      name: "Interstellar",
      url:
        "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating:"8.6",
      summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      url:
        "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating:"8",
      summary:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      url:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating:"8",
      summary:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      name: "M.S. Dhoni: The Untold Story",
      url:
        "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating:"9.5",
      summary:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."
    },
    {
      name: "RRR",
      url:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating:"8.8",
      summary:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Dark Knight",
      url:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      rating:"9",
      summary:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    
  ];
  const[name,setName]=useState("");
  const[url,setPic]=useState("");
  const[rating,setRating]=useState("");
  const[summary,setSummary]=useState("");
  
  const [movielists,Setmovie]=useState(names);

  let newmovie =[{name:name,url:url,rating:rating,summary:summary}];
  return (
    <div>
    <div className="inputfield">
      <input onChange={(event)=>setName(event.target.value)} placeholder="Enter Movie Name" />
      <input onChange={(event)=>setPic(event.target.value)} placeholder="Enter Image URL" />
      <input onChange={(event)=>setRating(event.target.value)} placeholder="Enter Movie Rating" />
      <input onChange={(event)=>setSummary(event.target.value)} placeholder="Enter Movie Summary" />
      <button onClick={()=>{(name !==""&&url!==""&&rating!==""&&summary!=="")? Setmovie([...movielists,...newmovie]):alert("Input field Can't be empty")}}>Add</button>
      </div>
      <div className="App">
          {movielists.map(({name,url,rating,summary}) => (
           <Display name={name} url={url} rating={rating} summary={summary}  />
           ))}
     </div>
    
    </div>
  );
} 

function Display({ name, url,rating,summary }) {
  var styles ={ 
    color : rating >= 8.5 ? "green" : "yellow",
  };
 
  const [show,setShow]= useState(true);
  let summarystyle={display:show?"none":"block"};

  const [dele,setDele] = useState(true);
  let cardstyle={display:dele?"block":"none"}
  
  const [like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  
  return (
    <div id="card" style={cardstyle}>
      <img src={url} alt={name} id="image" />
      <h2>{name}</h2>
      <p >IMDB : <span style={styles}>{rating}</span> ⭐</p>
      <button id="showdes"onClick={()=>setShow(!show)}>{show?"Show More":"Show Less"}</button>
      <p style={summarystyle}>{summary}</p><br/>
      <button id="likebtn" onClick={()=>setLike(like+1)}>👍{like}</button>
      <button id="delebtn" onClick={()=>setDele(!dele)}>Delete</button>
      <button id="dislikebtn" onClick={()=>setDislike(Dislike+1)}>👎{Dislike}</button>
      
    </div>
  );
  }




// function Likedis(){
//   const [like, setLike] = useState(0);
//   const [Dislike, setDislike] = useState(0);

//   return(
//     <div>
//        <button id="likebtn" onClick={()=>setLike(like+1)}>👍{like}</button>
//        <button id="dislikebtn" onClick={()=>setDislike(Dislike+1)}>👎{Dislike}</button>
//     </div>
   
//   )
// }