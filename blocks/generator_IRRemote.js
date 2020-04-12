Blockly.JavaScript['ir_remote_read'] = function(block) {
	var dropdown_pin = block.getFieldValue('pin');
	var code = '';
	code += `#EXTINC#include <IRRemote.h>#END\n`;
	code += `#EXTINC IRRemote ir_io${dropdown_pin}(${dropdown_pin}); #END\n`;
	code += `#SETUP ir_io${dropdown_pin}.begin(); #END\n`;
	code += `ir_io${dropdown_pin}.read()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};
