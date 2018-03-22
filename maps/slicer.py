''' docstring
@input - geotiff image to be slice
@output - sliced images with naming convention xcord_ycord.tif
'''

from osgeo import gdal, osr

driver = gdal.GetDriverByName('GTiff')
# should come from input parameter
filename = "maska_pludi.tif"
dataset = gdal.Open(filename)
band = dataset.GetRasterBand(1)

cols = dataset.RasterXSize
rows = dataset.RasterYSize

print cols, rows

transform = dataset.GetGeoTransform()

print(transform)
# need to set from input parameters or yaml file
# p1 = (355217.199739, 4473171.2377)
# p2 = (355911.113396, 4472582.9196)

p1 = (355217.199739, 4473171.2377)
p2 = (355911.113396, 4472582.9196)

xOrigin = transform[0]
yOrigin = transform[3]
pixelWidth = transform[1]
pixelHeight = -transform[5]

print xOrigin, yOrigin

i1 = int((p1[0] - xOrigin) / pixelWidth)
j1 = int((yOrigin - p1[1]) / pixelHeight)
i2 = int((p2[0] - xOrigin) / pixelWidth)
j2 = int((yOrigin - p2[1]) / pixelHeight)

print i1, j1
print i2, j2

new_cols = i2 - i1 + 1
new_rows = j2 - j1 + 1

data = band.ReadAsArray(i1, j1, new_cols, new_rows)

print data

new_x = xOrigin + i1 * pixelWidth
new_y = yOrigin - j1 * pixelHeight

print new_x, new_y

new_transform = (new_x, transform[1], transform[2], new_y, transform[4], transform[5])

# Create gtif file
driver = gdal.GetDriverByName("GTiff")

output_file = "cut_raster" + ".tif"

dst_ds = driver.Create(output_file,
                       new_cols,
                       new_rows,
                       1,
                       gdal.GDT_Float32)

# writting output raster
dst_ds.GetRasterBand(1).WriteArray(data)

# setting extension of output raster
# top left x, w-e pixel resolution, rotation, top left y, rotation, n-s pixel resolution
dst_ds.SetGeoTransform(new_transform)

wkt = dataset.GetProjection()

# setting spatial reference of output raster
srs = osr.SpatialReference()
srs.ImportFromWkt(wkt)
dst_ds.SetProjection(srs.ExportToWkt())

# Close output raster dataset
dataset = None
dst_ds = None
