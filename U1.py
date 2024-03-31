class Myclass(object) :
    def __init__(self,name,age):
        self.age = age
        self.name = name
    x = 4
    def __str__(self):
        return f'{self.age}'

o = Myclass("AADI",18)
#print(object)

class CS221(object):
    def __init__(self,N):
        self.N = N

p = CS221(22)
print(p)