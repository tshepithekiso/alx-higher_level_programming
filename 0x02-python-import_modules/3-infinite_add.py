#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    result = 0
    num = len(sys.argv)
    for i in range(1, num):
        result += int(sys.argv[i])
        print(result)
