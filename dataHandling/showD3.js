//solution can be done with hints from https://gist.github.com/thiagodebastos/08ea551b97892d585f17
var dataO =// JSON.parse(satJsonFile);
 [
 {key:'t',value:1517},
 {key:'i',value:2169},
 {key:'j',value:423},
 {key:'s',value:2123},
 {key:'z',value:384},
 {key:'u',value:1156},
 {key:'c',value:247},
 {key:'f',value:9},
 {key:'.',value:529},
 {key:'č',value:9}] ;
//remember cascading approaches

d3.json("satJsonFile.json", function(data) {
  dataO = data;
  console.log(data);
});


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
       //Below is used a collection pipeline, for more information on it, you can read : https://martinfowler.com/articles/collection-pipeline/
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
