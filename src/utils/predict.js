import { imageProcess } from './imageProcess.js';
import * as tf from '@tensorflow/tfjs';


const classes = ['Gato', 'Perro'];

let model;

export async function loadModel() {
  model = await tf.loadLayersModel('model/model.json');
  console.log('Modelo cargado');
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
