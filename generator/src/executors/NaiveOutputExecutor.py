class NaiveOutputExecutor:
  def __init__(self):
    print('init')

  def __enter__(self):
    print('enter')
    return self

  def submit(self, image, savePath):
    try:
      image.save(path)
      return True
    except:
      return False

  def __exit__(self, type, value, traceback):
    print('exit')