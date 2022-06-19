function clickEvent(variable){
    alert(variable);
}
function Events(){
    const hover = () => {
        alert("Mouser hover event is occurred..");
    }
    return <div>
                <button className="clickbutton" onClick={ () => clickEvent("Click")}>Click Here!</button>
                <button className="hoverbutton" onMouseOver= {hover}>Hover me..!</button>
           </div>
}
export default Events;