(function () {
    if (typeof window !== 'undefined' && window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    if (typeof window !== 'undefined' && window.Element) {
        var proto = Element.prototype;

        if (!proto.matches) {
            proto.matches =
                proto.msMatchesSelector ||
                proto.webkitMatchesSelector ||
                function (selector) {
                    var node = this;
                    var nodes = (node.document || node.ownerDocument).querySelectorAll(selector);
                    var i = 0;
                    while (nodes[i] && nodes[i] !== node) i++;
                    return Boolean(nodes[i]);
                };
        }

        if (!proto.closest) {
            proto.closest = function (selector) {
                var el = this;
                while (el && el.nodeType === 1) {
                    if (el.matches(selector)) return el;
                    el = el.parentElement || el.parentNode;
                }
                return null;
            };
        }
    }

    if (typeof window !== 'undefined' && !window.requestAnimationFrame) {
        window.requestAnimationFrame = function (cb) {
            return setTimeout(cb, 16);
        };
    }
})();

