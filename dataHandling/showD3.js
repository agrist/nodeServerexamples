var dataO = [ {key:0,value:153},
 {key:1,value:159},
 {key:2,value:103},
 {key:3,value:52},
 {key:4,value:53},
 {key:5,value:42},
 {key:6,value:34},
 {key:7,value:44},
 {key:8,value:36},
 {key:9,value:88},
 {key:'g',value:176},
 {key:'a',value:2713},
 {key:'d',value:608},
 {key:'n',value:913},
 {key:'o',value:610},
 {key:'v',value:711},
 {key:'e',value:1484},
 {key:'m',value:910},
 {key:'b',value:389},
 {key:'r',value:973},
 {key:'p',value:641},
 {key:'k',value:819},
 {key:'l',value:757},
 {key:'t',value:1517},
 {key:'i',value:2169},
 {key:'j',value:423},
 {key:'s',value:2123},
 {key:'z',value:384},
 {key:'u',value:1156},
 {key:'c',value:247},
 {key:'f',value:9},
 {key:'.',value:529},
// {key:'space',value:3448},
 {key:'ī',value:428},
 {key:'ē',value:369},
 {key:'ā',value:793},
 {key:',',value:282},
 {key:'š',value:287},
 {key:'ņ',value:105},
 {key:'ū',value:29},
 {key:'ž',value:22},
 {key:'ģ',value:9},
 {key:'!',value:1},
 {key:'ļ',value:82},
 {key:'ķ',value:14},
 {key:'č',value:9}]
//remember cascading approaches
/* You can do the manual maximum scaling calculations, but usually you should use some built in funcitonality */
 var maxnum =0;
 dataO.forEach(function(dapo){
   //console.log(dapo);
   maxnum = (dapo.value > maxnum ? dapo.value : maxnum);
   //console.log(maxnum);
 });
//console.log(maxnum);

var maxd = d3.scale.linear()
    .domain([0, maxnum])
    .range([0, 400]);//400 is the desired maximum pixel width

function type(d) {
      d.value = +d.value;
       return d;
   };
//bar chart creation using div elements, TODO create an alternative using svg
d3.select(".chart")
  .selectAll("div") //even if none exist yet, it allows to append them in this context
  .data(dataO)//what is our data to show
    .enter() //going "in" the selected structure for further actions
    .append("div")//for all data points add a div
    //set the width of shown bar to % of maximum value
    .style("width", function(d) { return maxd(d.value) + "px"; })    //(d.value/maxnum)*100+"px";})
    .text(function(d){return d.key;})//set the key value to show on the bar chart
    //add events for each div to show the "tooltip"
    .on("mouseover", function(d){tooltip.text(d.value); return tooltip.style("visibility", "visible");})
    .on("mousemove", function(){return tooltip.style("top",
    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});;

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text("starting text");

d3.select("body").transition()
        .style("background-color", "darkgrey");
//console.log(data);
