let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
//We want to add event Listener to each button
//First approach is to add event listener individually for each button
//Second approach is if all the buttons have same functionality and same class name then we can use some loop type function here i.e. .map().
buttons.map(eventFunction);
function eventFunction(button){
    let buttonValue = button.innerHTML;
    button.addEventListener('click',function (event){
        
        switch(event.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '←':
                
                let str = display.innerText;
                if(str.length>0){
                    display.innerText=str.substring(0,str.length-1);
                }
                break;
            case '=':
                try{
                    display.innerText= eval(display.innerText);
                } catch {
                    display.innerText="Please Enter Valid Expression";
                }
                
                break;
            default:
                display.innerText+=event.target.innerText;
        }
    })
}