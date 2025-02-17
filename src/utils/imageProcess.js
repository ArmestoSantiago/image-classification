import * as tf from '@tensorflow/tfjs';

export function imageProcess(imageElement) {
  return tf.tidy(() => {
    let tensor = tf.browser.fromPixels(imageElement)
      .resizeNearestNeighbor([224, 224])
      .toFloat();

    const offset = tf.scalar(127.5);
    const normalized = tensor.sub(offset).div(offset);

    return normalized.expandDims(0);
  });
}