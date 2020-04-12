Blockly.Blocks['ir_remote_read'] = {
	init: function() {
		this.jsonInit({
			"message0": "IR Remote pin %1 read code",
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "IN1", "32" ]
				]
			}],
			"output": "Number",
			"colour": 135,
			"tooltip": "Read code from IR Remote",
			"helpUrl": "https://www.github.com/maxpromer/ir-remote"
		});
	}
};
