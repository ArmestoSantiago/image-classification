import { model } from './index.js';
import { imageProcess } from './imageProcess.js';

const classes = ['Gato', 'Perro'];

export async function predict(imageElement) {
  if (!model) {
    return null;
  }

  const tensor = imageProcess(imageElement);
  const predictions = await model.predict(tensor);

  const classIndex = predictions.argMax(1).dataSync()[0];

  return classes[classIndex];
}
