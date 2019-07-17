import React from "react";
import * as d3 from 'd3';
console.log(d3)
/* import {layout} from 'd3'; */
import './style.css'

// Add test data here (or make api call for data)
var data = {
    "name": "flare",
    "children": [
        {
            "id": 1,
            "name": "Culture",
            "color": "#47375a",
            "children": [
                {
                    "value": 0.02,
                    "name": "Company Size",
                    "color": "#47375a"
                },
                {
                    "value": 0.04,
                    "name": "Cultural Alignment",
                    "color": "#47375a"
                },
                {
                    "value": 0.02,
                    "name": "Office Space",
                    "color": "#47375a"
                }
            ]
        },
        {
            "id": 2,
            "name": "Commute",
            "color": "#52507f",
            "children": [
                {
                    "value": 0.01,
                    "name": "Office Location",
                    "color": "#52507f",
                },
                {
                    "value": 0.03,
                    "name": "Commute Distance",
                    "color": "#52507f",
                },
                {
                    "value": 0.01,
                    "name": "Remote",
                    "color": "#52507f",
                }
            ]
        },
        {
            "id": 3,
            "name": "Learning",
            "color": "#647ea1",
            "children": [
                {
                    "value": 0.04,
                    "name": "Menteeship",
                    "color": "#647ea1",
                },
                {
                    "value": 0.03,
                    "name": "Gaining Experience",
                    "color": "#647ea1",
                },
                {
                    "value": 0.02,
                    "name": "Acheivements",
                    "color": "#647ea1",
                },
                {
                    "value": 0.02,
                    "name": "Learn New Things",
                    "color": "#647ea1",
                }
            ]
        },
        {
            "id": 4,
            "name": "Growth",
            "color": "#74b5c3",
            "children": [
                {
                    "value": 0.01,
                    "name": "Org Structure",
                    "color": "#74b5c3",
                },
                {
                    "value": 0.01,
                    "name": "Directing/Architecting",
                    "color": "#74b5c3",
                },
                {
                    "value": 0.07,
                    "name": "Mentorship",
                    "color": "#74b5c3",
                },
                {
                    "value": 0.01,
                    "name": "Direct Reports",
                    "color": "#74b5c3",
                }
            ]
        },
        {
            "id": 5,
            "name": "Wellness",
            "color": "#83e6d6",
            "children": [
                {
                    "value": 0.02,
                    "name": "Adversity to change",
                    "color": "#83e6d6",
                },
                {
                    "value": 0.02,
                    "name": "Family Benefits",
                    "color": "#83e6d6",
                },
                {
                    "value": 0.07,
                    "name": "Time Off",
                    "color": "#83e6d6",
                }
            ]
        },
        {
            "id": 6,
            "name": "Compensation",
            "color": "#abe7d5",
            "children": [
                {
                    "value": 0.05,
                    "name": "Options",
                    "color": "#abe7d5",
                },
                {
                    "value": 0.25,
                    "name": "$$$$$",
                    "color": "#abe7d5",
                }
            ]
        },
        {
            "id": 7,
            "name": "Purpose",
            "color": "#cdecde",
            "children": [
                {
                    "value": 0.05,
                    "name": "Global Sense of Worth",
                    "color": "#cdecde",
                },
                {
                    "value": 0.05,
                    "name": "Company Mission",
                    "color": "#cdecde",
                }
            ]
        },
        {
            "id": 8,
            "name": "Workday",
            "color": "#e8f4ed",
            "children": [
                {
                    "value": 0.03,
                    "name": "Workflow maturity",
                    "color": "#e8f4ed",
                },
                {
                    "value": 0.06,
                    "name": "Intensity",
                    "color": "#e8f4ed",
                },
                {
                    "value": 0.06,
                    "name": "Management",
                    "color": "#e8f4ed",
                }
            ]
        }
    ]
}

// Size/state related variables
var width = 500,
    height = 500,
    outer_radius = width / 2.5,
    arc_transition; // save current arc transition

// Create scales
var x = d3.scaleLinear()
    .range([0, 2 * Math.PI]),

    y = d3.scaleLinear()
        .range([0, width / 2]);


// Partition layout
var partition = d3.partition(),
    nodes = partition.nodes(data);

// Arc generator
var arc_generator = d3.svg.arc()
    .startAngle(function (d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
    })
    .endAngle(function (d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
    })
    .innerRadius(function (d) {
        return Math.max(0, y(d.y));
    })
    .outerRadius(function (d) {
        return Math.max(0, y(d.y + d.dy));
    });

