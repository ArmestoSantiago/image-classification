declare module 'sos-image-classification' {
  export function predict(imageElement: HTMLImageElement): Promise<string>;
  export function loadModel(): Promise<any>;
  export const se: string;
}