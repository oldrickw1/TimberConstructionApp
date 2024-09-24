import requests
import os
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # To handle relative URLs
from PIL import Image
from io import BytesIO
import time  # For introducing delay between requests

def search_and_download_images(filename, min_width=500, min_height=500):
    with open(filename, 'r') as f:
        names = f.read().splitlines()
        values = [line.replace('_', ' ') + ' clt project'  for line in names]

        # values = f.read().splitlines()

    for value, name in zip(values, names):
        # if ( < 3):  # Limit the number of images for testing purposes
            # continue
        search_query = f"https://www.google.com/search?q={value}&tbm=isch"

        # Introduce a delay to avoid being blocked (1 to 3 seconds is a good range)
        time.sleep(2)  # Adjust this value based on your needs

        # Send a request to Google Image Search
        response = requests.get(search_query, headers={'User-Agent': 'Mozilla/5.0'})
        if response.status_code == 200:
            # Parse the HTML content using BeautifulSoup
            soup = BeautifulSoup(response.text, 'lxml')

            # Find all image tags
            img_tags = soup.find_all('img')

            # Loop over the image tags to find a suitable image
            for img_tag in img_tags:
                img_url = img_tag.get('src')
                
                # Make sure img_url is not None and check if it's a .jpg
                if img_url  and 'logo' not in img_url:
                    # If the image URL is relative, convert it to an absolute URL
                    img_url = urljoin(search_query, img_url)

                    # Check if the image meets the size requirements
                    img_response = requests.get(img_url, stream=True)
                    if img_response.status_code == 200:
                        # Load the image in memory and check its dimensions
                        img_data = BytesIO(img_response.content)
                        img = Image.open(img_data)

                        # Check if the image meets the minimum size criteria
                        if img.width >= min_width and img.height >= min_height:
                            # Create a directory for the value if it doesn't exist

                            # Save the image
                            image_path = f"{name}.jpg"
                            try: 
                                with open(image_path, 'wb') as img_file:
                                    img_file.write(img_response.content)
                                print(f"Image downloaded for {value} - Size: {img.width}x{img.height}")
                                break  # Exit the loop after the first valid image
                            except:
                                print(f"could not save file for {value}, skip to next item.")
                                break
                        else:
                            print(f"Image for {value} is too small: {img.width}x{img.height}")
                    else:
                        print(f"Failed to download image for {value}")
                else:
                    print(f"Skipping invalid or irrelevant image for {value}")
        else:
            print(f"Error fetching search results for {value}")

# Replace 'names.txt' with the actual path to your text file
# Example: minimum width and height of 500 pixels
search_and_download_images('/home/oldrick/TCA/data/rough/names.txt', min_width=160, min_height=100)
