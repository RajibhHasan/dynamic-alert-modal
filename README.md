

# dynamic alert modal

Call function open modal.press ok button return true.press cencel button return false.

## Installation



```bash
npm install dynamic-alert-modal
```

## Usage

```javascript
import React,{useState,useRef,useEffect} from 'react';

import {Modal} from "dynamic-alert-modal"

const Display = () => {
 	const {createModal}=Modal();//distructur createModal.
 
  const xxx=()=>{
  //call createModal function pass paramiter
  //message,
  //okButton true or false
  //cencelButton true or false
 //type Example warning,success,danger,question
                            		
 let x = createModal( "message", true, true,"question",(result) => {
  console.log(result);
});// x return true or false
		
	}
	
	
	return(<>
	<div>
<button onClick={xxx} >Open modal</button>
</div>
	</>)
}

export default Display;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)