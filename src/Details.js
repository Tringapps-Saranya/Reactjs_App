import './App.css';
function Details(props){
    return(
        <div>
        {props.print.map((x) => <div onClick={()=>{alert("Welcome to " + x.company)}} class="display">{x.company}</div>)}
        </div>
    );
}
export default Details;