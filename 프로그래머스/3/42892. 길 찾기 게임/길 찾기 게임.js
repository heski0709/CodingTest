class Node {
	parent = undefined;
	left = undefined;
	right = undefined;
	value = undefined;
	x = undefined;
	y = undefined;

	/**
	 * @param {int} value 
	 * @param {int} x 
	 * @param {int} y 
	 */
	constructor(value, x, y) {
		this.value = value
		this.x = x;
		this.y = y;
	}

	/**
	 * @param {Node} node 
	 */
	insert(node) {
		if (this.x < node.x) {
			if (this.right === undefined) {
				this.right = node;
			} else {
				this.right.insert(node)
			}
		} else {
			if (this.left === undefined) {
				this.left = node;
			} else {
				this.left.insert(node)
			}
		}

		node.parent = this;
	}
}

/**
 * @param {Node} root 
 * @param {Array} data 
 * @returns {int}
 */
function preOrder(root, data) {
    if (!root) return;

	data.push(root.value)
    preOrder(root.left, data); // 왼쪽 서브트리 순회
    preOrder(root.right, data); // 오른쪽 서브트리 순회
}

/**
 * @param {Node} root 
 * @param {Array} data 
 * @returns {int}
 */
function postOrder(root, data) {
    if (!root) return;

    postOrder(root.left, data); // 왼쪽 서브트리 순회
    postOrder(root.right, data); // 오른쪽 서브트리 순회
	data.push(root.value)
}

/**
 * @param {int[][]} nodeinfo
 * @returns
 */
function solution(nodeinfo) {
	const dict = {}
	nodeinfo.forEach((node, index) => {
		dict[`${node[0]},${node[1]}`] = index + 1;
	})

	nodeinfo.sort((n1, n2) => {
		if (n1[1] === n2[1]) {
			return n2[0] - n1[0]
		} else {
			return n2[1] - n1[1]
		}
	})

	let root = undefined
	let rootY = -1;
	for (const coord of nodeinfo) {
		const [x, y] = coord;
		const node = new Node(dict[`${x},${y}`], x, y)

		if (!root) {
			root = node;
			rootY = y;
			continue;
		}

		root.insert(node)
	}

	const preOrderData = []
	const postOrderData = []

	preOrder(root, preOrderData)
	postOrder(root, postOrderData);

	return [preOrderData, postOrderData]
}