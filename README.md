S.O.S Patas Image Classification
This project is designed to classify images from the website [S.O.S Patas](https://sospatas.com) in order to prevent unwanted photos. It is a simple-to-use Machine Learning model trained to distinguish between Dogs and Cats. The model runs directly in the browser, allowing real-time predictions without the need for a backend server.

Usage
[NPM](https://www.npmjs.com/package/sos-image-classification?activeTab=readme)

```npm i sos-image-classification``` 

```
import { predict } from "sos-image-classification"

const img = document.getElementById("myImage")

predict(imageElement).then(prediction => {
    console.log('La predicción es:', prediction);
});
```

## Installation:
1. Clone the project and install the dependencies.
```
git clone https://github.com/ArmestoSantiago/image-classification.git
cd image-classification
npm i
```
## Custom Predictions
While the project is designed to distinguish images of dogs and cats from other things, you can train a model (for example, using [Teachable Machine](https://teachablemachine.withgoogle.com/train)), replace the ```model``` and ```weights``` files with those of your custom model, and finally change the ```classes``` variable to match your specific needs.

## Contributions
If you wish to contribute to this project, follow these steps:

1. Create a fork of the repository.

2. Create a branch for your contribution (```git checkout -b feature/new-feature```).

3. Make your changes and create a commit (```git commit -m 'Add new feature'```).

4. Push to the branch (```git push origin feature/new-feature```).

5. Open a Pull Request.


