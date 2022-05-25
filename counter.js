var counter = document.querySelectorAll('#counter');
console.log(counter);
let count = 0;

function changeCounter(button){
    if(button == 'plus'){
        count += 1;
        if(count>0){
            
            document. getElementById('counter'). style. color = 'green' ;
        }
        else if (count==0){
            document. getElementById('counter'). style. color = 'black' ;
        }
        
    }
    else if(button == 'minus'){
        count -= 1;
        if(count<0){
            
            document. getElementById('counter'). style. color = 'red' ;
        }
        else if (count==0){
            document. getElementById('counter'). style. color = 'black' ;
        }
    }
    else if(button == 'Reset'){
        count = 0;
        if(count==0){
            
            document. getElementById('counter'). style. color = 'black' ;
        }
    }
    
    counter.innerHTML=count;
}
