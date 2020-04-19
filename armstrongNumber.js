//PSEUDOCODE:
//input: none
//output integers from 0-999

//create a void function called armstrongNumber()
// declare a variable called number = 0
//create a loop that iterates untill number === 999
//if the number is one digit number, it is an armstrong number, just print it
// if the number is a two digit number:
// divide this number by 10, and use the floor function to know what the first digit. mod 10 that number to know the second digit
// in all other cases do this:
// divide the number by 100 and use floor() to get the 1st digit. mod 100 and then divide it by 10 and use floor() to get the 2nd digit. to get the 3rd digit mod 10



function armstrongNumber(){
    let hundereds, tens, digits,calculation

    for(let number = 0; number < 1000; number++){
        if(number >= 0 && number < 10){
            console.log(number)
        } else if(number >=10 && number < 100){
            tens = Math.floor((number/10))
            digits = number % 10

            calculation = tens^2+digits^2

            if(number === calculation){
                console.log(number)
            }
    
        } else {
            hundereds = Math.floor((number/100))
            tens = Math.floor(((number % 100)/10))
            digits = number % 10
            
            calculation = Math.pow(hundereds,3)+Math.pow(tens,3)+Math.pow(digits,3)

            if(number === calculation){
                console.log(number)
            }

        }
    }
    
}

armstrongNumber()
