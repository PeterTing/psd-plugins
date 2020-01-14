# Some PSD.js plugins

## What does these plugins do ?
1. Allow you to export combined png(s) from chosen group.
2. Allow you to export png with original size. (Transparent part will not be trimmed.)

## Example
```javascript
import psdPlugins from 'psd-plugins'

// Get original size png.
psdPlugins.toPng(psdNode.layer.image.toBase64()).then((imgSrc) => {
	console.log(imgSrc); // data:image/png;base64,Iekdkad.....
});
```