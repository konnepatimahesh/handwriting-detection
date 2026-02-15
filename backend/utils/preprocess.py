import cv2
import numpy as np

def preprocess_image(image_file):
    file_bytes = np.frombuffer(image_file.read(), np.uint8)
    image = cv2.imdecode(file_bytes, cv2.IMREAD_GRAYSCALE)

    image = cv2.resize(image, (128, 128))
    image = image / 255.0
    image = image.reshape(1, 128, 128, 1)

    return image
