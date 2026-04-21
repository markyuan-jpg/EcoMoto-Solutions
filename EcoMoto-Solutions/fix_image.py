import cv2
import numpy as np
import os

base = r'C:\Users\marky\Desktop\website\EcoMoto-Solutions\public\images'

# Urban
img1 = cv2.imread(os.path.join(base, 'Urban Logistics.png'))
h, w = img1.shape[:2]
mask = np.zeros(img1.shape[:2], dtype=np.uint8)
# Just watermark area
cv2.rectangle(mask, (int(w*0.85), int(h*0.85)), (w-20, h-20), 255, -1)
result1 = cv2.inpaint(img1, mask, 5, cv2.INPAINT_NS)
result1 = cv2.resize(result1, (1000, int(h*1000/w)), interpolation=cv2.INTER_AREA)
cv2.imwrite(os.path.join(base, 'urban-logistics.webp'), result1, [cv2.IMWRITE_WEBP_QUALITY, 75])
print('Done')

# Passenger
img2 = cv2.imread(os.path.join(base, 'Passenger Transport.png'))
h, w = img2.shape[:2]
mask = np.zeros(img2.shape[:2], dtype=np.uint8)
cv2.rectangle(mask, (int(w*0.85), int(h*0.85)), (w-20, h-20), 255, -1)
result2 = cv2.inpaint(img2, mask, 5, cv2.INPAINT_NS)
result2 = cv2.resize(result2, (1000, int(h*1000/w)), interpolation=cv2.INTER_AREA)
cv2.imwrite(os.path.join(base, 'passenger-transport.webp'), result2, [cv2.IMWRITE_WEBP_QUALITY, 75])
print('Passenger done')