/*d3.svg.append("image")
  .attr("xlink:href", "../images/2.jpg")
  .attr("x", -650)
  .attr("y", -650);
*/

// Append a centered group for the burst to be added to
var burst_group = d3.select('.chart')
    .append('svg')
    .attr({
        width: width,
        height: height
    })
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .text("place");

burst_group.select("svg").append("text")
    .attr("class", "total")
    .attr("text-anchor", "middle")
    .attr('font-size', '4em')
    .attr('y', 20);

d3.select(".total").text("You");



/*d3.svg.select("g").append("svg:text")
    .on("click",click)
    .style("font-size","4em")
    .style("font-weight","bold")
    .text(function(d) { return d.name; });
*/
// Append Arcs
var arcs = burst_group.selectAll("path.ark")
    .data(nodes)
    .enter().append("path")
    .attr({
        d: arc_generator,
        class: function (d) { return 'ark -depth-' + d.depth; }
    })
    .style("fill", function (d, i) {
        if (d.depth > 0) { return d.color; }
        //else{return "#fff123";}
    })
    .style("font-size", function (d) { if (d.depth == 0) { return "4em"; } })

    .attr('stroke', '#fff') // <-- THIS (for arc padding)
    .attr('stroke-width', '0.5') // <-- THIS (for arc padding)
    .text(function (d) { if (d.depth > 0) { return d.name; } else { return "You"; } })
    .on("click", click)
    .on('mouseover', function (d) {
        if (d.depth > 0) {
            var names = getNameArray(d);
            fade(arcs, 0.3, names, 'name');

            update_crumbs(d);

            console.log(names[0]);

            d3.select("#name")
                .text(names[0]);

            d3.select("#explanation")
                .style("visibility", "");

        }
        else {
            var names = ['You'];
            fade(arcs, 0.3, names, 'name');

            d3.select("#name")
                .style("font-weight", "bold")
                .text(names[0]);

            d3.select("#explanation")
                .style("visibility", "");
        }
    })
    .on('mouseout', function (d) {
        fade(arcs, 1);
        remove_crumbs();

        d3.select("#explanation")
            .style("visibility", "hidden");
    });











// Updates breadcrumbs
function update_crumbs(d) {
    var crumb_container = d3.select('.crumbs'),
        sections = getNameArray(d);

    // Remove existing crumbs
    remove_crumbs();

    // Append new crumbs
    sections.reverse().forEach(function (name) {
        crumb_container.append('span')
            .classed('crumb', true)
            .text(name);
    });
};

// Removes all crumb spans
function remove_crumbs() {
    d3.select('.crumbs').selectAll('.crumb').remove();
};

// Handle Clicks
function click(d) {
    arc_transition = arcs.transition('arc_tween')
        .duration(750)
        .attrTween("d", arcTween(d));
};

// Retrieve arc name and parent names
function getNameArray(d, array) {
    array = array || [];

    // Push the current objects name to the array
    array.push(d.name);

    // Recurse to retrieve parent names
    if (d.parent) getNameArray(d.parent, array);

    return array;
};

// Interpolate the scales!
function arcTween(d) {
    var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
        yd = d3.interpolate(y.domain(), [d.y, 1]),
        yr = d3.interpolate(y.range(), [d.y ? 20 : 0, outer_radius]);

    return function (d, i) {
        return i
            ? function (t) { return arc_generator(d); }
            : function (t) {
                x.domain(xd(t));
                y.domain(yd(t)).range(yr(t));

                return arc_generator(d);
            };
    };
};

// Fade a selection filtering out the comparator(s)
function fade(selection, opacity, comparators, comparatee) {
    var type = typeof comparators,
        key = comparatee ? comparatee : 'value';

    selection.filter(function (d, i) {
        // Remove elements based on a string or number
        if (type === "string" || type === "number") {
            return d[key] !== comparators;

            // Remove elements based on an array
        } else if (type === 'object' && typeof comparators.slice === 'function') {
            return comparators.indexOf(d[key]) === -1;

            // If there is no comparator keep everything 
        } else return true;
    })
        .transition('fade')
        .duration(250)
        .style('opacity', opacity);
};



const UserGraph = () => {

    return (
        <>
            <div className="container">
                <div className="chart">
                    <div id="explanation" style="visibility: hidden;">
                        <span id="name"></span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserGraph;