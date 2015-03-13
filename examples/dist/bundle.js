require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-domify":[function(require,module,exports){
"use strict";

var React = require("react");

var styles = {
	string: {
		color: "#0e4889",
		cursor: "default"
	},
	bool: {
		color: "#06624b",
		cursor: "default",
		fontStyle: "italic"
	},
	number: {
		color: "#ca000a",
		cursor: "default"
	},
	date: {
		color: "#009f7b",
		cursor: "default"
	},
	empty: {
		color: "#999999",
		cursor: "default"
	},
	array: {
		color: "#666666",
		cursor: "default"
	},
	object: {
		color: "#0b89b6",
		cursor: "default"
	}
};

function transform(obj, fromRecur) {

	var tag = fromRecur ? "span" : "div",
	    nextLevel = (fromRecur || 0) + 1,
	    children = [];

	// strings
	if (typeof obj === "string") {
		return React.createElement(tag, { style: styles.string }, obj);
	}
	// booleans, null and undefined
	else if (typeof obj === "boolean" || obj === null || obj === undefined) {
		return React.createElement(tag, { style: styles.bool }, String(obj));
	}
	// numbers
	else if (typeof obj === "number") {
		return React.createElement(tag, { style: styles.number }, String(obj));
	}
	// dates
	else if (Object.prototype.toString.call(obj) === "[object Date]") {
		return React.createElement(tag, { style: styles.date }, String(obj));
	}
	// arrays
	else if (Array.isArray(obj)) {

		if (!obj.length) {
			return React.createElement(tag, { style: styles.empty }, "Array: []");
		}

		children.push(React.createElement(tag, { style: styles.array }, "Array: ["));

		// rtn += '</' + tag + '><div style="padding-left: 20px;">';
		//
		for (var i = 0; i < obj.length; i++) {
			children.push(React.createElement(
				"div",
				{ key: "i" + i, style: { paddingLeft: "20px" } },
				transform(obj[i], nextLevel),
				i < obj.length - 1 ? "," : null
			));
		}

		children.push(React.createElement(tag, { style: styles.array }, "]"));
	}
	// objects
	else if (obj && typeof obj === "object") {

		var len = Object.keys(obj).length;

		if (fromRecur && !len) {
			return React.createElement(tag, { style: styles.empty }, "Object: {}");
		}

		if (fromRecur) {
			children.push(React.createElement(tag, { style: styles.object }, "Object: {"));
		}

		for (var key in obj) {
			if (typeof obj[key] !== "function") {
				children.push(React.createElement(
					"div",
					{ key: key, style: { paddingLeft: fromRecur ? "20px" : "0" } },
					React.createElement(
						"span",
						{ style: { paddingRight: "5px", cursor: "default" } },
						key,
						":"
					),
					transform(obj[key], nextLevel)
				));
			}
		}

		if (fromRecur) {
			children.push(React.createElement(tag, { style: styles.object }, "}"));
		}
	}

	return React.createElement(
		"div",
		null,
		children
	);
}

var DOMify = React.createClass({
	displayName: "DOMify",

	render: function render() {
		return transform(this.props.value);
	}

});

