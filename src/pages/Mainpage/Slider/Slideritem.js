export default function SliderItem(props){
    return(
        <div className={props.className}>
            <div className="left Flexable">
                <h1>{props.name}</h1>
                <p>{props.Specialization}</p>
                <button className="btn btn-primary w-50">احجز الان</button>
            </div>
            <div className="right">
                <div className="imagestruture"><img src={props.img} alt="manimg" id="manimg"></img></div>
            </div>
        </div>
    );
}
