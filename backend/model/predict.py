import random
from utils.preprocess import preprocess_image

# Placeholder for ML model logic
def predict_handwriting(image_file):
    image = preprocess_image(image_file)

    # MOCK prediction (replace with real ML model)
    names = ["person1", "person2", "person3"]
    name = random.choice(names)
    accuracy = round(random.uniform(0.85, 0.98), 2)

    return name, accuracy
