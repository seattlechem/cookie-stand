'use strict';

var tableHeader = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

// store table element as variable
var dataTable = document.getElementById('dataTable');
var stores = [];
var formStore = document.getElementById('formStore');

//constructor to make store objects
function Store(name, minCustPerHour, maxCustPerHour, avgCookieSales){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSales = avgCookieSales;
  this.numOfCookiesProjection = [];
  stores.push(this);
}

//calculate random number of cookies
Store.prototype.randomCookiesNum = function(){
  var min = Math.ceil(this.minCustPerHour * this.avgCookieSales);
  var max = Math.floor(this.maxCustPerHour * this.avgCookieSales);
  return Math.floor(Math.random() * (max - min)) + min;
};

//function of storing calcuated random num of cookies into array
Store.prototype.storeRandomNumCookiesIntoArray = function(){
  var totalCookies = 0;
  for(var i = 0; i < tableHeader.length; i++){
    if(i !== tableHeader.length - 1){
      this.numOfCookiesProjection[i] = this.randomCookiesNum();
      totalCookies += this.numOfCookiesProjection[i];
    }
    else{
      this.numOfCookiesProjection[i] = totalCookies;
    }
  }
  return this.numOfCookiesProjection;
};

//render() method for table
Store.prototype.render = function(){
  //create tr
  this.storeRandomNumCookiesIntoArray();
  var trEl = document.createElement('tr');

  for(var i = 0; i < tableHeader.length + 1; i++){
    //create td
    var tdEl = document.createElement('td');
    if(i === 0){
      tdEl.textContent = this.name;
    }
    else{
      tdEl.textContent = this.numOfCookiesProjection[i - 1];
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

  for(var i = 0; i < tableHeader.length + 1; i++){
    var thEl = document.createElement('th');
    if(i === 0){
      thEl.textContent = '';
    }
    else{
      thEl.textContent = tableHeader[i - 1];
    }

    trEl.appendChild(thEl);

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
  var captionEl = document.createElement('caption');
  captionEl.textContent = 'Hourly Cookies Sales';
  dataTable.appendChild(captionEl);

  for(var i = 0; i < stores.length + 1; i++)
  {
    console.log('entering if statement');
    if(i === 0){
      makeAHeaderRow();
      console.log('header is created');
    }
    else{
      stores[i - 1].render();
    }
  }
}

function createTotalsRow(){
  var totals = [];
  for(var z = 0; z < tableHeader.length; z++){
    var sum = 0;
    for(var i = 0; i < stores.length; i++){
      sum += stores[i].numOfCookiesProjection[z];
    }
    totals.push(sum);
  }

  //create tr
  var trEl = document.createElement('tr');

  for(i = 0; i < totals.length + 1; i++){
    //create td
    var tdEl = document.createElement('td');
    if(i === 0){
      tdEl.textContent = 'Totals';
    }
    else{
      tdEl.textContent = totals[i - 1];
    }

    //append td to tr
    trEl.appendChild(tdEl);

  }
  //append tr to table
  dataTable.appendChild(trEl);

  return totals;
}

//event
function addNewStore(event){
  event.preventDefault();
  var formEl = ['formName', 'formMinCustPerHour', 'formMaxCustPerHour', 'formAvgCookiesSales'];
  var objEl = [];
  for (var i = 0; i < formEl.length; i++){
    var x = event.target[formEl[i]].value;
    objEl.push(x);
  }

  //create a new store object
  new Store(objEl[0], objEl[1], objEl[2], objEl[3]);

  dataTable.innerHTML = '';
  formStore.reset();
  createTable();
  createTotalsRow();
}

formStore.addEventListener('submit', addNewStore);

createTable();
createTotalsRow();
