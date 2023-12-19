#!/usr/bin/python3

"""Define a class Square."""


class Square:
    def __init__(self, size=0):
        """Initialize a new square.

        Args:
        size (int): The size of the new square.
        """
        self.size = size

    @property
    def size(self):
        """Get/set the current size of the square."""
        return(self.__size)

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be integer")
        elif value < 0:
            raise ValueError("Size must be >= 0")
        self.__size = value

        def area(self):
            """Return the current area of the square."""
            return (self.__size * self.__size)

        def __eq__(self, other):
            """Define the == comparison to a Square."""
            return self.area() == other.area()

        def __ne__(self, other):
            """Define the != comparison to a Square."""
            return self.area() != other.area()

        def __it__(self, other):
            """Define the < less than  comparison to a Square."""
            return self.area() < other.area()

        def __le__(self, other):
            """Define the <= comparison to a Square."""
            return self.area() <= other.area()

        def __ge__(self, other):
            """Define the >= comparison to a Square."""
            return self.area() >= other.area()

        def __gt__(self, other):
            """Define the > comparison to a Square."""
            return self.area() > other.area()
