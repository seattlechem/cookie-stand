
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike =
{
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSales: 6.3,
  totalCookies: 0,
  cookiesHourlySales: [],

  randomCookiesNum: function()
  {
    var min = Math.ceil(this.minCustPerHour * this.avgCookieSales);
    var max = Math.floor(this.maxCustPerHour * this.avgCookieSales);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  render: function()
  {
    //add hourly cookies sales into array
    for(var i = 0; i < hours.length; i++)
    {
      var numCookies = this.randomCookiesNum();
      this.cookiesHourlySales.push(numCookies);
      this.totalCookies += numCookies;
    }
    //add cookies hourly cookies sale into li
    var ulEl = document.getElementById('firstAndPike');

    for(i = 0; i < hours.length; i++)
    {
      //create li item
      var liEl = document.createElement('li');

      //assign content to this created li
      liEl.textContent = hours[i] + ': ' + this.cookiesHourlySales[i] + ' cookies';

      ulEl.appendChild(liEl);
    }

    //Add total
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaTacAirport =
{
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSales: 1.2,
  totalCookies: 0,
  cookiesHourlySales: [],

  randomCookiesNum: function()
  {
    var min = Math.ceil(this.minCustPerHour * this.avgCookieSales);
    var max = Math.floor(this.maxCustPerHour * this.avgCookieSales);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  render: function()
  {
    //add hourly cookies sales into array
    for(var i = 0; i < hours.length; i++)
    {
      var numCookies = this.randomCookiesNum();
      this.cookiesHourlySales.push(numCookies);
      this.totalCookies += numCookies;
    }
    //add cookies hourly cookies sale into li
    var ulEl = document.getElementById('seaTacAirport');

    for(i = 0; i < hours.length; i++)
    {
      //create li item
      var liEl = document.createElement('li');

      //assign content to this created li
      liEl.textContent = hours[i] + ': ' + this.cookiesHourlySales[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    //Add total
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seattleCenter =
{
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSales: 3.7,
  totalCookies: 0,
  cookiesHourlySales: [],

  randomCookiesNum: function()
  {
    var min = Math.ceil(this.minCustPerHour * this.avgCookieSales);
    var max = Math.floor(this.maxCustPerHour * this.avgCookieSales);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  render: function()
  {
    //add hourly cookies sales into array
    for(var i = 0; i < hours.length; i++)
    {
      var numCookies = this.randomCookiesNum();
      this.cookiesHourlySales.push(numCookies);
      this.totalCookies += numCookies;
    }
    //add cookies hourly cookies sale into li
    var ulEl = document.getElementById('seattleCenter');

    for(i = 0; i < hours.length; i++)
    {
      //create li item
      var liEl = document.createElement('li');

      //assign content to this created li
      liEl.textContent = hours[i] + ': ' + this.cookiesHourlySales[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    //Add total
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var capitolHill =
{
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSales: 2.3,
  totalCookies: 0,
  cookiesHourlySales: [],

  randomCookiesNum: function()
  {
    var min = Math.ceil(this.minCustPerHour * this.avgCookieSales);
    var max = Math.floor(this.maxCustPerHour * this.avgCookieSales);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  render: function()
  {
    //add hourly cookies sales into array
    for(var i = 0; i < hours.length; i++)
    {
      var numCookies = this.randomCookiesNum();
      this.cookiesHourlySales.push(numCookies);
      this.totalCookies += numCookies;
    }
    //add cookies hourly cookies sale into li
    var ulEl = document.getElementById('capitolHill');

    for(i = 0; i < hours.length; i++)
    {
      //create li item
      var liEl = document.createElement('li');

      //assign content to this created li
      liEl.textContent = hours[i] + ': ' + this.cookiesHourlySales[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    //Add total
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var alki =
{
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSales: 4.6,
  totalCookies: 0,
  cookiesHourlySales: [],
  render: function()
  {
    //add hourly cookies sales into array
    for(var i = 0; i < hours.length; i++)
    {
      var numCookies = getRandomInt(this.minCustPerHour * this.avgCookieSales, this.maxCustPerHour * this.avgCookieSales);
      this.cookiesHourlySales.push(numCookies);
      this.totalCookies += numCookies;
    }
    //add cookies hourly cookies sale into li
    var ulEl = document.getElementById('alki');

    for(i = 0; i < hours.length; i++)
    {
      //create li item
      var liEl = document.createElement('li');

      //assign content to this created li
      liEl.textContent = hours[i] + ': ' + this.cookiesHourlySales[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    //Add total
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};



firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

