export function AlertClock() {
    function handleShowTime(){
     alert('Current time:' + new Date())
    }
     return(
        <div>
            <p>Click to see the current time:</p>
            <button onClick={handleShowTime}>Click Me!</button>
        </div>
     )
}
    
