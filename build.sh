#!/bin/bash

echo "Generating" | lolcat -a -d 1 -s 30 &&
rm out/utility-classes.css && npx goron -out ./out/utility-classes.css &&


echo "======= Done 🎉 =========" | lolcat -a -d 1 -s 30


