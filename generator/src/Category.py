from PIL import Image

class Category:
  def __init__(self, path):
    self.path = path
    self.images = []

    for img in path.iterdir():
      self.images.append(Image.open(img))
    #   print(img.parts[-1], end=' ')
    # print()

  def number_of_images(self):
    return len(self.images)

  def get_image(self, index):
    if index >= len(self.images):
      raise IndexError()

    return self.images[index]