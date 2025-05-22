// Dinner plan creator
let = {
    
}

let oneAndDoneMeals = [
    'Homemade Pizza',
    'Sandwiches',
    'Soup',
    'Chicken Salad',
    'Mofongo',
];

let meats = [
    // 'Ground Beef',
    // 'Baked Tilapia',
    // 'Stove Tilapia',
    // 'Tuna (Wrap?)',
    'BBQ Chicken',
    'Baked Chicken',
    'Lemon Chicken',
    'Pesto Chicken',
    'Breaded Chicken'
];

let sides = [
    'Stove Broccoli',
    'Stove Carrots',
    'Taco Hard Shell',
    'Taco Soft Shell',
    'Green Salad',
    'Spinach Linguine Pasta',
    'Bow Pasta',
    'Tostones',
    'White Rice',
    'Baked Potato',
    'Garlic Bread',
    'Tater Tots',
    'Homemade Fries',
    'Sweet Potato Fries',
    'Mushrooms',
    'Boiled Corn',
    'Malanga Mashed',
    'Mashed Potatoes',
    'Berry Smoothie',
    'Banana Shake',
    'Tomato Soup',
    'Mac and Cheese',
    'Avocado',
    'Guacamole'
]

let meals = [];

console.log('MEAL MAKER!');

for(let i=0; i< meats.length; i++) {
    for(let j=0; j<sides.length; j++) {
        for(let k=0; k<sides.length; k++) {
            
            if(sides[j] == sides[k]) {
                continue;
            }

            // one meal
            let m = {
                meat: meats[i],
                side1: sides[j],
                side2: sides[k]
            }
 
            // RANDOM OPTIONAL 3rd Side
            if( 0 === Math.floor(Math.random()*6)) {
                m.side3 = sides[ Math.floor(Math.random()*sides.length) ];
            }

            // RANDOM OPTIONAL 4th Side
            if( 5 === Math.floor(Math.random()*6)) {
                let s = sides[ Math.floor(Math.random()*sides.length) ];
                if(m.side3 === undefined) {
                    m.side3 = s; 
                }else { 
                    m.side4 = s;
                }
            }
            
            meals.push(m);
        }
    }
}

meals.push( ...oneAndDoneMeals );

// RANDOMIZE LIST
meals = shuffle(meals);

// SHOW ALL COMBOS
// meals.forEach( m => console.log(m));

// SHOW ME ONE

function start() {
    
    return new Promise( resolve => {
        let m = [];
        for(var i=0; i<3; i++) {
            let randomMeal = meals[ Math.floor(Math.random() * meals.length) ];
            console.log(i+1);
            printMeal(randomMeal);
            m.push(randomMeal);
        }
        resolve(m);  
    });
    
    
}

function createMeal() {

    clearMealOptions();
    let optionDiv1 = document.getElementById('opt1');
    let optionDiv2 = document.getElementById('opt2');
    let optionDiv3 = document.getElementById('opt3');
    let optionDivs = [optionDiv1, optionDiv2, optionDiv3];

    start().then( meals => {
        
        meals.forEach( (meal, index) => {
            let list = document.createElement('ul');
            for( let [part, mealItem] of Object.entries(meal) ) {
                let item = document.createElement('li');
                item.innerText = part + " - " + mealItem;
                list.appendChild(item);
            }

            optionDivs[ index ].appendChild(list);
        });
    })

}

function clearMealOptions() {
    console.log(2);
    let optionDiv1 = document.getElementById('opt1');
    let optionDiv2 = document.getElementById('opt2');
    let optionDiv3 = document.getElementById('opt3');
    let optionDivs = [optionDiv1, optionDiv2, optionDiv3];
    optionDivs.forEach( div => div.innerHTML = "" );
}

function printMeal( m ) {
    for (let [key, value] of Object.entries(m)) {
        console.log('' + key + ':\t' + value);
    }
    console.log();
      
} 


function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
