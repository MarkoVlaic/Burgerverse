from PIL import Image

class CachedComposer:
  def __init__(self, categories, outputPath, imageSize):
    self.categories = categories
    self.outputPath = outputPath
    self.lastCombination = None
    self.intermediateCompositions = None

  def compose(self, combination):
      startIndex = 0

      if self.lastCombination is not None:
        for i in range(len(combination)):
          if combination[i] != self.lastCombination[i]:
            startIndex = i
            break
      
      imageSize = self.categories[0].get_image(0).size
      generatedImage = Image.new(mode='RGBA', size=imageSize)

      if self.intermediateCompositions:
        generatedImage = self.intermediateCompositions[startIndex - 1] if startIndex > 0 else generatedImage
      else:
        self.intermediateCompositions = [None] * len(combination)

      for i in range(startIndex, len(combination)):
        curImage = self.categories[i].get_image(combination[i])

        generatedImage = Image.alpha_composite(generatedImage, curImage)
        self.intermediateCompositions[i] = generatedImage
        self.lastCombination = combination

      return generatedImage

  def __str__(self):
    return 'CachedComposer'