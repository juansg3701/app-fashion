import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-predicts-component',
  templateUrl: './predicts.component.html',
  styleUrls: ['./predicts.component.scss'],
  providers: [MessageService]
})
export class PredictsComponent implements OnInit{
  uploadedFiles: any[] = [];
  model!: any;
  final = 'inicio';

  //try 2
  linearModel!: tf.Sequential;
  prediction: any;

  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.run();
    this.traininModel();
  }

  async traininModel(){
    //Define the model fort linear regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units:1, inputShape: [1]}))

    //Prepare the model for training: Specify the loss and teh optimizer
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    //Training data, completely random stuff
    const xs = tf.tensor1d([3.2, 4.4, 5.5, 6.71, 7.168, 9.779, 6.182, 7.59, 2.16]);
    const ys = tf.tensor1d([1.6, 2.7, 3.19, 1.684, 2.53, 3.366, 2.596, 2.53, 1.22]);

    //Train
    await this.linearModel.fit(xs,ys);
    console.log("model trained!");

  }

  linearPrediction(event: Event){
    const val: number = parseInt((event.target as HTMLInputElement).value);
    console.log(val)
    const output = this.linearModel.predict(tf.tensor2d([val], [1,1])) as any;
    this.prediction = Array.from(output.dataSync())[0]
  }

  async run() {
    console.log("run...");
    // Create a simple model.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  
    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  
    // Generate some synthetic data for training. (y = 2x - 1)
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
  
    // Train the model using the data.
    await model.fit(xs, ys, {epochs: 250});
  
    // Use the model to do inference on a data point the model hasn't seen.
    // Should print approximately 39.
    this.final = "final";
    //console.log(this.model.predict(tf.tensor2d([20], [1, 1])).dataSync());
    //console.log(this.model);    
  }


  onUpload(event: any) {
    for(const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}