module.exports = DOMify;

},{"react":false}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0plZC9EZXZlbG9wbWVudC9wYWNrYWdlcy9yZWFjdC1kb21pZnkvc3JjL0RPTWlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLE1BQU0sR0FBRztBQUNaLE9BQU0sRUFBRTtBQUNQLE9BQUssRUFBRSxTQUFTO0FBQ2hCLFFBQU0sRUFBRSxTQUFTO0VBQ2pCO0FBQ0QsS0FBSSxFQUFFO0FBQ0wsT0FBSyxFQUFFLFNBQVM7QUFDaEIsUUFBTSxFQUFFLFNBQVM7QUFDakIsV0FBUyxFQUFFLFFBQVE7RUFDbkI7QUFDRCxPQUFNLEVBQUU7QUFDUCxPQUFLLEVBQUUsU0FBUztBQUNoQixRQUFNLEVBQUUsU0FBUztFQUNqQjtBQUNELEtBQUksRUFBRTtBQUNMLE9BQUssRUFBRSxTQUFTO0FBQ2hCLFFBQU0sRUFBRSxTQUFTO0VBQ2pCO0FBQ0QsTUFBSyxFQUFFO0FBQ04sT0FBSyxFQUFFLFNBQVM7QUFDaEIsUUFBTSxFQUFFLFNBQVM7RUFDakI7QUFDRCxNQUFLLEVBQUU7QUFDTixPQUFLLEVBQUUsU0FBUztBQUNoQixRQUFNLEVBQUUsU0FBUztFQUNqQjtBQUNELE9BQU0sRUFBRTtBQUNQLE9BQUssRUFBRSxTQUFTO0FBQ2hCLFFBQU0sRUFBRSxTQUFTO0VBQ2pCO0NBQ0QsQ0FBQzs7QUFFRixTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFOztBQUVsQyxLQUFJLEdBQUcsR0FBRyxBQUFDLFNBQVMsR0FBSSxNQUFNLEdBQUcsS0FBSztLQUNyQyxTQUFTLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFBLEdBQUksQ0FBQztLQUNo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Q0FBQyxNQUFNLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0dBQy9FOztBQUVELE9BQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQ3BCLE9BQUksT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ25DLFlBQVEsQ0FBQyxJQUFJLENBQ1o7O09BQUssR0FBRyxFQUFFLEdBQUcsQUFBQyxFQUFDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxBQUFDO0tBQy9EOztRQUFNLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxBQUFDO01BQUUsR0FBRzs7TUFBUztLQUNyRSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQztLQUMxQixDQUNOLENBQUM7SUFDRjtHQUNEOztBQUVELE1BQUksU0FBUyxFQUFFO0FBQ2QsV0FBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztHQUN2RTtFQUVEOztBQUVELFFBQU87OztFQUFNLFFBQVE7RUFBTyxDQUFDO0NBRTdCOztBQUVELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU5QixPQUFNLEVBQUUsa0JBQVc7QUFDbEIsU0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNuQzs7Q0FFRCxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIHN0eWxlcyA9IHtcblx0c3RyaW5nOiB7XG5cdFx0Y29sb3I6ICcjMGU0ODg5Jyxcblx0XHRjdXJzb3I6ICdkZWZhdWx0J1xuXHR9LFxuXHRib29sOiB7XG5cdFx0Y29sb3I6ICcjMDY2MjRiJyxcblx0XHRjdXJzb3I6ICdkZWZhdWx0Jyxcblx0XHRmb250U3R5bGU6ICdpdGFsaWMnXG5cdH0sXG5cdG51bWJlcjoge1xuXHRcdGNvbG9yOiAnI2NhMDAwYScsXG5cdFx0Y3Vyc29yOiAnZGVmYXVsdCdcblx0fSxcblx0ZGF0ZToge1xuXHRcdGNvbG9yOiAnIzAwOWY3YicsXG5cdFx0Y3Vyc29yOiAnZGVmYXVsdCdcblx0fSxcblx0ZW1wdHk6IHtcblx0XHRjb2xvcjogJyM5OTk5OTknLFxuXHRcdGN1cnNvcjogJ2RlZmF1bHQnXG5cdH0sXG5cdGFycmF5OiB7XG5cdFx0Y29sb3I6ICcjNjY2NjY2Jyxcblx0XHRjdXJzb3I6ICdkZWZhdWx0J1xuXHR9LFxuXHRvYmplY3Q6IHtcblx0XHRjb2xvcjogJyMwYjg5YjYnLFxuXHRcdGN1cnNvcjogJ2RlZmF1bHQnXG5cdH1cbn07XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShvYmosIGZyb21SZWN1cikge1xuXG5cdHZhciB0YWcgPSAoZnJvbVJlY3VyKSA/ICdzcGFuJyA6ICdkaXYnLFxuXHRcdG5leHRMZXZlbCA9IChmcm9tUmVjdXIgfHwgMCkgKyAxLFxuXHRcdGNoaWxkcmVuID0gW107XG5cdFxuXHQvLyBzdHJpbmdzXG5cdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZywgeyBzdHlsZTogc3R5bGVzLnN0cmluZyB9LCBvYmopO1xuXHR9XG5cdC8vIGJvb2xlYW5zLCBudWxsIGFuZCB1bmRlZmluZWRcblx0ZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZywgeyBzdHlsZTogc3R5bGVzLmJvb2wgfSwgU3RyaW5nKG9iaikpO1xuXHR9XG5cdC8vIG51bWJlcnNcblx0ZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHsgc3R5bGU6IHN0eWxlcy5udW1iZXIgfSwgU3RyaW5nKG9iaikpO1xuXHR9XG5cdC8vIGRhdGVzXG5cdGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBEYXRlXScpIHtcblx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHsgc3R5bGU6IHN0eWxlcy5kYXRlIH0sIFN0cmluZyhvYmopKTtcblx0fVxuXHQvLyBhcnJheXNcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG5cdFx0XG5cdFx0aWYgKCFvYmoubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHsgc3R5bGU6IHN0eWxlcy5lbXB0eSB9LCAnQXJyYXk6IFtdJyk7XG5cdFx0fVxuXHRcdFxuXHRcdGNoaWxkcmVuLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHsgc3R5bGU6IHN0eWxlcy5hcnJheSB9LCAnQXJyYXk6IFsnKSk7XG5cdFx0XG5cdFx0Ly8gcnRuICs9ICc8LycgKyB0YWcgKyAnPjxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+Jztcblx0XHQvLyBcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChcblx0XHRcdFx0PGRpdiBrZXk9eydpJyArIGl9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjBweCcgfX0+XG5cdFx0XHRcdFx0e3RyYW5zZm9ybShvYmpbaV0sIG5leHRMZXZlbCl9XG5cdFx0XHRcdFx0eyhpIDwgb2JqLmxlbmd0aCAtIDEpID8gJywnIDogbnVsbH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0XHRjaGlsZHJlbi5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCB7IHN0eWxlOiBzdHlsZXMuYXJyYXkgfSwgJ10nKSk7XG5cdFx0XG5cdH1cblx0Ly8gb2JqZWN0c1xuXHRlbHNlIGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHRcblx0XHR2YXIgbGVuID0gT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG5cdFxuXHRcdGlmIChmcm9tUmVjdXIgJiYgIWxlbikge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCB7IHN0eWxlOiBzdHlsZXMuZW1wdHkgfSwgJ09iamVjdDoge30nKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKGZyb21SZWN1cikge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KHRhZywgeyBzdHlsZTogc3R5bGVzLm9iamVjdCB9LCAnT2JqZWN0OiB7JykpO1xuXHRcdH1cblx0XHRcblx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdFx0XHRpZiAodHlwZW9mIG9ialtrZXldICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2tleX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGZyb21SZWN1ciA/ICcyMHB4JyA6ICcwJyB9fT5cblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzVweCcsIGN1cnNvcjogJ2RlZmF1bHQnIH19PntrZXl9Ojwvc3Bhbj5cblx0XHRcdFx0XHRcdHt0cmFuc2Zvcm0ob2JqW2tleV0sIG5leHRMZXZlbCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmIChmcm9tUmVjdXIpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIHsgc3R5bGU6IHN0eWxlcy5vYmplY3QgfSwgJ30nKSk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0cmV0dXJuIDxkaXY+e2NoaWxkcmVufTwvZGl2PjtcblxufVxuXG52YXIgRE9NaWZ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdHJhbnNmb3JtKHRoaXMucHJvcHMudmFsdWUpO1xuXHR9XG5cdFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NaWZ5O1xuIl19