
var queen = {
    position: {
        x:0,
        y:4,
    }
};
function changeDirection(number,direction){
        var temp;
        var temp1;
        switch(direction){
            case "E" :
                temp=queen.position.x+number;
                if(temp>7 && temp<0){
                    console.log("index outer bound");
                }
                else{
                    queen.position.x=temp;
                    console.log(temp+""+queen.position.y);
                }
                break;
                case "W":
                temp=queen.position.x-number;
                if(temp>7 && temp<0){
                    console.log("index outer bound");
                }
                else{
                    queen.position.x=temp;
                    console.log(temp+""+queen.position.y);
                }
                break;

                case "N":
                temp=queen.position.y-number;
                if(temp>7 && temp<0){
                    console.log("index outer bound");
                }
                else{
                    queen.position.y=temp;
                    console.log(queen.position.x+""+temp);
                }
                break;
            

            case "S":
                temp=queen.position.y+number;
                if(temp>7 && temp<0){
                    console.log("index outer bound");
                }
                else{
                    queen.position.y=temp;
                    console.log(queen.position.x+""+temp);
                }
                break;

                case "NE":
                    temp=queen.position.x+number;
                    temp1=queen.position.y-number;
                    if(temp>7 || temp<0 || temp1>7 || temp1<0){
                        console.log("index outer bound");
                    }
                    else{
                        queen.position.y=temp1;
                       queen.position.x= temp;
                       console.log(temp+""+temp1);
                    }
                    break;
                    case "NW":
                        temp=queen.position.x-number;
                        temp1=queen.position.y+number;
                        if(temp>7 || temp<0 || temp1>7 || temp1<0){
                            console.log("index outer bound");
                        }
                        else{
                            queen.position.y=temp1;
                           queen.position.x= temp;
                           console.log(temp+""+temp1);
                        }
                        break;
                        case "SE":
                        temp=queen.position.x+number;
                        temp1=queen.position.y+number;
                        if(temp>7 || temp<0 || temp1>7 || temp1<0){
                            console.log("index outer bound");
                        }
                        else{
                            queen.position.y=temp1;
                           queen.position.x= temp;
                           console.log(temp+""+temp1);
                        }
                        break;

                        case "SW":
                        temp=queen.position.x-number;
                        temp1=queen.position.y-number;
                        if(temp>7 || temp<0 || temp1>7 || temp1<0){
                            console.log("index outer bound");
                        }
                        else{
                            queen.position.y=temp1;
                           queen.position.x= temp;
                           console.log(temp+""+temp1);
                        }
                        break;

                    

        }
}
function play(input){
    var value= input.split(" ")
    console.log(value);
    value.forEach(element => {
        let number =Number(element.slice(element.length-1));
        let direction = element.slice(0,element.length-1) ;
        console.log("Numner =>"+number);
        console.log("direction =>"+direction);
        changeDirection(number,direction)
        
    });
    
    console.log("board="+ board[queen.position.x][queen.position.y]);

}
 var board = [["a7","b7","c7","d7","e7","f7","g7","h7"],
                ["a7","b7","c7","d7","e7","f7","g7","h7"],
                ["a7","b7","c7","d7","e7","f7","g7","h7"],
                ["a7","b7","c7","d7","e7","f7","g7","h7"],
                ["a7","b7","c7","d7","e7","f7","g7","h7"],
                ["a7","b7","c7","d7","e7","f7","g7","h7"],
                ["a7","b7","c7","d7","e7","f7","g7","h7"]];
                play('NE3');