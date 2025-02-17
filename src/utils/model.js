import * as tf from '@tensorflow/tfjs';

let model;

export async function loadModel() {
  model = await tf.loadLayersModel('./model/model.json');
  console.log('Modelo cargado');
}

export function getModel() {
  if (!model) {
    console.error('El modelo aún no ha sido cargado.');
    return null;
  }
  return model;
}