start = "*"
for i in range(5):
    print(start * (i + 1))

print("---------------------------------------")


for i in range(5,):
    print(start * (5 -i))



for i in range(5):
    print(start * 5)
print("---------------------------------------")

for i in range(5):
    for j in range(5):
        if  i == 0 or j == 0 or i == 4 or j == 4 :
            print(start, end="")
        else:
            print(" ", end="")
    print()


print("---------------------------------------")

for i in range(5):
    for j in range(5):
        if  i == 0 or j == 0 or i == 4 or j == 4 or i == j:
            print(start, end=" ")
        else:
            print(" ", end=" ")
    print()


print("---------------------------------------")

for i in range(5):
    for j in range(5):
        if  i == 0 or j == 0 or i == 4 or j == 4 or i == j or i + j == 4 :
            print(start, end=" ")
        else:
            print(" ", end=" ")
    print()





print("  *  ")
print(" * * ")
print("*****")
for i in range(5):
    pass




