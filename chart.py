import json

import matplotlib.pyplot as plt
import numpy as np

plt.rcdefaults()
fig, ax = plt.subplots()
f = open('jsonDiscord/gruppo 8.json', 'r', encoding='utf-8')
data = json.loads(f.read())
messages = list(map(lambda m: m['content'], data))
words = (' '.join(messages)).split(' ')
occo = {}

for w in words:
    if( w in occo ):
        occo[w] += 1
    else:
        occo[w] = 1
print(list(occo.keys()))
final = []
for i in range(len(occo)):
    if(list(occo.keys())[i]==''):
        continue
    final.append(type('obj', (object,), {'word': list(occo.keys())[i], 'amount': list(occo.values())[i]}))

final = list(reversed(sorted(final, key=lambda x: x.amount)))[0:30]

y_pos = np.arange(len(final))

val = []
name = []

for v in final:
    val.append(v.amount)
    name.append(v.word)


ax.barh(y_pos, val, align='center')
ax.set_yticks(y_pos)
ax.set_yticklabels(name)
ax.invert_yaxis()
ax.set_xlabel('occorrenze')
ax.set_title('gruppo 8')

plt.show()
