from executors.NaiveOutputExecutor import NaiveOutputExecutor

def main():
  with NaiveOutputExecutor() as executor:
    print('body')

if __name__ == '__main__':
  main()
