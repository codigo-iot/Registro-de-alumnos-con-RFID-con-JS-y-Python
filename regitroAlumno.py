#!/usr/bin/env python
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import sys

reader = SimpleMFRC522()

try:
    id,text = reader.read()
    nombre = sys.stdin.readline()
    reader.write(nombre)
    print("Nombre almacenado en tarjeta con ID: "+id)
    sys.stdout.flush()
finally:
    GPIO.cleanup()
