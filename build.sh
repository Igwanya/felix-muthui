#!/bin/bash

# Copyright 2024
# Author: Felix Muthui Igwanya
# emailAddress: felixmuthui32@gmail.com

# output each command run in logs.txt
#
# exec 3>&1 4>&2
# trap 'exec 2>&4 1>&3' 0 1 2 3
# exec 1>log.out 2>&1

cowsay -p "Executing the build process"
jekyll doctor
echo "[*] swicthing to public directory"
cd public
npm run build
cd ..
echo " " && fortune echo " "
# npx tailwindcss -i /home/felixmuthui32/projects/felix-muthui/public/assets/tailwindcss/input.css -o /home/felixmuthui32/projects/felix-muthui/public/assets/css/output.css

bundle exec jekyll serve --livereload
