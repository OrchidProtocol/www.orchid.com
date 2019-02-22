#!/usr/bin/env zsh

setopt extendedglob

for f in $1/*/(*~*@*).png; do mv $f $(dirname $f)/1x.png; done
for f in $1/*/*@2x.png; do mv $f $(dirname $f)/2x.png; done
for f in $1/*/*@3x.png; do mv $f $(dirname $f)/3x.png; done
