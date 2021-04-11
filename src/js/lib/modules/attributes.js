import $ from '../core';

$.prototype.attr = function (name, value) {
	for (let i = 0; i < this.length; i++) {
		if (!value) {
			return this[i].getAttribute(name);
		} else {
			this[i].setAttribute(name, value);
		}
	}
	return this;
};

$.prototype.removeAttr = function (name) {
	for (let i = 0; i < this.length; i++) {
		if (this[i].hasAttribute(name)) {
			this[i].removeAttribute(name);
		}
	}
	return this;
};

$.prototype.toggleAttr = function (name, value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i].hasAttribute(name)) {
			this[i].removeAttribute(name);
		} else {
			if (!value) continue;
			this[i].setAttribute(name, value);
		}
	}
	return this;
};
