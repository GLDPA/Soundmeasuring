import os 
import glob 
import time

os.system('modprobe w1-gpio') 
os.system('modprobe w1-therm')
 
base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0] 
device_file = device_folder + '/w1_slave'
 
def read_sound_raw():
    f = open(device_file, 'r') 
    lines = f.readlines()
    f.close()
    return lines
 
def read_sound():
    lines = read_sound_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_sound_raw() 
    equals_pos = lines[1].find('t=') 
    if equals_pos != -1:
        sounds_string = lines[1][equals_pos+2:] 
        sound = float(sounds_string)
        return sound
 
while True: 
    print(read_sound()) 
    time.sleep(.5)