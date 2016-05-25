var React = require('react');

var styles = {
	string: {
		color: '#0e4889',
		cursor: 'default',
	},
	bool: {
		color: '#06624b',
		cursor: 'default',
		fontStyle: 'italic',
	},
	number: {
		color: '#ca000a',
		cursor: 'default',
	},
	date: {
		color: '#009f7b',
		cursor: 'default',
	},
	empty: {
		color: '#999999',
		cursor: 'default',
	},
	array: {
		color: '#666666',
		cursor: 'default',
	},
	object: {
		color: '#0b89b6',
		cursor: 'default',
	},
	comma: {
		color: '#999999',
		cursor: 'default',
	},
};

function transform (obj, withHeaders, fromRecur, comma) {

	var tag = (fromRecur) ? 'span' : 'div';
	var nextLevel = (fromRecur || 0) + 1;
	var children = [];
	comma = comma ? <span style={styles.comma}>,</span> : null;

	// strings
	if (typeof obj === 'string') {
		return React.createElement(tag, { style: styles.string }, `"${obj}"`, comma);
	}
	// booleans, null and undefined
	else if (typeof obj === 'boolean' || obj === null || obj === undefined) {
		return React.createElement(tag, { style: styles.bool }, String(obj), comma);
	}
	// numbers
	else if (typeof obj === 'number') {
		return React.createElement(tag, { style: styles.number }, String(obj), comma);
	}
	// dates
	else if (Object.prototype.toString.call(obj) === '[object Date]') {
		return React.createElement(tag, { style: styles.date }, String(obj), comma);
	}
	// arrays
	else if (Array.isArray(obj)) {

		var arrayHeader = withHeaders ? 'Array: ' : '';

		if (!obj.length) {
			return React.createElement(tag, { style: styles.empty }, arrayHeader + '[]');
		}

		children.push(React.createElement(tag, { key: '__array:open__', style: styles.array }, arrayHeader + '['));

		for (var i = 0; i < obj.length; i++) {
			children.push(
				<div key={'i' + i} style={{ paddingLeft: '20px' }}>
					{transform(obj[i], withHeaders, nextLevel, i < obj.length - 1)}
				</div>
			);
		}

		children.push(React.createElement(tag, { key: '__array:close__', style: styles.array }, ']'));

	}
	// objects
	else if (obj && typeof obj === 'object') {

		var len = Object.keys(obj).length;
		var objectHeader = withHeaders ? 'Object: ' : '';

		if (fromRecur && !len) {
			return React.createElement(tag, { style: styles.empty }, objectHeader + '{}');
		}

		if (fromRecur) {
			children.push(React.createElement(tag, { key: '__object:open__', style: styles.object }, objectHeader + '{'));
		}

		for (var key in obj) {
			if (typeof obj[key] !== 'function') {
				children.push(
					<div key={key} style={{ paddingLeft: fromRecur ? '20px' : '0px' }}>
						<span style={{ paddingRight: '5px', cursor: 'default' }}>{key}:</span>
						{transform(obj[key], withHeaders, nextLevel)}
					</div>
				);
			}
		}

		if (fromRecur) {
			children.push(React.createElement(tag, { key: '__object:close__', style: styles.object }, '}'));
		}

	}

	return <div>{children}{comma}</div>;

}

var DOMify = React.createClass({
	render () {
		let withHeaders = this.props.withHeaders === undefined ? true : this.props.withHeaders;
		return (
			<div className={this.props.className} style={this.props.style}>
				{transform(this.props.value, withHeaders)}
			</div>
		);
	},
});

module.exports = DOMify;
