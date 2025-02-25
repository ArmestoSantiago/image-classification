import { imageProcess } from './imageProcess.js';
import * as tf from '@tensorflow/tfjs';


const classes = ['Gato', 'Perro'];

let model;

export async function loadModel() {
  console.log(model);
  model = await tf.loadLayersModel('src/utils/model.json');
  return model;
}


export async function predict(imageElement) {
  await loadModel();
  if (!model) {
    return null;
  }

  const tensor = imageProcess(imageElement);
  const predictions = await model.predict(tensor);

  const classIndex = predictions.argMax(1).dataSync()[0];

  return classes[classIndex];
}
