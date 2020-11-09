"use strict"

// RETRIEVING VALUES FROM coffees VARIABLE
function renderCoffee(coffee) {
    var html = '<option>' + coffee.name + '</option>';
    return html;
}

//DISPLAYS ALL OBJECTS IN ARRAY
function renderMenu(coffee) {
    var html = '<h3>'+ coffee.name +'</h3>';
    html += '<p>' + coffee.roast +'</p>';
    return html;
}

// POPULATES TABLE DATA
function renderCoffees(coffees, isCoffeeSelection) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += (isCoffeeSelection) ? renderCoffee(coffees[i]) : renderMenu(coffees[i]);
    }
    return html;
}

// FILTERS OPTIONS FORM SELECTIONS
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedCoffee = coffeeInput.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedCoffee) !== -1  && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }

    });
    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
}

// ADD ITEMS TO THE ARRAY
// form needs a new event listener
// add id
function addNewCoffee (input) {
    var newCoffeeObj ={
        id: coffees.length+1,
        name: addCoffee.value,
        roast: addRoast.value
    }
    coffees.push(newCoffeeObj);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

// OBJECTS ARRAY
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-selection');
var coffeeMenu = document.querySelector('#coffees-list');
var coffeeInput = document.querySelector('#search-filter');
var addCoffee = document.querySelector('#add-coffee');
var addRoast = document.querySelector('#add-roast');
var submitNewCoffee = document.querySelector('#submit-coffee');

coffeeMenu.innerHTML = renderCoffees(coffees, false);
coffeeSelection.innerHTML = renderCoffees(coffees, true);


coffeeInput.addEventListener('keyup', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
submitNewCoffee.addEventListener('click', addNewCoffee);