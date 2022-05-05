import numpy as np

class CombinationFilter:
  '''
    distributions is a list where distributions[i] contains the probability distribution (as a list of floats) for the ith category
  '''
  def __init__(self, numCombinations, distributions, repeat=True) -> None:
      self.numCombinations = numCombinations
      self.distributions = distributions

      imagesPerCategory = [len(d) for d in distributions]
      self.combinations = list(self.generate_combinations(imagesPerCategory))
      self.vector_distribution = np.array([self.probability(combination) for combination in self.combinations]) # an array containing the distribution of an n-dimensional random vector representing our combinations

      maxCombinations = 1

      for l in imagesPerCategory:
        maxCombinations *= l

      if maxCombinations < numCombinations and not repeat:
        raise Exception(f'{numCombinations} combinations cannot be created from a pool of {maxCombinations} withouth repetition')

      self.repeat = repeat

  def results(self):
    indices = np.array([i for i in range(len(self.combinations))])
    generated = set()

    for _ in range(self.numCombinations):
      index = np.random.choice(indices, p=self.vector_distribution)

      while not self.repeat and index in generated:
        index = np.random.choice(indices, p=self.vector_distribution)

      generated.add(index)
      yield self.combinations[index]

    return
  '''
    calculate the probability of a given combination, the components are treated as independent 
  '''
  def probability(self, combination):
    p = 1

    for (i, v) in enumerate(combination):
      p *= self.distributions[i][v]
    
    return p

  def generate_combinations(self, imagesPerCategory):
    if len(imagesPerCategory) == 0:
      yield []
      return
    
    for i in range(imagesPerCategory[0]):
      for subcombination in self.generate_combinations(imagesPerCategory[1:]):
        yield [i] + subcombination


if __name__ == '__main__':
  numSamples = 36
  filter = CombinationFilter(numSamples, [[.1, .2, .7], [.25, .25, .25, .25], [0.01, .1, .89]], repeat=False)
  relativeFrequencies = [[0] * len(d) for d in filter.distributions]

  for result in filter.results():
    print(result)
    for (i, v) in enumerate(result):
      relativeFrequencies[i][v] += 1

  relativeFrequencies = [ [v / numSamples for v in row] for row in relativeFrequencies]
  print(relativeFrequencies)