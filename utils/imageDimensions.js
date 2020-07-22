import axios from 'axios';
import sizeOf from 'buffer-image-size';

async function getImageDimensions(url) {
  return axios
    .get(url, {
      responseType: 'arraybuffer',
    })
    .then((response) => {
      const buffer = Buffer.from(response.data, 'binary');

      const dimensions = sizeOf(buffer);
      return {
        dimensions: dimensions || { width: 0, height: 0 },
        url,
      };
    });
}

export default getImageDimensions;
