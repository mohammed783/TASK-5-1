const screen = document.querySelector('.screen') ; 

function appendToDisplay(input)
{
    screen.value += input;
}
function clearDisplay()
{
    screen.value = "" ; 
}
function calculate()
{
    try{
        screen.value = eval(screen.value) ; 
    }
    catch{
        screen.value = 'Error' ; 
    }
    
}