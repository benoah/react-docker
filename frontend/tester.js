export default function PostForm() {




    
  const url= "http://localhost:5000/registrerforflytning"
  const [data, setData] = useState({
      name:"",
      date:"",
      iduser:""
  })
  
  function submit(e) {
      e.preventDefault();
      Axios.post(url,{
          name:data.name,
          date:data.date, 
          iduser:data.iduser
      })
      .then(res=>{
          console.log(res.data);
      })
  }
  
  function handle(e) {
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata);
      
  }
  
  
  
  return (
      <div>
      <h1> PostForm</h1>
      <form onSubmit={(e)=> submit(e)}>
      <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
      <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
      <input onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
      <button>submit</button>
      </form>
      
      
      </div>