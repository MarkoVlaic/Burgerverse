from pathlib import Path

from Category import Category
from Config import Config
from CombinationFilter import CombinationFilter

class Runner:
  def __init__(self, assetPath, outputPath, configPath, composerFactory, outputExecutorFactory, combinationFilter=None):
        self.assetPath = Path(assetPath)
        self.outputPath = Path(outputPath)
        self.configPath = Path(configPath)

        if not self.assetPath.exists():
          raise FileNotFoundError(f'{assetPath} is not a valid path')

        if not self.outputPath.exists():
          self.outputPath.mkdir()

        if not self.outputPath.is_dir():
          raise IsADirectoryError(f'{outputPath} is not a directory')

        self.config = Config(configPath)

        self.categories = [Category(self.assetPath / layer) for layer in self.config.layers]
        self.imagesPerCategory = [category.number_of_images() for category in self.categories]

        imageSize = self.categories[0].get_image(0).size
        self.composer = composerFactory(self.categories, self.outputPath, imageSize)
        self.outputExecutorFactory = outputExecutorFactory

        self.combinationFilter = combinationFilter
        if combinationFilter is None:
          # Create a uniform filter that generates all of the combinations
          maxCombinations = 1

          for num in self.imagesPerCategory:
            maxCombinations *= num

          # since we are generating a maximum number of combinations without repetition
          # their distribution will be uniform regardless of our input distributions
          # so we just set them to the right size with their sum equal to 1
          distributions = [[1] + [0]*(num-1) for num in self.imagesPerCategory] 
          self.combinationFilter = CombinationFilter(maxCombinations, distributions, repeat=False)

  def generate_combinations(self, imagesPerCategory):
    if len(imagesPerCategory) == 0:
      yield []
      return
    
    for i in range(imagesPerCategory[0]):
      for subcombination in self.generate_combinations(imagesPerCategory[1:]):
        yield [i] + subcombination

  def run(self):
    with self.outputExecutorFactory() as ioExecutor:
      for combination in self.generate_combinations(self.imagesPerCategory):
        image = self.composer.compose(combination) 
        savePath = self.outputPath / (str(combination) + '.png')
        ioExecutor.submit(image, savePath)