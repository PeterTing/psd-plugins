interface ISettings {
  node: any;
  image: any;
  psImageWidth: number;
  psImageHeight: number;
}

const searchForImage = async (node: any, psImageWidth: number, psImageHeight: number): Promise<string | undefined> => {
  if (node && node.hasChildren()) {
    searchForImage(node.childeren, psImageWidth, psImageHeight);
  } else if (node) {
    return getBase64string({
      node,
      image: node.layer.image.toPng(),
      psImageWidth,
	  psImageHeight
	});
  }
};

const getBase64string = async (settings: ISettings): Promise<string | undefined> => {
  const canvas = document.createElement('canvas');
  canvas.id = settings.node.get('name');
  canvas.width = settings.psImageWidth;
  canvas.height = settings.psImageHeight;
  const ctx = canvas.getContext('2d');
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
		if(ctx !== null) {
			ctx.drawImage(
				settings.image,
				settings.node.get('left'),
				settings.node.get('top'),
				settings.node.get('width'),
				settings.node.get('height'),
			);
			return resolve(canvas.toDataURL().replace('data:image/png;base64,', ''));
		}
		return reject('Cannot get canvas, internal error.');
    };
    img.onerror = () => reject('img load error');
    img.src = settings.image.getAttribute('src');
  });
};

const toPng = async (node: any, psImageWidth: number, psImageHeight: number): Promise<string | undefined> => {
  return searchForImage(node, psImageWidth, psImageHeight);
};

export default toPng;
