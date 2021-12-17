function create_chart(data){
  const weather_icons=[
    "<img src='1.png' width='40'/>","<img src='2.png' width='40'/>","<img src='3.png' width='40'/>","<img src='4.png' width='40'/>",
  ]  
  var chart = 
    `<div class='chart-div'>
      <div class='chart-title'>
          Hourly Simulations
      </div>
      <div class='chart-body'>
          <div class='chart-left-part'>
              <div class='chart-text-time'>Time</div>
              <div class='chart-text-temp'>Temp.</div>
              <div class='chart-text-prod'><div>kWh<br/>Prod.</div></div>
          </div>
          <div class='chart-graphic'>` 
              for (let i = 0; i < data.length; i++) {
                console.log(weather_icons[data[i].icon])
                chart += `<div class=`+ ((i % 2)?'chart-item1':'chart-item2')  + `>
                            <div class='chart-graph-time'>` + ((data[i].time<12)?(data[i].time+'am'):(data[i].time===12)?'noon':((data[i].time-12)+'pm')) +`</div>
                            <div class='chart-graph-time'>` + (data[i].temp+'゜') + `</div>
                            <div style='display:flex;justify-content:center'>` + weather_icons[data[i].icon] + `</div>
                            <div class='chart-graph-yellow' style="height:`+ (data[i].kwh/3 + 5) +`px"></div>
                            <div class='chart-graph-prod'>
                              <div>`+(data[i].kwh)+`<br/>kWh</div>
                            </div>                            
                          </div>`;
              }
              chart +=        
          `</div>
      </div>
    </div>`
  document.getElementById('chart').innerHTML = chart;
}
const dataset=[
  {    "time":0,    "temp":1,    "icon":0,    "kwh":11.3  },
  {    "time":1,    "temp":-4,    "icon":1,    "kwh":21.3  },
  {    "time":2,    "temp":-2,    "icon":2,    "kwh":31.3  },
  {    "time":3,    "temp":5,    "icon":3,    "kwh":41.3  },
  {    "time":4,    "temp":8,    "icon":2,    "kwh":21.3  },
  {    "time":5,    "temp":1,    "icon":1,    "kwh":51.3  },
  {    "time":6,    "temp":1,    "icon":0,    "kwh":61.3  },
  {    "time":7,    "temp":1,    "icon":3,    "kwh":81.3  },
  {    "time":8,    "temp":1,    "icon":2,    "kwh":101.9  },
  {    "time":9,    "temp":1,    "icon":0,    "kwh":99.3  },
  {    "time":10,    "temp":1,    "icon":1,    "kwh":71.3  },
  {    "time":11,    "temp":1,    "icon":0,    "kwh":51.3  },
  {    "time":12,    "temp":1,    "icon":3,    "kwh":41.3  },
  {    "time":13,    "temp":1,    "icon":1,    "kwh":31.3  },
]

create_chart(dataset);