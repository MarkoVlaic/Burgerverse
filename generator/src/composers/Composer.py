from PIL import Image

from Node import Node

class Composer:
  def __init__(self, categories, outputPath, imageSize):
    self.categories = categories
    self.outputPath = outputPath
    self.trieRoot = Node(Image.new(mode='RGBA', size=imageSize), categories[0].number_of_images())
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

  def get_image(self, combination):
    curNode = self.trieRoot
    combinationIndex = 0

    nextNode = curNode.children[combination[combinationIndex]]
    while nextNode is not None:
      combinationIndex += 1
      curNode = nextNode
      nextNode = curNode.children[combination[combinationIndex]]

      if combinationIndex == len(combination):
        return curNode.image

    while combinationIndex < len(combination):
      nextImage = Image.alpha_composite(curNode.image, self.categories[combinationIndex].get_image(combination[combinationIndex]))
      nextNode = Node(nextImage, self.categories[combinationIndex].number_of_images())

      curNode.children[combination[combinationIndex]] = nextNode
      curNode = nextNode

      combinationIndex += 1

    return curNode.image

  def compose2(self, combination):
    generatedImage = None
    for i in range(len(combination)):
      curImage = self.categories[i].get_image(combination[i])

      if generatedImage is None:
        generatedImage = curImage
        continue
      generatedImage = Image.alpha_composite(generatedImage, curImage)

    return generatedImage