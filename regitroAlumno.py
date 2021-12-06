#!/usr/bin/env python
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import sys

reader = SimpleMFRC522()

try:
    nombre = sys.stdin.readline()
    reader.write(nombre)
    sys.stdout.flush()
finally:
    GPIO.cleanup()
