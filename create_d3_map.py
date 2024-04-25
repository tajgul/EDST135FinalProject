#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
'''
import csv
import os 
import codecs
from time import time
from collections import Counter

# MAP DATA
csv_file="sample.csv"

# MAP INFO
map_title="Annual number of examinees by province"
map_desc="Amount of examinees broken down by province. Data unaviable for provinces which = 0"
map_credits="by Taj Gulati - 2024"
map_units="Number of Examinees"
map_filename="example.csv"

# HTML OUTPUT
out_dir=os.getcwd()
out_filename=out_dir+"/example.html"

# DATA
province_count=[]
with open(csv_file, 'r') as csvfile:
    csv_data=csv.reader(csvfile)
    csv_data.__next__() # skip headers
    province_count= [row for row in csv_data]

print(province_count)

# create HTML file from template
html_template="map_template.html"

# parse var to js
jsvar = "var data2=[" + ','.join(['["' + p[0] + '",' + str(p[1]) + ']' for p in province_count]) + "];"
# jsvar="var data=["+','.join([ '["'+p[0]+'",'+str(p[1])+']' for p in province_count])+"];"
jsvar+="var title='"+map_title+"';"
jsvar+="var desc='"+map_desc+"';"
jsvar+="var credits='"+map_credits+"';"
jsvar+="var units='"+map_units+"';"
print(jsvar)

# parse html
html=open(html_template, "r").read().replace("TO_BE_CHANGED", jsvar)
print(html)

# save htmlfile
with codecs.open(out_filename, "w", "utf-8") as outfile:
    outfile.write(html)