# Some PSD.js plugins

## What does these plugins do ?
1. Allow exporting png with original size. (Transparent part will not be trimmed.)

Todo: Allow export combined png(s) from chosen group.


## Installation
`npm i @peterting/psd-plugin`

## Example
```javascript
import PsdPlugin from '@peterting/psd-plugin';

// Get original size png.
PsdPlugin.toPng(psdNode, psOriginalWidth, psOriginalWidth).then((imgSrc) => {
	console.log(imgSrc); // data:image/png;base64,Iekdkad.....
});
```