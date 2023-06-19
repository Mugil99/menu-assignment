const Render=(props)=>{
    const {arr}=props
    console.log(arr);
    return(
        <div className="grid">
         {
            arr.map((data)=>(
                <div className="card">
                    
                    <img src={data.img } style={{width:'120px',height:'100px'}}></img>
                    <div className="right">
                    <div className="title">
                        <h3>{data.title}</h3>
                        <h4>{data.price}</h4>
                    </div>
                    <hr></hr>
                    <p>{data.desc}</p>
                    </div>
                    
                </div>
            ))
         }
        </div>
    )
}
export default Render;