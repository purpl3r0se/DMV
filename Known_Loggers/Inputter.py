import os
os.system("cls")
with open('bby-memberlist.txt', 'w') as f:
    f.write('')
    
while(True):    
    with open("bby-memberlist.txt", "a") as f:
        f.write(input("ID: ") + "\n")
        os.system("cls")
