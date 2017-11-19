'use strict';
const {Component} = require('bluespess');

class Tool extends Component {
	constructor(atom, template) {
		super(atom, template);
	}

	try_use() {
		return true;
	}
}

Tool.depends = ["Item", "BeltItem"];
Tool.loadBefore = ["Item", "BeltItem"];

Tool.template = {
	vars: {
		components: {
			"Tool": {
				toolspeed: 1,
				usesound: null
			},
			"Item": {
				inhand_lhand_icon: 'icons/mob/inhands/equipment/tools_lefthand.png',
				inhand_rhand_icon: 'icons/mob/inhands/equipment/tools_righthand.png'
			}
		},
		icon: 'icons/obj/tools.png'
	}
};

class Wrench extends Component {
	constructor(atom, template) {
		super(atom, template);
	}
}

Wrench.depends = ["Tool"];
Wrench.loadBefore = ["Tool"];

Wrench.template = {
	vars: {
		components: {
			"Tool": {
				usesound: 'sound/items/ratchet.ogg'
			},
			"Item": {
				force: 5,
				throwforce: 7,
				size: 2,
				attack_verb: ["bashed", "battered", "bludgeoned", "whacked"],
			},
			"Describe": {
				desc: "A wrench with common uses. Can be found in your hand."
			}
		},
		icon_state: "wrench",
		name: "wrench"
	}
};

class Screwdriver extends Component {
	constructor(atom, template) {
		super(atom, template);
	}
}

Screwdriver.depends = ["Tool"];
Screwdriver.loadBefore = ["Tool"];

Screwdriver.template = {
	vars: {
		components: {
			"Tool": {
				usesound: 'sound/items/screwdriver.ogg'
			},
			"Item": {
				force: 5,
				throwforce: 5,
				throw_speed: 3,
				throw_range: 5,
				attack_verb: ["stabbed"],
				inhand_icon_state: "screwdriver",
				size: 1,
				hitsound: 'sound/weapons/bladeslice.ogg'
			},
			"Describe": {
				desc: "You can be totally screwy with this."
			}
		},
		icon_state: "screwdriver_map",
		name: "screwdriver"
	}
};

class Wirecutters extends Component {
	constructor(atom, template) {
		super(atom, template);
		if(this.random_color)
			this.a.icon_state = `cutters_${['yellow', 'red'][Math.floor(Math.random() * 2)]}`;
	}
}

Wirecutters.depends = ["Tool"];
Wirecutters.loadBefore = ["Tool"];

Wirecutters.template = {
	vars: {
		components: {
			"Wirecutters": {
				random_color: true
			},
			"Tool": {
				usesound: 'sound/weapons/wirecutter.ogg'
			},
			"Item": {
				force: 6,
				throw_speed: 3,
				throw_range: 7,
				attack_verb: ["pinched", "nipped"],
				size: 2,
				hitsound: 'sound/weapons/wirecutter.ogg'
			},
			"Describe": {
				desc: "This cuts wires."
			}
		},
		icon_state: "cutters",
		name: "wirecutters"
	}
};

class Crowbar extends Component {
	constructor(atom, template) {
		super(atom, template);
	}
}

Crowbar.depends = ["Tool"];
Crowbar.loadBefore = ["Tool"];

Crowbar.template = {
	vars: {
		components: {
			"Tool": {
				usesound: 'sound/weapons/crowbar.ogg'
			},
			"Item": {
				force: 5,
				throwforce: 7,
				attack_verb: ["attacked", "bashed", "battered", "bludgeoned", "whacked"],
				size: 2
			},
			"Describe": {
				desc: "A small crowbar. This handy tool is useful for lots of things, such as prying floor tiles or opening unpowered doors."
			}
		},
		icon_state: "crowbar",
		name: "pocket crowbar"
	}
};

module.exports.templates = {
	"wrench": {
		components: ["Wrench"],
		tree_paths: ["items/tools/wrench"]
	},
	"screwdriver": {
		components: ["Screwdriver"],
		tree_paths: ["items/tools/screwdriver"]
	},
	"wirecutters": {
		components: ["Wirecutters"],
		tree_paths: ["items/tools/wirecutters"]
	},
	"crowbar": {
		components: ["Crowbar"],
		tree_paths: ["items/tools/crowbar"]
	},
	"red_crowbar": {
		components: ["Crowbar"],
		vars: {
			components: {
				"Item": {
					force: 8
				}
			},
			icon_state: "crowbar_red"
		},
		tree_paths: ["items/tools/crowbar/red"]
	}
};

module.exports.components = {Tool, Wrench, Screwdriver, Wirecutters, Crowbar};