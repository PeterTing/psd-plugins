# Some PSD.js plugins

## What does these plugins do ?
1. Allow you to export combined png(s) from chosen group.
2. Allow you to export png with original size. (Transparent part will not be trimmed.)

## Installation
`npm i @peterting/psd-plugin`

## Example
```javascript
import ToPng from '@peterting/psd-plugin';

// Get original size png.
ToPng(psdNode, psOriginalWidth, psOriginalWidth).then((imgSrc) => {
	console.log(imgSrc); // data:image/png;base64,Iekdkad.....
});
```