# from flask import Flask, render_template, request
# from keras.models import load_model
# from keras_preprocessing import image
# import info
# import numpy as np

# app = Flask(__name__)

# model = load_model('src/models/model4.h5')
# class_names = info.class_names
# features = info.features


# @app.route('/', methods=['GET'])
# def hello_world():
#     return render_template('index.html')


# @app.route('/predict', methods=['POST'])
# def predict():
#     imagefile = request.files['imagefile']
#     image_path = './images/' + imagefile.filename
#     imagefile.save(image_path)
#     img = image.load_img(image_path, target_size=(224, 224, 3))
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     images = np.vstack([x])
#     pred = model.predict(images, batch_size=32)
#     return render_template('index.html', type=class_names[np.argmax(pred)],
#                            prediction=features[class_names[np.argmax(pred)]])


# if __name__ == '__main__':
#     app.run(port=3002, debug=True)


# # from flask import Flask


# # app = Flask(__name__)


# # @app.route("/api",methods=['GET'])
# # def index():
# #     return{
# #         'tutorial':"FR App"
# #     }

# # if __name__ == "__main__":
# #     app.run();


import os
from flask import Flask, request, jsonify
from flask_cors import CORS 
from tensorflow import keras
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)
CORS(app) 


# Load the trained model
model = keras.models.load_model('model.h5')

# Define the class labels
class_labels = ['apple', 'banana', 'orange'] 

app.config['MAX_CONTENT_LENGTH'] = 32 * 1024 * 1024

@app.route('/classify', methods=['POST','GET']) 
def classify_fruit():
    # Check if an image file was sent in the request
    file = request.files

    # return jsonify({'Data': file})
    if 'image' not in request.files:
        return jsonify({'error': request.files})


    # Read the image file from the request
    img = request.files['image']
    img_path = os.path.join('uploads', img.filename)

    # Save the image file to a local directory
    img.save(img_path)

    # Preprocess the image
    img = image.load_img(img_path, target_size=(224,224))  # Adjust target size if needed
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0

    # Make predictions
    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions[0])
    predicted_class = class_labels[predicted_class_index]

    # Delete the saved image file
    os.remove(img_path)

    # Return the predicted fruit class name
    return jsonify({'fruit_name': predicted_class})

if __name__ == '__main__':
    app.run(debug=True)

