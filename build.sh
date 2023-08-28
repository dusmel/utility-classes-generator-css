#!/bin/bash

echo "Generating" | lolcat -a -d 1 -s 30 &&
rm utility-classes.css && npx goron -out ./utility-classes.css &&


echo "======= Done 🎉 =========" | lolcat -a -d 1 -s 30


