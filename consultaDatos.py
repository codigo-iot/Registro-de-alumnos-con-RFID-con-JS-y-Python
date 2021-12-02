#!/usr/bin/env python
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import sys

reader = SimpleMFRC522()

try:
    id,text = reader.read()
    print("La tarjeta con id: "+id+" esta registrada con el nombre: "+text)
    sys.stdout.flush()
finally:
    GPIO.cleanup()
