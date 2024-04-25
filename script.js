$(document).ready(function() {
    $(window).scroll(function() {
        $('.scroll-section').each(function() {
            var position = $(this).offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollTop > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        $('.scroll-section').each(function() {
            var position = $(this).offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollTop > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

// Annual Number of Examinees data
var data = [
    { year: 1977, examinees: 5700000 },
    { year: 1978, examinees: 6100000 },
    { year: 1979, examinees: 4680000 },
    { year: 1980, examinees: 3330000 },
    { year: 1981, examinees: 2590000 },
    { year: 1982, examinees: 1870000 },
    { year: 1983, examinees: 1670000 },
    { year: 1984, examinees: 1640000 },
    { year: 1985, examinees: 1760000 },
    { year: 1986, examinees: 1910000 },
    { year: 1987, examinees: 2280000 },
    { year: 1988, examinees: 2720000 },
    { year: 1989, examinees: 2860000 },
    { year: 1990, examinees: 2830000 },
    { year: 1991, examinees: 2960000 },
    { year: 1992, examinees: 3030000 },
    { year: 1993, examinees: 2860000 },
    { year: 1994, examinees: 2510000 },
    { year: 1995, examinees: 2530000 },
    { year: 1996, examinees: 2410000 },
    { year: 1997, examinees: 2780000 },
    { year: 1998, examinees: 3200000 },
    { year: 1999, examinees: 2880000 },
    { year: 2000, examinees: 3750000 },
    { year: 2001, examinees: 4540000 },
    { year: 2002, examinees: 5100000 },
    { year: 2003, examinees: 6130000 },
    { year: 2004, examinees: 7290000 },
    { year: 2005, examinees: 8770000 },
    { year: 2006, examinees: 9500000 },
    { year: 2007, examinees: 10100000 },
    { year: 2008, examinees: 10500000 },
    { year: 2009, examinees: 10200000 },
    { year: 2010, examinees: 9460000 },
    { year: 2011, examinees: 9330000 },
    { year: 2012, examinees: 9150000 },
    { year: 2013, examinees: 9120000 },
    { year: 2014, examinees: 9390000 },
    { year: 2015, examinees: 9420000 },
    { year: 2016, examinees: 9400000 },
    { year: 2017, examinees: 9400000 },
    { year: 2018, examinees: 9750000 },
    { year: 2019, examinees: 10310000 },
    { year: 2020, examinees: 10710000 },
    { year: 2021, examinees: 10780000 },
    { year: 2022, examinees: 11930000 },
    { year: 2023, examinees: 12910000 }
];

// Set up the dimensions and margins of the graph
var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Create the SVG container
var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create the scales
var x = d3.scale.linear()
    .domain(d3.extent(data, function(d) { return d.year; }))
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, 12910000])
    .range([height, 0]);

// Create the line function
var line = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.examinees); });

// Add the line path
svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

// Add the X Axis
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.format("d")))
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("Year");

// Add the Y Axis
svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left").tickFormat(function(d) { return (d / 1000000) + "M"; }))
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Number of Examinees");