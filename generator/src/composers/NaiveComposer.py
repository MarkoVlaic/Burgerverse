from PIL import Image

class NaiveComposer:
  def __init__(self, categories, outputPath):
    self.categories = categories
    self.outputPath = outputPath

  def compose(self, combination):
    generatedImage = None
    for i in range(len(combination)):
      curImage = self.categories[i].get_image(combination[i])

      if generatedImage is None:
        generatedImage = curImage
        continue
      generatedImage = Image.alpha_composite(generatedImage, curImage)

    return generatedImage

  def __str__(self):
    return 'NaiveComposer'