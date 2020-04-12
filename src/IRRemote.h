#ifndef __IR_REMOTE_H__
#define __IR_REMOTE_H__

#include <Arduino.h>
#include "xtensa/core-macros.h"

class IRRemote {
	private:		
		

	public:
		IRRemote(int pin) ;
		
		void begin() ;
		int read() ;
		
		// user can't  use
		uint32_t ccount = 0;
		
		gpio_num_t pin;
		
		xQueueHandle gpio_evt_queue = NULL;
		xQueueHandle ir_data_queue = NULL;
		
};

#endif
