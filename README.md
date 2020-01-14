# Some PSD.js plugins

## What does these plugins do ?
1. Allow you to export combined png(s) from chosen group.
2. Allow you to export png with original size. (Transparent part will not be trimmed.)

## Example
```javascript
import ToPng from '@peterting/psd-plugin';

// Get original size png.
ToPng(psdNode).then((imgSrc) => {
	console.log(imgSrc); // data:image/png;base64,Iekdkad.....
});
```