import time
import os

from composers.CachedComposer import CachedComposer

from executors.ConcurrentOutputExecutor import ConcurrentOutputExecutor
from executors.NaiveOutputExecutor import NaiveOutputExecutor

from Runner import Runner

def main():
  # assetPath = '../assets'
  # outputPath = '../output'
  # configPath = '../config.json'

  # runner = Runner(assetPath, outputPath, configPath, CachedComposer, ConcurrentOutputExecutor)
  
  assetPath = '../testIn'
  outputPath = '../testOut'
  configPath = '../testConfig.json'

  runner = Runner(assetPath, outputPath, configPath, CachedComposer, ConcurrentOutputExecutor)
  runner.run()


if __name__ == '__main__':
  print('PID: ', os.getpid())
  startTime = time.time()
  main()
  print('Finished after: ', time.time() - startTime)
  # test()
