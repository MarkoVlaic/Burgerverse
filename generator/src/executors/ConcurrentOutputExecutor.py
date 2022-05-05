from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

class ConcurrentOutputExecutor:
  def __init__(self):
    print('init')
    self.executor = ThreadPoolExecutor()
  
  def __enter__(self):
    print('enter')
    self.futures = []
    return self

  def __exit__(self, type, value, traceback):
    print('exit')
    wait(self.futures, return_when=ALL_COMPLETED)

  @staticmethod
  def save_image(image, path):
    try:
      image.save(path)
      return True
    except:
      return False

  def submit(self, image, savePath):
    saveFuture = self.executor.submit(ConcurrentOutputExecutor.save_image, image, savePath)
    self.futures.append(saveFuture)

  def __str__(self):
    return 'ConcurrentOutputExecutor'


  
  