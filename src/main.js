import * as tf from '@tensorflow/tfjs';

export let model = null;

async function loadModel() {
  model = await tf.loadLayersModel('./model/model.json');
  console.log('Modelo cargado automáticamente');
}

loadModel();

export { predict } from './predict.js';
