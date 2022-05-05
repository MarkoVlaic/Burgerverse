import json

class Config:
  def __init__(self, path) -> None:
      with open(path) as configFile:
        configStr = configFile.read()
        configJson = json.loads(configStr)

        self.layers = configJson['layers']