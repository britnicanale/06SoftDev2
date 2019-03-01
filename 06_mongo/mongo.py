#Britni Canale & Ahnaf Hasan -- GoodQuestion
#SoftDev2 pd06
#K06 -- Yummy Mongo Py
#2019-02-28

import pymongo, math

SERVER_ADDR = "142.93.126.17"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def borough(boro):
    food = collection.find({'borough': boro })
    for place in food:
        print(place)

def zipcode(zip):
    food = collection.find({'address.zipcode': zip})
    for place in food:
        print(place)

def zipgoodgrade(zip, grade):
    food = collection.find({'address.zipcode': zip, "grade": grade})
    for place in food:
        print(place)

def zipbadgrade(zip, grade):
    food = collection.find({'address.zipcode': zip, "grade": {"$lt":grade}})
    for place in food:
        print(place)


def distanceFrom(lat, long, dist):
    food = collection.find()
    for place in food:
        #print(place["address"]["coord"])
        if place["address"]["coord"] != []:
            distanceB = distance(place["address"]["coord"][1], place["address"]["coord"][0], lat, long)
            if distanceB < dist:
                print(place["name"])
                print(distanceB)


#Haservine formula from https://www.movable-type.co.uk/scripts/latlong.html
def distance(latOne, longOne, latTwo, longTwo):
    a = math.sin(math.radians(latTwo - latOne)/2)**2 + math.cos(latOne) * math.cos(latTwo)* math.sin(math.radians(longTwo - longOne)/2)**2
    #print("A")
    #print(a)
    if( a < 0):
        c = 2 * math.atan(math.sqrt(1-a))
    elif (a > 1):
        c = 2 * math.atan(math.sqrt(a))
    else:
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    #print("C")
    #print(c)
    radius = 3958.761
    distance = radius * c
    #print("D")
    #print(distance)
    return distance


distance(0, 0, 25, 25)
distanceFrom(40.7178, -74.0139, 0.5)
#zipcode("10282")
