'use strict';

var tableHeader = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

// store table element as variable
var dataTable = document.getElementById('dataTable');
var stores = [];
console.log(stores);

//constructor to make store objects
function Store(name, minCustPerHour, maxCustPerHour, avgCookieSales){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSales = avgCookieSales;
  stores.push(this);

}

//calculate random number of cookies
Store.prototype.randomCookiesNum = function(){
  var min = Math.ceil(this.minCustPerHour * this.avgCookieSales);
  var max = Math.floor(this.maxCustPerHour * this.avgCookieSales);
  return Math.floor(Math.random() * (max - min)) + min;
};

//store calcuated random num of cookies into array
Store.prototype.storeRandomNumCookiesIntoArray = function(){
  var numOfCookiesProjection = [];
  var totalCookies = 0;
  for(var i = 0; i < tableHeader.length; i++)
  {
    if(i !== tableHeader.length - 1)
    {
      numOfCookiesProjection[i] = this.randomCookiesNum();
      totalCookies += numOfCookiesProjection[i];
    }
    else
    {
      numOfCookiesProjection[i] = totalCookies;
    }
  }
  return numOfCookiesProjection;
};

//render() method for table
Store.prototype.render = function(){
  //create tr
  var trEl = document.createElement('tr');

  for(var i = 0; i < tableHeader.length + 1; i++)
  { 
    //create td
    var tdEl = document.createElement('td');
    if(i === 0)
    {
      tdEl.textContent = this.name;
    }
    else
    {
      tdEl.textContent = this.storeRandomNumCookiesIntoArray()[i - 1];
    }

    //append td to tr
    trEl.appendChild(tdEl);
    
  }
  //append tr to table
  dataTable.appendChild(trEl);
};

//makeAHeaderRow function
function makeAHeaderRow(){
  var trEl = document.createElement('tr');

  for(var i = 0; i < tableHeader.length + 1; i++)
  {
    
    var tdEl = document.createElement('td');
    if(i === 0){
      tdEl.textContent = '';
    }
    else{
      tdEl.textContent = tableHeader[i - 1];
    }

    trEl.appendChild(tdEl);
    
  }
  dataTable.appendChild(trEl);

}

//create store instances
new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


//for loop for each store object
function createTable(){

  for(var i = 0; i < stores.length + 1; i++)
  {
    console.log('entering if statement');
    if(i === 0)
    {
      makeAHeaderRow();
      console.log('header is created');
    }
    else
    {
      stores[i - 1].render();
    }
  }
}

createTable();
